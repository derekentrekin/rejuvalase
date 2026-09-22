# Assure Plumbing & Septic: Service-by-Area Matrix

An embeddable table for www.assureplumbingva.com showing which services are offered in each city and county. It has town/county search, a Cities/Counties toggle, and a service filter.

## Install (Webflow)
1. Add an **Embed** element where the matrix should appear (for example on `/locations` or `/services`).
2. Paste the full contents of `embed.html` (about 13.6K characters, under Webflow's 50K limit).
3. Publish. The widget uses the site's existing **Outfit** font, and all styles are scoped to `#apx-matrix`.

## Editing
Edit `data.json`, then run `python3 build.py` to regenerate `embed.html` and `preview.html`.

- `tier: "core"` marks the home-base areas (Fredericksburg, Stafford, Stafford County, Spotsylvania County).
- `defaults` sets septic and well-pump availability for core vs. other areas. Everything else defaults to available.
- `overrides` lets you change a single cell, for example `"Culpeper County": {"septic-repair": "yes"}`.
- Status values: `yes` (check mark, links to the service page), `call` (tap to call), `no` (dash).

To match brand colors, change the `--apx-*` variables at the top of the CSS in `build.py`.
