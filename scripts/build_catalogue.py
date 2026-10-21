#!/usr/bin/env python3
"""Build static catalogue HTML using existing original photographs.

Run from any directory: python scripts/build_catalogue.py
Requires Pillow. Generated pages are committed; GitHub Pages needs no build step.
"""
from pathlib import Path
from html import escape
from urllib.parse import quote
from PIL import Image, ImageOps
import json
import re

ROOT = Path(__file__).resolve().parents[1]
WORKS = json.loads((ROOT / "data/artworks.json").read_text())
SERIES = [
    ("oil-pastel", "oilpastel", "Oil & Oil Pastel", "Paintings combining layered oil colour with the expressive marks of oil pastel."),
    ("still-life", "stilllife", "Still Life", "Intimate arrangements of everyday objects, built slowly in layers of oil."),
    ("landscape", "landscapes", "Landscapes", "Fields, paths, water and skies, painted in a quieter, atmospheric register."),
    ("birch", "birch", "Birch Series", "A series of expressive birch paintings, focusing on rhythm, gesture and colour."),
]
assets = {}


def prepare_image(source):
    """Read dimensions of existing repository photos without creating new assets."""
    if source not in assets:
        with Image.open(ROOT / source) as original:
            oriented = ImageOps.exif_transpose(original)
            assets[source] = [{"src": source, "width": oriented.width, "height": oriented.height}]
    return assets[source]


def img(source, alt, kind="card", eager=False):
    original = prepare_image(source)[0]
    attrs = f'src="{escape(source, quote=True)}" width="{original["width"]}" height="{original["height"]}"'
    attrs += f' data-original="{escape(source, quote=True)}"'
    return f'<img {attrs} alt="{escape(alt, quote=True)}" loading="{"eager" if eager else "lazy"}" decoding="async" />'


def dimensions(work):
    return f'{work["heightCm"]} × {work["widthCm"]} cm'


def meta(work):
    medium_key = "medium.oilpastel" if work["medium"] == "oil-pastel" else "medium.oil"
    medium = "Oil and oil pastel on canvas" if work["medium"] == "oil-pastel" else "Oil on canvas"
    size = dimensions(work)
    if work.get("panels"):
        size = f'<span data-i18n="work.three_panels">3 panels</span> · {size} <span data-i18n="work.each">each</span>'
    return f'<span data-i18n="{medium_key}">{medium}</span> · {size} · {work["year"]}'


def artwork(work, kind="card", eager=False):
    panels = work.get("panels", 1)
    imgs = "".join(img(src, f'{work["title"]}{" — panel " + str(i + 1) if panels > 1 else ""}', kind, eager) for i, src in enumerate(work["images"]))
    content = f'<span class="triptych">{imgs}</span>' if panels > 1 else imgs
    if kind == "thumb":
        return content
    return f'<button type="button" class="artwork-view{" artwork-view-triptych" if panels > 1 else ""}" data-artwork="{work["id"]}" aria-label="Enlarge {escape(work["title"], quote=True)}">{content}</button>'


def inquiry(work):
    set_note = f' each; complete set of 3; EUR {work["priceEur"]:,}' if work.get("panels") else ""
    label = work["title"] + " (" + dimensions(work) + set_note + ")"
    return f'<a href="contact.html?work={quote(label)}" class="work-inquire" data-i18n="available.inquire">Inquire about this work</a>'


def card(work, eager=False):
    badge = '<span class="badge-sold" data-i18n="badge.sold">Sold</span>' if work["status"] == "sold" else '<span class="badge-new" data-i18n="badge.new">New</span>' if work["isNew"] else ""
    price = f'€ {work["priceEur"]:,}'
    if work.get("panels"):
        price += ' <span class="price-note" data-i18n="work.set_price">for the complete set of 3</span>'
    return f'''<article class="gallery-item" data-series="{work["series"]}" data-work-id="{work["id"]}">
  {artwork(work, eager=eager)}
  <h2 class="work-title">{escape(work["title"])} {badge}</h2>
  <div class="work-meta"><span>{meta(work)}</span><span class="work-price">{price}</span></div>
{inquiry(work) if work["status"] == "available" else ""}
</article>'''


