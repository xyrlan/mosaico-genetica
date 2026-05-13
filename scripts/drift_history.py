"""
drift_history.py -- Show all baselines and comparisons for a URL.

Usage:
    python scripts/drift_history.py <url>
    python scripts/drift_history.py <url> --db /path/to/drift.db
"""
import argparse
import json
import sqlite3
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from drift_baseline import DB_DEFAULT


def main():
    parser = argparse.ArgumentParser(description="Show drift history for a URL")
    parser.add_argument("url")
    parser.add_argument("--db", default=str(DB_DEFAULT))
    args = parser.parse_args()

    conn = sqlite3.connect(args.db)
    rows = conn.execute(
        """SELECT id, captured_at, status_code, content_hash, baseline_label
           FROM baselines WHERE url=? ORDER BY id ASC""",
        (args.url,)
    ).fetchall()
    conn.close()

    if not rows:
        print(f"No history found for {args.url}")
        return

    print(f"\nHistory for: {args.url}")
    print(f"{'ID':>4}  {'Captured At':>27}  {'Status':>6}  {'Label':>10}  Content Hash (prefix)")
    print("-" * 80)
    for row in rows:
        id_, captured_at, status, content_hash, label = row
        hash_prefix = (content_hash or "")[:16] + "..."
        print(f"{id_:>4}  {captured_at:>27}  {status:>6}  {label:>10}  {hash_prefix}")


if __name__ == "__main__":
    main()
