"""
drift_compare.py -- Compare current page state against the stored baseline.

Usage:
    python scripts/drift_compare.py <url>
    python scripts/drift_compare.py <url> --db /path/to/drift.db
"""
import argparse
import hashlib
import json
import re
import sqlite3
import sys
from datetime import datetime, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
import fetch_page
from drift_baseline import _extract_seo, _init_db, DB_DEFAULT

CRITICAL = "CRITICAL"
WARNING  = "WARNING"
INFO     = "INFO"


def _run_rules(baseline: dict, current: dict) -> list[dict]:
    findings = []

    def finding(severity, rule, old, new, action):
        findings.append({"severity": severity, "rule": rule,
                         "old": old, "new": new, "action": action})

    # --- CRITICAL rules ---
    if baseline.get("status_code", 200) < 400 and current.get("status_code", 200) >= 400:
        finding(CRITICAL, "Status code became 4xx/5xx",
                baseline["status_code"], current["status_code"],
                "Investigate server/CDN errors immediately")

    if baseline.get("canonical") and not current.get("canonical"):
        finding(CRITICAL, "Canonical removed",
                baseline["canonical"], None,
                "Restore canonical tag")
    elif baseline.get("canonical") and current.get("canonical") and \
            baseline["canonical"].rstrip("/") != current["canonical"].rstrip("/"):
        finding(CRITICAL, "Canonical changed",
                baseline["canonical"], current["canonical"],
                "Verify canonical is intentional; run /seo technical <url>")

    b_robots = (baseline.get("meta_robots") or "").lower()
    c_robots = (current.get("meta_robots") or "").lower()
    if "noindex" not in b_robots and "noindex" in c_robots:
        finding(CRITICAL, "noindex added",
                baseline.get("meta_robots"), current.get("meta_robots"),
                "Remove noindex or confirm intentional deindex")

    if baseline.get("h1") and not current.get("h1"):
        finding(CRITICAL, "H1 removed",
                baseline["h1"], [],
                "Restore H1 tag")
    elif baseline.get("h1") and current.get("h1"):
        b_h1 = " ".join(baseline["h1"]).lower()
        c_h1 = " ".join(current["h1"]).lower()
        if b_h1 and c_h1:
            longer = max(len(b_h1), len(c_h1))
            diff_ratio = abs(len(b_h1) - len(c_h1)) / longer
            if diff_ratio > 0.5:
                finding(CRITICAL, "H1 changed >50%",
                        baseline["h1"][0][:80], current["h1"][0][:80],
                        "Review H1 change; run /seo content <url>")

    if baseline.get("title") and not current.get("title"):
        finding(CRITICAL, "Title tag removed",
                baseline["title"], None,
                "Restore title tag immediately")

    if baseline.get("schema") and not current.get("schema"):
        finding(CRITICAL, "Schema.org markup removed",
                f"{len(baseline['schema'])} block(s)", "0 blocks",
                "Restore structured data; run /seo schema <url>")

    # --- WARNING rules ---
    if baseline.get("title") and current.get("title") and \
            baseline["title"] != current["title"]:
        finding(WARNING, "Title changed",
                baseline["title"][:80], current["title"][:80],
                "Review title change; run /seo page <url>")

    if baseline.get("meta_description") and current.get("meta_description") and \
            baseline["meta_description"] != current["meta_description"]:
        finding(WARNING, "Meta description changed",
                baseline["meta_description"][:80], current["meta_description"][:80],
                "Review description; run /seo content <url>")

    b_og = baseline.get("og") or {}
    c_og = current.get("og") or {}
    if b_og and not c_og:
        finding(WARNING, "OG tags removed",
                list(b_og.keys()), [],
                "Restore Open Graph tags")
    elif b_og and c_og:
        removed_og = [k for k in b_og if k not in c_og]
        if removed_og:
            finding(WARNING, "OG tags partially removed",
                    removed_og, [],
                    "Restore missing OG tags")

    if baseline.get("schema") and current.get("schema") and \
            baseline["schema"] != current["schema"]:
        finding(WARNING, "Schema.org markup modified",
                f"{len(baseline['schema'])} block(s)", f"{len(current['schema'])} block(s)",
                "Validate schema changes; run /seo schema <url>")

    # --- INFO rules ---
    if not baseline.get("schema") and current.get("schema"):
        finding(INFO, "New Schema.org markup added",
                "0 blocks", f"{len(current['schema'])} block(s)",
                "Validate new structured data; run /seo schema <url>")

    b_h2 = baseline.get("h2") or []
    c_h2 = current.get("h2") or []
    if b_h2 != c_h2:
        finding(INFO, "H2 structure changed",
                b_h2, c_h2,
                "Review H2 changes for content drift")

    if baseline.get("content_hash") and current.get("content_hash") and \
            baseline["content_hash"] != current["content_hash"]:
        finding(INFO, "Content hash changed",
                baseline["content_hash"][:16] + "...",
                current["content_hash"][:16] + "...",
                "Review page content for unintended changes")

    return findings


def compare(url: str, db_path: Path) -> dict:
    conn = _init_db(db_path)
    row = conn.execute(
        "SELECT seo_data FROM baselines WHERE url=? ORDER BY id DESC LIMIT 1",
        (url,)
    ).fetchone()
    conn.close()
    if not row:
        raise RuntimeError(f"No baseline found for {url}. Run drift_baseline.py first.")

    baseline = json.loads(row[0])
    resp = fetch_page.fetch(url)
    body = resp["body"]
    current = _extract_seo(body, url)
    current["status_code"] = resp["status_code"]
    current["content_hash"] = hashlib.sha256(body).hexdigest()
    current["content_length"] = len(body)
    current["captured_at"] = datetime.now(timezone.utc).isoformat()
    current["response_headers"] = resp["headers"]

    findings = _run_rules(baseline, current)
    return {
        "url": url,
        "baseline_captured_at": baseline.get("captured_at"),
        "compared_at": current["captured_at"],
        "findings": findings,
        "current": current,
        "baseline": baseline,
    }


def main():
    parser = argparse.ArgumentParser(description="Compare current SEO state to baseline")
    parser.add_argument("url")
    parser.add_argument("--db", default=str(DB_DEFAULT))
    args = parser.parse_args()

    result = compare(args.url, Path(args.db))
    findings = result["findings"]
    crits  = [f for f in findings if f["severity"] == CRITICAL]
    warns  = [f for f in findings if f["severity"] == WARNING]
    infos  = [f for f in findings if f["severity"] == INFO]

    print(f"\nDrift comparison: {args.url}")
    print(f"Baseline: {result['baseline_captured_at']}  |  Now: {result['compared_at']}")
    print(f"Summary: {len(crits)} CRITICAL  {len(warns)} WARNING  {len(infos)} INFO\n")

    for sev, group in [(CRITICAL, crits), (WARNING, warns), (INFO, infos)]:
        for f in group:
            print(f"[{sev}] {f['rule']}")
            print(f"   Old: {f['old']}")
            print(f"   New: {f['new']}")
            print(f"   Action: {f['action']}\n")


if __name__ == "__main__":
    main()
