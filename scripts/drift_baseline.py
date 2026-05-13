"""
drift_baseline.py -- Capture SEO baseline snapshot for a URL and store in SQLite.

Usage:
    python scripts/drift_baseline.py <url>
    python scripts/drift_baseline.py <url> --db /path/to/drift.db
"""
import argparse
import hashlib
import json
import re
import sqlite3
import sys
from datetime import datetime, timezone
from pathlib import Path

# Add project root to path so fetch_page is importable
sys.path.insert(0, str(Path(__file__).parent))
import fetch_page

DB_DEFAULT = Path(__file__).parent.parent / "seo-audit-mosaico" / "drift-baseline" / "drift.db"


def _extract_seo(html: bytes, url: str) -> dict:
    text = html.decode("utf-8", errors="replace")

    def first(pattern, flags=re.IGNORECASE | re.DOTALL):
        m = re.search(pattern, text, flags)
        return m.group(1).strip() if m else None

    def all_matches(pattern, flags=re.IGNORECASE | re.DOTALL):
        return [m.strip() for m in re.findall(pattern, text, flags)]

    title = first(r"<title[^>]*>(.*?)</title>")
    meta_desc = first(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']')
    meta_robots = first(r'<meta\s+name=["\']robots["\']\s+content=["\'](.*?)["\']')
    canonical = first(r'<link\s+rel=["\']canonical["\']\s+href=["\'](.*?)["\']')

    og = {}
    for m in re.finditer(r'<meta\s+property=["\'](og:[^"\']+)["\']\s+content=["\'](.*?)["\']', text, re.IGNORECASE):
        og[m.group(1)] = m.group(2).strip()

    tw = {}
    for m in re.finditer(r'<meta\s+name=["\'](twitter:[^"\']+)["\']\s+content=["\'](.*?)["\']', text, re.IGNORECASE):
        tw[m.group(1)] = m.group(2).strip()

    h1 = all_matches(r"<h1[^>]*>(.*?)</h1>")
    h2 = all_matches(r"<h2[^>]*>(.*?)</h2>")
    h3 = all_matches(r"<h3[^>]*>(.*?)</h3>")

    # Strip inner tags from headings
    def strip_tags(lst):
        return [re.sub(r"<[^>]+>", "", h) for h in lst]

    h1 = strip_tags(h1)
    h2 = strip_tags(h2)
    h3 = strip_tags(h3)

    # Schema.org JSON-LD
    schema_blocks = all_matches(r'<script[^>]+type=["\']application/ld\+json["\'][^>]*>(.*?)</script>')

    # Key page text (first 500 chars of visible text)
    visible = re.sub(r"<[^>]+>", " ", text)
    visible = re.sub(r"\s+", " ", visible).strip()
    key_text = visible[:500]

    return {
        "url": url,
        "title": title,
        "meta_description": meta_desc,
        "meta_robots": meta_robots,
        "canonical": canonical,
        "og": og,
        "twitter": tw,
        "h1": h1,
        "h2": h2,
        "h3": h3,
        "schema": schema_blocks,
        "key_text": key_text,
    }


def _init_db(db_path: Path) -> sqlite3.Connection:
    db_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(db_path))
    conn.execute("""
        CREATE TABLE IF NOT EXISTS baselines (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            url TEXT NOT NULL,
            captured_at TEXT NOT NULL,
            status_code INTEGER,
            content_hash TEXT,
            content_length INTEGER,
            response_headers TEXT,
            seo_data TEXT,
            baseline_label TEXT DEFAULT 'initial'
        )
    """)
    conn.commit()
    return conn


def capture_baseline(url: str, db_path: Path, label: str = "initial") -> dict:
    resp = fetch_page.fetch(url)
    body = resp["body"]
    status = resp["status_code"]
    headers = resp["headers"]
    content_hash = hashlib.sha256(body).hexdigest()
    seo = _extract_seo(body, url)
    seo["status_code"] = status
    seo["response_headers"] = headers
    seo["content_hash"] = content_hash
    seo["content_length"] = len(body)
    seo["captured_at"] = datetime.now(timezone.utc).isoformat()

    conn = _init_db(db_path)
    conn.execute(
        """INSERT INTO baselines
           (url, captured_at, status_code, content_hash, content_length,
            response_headers, seo_data, baseline_label)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
        (
            url,
            seo["captured_at"],
            status,
            content_hash,
            len(body),
            json.dumps(headers),
            json.dumps(seo, ensure_ascii=False),
            label,
        ),
    )
    conn.commit()
    conn.close()
    return seo


def main():
    parser = argparse.ArgumentParser(description="Capture SEO drift baseline")
    parser.add_argument("url", help="Target URL")
    parser.add_argument("--db", default=str(DB_DEFAULT), help="SQLite DB path")
    parser.add_argument("--label", default="initial", help="Baseline label")
    args = parser.parse_args()

    db_path = Path(args.db)
    print(f"Capturing baseline for: {args.url}")
    data = capture_baseline(args.url, db_path, args.label)
    print(f"  Status      : {data['status_code']}")
    print(f"  Title       : {data['title']}")
    print(f"  Canonical   : {data['canonical']}")
    print(f"  H1 count    : {len(data['h1'])}")
    print(f"  Schema count: {len(data['schema'])}")
    print(f"  Content hash: {data['content_hash']}")
    print(f"  Stored in   : {db_path}")


if __name__ == "__main__":
    main()
