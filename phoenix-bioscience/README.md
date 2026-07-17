# Phoenix Bioscience — static site

Direct-to-consumer site for Phoenix Bioscience (Corvex™ daily mobility chew, HydraDrive™ hydration gel).
Self-contained static prototype: open `index.html` in a browser, or serve the folder with any static server.

## Structure

- `phoenix.css` — full design system (color tokens, Zalando Sans type scale, components, motion)
- `phoenix.js` — shared behavior (header scroll, mobile nav, accordion, waitlist modal, feed filters, demo form handling, quantity stepper, reveal-on-scroll)
- Pages: `index`, `story`, `products`, `corvex`, `hydradrive`, `coming-soon`, `direct`,
  `partnerships` (+ `-influencers`, `-vets`, `-clubs`, `-military`), `newsletter`,
  `research-article` (template), `press-release` (template), `contact`

## Notes for production

- **Images** are Unsplash placeholders matched to the documentary field-dog reference set.
  Swap by replacing the `background-image` URLs (all referenced inline per page).
  Product renders for the Corvex jar and HydraDrive sachet are pending — figure placeholders are marked in `corvex.html` / `hydradrive.html`.
- **Forms** are demo-only (`data-demo-form` intercepts submit and shows the success state).
  Wire to real endpoints / e-commerce (subscriptions for Corvex™) at integration time.
- **Claims discipline**: all copy uses hedged structure-function language (supports / helps / associated with),
  no per-chew mg amounts pending label approval. Keep it that way.
- **NMX1000®** is described generically pending confirmation of the ingredient's sourcing details.
- Fonts load from Google Fonts (Zalando Sans / SemiExpanded / Expanded). Icons are inline Lucide SVGs — no icon library dependency.
