# Xristina — xristin.art

Static HTML, CSS and JavaScript, published through the existing GitHub Pages
configuration and custom domain. No hosting migration or monthly service is needed.

## Updating paintings

1. Add the original photograph to `images/`.
2. Update `data/artworks.json`. Dimensions are **height × width**, in centimetres.
   The `images` list contains one photograph, or all panels for a set. A set has
   one `priceEur` for the entire work. Keep its `id` stable.
3. Run `python scripts/build_catalogue.py` (Python 3 and Pillow required).
4. Run `python scripts/check_site.py` and `node --check script.js`.
5. Review Gallery, Available and the enquiry link before committing the generated
   HTML and `data/image-manifest.json` together.

Gallery and Available are generated from the same catalogue. Do not edit inside
their `BEGIN` / `END` generation markers. Static HTML remains readable without
JavaScript; JavaScript adds carousels, filters, translations and enlarged viewing.

The site uses the original photographs already present in this repository.
Images retain their aspect ratio and load lazily below the first visible works.
Smaller display copies are deferred; full-size originals can load more slowly.
The triptych is composed in HTML, so the three original panels stay intact.
Card layouts are for viewing; only the written dimensions specify actual size.

## Contact form

The form uses the previously configured Formspree endpoint
`https://formspree.io/f/xqajkaww`, with the public direct email fallback
`xristina.gallery@gmail.com`. These are public contact settings, not secrets.
Without JavaScript the form posts directly to Formspree. With JavaScript it shows
success only after a positive response, preserves text on failure, and prevents
duplicate submissions while a request is pending. A honeypot reduces automated spam.

Git history records a configured endpoint on 21 November 2025. A contact-page
rewrite on 23 November 2025 removed its action, and a subsequent rewrite that day
introduced a placeholder. Restoring the endpoint does not recover failed past
submissions. Only the Formspree account and receiving inbox can establish which
messages were actually received. A real delivery test is still needed; local QA
uses intercepted responses and sends no email.

## First-stage review — 21 October 2026

- Added all 11 newer works already represented by the 13 uploaded photographs.
- Added the Oil & Oil Pastel section and navigation, including Blooming Street.
- Consolidated Magnolia into one three-panel work at €1,200 total.
- Fixed the Wildflower Garden filename and added lazy loading.
- Unified the lightbox and removed duplicate page scripts.
- Added keyboard-operable artwork buttons, modal focus handling, filter states,
  a skip link, reduced-motion support and a slideshow pause control.
- Completed the new English, French and Dutch labels; storage failure no longer
  stops the rest of the site. Mobile navigation wraps instead of hiding Contact.
- Preserved the existing design, copy, prices and availability outside the
  requested Magnolia correction. Broader visual redesign is a separate stage.

Metadata to reconcile before any later catalogue revision: Swimmers is listed
as 100 × 80 cm in the current website, filename and supplied website catalogue;
an older portfolio excerpt says 80 × 60 cm. The existing website dimensions
have been retained rather than changed without confirmation.
