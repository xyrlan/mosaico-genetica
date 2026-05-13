"""
fetch_page.py -- SSRF-safe HTTP fetcher used by all drift scripts.
Validates URLs against private/loopback ranges before fetching.
"""
import ipaddress
import socket
import subprocess
import urllib.parse


BLOCKED_NETWORKS = [
    ipaddress.ip_network("10.0.0.0/8"),
    ipaddress.ip_network("172.16.0.0/12"),
    ipaddress.ip_network("192.168.0.0/16"),
    ipaddress.ip_network("127.0.0.0/8"),
    ipaddress.ip_network("169.254.0.0/16"),
    ipaddress.ip_network("::1/128"),
    ipaddress.ip_network("fc00::/7"),
]


def _validate_url(url: str) -> None:
    parsed = urllib.parse.urlparse(url)
    if parsed.scheme not in ("http", "https"):
        raise ValueError(f"Only http/https allowed, got: {parsed.scheme}")
    host = parsed.hostname
    if not host:
        raise ValueError("No hostname in URL")
    try:
        addrs = socket.getaddrinfo(host, None)
    except socket.gaierror as exc:
        raise ValueError(f"DNS resolution failed for {host}: {exc}") from exc
    for family, _, _, _, sockaddr in addrs:
        ip_str = sockaddr[0]
        ip = ipaddress.ip_address(ip_str)
        for net in BLOCKED_NETWORKS:
            if ip in net:
                raise ValueError(f"SSRF blocked: {host} resolves to private IP {ip}")


def fetch(url: str, timeout: int = 20) -> dict:
    """
    Returns dict with keys: status_code, headers (dict), body (bytes).
    Raises ValueError on SSRF violation, RuntimeError on fetch failure.
    """
    _validate_url(url)
    result = subprocess.run(
        [
            "curl", "-s", "-D", "-",
            "-A", "Mozilla/5.0 (SEODriftBot/1.0)",
            "-L", "--max-redirs", "5",
            "--max-time", str(timeout),
            url,
        ],
        capture_output=True,
        timeout=timeout + 5,
    )
    raw = result.stdout
    # Split headers from body on the blank line separating them
    # curl -D - writes all redirect headers too; we want the last block
    parts = raw.split(b"\r\n\r\n")
    if len(parts) < 2:
        parts = raw.split(b"\n\n")
    header_block = parts[-2] if len(parts) >= 2 else b""
    body = parts[-1] if parts else b""
    lines = header_block.decode("utf-8", errors="replace").splitlines()
    status_line = lines[0] if lines else ""
    try:
        status_code = int(status_line.split()[1])
    except (IndexError, ValueError):
        status_code = 0
    headers = {}
    for line in lines[1:]:
        if ":" in line:
            k, _, v = line.partition(":")
            headers[k.strip().lower()] = v.strip()
    return {"status_code": status_code, "headers": headers, "body": body}
