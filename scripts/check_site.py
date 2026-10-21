#!/usr/bin/env python3
"""Check catalogue/page consistency, internal links and generated image integrity."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from PIL import Image
import json
import subprocess

ROOT = Path(__file__).resolve().parents[1]


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.ids, self.links, self.images, self.works, self.artworks = [], [], [], [], []
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        if tag in ("img", "script", "link", "a"):
            self.links.append(attrs.get("src") or attrs.get("href") or "")
        if tag == "img":
            self.images.append(attrs)
        if "data-work-id" in attrs:
            self.works.append(attrs["data-work-id"])
        if "data-artwork" in attrs:
            self.artworks.append(attrs["data-artwork"])


pages = {p.name: Page(p.read_text()) for p in ROOT.glob("*.html")}
for name, page in pages.items():
    assert len(page.ids) == len(set(page.ids)), f"Duplicate IDs in {name}"
    for link in page.links:
        parsed = urlsplit(link)
        if parsed.scheme or parsed.netloc:
            continue
        target = unquote(parsed.path) or name
        assert (ROOT / target).exists(), f"Broken reference in {name}: {link}"
        if parsed.fragment and target in pages:
            assert unquote(parsed.fragment) in pages[target].ids, f"Broken anchor: {link}"
    for attrs in page.images:
        assert attrs.get("alt"), f"Missing image description in {name}"
        assert attrs.get("width") and attrs.get("height"), f"Missing image dimensions in {name}"

works = json.loads((ROOT / "data/artworks.json").read_text())
expected = {w["id"] for w in works}
for page_name in ("gallery.html", "available.html"):
    actual = pages[page_name].artworks
    assert set(actual) == expected and len(actual) == len(expected), f"Catalogue drift: {page_name}"
assert pages["available.html"].works.count("magnolia-triptych") == 1
assert 'https://formspree.io/f/xqajkaww' in (ROOT / "contact.html").read_text()
assert 'your-form-id' not in (ROOT / "contact.html").read_text()

manifest = json.loads((ROOT / "data/image-manifest.json").read_text())
for source, versions in manifest.items():
    with Image.open(ROOT / source) as original:
        profile = original.info.get("icc_profile", b"")
    for version in versions:
        with Image.open(ROOT / version["src"]) as image:
            image.load()  # catches empty, truncated or undecodable files
            assert image.size == (version["width"], version["height"])
            assert image.info.get("icc_profile", b"") == profile, f"Colour profile lost: {source}"

subprocess.run(["node", "--check", str(ROOT / "script.js")], check=True)
print(f"PASS: {len(pages)} pages, {len(works)} works, internal links, catalogue consistency and {sum(map(len, manifest.values()))} colour-profile-preserving images.")
