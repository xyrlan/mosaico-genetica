"""
drift_report.py -- Generate HTML report from a drift comparison JSON file.

Usage:
    python scripts/drift_report.py <comparison.json> --output report.html
"""
import argparse
import json
from pathlib import Path


def generate(data: dict, output_path: Path) -> None:
    url = data.get("url", "")
    findings = data.get("findings", [])
    crits  = [f for f in findings if f["severity"] == "CRITICAL"]
    warns  = [f for f in findings if f["severity"] == "WARNING"]
    infos  = [f for f in findings if f["severity"] == "INFO"]

    sev_color = {"CRITICAL": "#c0392b", "WARNING": "#e67e22", "INFO": "#2980b9"}

    rows = ""
    for f in findings:
        color = sev_color.get(f["severity"], "#333")
        rows += f"""
        <tr>
          <td style="color:{color};font-weight:bold">{f['severity']}</td>
          <td>{f['rule']}</td>
          <td><code>{f['old']}</code></td>
          <td><code>{f['new']}</code></td>
          <td>{f['action']}</td>
        </tr>"""

    html = f"""<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>SEO Drift Report - {url}</title>
<style>
  body {{ font-family: system-ui, sans-serif; margin: 2rem; color: #222; }}
  h1 {{ font-size: 1.4rem; }}
  .badge {{ display: inline-block; padding: 2px 8px; border-radius: 4px;
            color: #fff; font-size: .85rem; margin-right: 4px; }}
  .crit {{ background: #c0392b; }} .warn {{ background: #e67e22; }} .info {{ background: #2980b9; }}
  table {{ border-collapse: collapse; width: 100%; margin-top: 1rem; font-size: .9rem; }}
  th {{ background: #f5f5f5; text-align: left; padding: 6px 10px; border-bottom: 2px solid #ddd; }}
  td {{ padding: 6px 10px; border-bottom: 1px solid #eee; vertical-align: top; }}
  code {{ background: #f0f0f0; padding: 1px 4px; border-radius: 3px; font-size: .85rem; word-break: break-all; }}
</style>
</head>
<body>
<h1>SEO Drift Report</h1>
<p><strong>URL:</strong> {url}<br>
<strong>Baseline:</strong> {data.get('baseline_captured_at', 'n/a')}<br>
<strong>Compared:</strong> {data.get('compared_at', 'n/a')}</p>
<p>
  <span class="badge crit">{len(crits)} CRITICAL</span>
  <span class="badge warn">{len(warns)} WARNING</span>
  <span class="badge info">{len(infos)} INFO</span>
</p>
<table>
  <thead><tr><th>Severity</th><th>Rule</th><th>Old Value</th><th>New Value</th><th>Action</th></tr></thead>
  <tbody>{rows if rows else '<tr><td colspan="5">No drift detected.</td></tr>'}</tbody>
</table>
</body></html>"""

    output_path.write_text(html, encoding="utf-8")
    print(f"Report written to: {output_path}")


def main():
    parser = argparse.ArgumentParser(description="Generate HTML drift report")
    parser.add_argument("file", help="Drift comparison JSON file")
    parser.add_argument("--output", default="drift_report.html")
    args = parser.parse_args()

    data = json.loads(Path(args.file).read_text(encoding="utf-8"))
    generate(data, Path(args.output))


if __name__ == "__main__":
    main()
