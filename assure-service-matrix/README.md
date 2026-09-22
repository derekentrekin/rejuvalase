# Assure Plumbing & Septic: Service-by-Area Matrix

An embeddable table for www.assureplumbingva.com showing which services are offered in each city and county. It has town/county search, a Cities/Counties toggle, and a service filter.

## Install (Webflow)
1. Add an **Embed** element where the matrix should appear (for example on `/locations` or `/services`).
2. Paste the full contents of `embed.html` (about 22K characters, under Webflow's 50K limit).
3. Publish. The widget uses the site's existing **Outfit** font, and all styles are scoped to `#apx-matrix`.

## Editing
Edit `data.json`, then run `python3 build.py` to regenerate `embed.html` and `preview.html`.

- `tier: "core"` marks the home-base areas (Fredericksburg, Stafford, Stafford County, Spotsylvania County).
- `defaults` sets septic and well-pump availability for core vs. other areas. Everything else defaults to available.
- `overrides` lets you change a single cell, for example `"Culpeper County": {"septic-repair": "yes"}`.
- Status values: `yes` (check mark, links to the service page), `call` (tap to call), `no` (dash).

Colors use the site palette (grays #242424 to #f8f8f8, primary #b5182d with its 200 to 600 tints) as `--apx-*` variables at the top of the CSS in `build.py`.

On containers narrower than 720px the table becomes expandable area cards that group services into Available, Call to confirm and Not offered. This uses a container query, so it also works in a narrow Webflow column.