def gallery_section(series, key, title, description):
    works = [w for w in WORKS if w["series"] == series]
    section_id = "landscapes" if series == "landscape" else series
    slides, thumbs = [], []
    for i, work in enumerate(works):
        sold = ' · <span data-i18n="badge.sold">Sold</span>' if work["status"] == "sold" else ""
        set_note = f' · € {work["priceEur"]:,} <span data-i18n="work.set_price">for the complete set of 3</span>' if work.get("panels") else ""
        slides.append(f'''<div class="slide{" active" if i == 0 else ""}" id="slide-{work["id"]}">
  {artwork(work, "gallery", eager=series == "oil-pastel" and i == 0)}
  <div class="slideshow-caption"><strong>{escape(work["title"])}</strong> — {meta(work)}{sold}{set_note}</div>
</div>''')
        thumbs.append(f'<button class="slideshow-thumb{" active" if i == 0 else ""}" type="button" aria-label="{escape(work["title"], quote=True)}" aria-controls="slide-{work["id"]}" aria-pressed="{"true" if i == 0 else "false"}">{artwork(work, "thumb")}</button>')
    return f'''<section id="{section_id}" class="gallery-section" aria-labelledby="heading-{section_id}">
  <h2 id="heading-{section_id}" data-i18n="gallery.{key}_title">{escape(title)}</h2>
  <p data-i18n="gallery.{key}_desc">{escape(description)}</p>
  <div class="slideshow" data-slideshow role="region" aria-label="{escape(title, quote=True)}">
    <div class="slideshow-main">
      {chr(10).join(slides)}
      <div class="slideshow-controls">
        <button class="slideshow-btn" type="button" data-prev aria-label="Previous painting"></button>
        <button class="slideshow-btn" type="button" data-next aria-label="Next painting"></button>
      </div>
    </div>
    <p class="slideshow-position" aria-live="polite" aria-atomic="true">1 / {len(works)}</p>
    <div class="slideshow-thumbs">{chr(10).join(thumbs)}</div>
  </div>
</section>'''


def replace_region(filename, marker, content):
    path = ROOT / filename
    old = path.read_text()
    start, end = f"<!-- BEGIN {marker} -->", f"<!-- END {marker} -->"
    if start not in old or end not in old:
        raise ValueError(f"Missing generation markers in {filename}")
    new = re.sub(re.escape(start) + r".*?" + re.escape(end), lambda _: start + "\n" + content + "\n" + end, old, flags=re.S)
    path.write_text(new)


def main():
    ids = [work["id"] for work in WORKS]
    if len(ids) != len(set(ids)):
        raise ValueError("Duplicate artwork IDs")
    for work in WORKS:
        if work["status"] not in ("available", "sold") or work["series"] not in {s[0] for s in SERIES}:
            raise ValueError(f'Unknown status or series: {work["id"]}')
        if len(work["images"]) != work.get("panels", 1):
            raise ValueError(f'Panel count mismatch: {work["id"]}')
    replace_region("gallery.html", "GALLERY", "\n".join(gallery_section(*series) for series in SERIES))
    for status in ("available", "sold"):
        works = [w for w in WORKS if w["status"] == status]
        replace_region("available.html", status.upper(), "\n".join(card(w, eager=status == "available" and i < 3) for i, w in enumerate(works)))
    # Home and About share the same image pipeline, without changing their content.
    for filename in ("index.html", "about.html"):
        path = ROOT / filename
        page = path.read_text()
        def update_image(match):
            tag = match.group(0)
            source = re.search(r'(?:data-original|src)="([^"]+)"', tag)[1]
            original_match = re.search(r'data-original="([^"]+)"', tag)
            if original_match:
                source = original_match[1]
            alt = re.search(r'alt="([^"]*)"', tag)[1]
            class_match = re.search(r'class="([^"]+)"', tag)
            result = img(source, alt, "gallery", eager=True)
            if class_match:
                result = result.replace("<img ", f'<img class="{class_match[1]}" ', 1)
            return result
        page = re.sub(r'<img\s[^>]+>', update_image, page)
        path.write_text(page)
    (ROOT / "data/image-manifest.json").write_text(json.dumps(assets, indent=2) + "\n")
    print(f"Built {len(WORKS)} works; {len(assets)} original images preserved; using existing photographs.")


if __name__ == "__main__":
    main()
