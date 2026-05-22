# Rejuvalase — Webflow Build Brief

> This document contains everything needed to rebuild the Rejuvalase website in Webflow without referencing the original HTML source. Read each section before opening Webflow.

---

## 1. Brand Overview

**Business name:** Rejuvalase Medspa & Dayspa  
**Location:** 1347 Garrisonville Road, Suite 204 · Stafford, VA 22554  
**Founded:** 2019  
**Phone:** 540 · 555 · 0134 (href: `tel:5405550134`)  
**Email:** hello@rejuvalase.com  
**Copyright line:** © 2026 Rejuvalase Medspa · Licensed by VA Board of Medicine

**Tagline:** "Quiet luxury. Loud results."  
**Secondary brand statement:** "A medspa built on the radical idea that your face already works. We refine — we don't replace."  
**Descriptor:** "Medical-grade aesthetics and dayspa care, built for the clients of Stafford and surrounding counties."

**Tone & Voice:**  
- Calm, confident, anti-hype. Clinical authority delivered with restraint.  
- Uses plain language and avoids spa clichés. Phrases like "honest," "unhurried," "no upsell."  
- Italic serif (`em` tags) applied to emotionally resonant words — *luxury*, *beauty you already have*, *thoughtful*, *see*.  
- Dry wit occasional: "The laser DC dermatologists quietly recommend."  
- Medical credentials cited without boasting: injector hours published annually.  
- Hero headline rhythm: short punchy first line + contrasting second line. Sentences often break mid-thought across lines.

**Business credentials to display:**
- 2 Board-certified physicians (MDs) on site
- 240 hours injector education logged in 2025 (triple state minimum)
- 12 years average clinical experience across team
- 1,200+ clients served
- 4.9 ★ Google rating · 284 reviews
- Est. 2019 · 7 years of care
- Consultations always complimentary

---

## 2. Design System

### Colors

All CSS custom properties defined on `:root`:

| Variable | Hex | Usage |
|---|---|---|
| `--gold-900` | `#5a4014` | Deep gold text |
| `--gold-700` | `#8a6e2a` | Gold headings, hover states |
| `--gold-500` | `#b8933b` | Primary gold, eyebrow labels, borders |
| `--gold-300` | `#d4b872` | Light gold, dark-bg text |
| `--gold-100` | `#e8d9a8` | Button hover bg |
| `--gold-50` | `#f3ecd6` | Very light gold tint |
| `--ink-900` | `#15120d` | Near-black, primary dark |
| `--ink-700` | `#2b251d` | Dark body text |
| `--ink-500` | `#5a5246` | Secondary text |
| `--ink-300` | `#8e8574` | Muted text |
| `--ink-200` | `#c4bdae` | Dividers |
| `--ink-100` | `#e5dfd2` | Borders, subtle lines |
| `--paper` | `#faf6ed` | Main background — warm white |
| `--paper-2` | `#f2ecdc` | Alternate section bg — slightly darker |
| `--white` | `#ffffff` | Pure white |

**Easing curves:**
- `--ease-std`: `cubic-bezier(0.4, 0, 0.2, 1)` — standard transitions
- `--ease-in`: `cubic-bezier(0.16, 1, 0.3, 1)` — spring-like entries

### Typography

**Three typeface system — all from Google Fonts:**

1. **Cormorant Garamond** (`--serif`) — serif headings, display text, editorial quotes  
   - Weights loaded: 400 (regular), 400 italic, 500, 500 italic, 600  
   - Used for: H1–H4, `.eyebrow` text in mega menus, pull quotes, testimonials, card titles, prices  
   - Style: Elegant, old-world publishing. The entire brand personality lives here.

2. **Inter** (`--sans`) — body text, navigation, UI elements  
   - Weights loaded: 300, 400, 500, 600  
   - Used for: Body paragraphs, form labels, descriptive copy, trust bar items  
   - Base size: 15px, line-height 1.55

3. **IBM Plex Mono** (`--mono`) — labels, eyebrows, kickers, buttons, metadata  
   - Weights: 400, 500  
   - Used for: All uppercase labels, button text, nav links, captions, filter pills, prices in data contexts  
   - Style: Technical precision; creates a medical/clinical counterpoint to the serif warmth

**Type Scale:**

| Element | Font | Size | Weight | Tracking | Transform |
|---|---|---|---|---|---|
| Display H1 (hero) | Cormorant | `clamp(68px, 9vw, 152px)` | 400 | -0.01em | none |
| Page hero H1 | Cormorant | `clamp(60px, 8vw, 120px)` | 400 | -0.01em | none |
| Section H2 | Cormorant | `clamp(44px, 5.5vw, 80px)` | 400 | -0.01em | none |
| Card H3 | Cormorant | 28–36px | 400 | normal | none |
| Eyebrow | IBM Plex Mono | 11px | 400 | 0.28em | UPPERCASE |
| Kicker | IBM Plex Mono | 10px | 400 | 0.22em | UPPERCASE |
| Button text | IBM Plex Mono | 11px | 400 | 0.2em | UPPERCASE |
| Body | Inter | 15px | 300–400 | normal | none |
| Italic lede | Cormorant italic | 20–22px | 400 | normal | none |

**Eyebrow component:** Has `::before` pseudo-element — 22px wide × 1px tall gold line. Gold color (`--gold-500` on light bg, `--gold-300` on dark bg).

**`em.gold`:** Any `<em>` inside headings is italic and colored `--gold-700` (or `--gold-300` on dark sections).

### Spacing & Layout

- **Max container width:** `--cap: 1320px` — used as `max-width` with `margin: 0 auto`
- **Section padding:** `120px 40px` (desktop) → `80px 20px` (mobile ≤700px)
- **Nav padding:** `18px 40px`
- **Section intro margin-bottom:** 60px
- **Card gaps:** 24px (card grid), 20px (specials grid)

**Container approach:** All sections use `<div class="cap">` inside `<section>` to constrain content to 1320px. The `<section>` itself spans full width for background color blocks.

### Components

#### Buttons

Four main button variants — all use IBM Plex Mono 11px, 0.2em tracking, UPPERCASE, `padding: 15px 22px` (or `12px 18px` in nav):

| Class | Background | Text | Border | Hover |
|---|---|---|---|---|
| `.btn` (default) | `--ink-900` | `--paper` | `--ink-900` | gold-700 bg |
| `.btn.primary` | `--gold-500` | white | `--gold-500` | gold-700 bg |
| `.btn.ghost` | transparent | inherit | inherit | (inherits) |
| `.btn.light` | white | `--ink-900` | white | gold-100 bg, gold-900 text |
| `.btn.outline-light` | transparent | `--paper` | `--paper` | paper bg, ink-900 text |
| `.btn.sm` | — | — | — | padding: 10px 16px, 10px font |

Buttons include an arrow SVG (`.arr`) that `translateX(4px)` on hover with 220ms transition.

#### Eyebrow / Kicker Labels

**Eyebrow** (`.eyebrow`): IBM Plex Mono, 11px, 0.28em tracking, UPPERCASE, `--gold-500`. Has gold horizontal rule pseudo-element before it (22px wide). On dark sections: `--gold-300`.

**Kicker** (`.kicker`): IBM Plex Mono, 10px, 0.22em tracking, UPPERCASE, `--ink-500`.

**Usage pattern:** Eyebrow sits above H2 section headings with `margin-bottom: 20px`. Used to label sections like "The Rejuvalase approach" or "What we do."

#### Service Card (`.svc-card`)

White background, 1px `--ink-100` border, hover lifts 3px and darkens border to ink-900.  
Structure: image area (260px height) → body padding 28px → foot (price + arrow link, 18px 28px padding, 1px top border).  
Image has gradient overlay (transparent 55% → ink-900 30%) and `.badge` chip (top-left absolute, 20px from edges).  
Body: `.cat` label (mono, gold-500) → H3 (serif 28px) → p (14px, ink-500) → price (serif 22px, gold-700 for sale price).

#### Team Card (`.team-card`)

Simple column layout. Photo: 4:5 aspect ratio, cover, dims 8% on hover.  
`.n` name: Cormorant 24px.  `.r` role: IBM Mono 10px, gold-500, with icon.  `.cr` credentials: 13px, ink-500.

#### Blog/Post Card (`.post`)

Column layout. Image: 4:3 ratio (featured: 5:4), dims on hover.  
`.meta` row: cat label (gold-500) + read-time (ink-300). H4: Cormorant 24px (featured: 36px). Body text 14px. Author line: mono 10px, ink-700, uppercase.

#### Special Card (`.special-card`)

Same structure as svc-card but `.feature` variant has 380px image height and 36px H4. Tag overlays: `.tag` (paper bg) or `.tag.gold` (gold-500 bg). Price has strikethrough original in `<s>` and sale price in `<b>` gold-700.

#### Page Hero (interior pages)

Used on all non-home pages. Class: `.page-hero`. Dark bg (`--ink-900`), `100px 40px 80px` padding. Has `.bg` div (absolute, cover) with `::after` overlay: `linear-gradient(135deg, rgba(21,18,13,0.9) 0%, rgba(21,18,13,0.6) 60%, rgba(21,18,13,0.4) 100%)`. Content in `.inner` at z-index 2. Eyebrow gold-300, H1 Cormorant `clamp(60px, 8vw, 120px)`, italic em uses gold-300. Lede: Cormorant italic 20px, paper 80% opacity.

#### CTA Banner (`.cta-banner`)

Full-width, gold-500 background, centered. H2: Cormorant `clamp(48px, 6vw, 88px)`, white, italic em at 80% white. Two buttons side by side: white fill (`.btn`) + outline white (`.btn.outline`).

#### FAQ Accordion (`.faq-item`)

Border-bottom divider, `cursor: pointer`. `.q`: Cormorant 22px question text. `.toggle`: mono 18px `+` sign in gold-500, rotates 45° when `.open`. Answer (`.faq-answer`): `display: none`, becomes `display: block` when `.open`. JS in site.js closes all others before opening new one.

#### Filter Pills (`.filter-pill`)

IBM Mono, 10px, 0.18em tracking, UPPERCASE. 8px 16px padding. Default: transparent bg, ink-200 border, ink-500 text. Active (`.on`): ink-900 bg, paper text, ink-900 border. JS sets `.on` and shows/hides cards by matching `data-cat` attribute against `data-filter` on pill.

#### Dark Sections (`.dark-sec`)

Applies ink-900 background. H2 becomes paper, italic em becomes gold-300. Lede becomes paper at 70% opacity. Eyebrow becomes gold-300.

#### Breadcrumb (`.breadcrumb`)

Bar below page hero. IBM Mono, 11px, 0.15em, UPPERCASE. Ink-300 by default, hover gold-500. Separator `.sep` in ink-200. Current page (`.cur`) in ink-700. Full-width, 14px 40px padding, 1px bottom border ink-100.

#### Trust Bar (`.trust`)

Paper-2 background, `28px 40px` padding, flex space-around. Items: icon (gold-700) + bold serif stat (24px) + mono label. Vertical separators (`.sep`) 1px × 40px, ink-200. Mobile ≤700px: separators hide.

#### Newsletter Section (`.news`)

Ink-900 background, `100px 40px` padding. Two-column: left = heading + body; right = form. H3: Cormorant 54px italic em gold-300. Email input + submit button inline. Button: gold-500 bg. Below form: disclaimer in mono 10px, ink opacity 40%.

#### Location Map (`.locate-map`)

CSS-drawn grid map — no real maps library. Grid lines via `repeating-linear-gradient`. Gold pin (`--gold-500`) at `top: 44%; left: 52%` with gold glow box-shadow. Pin `::after` has "Rejuvalase" label in Cormorant 16px. Compass badge bottom-left in mono 9px.

---

## 3. Site Navigation

### Announcement Bar (`.announce`)

Ink-900 background, paper text. Mono, 10px, 0.25em tracking, UPPERCASE. Centered flex with 22px gaps.

Content:
- Gold dot (`.dot`) — 4px circle, gold-500
- `Complimentary consultations · Every weekday`
- `·` (hidden on mobile with `.hide-sm`)
- `Spring Radiance Event · April 15–30 · Reserve →` (link in gold-300 to `specials.html`, hidden on mobile)

### Main Navigation (`.main nav`)

Sticky, top: 0, z-index: 40. Blurred paper background (`rgba(250,246,237,0.92)`, `backdrop-filter: blur(12px)`). 1px ink-100 bottom border. Three-column CSS grid: `1fr auto 1fr`.

- **Left column:** Nav links (ul, flex, 28px gap)
- **Center:** Logo wordmark "Rejuvalase" — Cormorant Garamond 28px, links to `index.html`
- **Right column:** Phone number + "Book Consultation" CTA button

**Nav links (left):**
1. Services → `services.html` (has mega: `data-mega="services"`)
2. Medspa → `medspa.html` (has mega: `data-mega="medspa"`)
3. Dayspa → `dayspa.html` (has mega: `data-mega="dayspa"`)
4. Specials → `specials.html` (has mega: `data-mega="specials"`)
5. Journal → `blog.html` (has mega: `data-mega="journal"`)

Each link: Inter 13px, weight 500, ink-700. Hover → gold-700 with underline animating from 0→100% width. Active page class `.active-page` applies gold-700 + full underline. Each link has a small arrow chevron icon that rotates 270° when mega is open.

**Right column:**
- Phone icon + `540 · 555 · 0134` in mono 11px, ink-500
- "Book Consultation →" — `.btn.primary` (smaller: `12px 18px`, 10px font)

### Mega Menus

All megas share the same container (`.mega-layer`, absolute below nav). Each `.mega` panel is hidden (`display: none`) until its `data-mega` key matches. Opening: `opacity: 0 → 1`, `translateY(-6px → 0)` over 220ms. Closes on mouse-leave (140ms delay), backdrop click, or Escape key. Dim backdrop (`rgba(21,18,13,0.35)`) fades in at z-index 35.

**Mega inner layout:** `.mega-cap` is CSS grid `3fr 1.2fr` — left = 3-column link grid, right = featured image card (`.mega-feature`).

**Mega columns (`.mega-col`):** Header in mono 10px, gold-700, uppercase with gold bottom border. Links are column-flex: title in Cormorant 20px + description in mono 10px italic, ink-500. Link hover: gold-700 text + 3px rightward translate.

**Featured panel (`.mega-feature`):** Full-height image with dark gradient overlay. Bottom-aligned content: kicker (gold-300, mono 10px) + title (Cormorant 28px, paper) + subtitle (Cormorant italic 14px) + arrow link (mono 10px, gold-300). Slight scale(1.015) on hover.

---

#### Services Mega (`data-mega="services"`)

**3 Columns:**

Column 1 — Medspa:
- Botox & Filler — *Fine lines · volume*
- Sciton BBL — *Pigment · redness*
- Microneedling — *Texture · pores*
- Chemical Peels — *Resurfacing*
- PRP & PRF — *Hair · skin renewal*

Column 2 — Dayspa:
- HydraFacial — *Glow · zero downtime*
- Signature Facials — *Custom 60 & 90 min*
- Massage Therapy — *Swedish · deep tissue*
- Body Treatments — *Scrubs · wraps*

Column 3 — Wellness:
- IV Therapy — *Hydration · immunity*
- Laser Hair Removal — *All skin types*
- Memberships — *The Circle · $149/mo*
- Gift Cards — *Any amount*

**Featured card:** Image: `photo-1570194065650-d99fb4bedf0a`. Kicker: "Featured · Spring event". Title: "The Radiance Event". Sub: "BBL + HydraFacial · April 15–30". CTA: "Reserve →". Links to `specials.html`.

---

#### Medspa Mega (`data-mega="medspa"`)

Column 1 — Injectables:
- Botox & Dysport — *From $12 / unit*
- Dermal Filler — *Restylane · Juvéderm*
- Lip Refinement — *Balanced · natural*
- Sculptra — *Collagen stimulator*

Column 2 — Laser & Light:
- Sciton BBL — *Pigment · redness*
- CoolPeel Laser — *Resurfacing*
- Laser Hair Removal — *Permanent reduction*
- Vein Therapy — *Sclerotherapy*

Column 3 — Skin & Cellular:
- Microneedling — *SkinPen · PRP*
- Chemical Peels — *Light · medium · deep*
- PRP & PRF — *Regenerative*
- Medical Extractions — *Acne protocol*

**Featured card:** Image: `photo-1629209648144-c27558e67a72`. Kicker: "New client". Title: "Botox at $10/unit". Sub: "Up to 40 units · through May 31". CTA: "Book →". Links to `specials.html`.

---

#### Dayspa Mega (`data-mega="dayspa"`)

Column 1 — Facials:
- HydraFacial — *30 min · $199*
- Signature Facial — *60 min · $165*
- Deep Cleanse — *90 min · $225*
- Back Facial — *Underserved skin*

Column 2 — Body:
- Swedish Massage — *60 · 90 min*
- Deep Tissue — *Focused relief*
- Prenatal Massage — *Certified therapists*
- Body Scrub & Wrap — *Hydrating ritual*

Column 3 — Rituals:
- Half-Day Retreat — *Facial · massage · lunch*
- Couples Suite — *Side-by-side tables*
- Bridal Packages — *Wedding-morning prep*
- Gift Cards — *Any occasion*

**Featured card:** Image: `photo-1600334129128-685c5582fd35`. Kicker: "Member". Title: "The Rejuvalase Circle". Sub: "Monthly HydraFacial · $149/mo". CTA: "Learn →". Links to `specials.html`.

---

#### Specials Mega (`data-mega="specials"`)

Left side uses `.mega-cols.two` — 3 equal thumbnail cards (`.mega-thumb`) instead of link lists. Each thumb is 240px min-height, image bg with gradient, kicker (gold-300) + title (Cormorant 22px) + subtitle (mono 10px).

Thumb 1: Image `photo-1570194065650-d99fb4bedf0a`. Kicker: "Spring · Limited". Title: "The Radiance Event". Sub: "BBL + HydraFacial · Apr 15–30"  
Thumb 2: Image `photo-1614179689702-355944cd0918`. Kicker: "New client". Title: "First-time Botox". Sub: "$10 / unit · up to 40 units"  
Thumb 3: Image `photo-1556228453-efd6c1ff04f6`. Kicker: "Member". Title: "The Rejuvalase Circle". Sub: "$149/mo · cancel anytime"

**Featured card:** Image: `photo-1512290923902-8a9f81dc236c`. Kicker: "Gift certificate". Title: "Give the Rejuvalase ritual". Sub: "Digital or printed · any amount". CTA: "Purchase →". Links to `contact.html`.

---

#### Journal Mega (`data-mega="journal"`)

Column 1 — Categories:
- Injectables — *Technical & clinical notes*
- Skincare — *Ingredients · routines*
- Laser & Light — *Devices · protocols*
- Practice Notes — *How we operate*

Column 2 — Recent:
- Filler fatigue is real — *Mar 14 · 8 min read*
- SPF, translated — *Mar 2 · 5 min read*
- Why our consult is free — *Feb 22 · 3 min read*

Column 3 — The Letter:
- Monthly newsletter — *6 letters/yr · zero spam*
- Client stories — *In their words*
- Archive — *Every post since 2019*

**Featured card:** Image: `photo-1512290923902-8a9f81dc236c`. Kicker: "Featured". Title: "Filler fatigue is real". Sub: "Nadia Okafor, RN · Mar 14". CTA: "Read →". Links to `post.html`.

---

### Footer

Two components injected by `site.js`:

**Newsletter section** (before `<footer>`): Dark ink-900 bg. Two-column: left = eyebrow "The Monthly Letter" + H3 "Six *thoughtful* emails a year." + body copy; right = email form + note. H3: Cormorant 54px. Form: inline input + "Subscribe →" gold button. Note: "Unsubscribe anytime · 2,100 subscribers · No spam"

**Footer grid** (`.foot-grid`): Ink-900, `80px 40px 32px` padding. 5-column CSS grid: `2fr 1fr 1fr 1fr 1fr`.

Column 1 — Brand:  
- "Rejuvalase" wordmark in Cormorant 40px  
- Italic copy: "Medical-grade aesthetics and dayspa care, built for the clients of Stafford and surrounding counties."

Column 2 — Medspa:  
Links: Botox & Filler, Sciton BBL, Microneedling, Chemical Peels, Laser Hair Removal (all → `service.html`)

Column 3 — Dayspa:  
Links: Facials, Massage, Body Treatments, Memberships (last → `specials.html`)

Column 4 — Practice:  
Links: About, Team, Journal (→ `blog.html`), Careers, FAQ

Column 5 — Contact:  
Address text: "1347 Garrisonville Rd, Stafford, VA 22554"  
Phone: 540 · 555 · 0134  
Email: hello@rejuvalase.com

**Footer bottom bar:** Flex space-between, mono 10px, paper 45% opacity.  
Left: "© 2026 Rejuvalase Medspa"  
Center: "Licensed by VA Board of Medicine"  
Right: Privacy · Terms · Accessibility (all → `legal.html`, underlined)

---

## 4. All Pages

### Page 01: Home (`index.html`)

**URL slug:** `/`  
**Page title:** Rejuvalase — Medspa & Dayspa · Stafford, VA

---

**Section 01: Hero**  
Full-viewport (`min-height: calc(100vh - 106px)`), ink-900 bg. Three rotating slides with Ken Burns zoom animation. Each slide: absolute-positioned `.hero-slide`, opacity crossfade (1200ms), contains `.kenburns` div with background-image that scales `1.02 → 1.09` over 18s.

Slides (images from `IMG.hero`):
1. `photo-1570172619644-dfd03ed5d881` — treatment room / clinical
2. `photo-1540555700478-4be289fbecef` — spa atmosphere
3. `photo-1487412947147-5cebf100ffc2` — person in treatment

Gradient overlay per slide: `linear-gradient(100deg, rgba(21,18,13,0.82) 0%, rgba(21,18,13,0.45) 45%, rgba(21,18,13,0.25) 100%)`

Content (`.hero-content`, z-index 2, `100px 40px`):
- Eyebrow: "Medspa & Dayspa · Stafford, Virginia" (gold-300)
- H1: "Quiet *luxury*. / Loud results." (Cormorant `clamp(68px, 9vw, 152px)`, paper, italic em gold-300)
- Lede: "A medspa built on the radical idea that your face already works. We refine — we don't replace." (Cormorant italic 22px, paper 85%)
- CTA row: [Book Consultation →] (`.btn.primary`) + [Take the Service Quiz] (`.btn.outline-light`)

Bottom-left: "Scroll to explore" in mono 10px, gold-300 horizontal rule.  
Bottom-right: 3 slide indicator buttons (32px wide × 1–2px tall lines, active = gold-300 2px) + "01 / 03" counter.

**Hero chrome** (top overlay): Mono 10px, paper 55% opacity. Left side shows location/type metadata. Right side shows current slide indicators.

JS: Auto-advances every 6000ms. Indicator buttons manually advance to specific slide.

---

**Section 02: Trust Bar**  
Paper-2 background, no section padding — sits immediately below hero. Flex row, 5 items with pipe separators.

Items: Est. 2019 · 7 years of care | Clients served · 1,200+ & counting | Google rating · 4.9 ★ · 284 reviews | Injectors · Board-certified MD & RN | Consultations · Always complimentary

---

**Section 03: Philosophy**  
Paper background. `.sec-intro` left-aligned with eyebrow "The Rejuvalase approach" + H2 "A clearer picture of the *beauty you already have*."

Three-column grid (`1fr 1fr 0.9fr`):
- Col 1: Large pull quote in Cormorant 40px — "We opened in 2019 because the women in our lives kept driving to DC, Richmond, or Northern Virginia to find the medspa care they trusted. *They shouldn't have to.*" — Signed: "— Dr. Maya Chen, MD" in Cormorant italic gold-700, below in mono: "Founder & Medical Director"
- Col 2: Two body paragraphs in Inter 15px. Para 1: Rejuvalase intro, independent physician-led, licensed RN/MD for all injectables, free consultations. Para 2: Practice ethos — tells you when treatment isn't right, publishes injector hours, sends home with less filler than expected.
- Col 3: Philosophy image (`photo-1552693673-1bf958298935`) — portrait-style photo with caption overlay "Dr. Chen · treatment room 02" in mono 9px.

Link: "Read our story →" (`.btn.ghost`)

---

**Section 04: Gallery (Full-width Auto-scroll)**  
Ink-900 background, no vertical padding. Infinite horizontally scrolling strip of 8 images (duplicated for seamless loop). Animation: `gallery-scroll` CSS animation, 60s linear. Pauses on hover.

Gallery tiles (520px × 640px each):
1. `photo-1540555700478-4be289fbecef` — "Treatment Room 01" / "The quietest part of the building"
2. `photo-1512290923902-8a9f81dc236c` — "HydraFacial" / "Cleanse · extract · hydrate"
3. `photo-1552693673-1bf958298935` — "Dr. Chen" / "Founding medical director"
4. `photo-1570172619644-dfd03ed5d881` — "Consult Room" / "Always complimentary"
5. `photo-1629209648144-c27558e67a72` — "Sciton BBL" / "Broadband light therapy"
6. `photo-1571646034647-52e6ea84b28c` — "Skincare Wall" / "SkinCeuticals · ZO · Obagi"
7. `photo-1487412947147-5cebf100ffc2` — "The Lobby" / "Open since 2019"
8. `photo-1598440947619-2c35fc9aa908` — "Injector Prep" / "Every dose, double-checked"

Each tile has bottom gradient overlay and caption: subtitle (mono 10px, gold-300) + title (Cormorant 26px, paper).

Overlaid left panel (`.gallery-head`): Semi-transparent dark gradient from left edge. Eyebrow: "A look inside". H3: "The *practice*, / quietly documented." Sub: "Treatment rooms, the product wall, the quietest corner of the lobby. A standing invitation to visit before you book."

---

**Section 05: Services** (dark section)  
Ink-900 background. Eyebrow "What we do" (gold-300). H2: "Medical-grade aesthetics. / *Day-spa ease.*" Lede describes three flagship disciplines, all evidence-based, licensed professionals only.

**3 Service Tiles** (`.svc-grid`, 3-column, 1px paper-15% grid lines):

1. Botox & Filler — Image: `photo-1512290923902-8a9f81dc236c`. Badge: "Injectables · most popular". H3: "Botox & Filler". Copy: "Relax fine lines, restore lost volume, refine contour. Every syringe placed by a nurse injector trained in advanced facial anatomy." Price: "from $12/u". Icon: droplet.

2. Sciton BBL — Image: `photo-1629209648144-c27558e67a72`. Badge: "Laser · medical-grade". H3: "Sciton BBL". Copy: "Broadband light therapy for sun damage, redness, and pigmentation. The laser DC dermatologists quietly recommend." Price: "from $350". Icon: scan.

3. HydraFacial — Image: `photo-1560750588-73207b1ef5b8`. Badge: "Skin rejuvenation". H3: "HydraFacial". Copy: "Thirty minutes of cleanse, exfoliate, extract, hydrate. The treatment that converts skeptics — visible glow, zero downtime." Price: "from $199". Icon: sparkle.

**8 Service Chips** (`.svc-grid.alt`, 4-column, transparent bordered):
1. Microneedling (Medspa) — pen icon
2. Laser Hair Removal (Medspa) — scan icon
3. Chemical Peels (Medspa) — droplet icon
4. PRP & PRF (Medspa) — flower icon
5. Signature Facials (Dayspa) — sparkle icon
6. Massage Therapy (Dayspa) — hand icon
7. Body Treatments (Dayspa) — leaf icon
8. IV Therapy (Wellness) — droplet icon

Below: "View full service menu →" (`.btn.light`)

---

**Section 06: Credentials**  
Paper-2 background. 4-column grid (`1.3fr 1fr 1fr 1fr`). No `.sec-intro` — content is in `.creds-lead`.

Lead (`.creds-lead`): H3 "Credentials *we publish*, / not just carry." Body: "Because your face is not the place to trust an unverified practice. Every number below is documented and updated annually."

3 stat blocks:
1. Shield icon. "2 MD" (56px serif gold-700). Label: "Board-certified physicians". Copy: "On-site medical directors supervising every procedure."
2. Book icon. "240 hrs". Label: "Injector education · 2025". Copy: "Logged by our team last year — triple the state minimum."
3. Clock icon. "12 yr". Label: "Avg. clinical experience". Copy: "Our most junior injector has been practicing since 2019."

---

**Section 07: Quiz Preview**  
Paper background. Two-column split (`.quiz-body`, 1fr 1fr, 1px ink-900 border around).

**Left panel** (paper bg, `80px 60px`):
- Quiz image (`photo-1487412947147-5cebf100ffc2`) — 16:9 ratio
- H3: "Not sure where *to start?*" (Cormorant 60px)
- Body: "Answer six questions about your goals, skin, and schedule. We'll match you to the two or three services most likely to work for you — with honest notes on what might not."
- Stats row: 3 min avg time | 6 Qs, no email required | 1,400+ completed
- CTA: "Start the quiz →" (`.btn.primary`)

**Right panel** (ink-900, `60px 52px`, paper text):
- Step indicator: "Question 02 / 06" + "Preview"
- H4: "What bothers you *most* when you look in the mirror?" (gold-300 em)
- 4 options: A. Fine lines around my eyes | B. Dull, uneven skin tone (selected) | C. Loss of volume in my cheeks | D. Sun damage and dark spots
- Progress bar: 28% filled, gold-300

---

**Section 08: Before/After**  
Dark section. Eyebrow "Documented results" (gold-300). H2: "Before & after. / Same client. Same *light*."

Two-column split (`2fr 1fr`):
- **Photo:** Aspect ratio 4:3. Before image (`photo-1499952127939-9bbf5af6c51c`). After layer overlaid on left 46% (`photo-1526045478516-99145907023c`). Labels: "After · 8 weeks" (left) and "Before" (right). Vertical slider handle: gold-300 2px line with gold-500 44px circle at center.
- **Meta panel:** Case study HF-284. H4: "HydraFacial + three BBL sessions". Data rows (space-between, mono): Client: Age 42 · Female | Concerns: Sun damage · texture | Protocol: 3 BBL + 2 HF · 8 wks | Downtime: None | Performed by: Dr. Chen, MD. Blockquote: "I was skeptical — I'd been burned by a spa in Tysons that pushed me into a $2,400 package I didn't need. Maya showed me the before photos after one session. The math was different after that." — Maria R. · Stafford · Client since 2024. CTA: "Browse more results →" (`.btn.outline-light`).

---

**Section 09: Specials**  
Paper background. Eyebrow "Seasonal & limited". H2: "Offers worth *planning around*."

3-column grid (`1.4fr 1fr 1fr`):
1. **Feature card** (`.special-card.feature`): Image `photo-1570194065650-d99fb4bedf0a`. Tag: "Spring · Limited" (gold). Cat: "Featured event". H4: "The Radiance Event — April 15–30". Copy: "Two weeks only. Book a BBL + HydraFacial combination and receive a complimentary custom skincare consultation and 20% off retail SkinCeuticals." Price: ~~$549~~ **$439**. CTA: "Reserve →"
2. **Normal card**: Image `photo-1614179689702-355944cd0918`. Tag: "New client". Cat: "First visit". H4: "First-time Botox — $10/unit". Copy: "Up to 40 units at an introductory rate. Valid with any Rejuvalase injector through May 31." Price: **$10**/unit. CTA: "Book →"
3. **Normal card**: Image `photo-1556228453-efd6c1ff04f6`. Tag: "Member". Cat: "Monthly Circle". H4: "The Rejuvalase Circle". Copy: "Monthly HydraFacial, 20% off injectables, and free product refills. $149/month, cancel anytime." Price: **$149**/mo. CTA: "Learn →"

Below grid: "View all specials →" (`.btn`)

---

**Section 10: Process**  
Paper-2 background. Eyebrow "Your first visit". H2: "A process *designed* / around honesty."

4-step horizontal grid (`.process-body`, `repeat(4, 1fr)`):

Each step (`.step`) has: top border ink-900, gold icon (lg, 28px), step number label "Step 0X", H4, body paragraph, time indicator with clock icon.

1. **Complimentary consult** — Calendar icon. "A 30-minute unhurried conversation with a nurse injector. No pressure, no upsell. We examine your skin, discuss goals, and often recommend less than you expected." Time: "30 min · no charge"
2. **Customized plan** — Pen icon. "A written plan with transparent pricing. You'll know every product, unit, and outcome window before you book a single treatment." Time: "Same day · emailed"
3. **Treatment** — Sparkle icon. "Every procedure performed by a licensed RN or MD. Never by a technician. Never rushed. We photograph before and after under identical light." Time: "15 min – 2 hrs"
4. **Follow-up included** — Check icon. "Two-week check-in, texted. Any touch-up within the first month on the house. Results photography — your decision whether to share." Time: "2 wks · free"

---

**Section 11: Space Slider**  
Full-width, ink-900 bg, `78vh` min-height 620px. Manual slider (prev/next buttons, dot indicators). Six slides.

Left panel (`.space-panel`, 44% width): Count "01 / 06", eyebrow "Inside the practice", H3 (title from data), italic body text, meta row (3 items: key + bold value), prev/next nav buttons (52×52, bordered, gold-500 hover).

6 Rooms:
1. **Treatment Room One** — `photo-1540555700478-4be289fbecef`. "Two identical suites, each outfitted with medical-grade lighting and a heated zero-gravity chair. Used for injectables, microneedling, and PRP." Meta: Room: Suite A | Used for: Injectables | Sq. ft.: 180
2. **The Laser Suite** — `photo-1544161515-4ab6ce6db874`. "Purpose-built for our Sciton BBL and CoolPeel systems. Light-isolated, acoustically dampened, and kept at a steady 68°F." Meta: Device: Sciton BBL | Climate: 68°F | Sessions/yr: 1,400+
3. **Consultation Room** — `photo-1487412947147-5cebf100ffc2`. "Where every first visit begins. A private room with clinical photography lighting, built for unhurried, pressure-free conversation. Always complimentary — always 30 minutes." Meta: Duration: 30 min | Fee: Complimentary | Rooms: 2
4. **The Massage Studio** — `photo-1600334129128-685c5582fd35`. "A softer corner of the practice. Heated tables, locally-sourced oils, and the only room in the building wired for silence — no overhead music unless you request it." Meta: Therapists: 3 LMT | Tables: Heated | Sound: Client choice
5. **Reception & Lobby** — `photo-1522337360788-8b13dee7a37e`. "Open since 2019. Tea service, fresh flowers every Monday morning, and a small library of the journals and books that inform our practice." Meta: Seating: 8 guests | Tea: House blend | Wi-Fi: Complimentary
6. **The Product Wall** — `photo-1620916566398-39f1143ab7be`. "Curated retail for clients. SkinCeuticals, ZO, Obagi, iS Clinical — only lines our clinicians actively use in-chair. If we don't recommend it, we don't sell it." Meta: Brands: 6 lines | SKUs: 80+ | Tested by: Our team

---

**Section 12: Team Preview**  
Paper background. Eyebrow "The people behind the work". H2: "Trained where the *rigor is*."

4-column team grid:
1. **Dr. Maya Chen** — `photo-1594824476967-48c8b964273f`. Role: MD · Medical Director. Cred: Johns Hopkins · Board-certified · Founding partner, 2019.
2. **Nadia Okafor** — `photo-1580489944761-15a19d654956`. Role: RN · Lead Injector. Cred: Allergan Master Injector · 11 years · 6,000+ procedures.
3. **Sara Whitfield** — `photo-1573496359142-b8d87734a5a2`. Role: RN · Laser Specialist. Cred: Certified Sciton BBL & CoolPeel · 8 years clinical.
4. **Ines Morales** — `photo-1531123897727-8f129e1688ce`. Role: LE · Lead Esthetician. Cred: Dermalogica Expert · HydraFacial certified · 9 years.

Below: "Meet the full team →" (`.btn.ghost`)

---

**Section 13: Journal Preview**  
Paper-2 background. Eyebrow "Writing & notes". H2: "What we're *reading, trying*, / and quietly retiring."

3-column journal grid (`1.4fr 1fr 1fr`):

1. **Featured article** (`.post.feat`, 5:4 image): Image `photo-1512290923902-8a9f81dc236c`. Cat: "Education · Injectables" (8 min read). H4: "Filler fatigue is real — here's how we prevent it in our own clients." Body: "A technical post on hyaluronic acid placement, integration time, and why we're dissolving more product than we're placing this year." Author: "— Nadia Okafor, RN · March 14"
2. Image `photo-1556228720-195a672e8a03`. Cat: "Education · Skincare" (5 min read). H4: "SPF, translated: what the numbers actually mean in Virginia spring." Body: "A short, evidence-backed primer on UVA vs. UVB protection for our region's humidity and light." Author: "— Dr. Maya Chen, MD · March 2"
3. Image `photo-1620302751831-6a95fd1f3d0a`. Cat: "Practice · Notes" (3 min read). H4: "Why our first consult is free — and will stay that way." Body: "A brief note on the economics of giving away our most valuable commodity — time with a trained clinician." Author: "— The Rejuvalase Team · Feb 22"

---

**Section 14: Newsletter** (see Footer section above)

---

**Section 15: Location**  
Paper background, `border-top: 1px solid --ink-100`. Two-column (`1.2fr 1fr`): CSS map + info panel.

**Map:** Paper-2 bg with CSS grid lines. Gold pin `top: 44%; left: 52%`. Compass label bottom-left: "Garrisonville Rd · Stafford · VA".

**Info panel:**
- Eyebrow: "Visit us"
- H3: "Come *see* us."
- Address: "1347 Garrisonville Road / Suite 204 · Stafford, VA 22554"
- Hours table:
  - Mon – Thu: 9:00 — 7:00
  - Friday: 9:00 — 5:00
  - Saturday: 10:00 — 4:00
  - Sunday: Closed (muted)
- CTAs: [Book Consultation →] (primary) + phone number (ghost)

---

### Page 02: About (`about.html`)

**URL slug:** `/about`  
**Page title:** About — Rejuvalase · Stafford, VA

Sections:
1. **Hero** — Full-bleed image bg (`photo-1552693673-1bf958298935`), min-height 82vh, dark gradient overlay. Standard page-hero layout.
2. **Brand Story** — Paper bg, `7rem 0` padding. Two-column sticky-label layout: narrow left column with category label ("Our story") + H2 + year; wide right column with body copy paragraphs in Inter 300 weight, 1.85 line height.
3. **Medical Authority** — Paper-2 bg. H2 "Credentials we *publish*..." + intro paragraph + credential pills (ink-900 background, paper text, mono uppercase, gold-500 icon strokes). Pills include: Board Certified MD Director, Licensed RN Injectors, Allergan Diamond Provider, Virginia Licensed, HIPAA Compliant, etc.
4. **Team Preview** — Paper bg. Header with H2 + "Meet the team →" link aligned right. 3-column grid of team cards with photo, name, role (mono gold-500), credential note.
5. **Testimonial** — Ink-900 bg, centered. Gold stars row. Large Cormorant italic blockquote with gold opening/closing quotes. Attribution in mono gold-500 uppercase.
6. **CTA Banner** — Gold-500 bg. H2 + two buttons.

---

### Page 03: Team (`team.html`)

**URL slug:** `/team`  
**Page title:** Our Team — Rejuvalase · Stafford, VA

Sections:
1. **Hero** — Ink-900 bg, two-column: left has eyebrow + H1 "Meet our *clinical* team."; right has descriptive paragraphs about the team's credentials and approach. No image in hero.
2. **Team Grid** — Paper bg, `7rem 0`. 4-column grid. Each card: `.team-card` with paper-2 bg, 3:4 aspect ratio photo, card body with name (serif 1.3rem), role (mono, gold-500), credential note.
3. **Culture note** — Paper-2 bg. Narrative section about working at Rejuvalase.
4. **CTA Banner** — Book consultation.

---

### Page 04: Contact (`contact.html`)

**URL slug:** `/contact`  
**Page title:** Contact & Booking — Rejuvalase · Stafford, VA

Sections:
1. **Hero** — Ink-900 bg, `9rem 0 6.5rem`. Eyebrow + H1 "Let's talk about your *skin*." + Lede paragraph.
2. **Location + Map** — Paper bg. Two-column grid (`1.1fr 1fr`). Left: CSS grid map with gold pin, rounded diamond pin, "Garrisonville Rd" label. Right: Address, hours table, action buttons.
3. **Contact Methods** — Paper-2 bg. Three method cards in a row:
   - Phone: icon, "Call or text", phone number link
   - Email: icon, "Send a message", email link
   - Walk-in: icon, "Stop by anytime", address
4. **Booking Form** — Ink-900 bg. Two-column (`1fr 1.6fr`): left has copy + promise list; right has the form.

**Form fields:**
- Row 1: First Name + Last Name
- Row 2: Email + Phone
- Row 3: Service of Interest (select: Botox & Filler, HydraFacial, Sciton BBL, Microneedling, Chemical Peel, Massage Therapy, Other)
- Row 4: Preferred Date + Preferred Time
- Row 5: How did you hear about us? (select)
- Row 6: Message / Additional notes (textarea)
- Submit: "Request Consultation →" (gold-500 primary)

Promise list below copy: No charge, ever · No upsell or pressure · 30-minute unhurried conversation · Written plan provided same day

---

### Page 05: Services Index (`services.html`)

**URL slug:** `/services`  
**Page title:** All Services — Rejuvalase · Stafford, VA

Sections:
1. **Page Hero** — Image `photo-1544161515-4ab6ce6db874`. Eyebrow "All Services". H1: "Every treatment, / in one *place*." Lede: full overview. Buttons: "Book a Free Consult" + "Find My Treatment" (links to quiz.html).
2. **Trust Bar** — Dark ink-900 strip with 4 trust items (icons + text).
3. **Category Cards** — Paper bg. Eyebrow "Explore by category". H2: "What brings you in today?" 3-column grid of category cards (`.cat-card`): image + badge chip + H3 + description + "Explore →" link.
   - Injectables (Medspa badge) — image `photo-1512290923902-8a9f81dc236c`
   - Laser & Light (Medspa badge) — image `photo-1629209648144-c27558e67a72`
   - Skin Rejuvenation (Medspa badge) — image `photo-1570172619644-dfd03ed5d881`
   - Facials (Dayspa badge, gold bg) — image from spa
   - Massage & Body (Dayspa badge)
   - Wellness (Dayspa badge)
4. **Treatment List** — Paper-2 bg. H2 + lede + price table or list rows.
5. **Quiz CTA** — Ink-900 dark section. Eyebrow (gold-300). H2: "Not sure where to start?" Two buttons: Take Quiz + Book Consult.
6. **FAQ** — Paper bg. H2 + accordion items.

---

### Page 06: Service Detail / Botox (`service.html`)

**URL slug:** `/services/botox`  
**Page title:** Botox Cosmetic — Rejuvalase · Stafford, VA

Sections:
1. **Breadcrumb** — Services → Injectables → Botox Cosmetic
2. **Service Header** — Paper bg, `4rem 0 5rem`. Two-column (`1fr 1fr`, gap 4rem): left = text, right = portrait-ratio image.
   - Left: Pill badge "Injectable · Medspa". H1 "Botox *Cosmetic*". Tagline paragraph. Stat row (mono labels + serif values): From $12/unit · 10–15 min · No downtime · 3–4 months. CTA: "Book This Service →" + "View All Specials"
   - Right: Service image `photo-1629209648144-c27558e67a72`, 4:5 ratio, with shadow
3. **What It Is** — Paper-2 bg. Two-column: label col + content col. H2 + two paragraphs of clinical explanation.
4. **Benefits** — Paper bg. H2. 2×2 grid of benefit cards (left border gold-500, numbered label, h3, p).
5. **Who It's For** — Ink-900 dark. Two-column: left copy + right checklist. Eyebrow (gold-300). H2. Checklist items with gold checkmark SVG.
6. **Pricing** — Paper-2 bg. H2 + note. Price table (`.price-table`): header row (ink-900 bg) + rows (service name + price). Sample rows: Forehead (1 area) $150–$250 · Crow's feet (2 areas) $200–$350 · Glabellar lines $150–$200 · 3-area treatment from $425
7. **Testimonial** — Ink-900. Client blockquote with gold details label "Before · After" note.
8. **Related Services** — Brief chips or cards for related treatments.
9. **FAQ Accordion** — Page-specific Botox FAQs.
10. **CTA Banner** — Gold-500 bg.

---

### Page 07: Medspa (`medspa.html`)

**URL slug:** `/medspa`  
**Page title:** Medspa Services — Rejuvalase · Stafford, VA

Sections:
1. **Page Hero** — Standard dark hero. H1: "Where science meets *skin*."
2. **Full-width Photo** — 480px tall atmospheric image with italic overlay quote. Image: `photo-1629209648144-c27558e67a72`. Quote: "We believe the best aesthetic result is the one you don't have to explain."
3. **Categories Dark** — Ink-900 bg. Eyebrow (gold-300). H2. 2×2 grid (`.cat-blocks`, 1.5px gap): each block has cat number, H3, short description, "Explore →" link. Categories: Injectables · Laser & Light · Skin Rejuvenation · Wellness Treatments.
4. **Service Listing** — Paper bg. Filter pills bar. Cards grid showing all medspa services.
5. **Before/After** — Dark section, image slider.
6. **Credentials strip** — Paper-2. Stat numbers.
7. **CTA Banner**.

---

### Page 08: Dayspa (`dayspa.html`)

**URL slug:** `/dayspa`  
**Page title:** Day Spa Services — Rejuvalase · Stafford, VA

Sections:
1. **Page Hero** — Standard dark hero. H1: "Restore. *Breathe*. Return."
2. **Atmospheric Photo** — 480px height, bottom-faded gradient. Quote overlay in Cormorant italic: "There is no treatment plan that works without rest. This is the rest."
3. **Menu Section** — Paper bg. H2. 2-column grid of menu cards (`.menu-card`): image + body with category label + H3 + description + price + "Book →". Cards: HydraFacial, Signature Facial, Swedish Massage, Deep Tissue, Body Scrub & Wrap, Half-Day Retreat, Couples Suite, Bridal Packages.
4. **Membership** — Gold-500 bg (or paper-2). Pitch for The Rejuvalase Circle: $149/mo, monthly HydraFacial, 20% off injectables.
5. **CTA Banner**.

---

### Page 09: Specials (`specials.html`)

**URL slug:** `/specials`  
**Page title:** Specials & Offers — Rejuvalase · Stafford, VA

Sections:
1. **Page Hero** — H1: "Offers worth *planning around*."
2. **Featured Special** — Two-column card (`.featured-special`, 1fr 1fr, min-height 520px, gold-500 border): left = image fill; right = paper-2 bg with badge, H2, description with bullet list, price stack (original struck through + new price), "Reserve Now →" button.
   - Image: `photo-1570194065650-d99fb4bedf0a`
   - Title: "The Spring *Radiance* Event"
   - Description: BBL + HydraFacial package. What's included: 1 Sciton BBL session, 1 HydraFacial (30 min), SkinCeuticals consultation, 20% retail skincare. Price: ~~$549~~ $439.
3. **All Specials Grid** — Filter pills: All / Medspa / Dayspa / Events / Members. 3-column card grid. Each card: image, tag chip, cat label, H4, description, price + arrow.
4. **Membership CTA** — Dark section pitching The Rejuvalase Circle.
5. **Newsletter strip** or CTA Banner.

---

### Page 10: Blog / Journal (`blog.html`)

**URL slug:** `/journal`  
**Page title:** Journal — Rejuvalase · Stafford, VA

Sections:
1. **Page Hero** — H1: "The Rejuvalase *Journal*." Lede about editorial approach.
2. **Featured Post** — Two-column card (`.feat-post__inner`, min-height 500px): left = image fill with hover scale; right = paper-2 bg with category, H2 title, excerpt, author byline.
   - Image: `photo-1512290923902-8a9f81dc236c`
   - Cat: "Injectables · Education"
   - Title: "Filler fatigue is real — here's how we prevent it in our own clients."
   - Byline: Nadia Okafor, RN · March 14, 2026
3. **Post Grid** — Paper bg. Filter pills: All / Injectables / Skincare / Laser & Light / Practice Notes. 3-column post grid. Each post: image (4:3), cat + read-time, H4, excerpt, author.
4. **Newsletter strip** — ink-900.

---

### Page 11: Quiz (`quiz.html`)

**URL slug:** `/quiz`  
**Page title:** Where to Start Quiz — Rejuvalase · Stafford, VA

Full-page two-column split (no standard section padding):

**Left panel** (paper bg, sticky, `80px 60px`):
- Eyebrow: "Personalized Guidance"
- H1: "Not sure where *to start?*"
- Description paragraph
- Stats: 2×2 grid: 3 min / 6 questions / 1,400+ completed / 0 email required
- Photo: `photo-1580489944761-15a19d654956` (4:3 ratio)

**Right panel** (ink-900, `80px 60px`, paper text):
- Thin progress bar (gold-300 fill, animates on advance)
- 6 question panels (one shown at a time, `.q-panel.active`)
- Each panel: step indicator, question text (Cormorant 30px), options list, Next button

**6 Questions:**
1. What bothers you most in the mirror? (A: Fine lines, B: Uneven tone, C: Lost volume, D: Sun damage, E: Dullness)
2. How would you describe your schedule? (A: Very busy — quick options, B: Moderate — 1-2 hr visits, C: Flexible — full experience)
3. What's your comfort level with medical treatments? (A: Spa-style only, B: Open to light medical, C: Ready for advanced clinical)
4. What's your skin's biggest challenge? (A: Breakouts & congestion, B: Fine lines & laxity, C: Redness & pigmentation, D: Dehydration & dullness)
5. What's your recovery preference? (A: No downtime, B: 1–2 days fine, C: Up to a week okay)
6. Budget range? (implied final question)

**Results panel** (replaces question panel when quiz complete):
- "Your personalized recommendation" headline
- 2–3 result cards: numbered (RC-01, RC-02...), service name (Cormorant 20px), reason paragraph (Inter 300)
- CTAs: "Book a Consultation →" + "Restart Quiz" button

---

### Page 12: Landing Page (`landing.html`)

**URL slug:** `/spring-radiance-event` (or similar campaign)  
**Page title:** Spring Radiance Event — Limited Offer — Rejuvalase · Stafford, VA

Note: Nav is stripped — hides left nav links and Book button, shows only logo + phone.

Sections:
1. **Hero** — Full viewport, `flex-end` alignment. Image `photo-1570194065650-d99fb4bedf0a`, gradient `to top` (dark at bottom). Boxed eyebrow label (bordered, mono, gold-300). H1: "The Spring *Radiance* Event." Meta line (mono, gold-300 icon): date range. Lede paragraph. Animated urgency indicator (pulsing orange dot + "Only 8 spots remaining"). Two CTAs.
2. **What's Included** — Paper bg, `96px 0`. H2 with serif. 3-column grid (`.included-grid`): each col has icon (bordered circle), value label (mono, muted), name (serif 22px), description. Cols: Sciton BBL · HydraFacial · SkinCeuticals Consultation (free bonus).
3. **Value Breakdown** — Paper-2 bg. Table showing individual prices vs. package: BBL $350, HydraFacial $199, Consultation $0 (bonus). Total was $549, Package price $439.
4. **Before & After** — Ink-900 bg, two-column. Left: portrait image. Right: H2, blockquote testimonial, attribution, star rating, CTA.
5. **Trust Section** — Paper bg. H2. 3 trust cards (bordered, icon, stat, description): Board Certified | 4.9 Stars | Free Consultation.
6. **Final CTA** — Gold-500 bg. H2: "Reserve your spot before April 10." + booking button.

---

### Page 13: Medspa Detail page (same structure as service.html but for medspa category landing)

---

### Page 14: FAQ (`faq.html`)

**URL slug:** `/faq`  
**Page title:** FAQ — Rejuvalase · Stafford, VA

Uses `<details>/<summary>` HTML accordion (not `.faq-item` JS version).

Sections:
1. **Page Hero** — H1: "Honest answers, *no pressure*." Lede: "We get a lot of the same questions. Here are the real answers — no upselling, no hedging, no fine print you'll need a magnifying glass to read."
2. **FAQ Groups** — `max-width: 800px` centered. Five groups:
   - **Getting Started:** What's the difference between a medspa and a day spa? | Are consultations really free? | Who will I see at my appointment? | Do I need to be an existing client to purchase retail products?
   - **Injectables:** Is Botox safe? | How long do results last? | What's the difference between Botox and Dysport? | How much does treatment cost?
   - **Skincare & Facials:** (additional questions about HydraFacial, chemical peels, etc.)
   - **Safety & Aftercare:** (questions about downtime, protocols)
   - **Billing & Memberships:** (pricing, membership terms)
3. **Still Have Questions** — Paper-2 bg, centered. H2 + paragraph. Two contact cards (phone + email). Newsletter sign-up CTA.
4. **Dark CTA Banner** — Ink-900 bg. H2 + buttons.

**FAQ answer content (key excerpts):**
- Consultations: "Yes, always and completely. We never charge for consultations... You can come in, talk with a provider, get an honest assessment, ask every question you have, and leave with no obligation whatsoever."
- Botox safety: Approved since 2002, most common side effects resolve within days, medical history reviewed before treatment.
- Results duration: Neuromodulators 3–4 months; HA fillers 6–9 months (lips) to 12–18 months (cheeks).
- Botox vs Dysport: Different molecule size, different unit equivalence (2.5–3 Dysport = 1 Botox unit), both used at Rejuvalase.

---

### Page 15: Legal (`legal.html`)

**URL slug:** `/legal`  
**Page title:** Legal & Policies — Rejuvalase · Stafford, VA

Sections:
1. **Hero** — Ink-900, centered. Eyebrow "Effective January 1, 2026". H1: "Privacy, Terms, *Access*." Subtitle paragraph.
2. **Sticky Tab Nav** — Paper-2 bg, sticky below main nav. Three tabs: Privacy Policy · Terms of Service · Accessibility. Each is an anchor link to section below. Underline indicator on active tab.
3. **Privacy Policy section** — `max-width: 800px` centered. H2 + sub-sections with H3s, body paragraphs. Covers: data collected, how used, sharing, cookies, HIPAA notice, contact to delete data.
4. **Terms of Service section** — Treatment policies, cancellation policy (24 hours), no-show fee, refund policy, medical disclaimer.
5. **Accessibility section** — WCAG compliance statement, contact for accommodations.

---

### Page 16: Careers (`careers.html`)

**URL slug:** `/careers`  
**Page title:** Careers — Rejuvalase · Stafford, VA

Sections:
1. **Page Hero** — H1: "Build your career at *Rejuvalase*." Lede about the team culture.
2. **Culture Section** — Paper-2 bg. Two-column: left = image (`photo-1552693673-1bf958298935`, 4:3); right = H2 + body paragraphs about the workplace.
3. **Benefits Dark** — Ink-900. Eyebrow (gold-300). H2. 2×2 grid (`.benefit-tiles`): each tile has icon (40×40, gold-500), H3 (paper), descriptive paragraph. Benefits: Competitive pay & benefits | CE allowance $1,500/yr | Flexible scheduling | Small team, direct mentorship.
4. **Open Positions** — Paper bg. H2. List of job rows (`.job-row`): each row has job title (serif 26px) + meta chips (type/location/dept) + brief requirement + "Apply →" link.

Current openings:
- Registered Nurse — Injector (Full-time · Clinical)
- Licensed Esthetician (Part-time · Dayspa)
- Patient Coordinator / Front Desk (Full-time · Admin)

5. **Perks Grid** — Paper bg. H2. 3-column grid (`.perks-grid`): icon + H3 + paragraph for each perk. Perks: Health insurance · 401(k) with match · Employee treatments at cost · Continuing education budget · Paid time off · Community events.
6. **CTA Banner** — Gold-500 bg. "Don't see your role? Send a resume." button links to contact.html.

---

### Page 17: Events (`events.html`)

**URL slug:** `/events`  
**Page title:** Events & Experiences — Rejuvalase · Stafford, VA

Sections:
1. **Page Hero** — Image `photo-1540555700478-4be289fbecef` (partial overlay). H1: "More than a / medspa visit." Lede: "Rejuvalase events blend education, community, and exclusive access into evenings you won't find anywhere else in Stafford..."
2. **Featured Event** — Two-column card (`1fr 1fr`, gold-200 border). Left: photo with gold "Featured" badge. Right: paper-2 bg with date (mono, gold-500, calendar icon), H2 title, description, checklist of what's included, price row (big serif price + struckthrough original), meta pills (date/time/location), "Reserve Spot →" button.
   - Event: "The Spring Radiance Evening" — A skincare education evening with Dr. Chen and Nadia Okafor. Includes champagne reception, live treatment demos, take-home product gift bag, exclusive booking specials for attendees. $45 per person (normally $75). April 15, 7–9pm.
3. **All Upcoming Events** — Paper bg. H2 + paragraph. 3-column event card grid. Each card: date label, event name, tag (Free/VIP/Specialist), description, "Learn More →" link.
4. **Past Events** — Paper-2 bg. H2. 3-column grid of past event cards with image, when label, title, description.
5. **Event Signup** — Ink-900 bg, centered. H2: "Stay in the loop." Paragraph. Email signup form (inline input + submit). Note: "Events sell out. Usually within 48 hours."
6. **FAQ** — Paper bg. H2 + accordion items about event policies.

---

### Page 18: Quiz (see Page 11)

---

### Page 19: Blog Post (`post.html`)

**URL slug:** `/journal/filler-fatigue`  
**Page title:** Filler Fatigue Is Real — Rejuvalase Journal

Sections:
1. **Breadcrumb** — Home → Journal → Injectables
2. **Post header** — Paper bg. Category label, read time, title (large serif), subtitle/lede, author row with photo and date.
3. **Article body** — `max-width: 720px`, Inter 15–17px, 1.8 line height. Long-form with pull quotes, sub-headers.
4. **Author bio** — Paper-2. Author photo, name, role, credential note, link to team page.
5. **Related posts** — Paper. H2 + 3-column grid.
6. **Newsletter strip** — Ink-900.

---

## 5. Webflow-Specific Notes

### CMS Collections Needed

#### 1. Services Collection
Fields:
- Name (plain text)
- Slug (plain text)
- Category (option: Medspa / Dayspa / Wellness)
- Sub-category (option: Injectables / Laser & Light / Skin Rejuvenation / Facials / Massage / Body / Rituals)
- Short description (plain text, 120 chars)
- Long description (rich text)
- Hero image (image)
- Starting price (plain text, e.g. "from $12/u")
- Icon name (plain text, for SVG reference)
- Stats (nested list: label + value)
- Benefits (rich text or multi-ref)
- Who it's for list (rich text)
- Pricing table (rich text or multi-line plain text with prices)
- Client testimonial (rich text + attribution)
- Featured (boolean)
- Sort order (number)

#### 2. Blog Posts Collection
Fields:
- Title (plain text)
- Slug (plain text)
- Excerpt (plain text, 160 chars)
- Body (rich text)
- Category (option: Injectables / Skincare / Laser & Light / Practice Notes)
- Author (reference to Team Members)
- Publish date (date)
- Read time (plain text, e.g. "8 min read")
- Cover image (image)
- Featured (boolean)
- Tags (multi-select)

#### 3. Team Members Collection
Fields:
- Name (plain text)
- Slug (plain text)
- Role title (plain text)
- Department (option: Medical / Laser / Esthetics / Massage / Admin)
- Credentials short (plain text, e.g. "Allergan Master Injector · 11 years · 6,000+ procedures")
- Bio (rich text)
- Photo (image)
- Display order (number)
- Specialty tags (multi-select)

#### 4. Specials Collection
Fields:
- Name (plain text)
- Slug (plain text)
- Type (option: Event / New Client / Member / Seasonal)
- Tag label (plain text, e.g. "Spring · Limited")
- Description (rich text)
- What's included (rich text or list)
- Original price (plain text)
- Sale price (plain text)
- Price unit (plain text, e.g. "/unit" or "/mo")
- Image (image)
- Valid dates (plain text, e.g. "April 15–30")
- Active (boolean)
- Featured (boolean)

#### 5. Events Collection
Fields:
- Name (plain text)
- Slug (plain text)
- Date (date)
- Time (plain text)
- Duration (plain text)
- Description (rich text)
- What's included list (rich text)
- Ticket price (plain text)
- Original price (plain text)
- Status (option: Upcoming / Sold Out / Past)
- Type (option: Free / VIP / Specialist / Education)
- Cover image (image)
- Capacity (number)
- Spots remaining (number)

#### 6. Careers Collection
Fields:
- Job title (plain text)
- Department (option: Clinical / Admin / Esthetics / Massage)
- Employment type (option: Full-time / Part-time / Contract)
- Brief requirements (plain text)
- Full description (rich text)
- Active (boolean)
- Posted date (date)

### Symbols / Global Components

Create as **Symbols** (Webflow Components):
1. **Announcement Bar** — Reusable across all pages. Contains dot, two text spans (one with `.hide-sm` class for mobile), gold link.
2. **Main Navigation** — Sticky, backdrop blur. Three-column grid. Left links, center wordmark, right contact + CTA. Mega menu panels inside nav with hover interaction.
3. **Footer** — Newsletter section + full footer grid. Five-column layout with brand, four link columns.
4. **Page Hero** — Interior pages use this dark hero component. Accepts eyebrow, H1 (with em), lede, background image, optional breadcrumb.
5. **Breadcrumb** — Below page hero. Accepts array of link items + current page name.
6. **CTA Banner** — Gold bg section. Accepts H1 (with em), primary button, secondary outline button.
7. **Trust Bar** — Paper-2 strip. Five stat items with separators.
8. **Newsletter Strip** — Dark section. Two-column: copy + email form.

### Interactions Needed

**Mega Menu (hover):**
- Trigger: Mouse-over on nav items with `data-mega` attribute
- Action: Show corresponding mega panel (opacity 0→1, translateY -6px→0, 220ms)
- Also: show full-page backdrop overlay (opacity 0→0.35, 220ms)
- Close: Mouse-leave from nav item or panel (140ms delay), click on backdrop, Escape key

**FAQ Accordion:**
- Trigger: Click on `.faq-item`
- Action: Toggle `.open` on clicked item, show/hide `.faq-answer` sibling
- Also: close any other currently open items first (one-open-at-a-time behavior)
- Visual: `+` icon rotates 45° when open

**Filter Pills:**
- Trigger: Click on `.filter-pill`
- Action: Remove `.on` from all siblings, add `.on` to clicked
- Also: Show/hide cards by matching `data-filter` on pill against `data-cat` on cards

**Quiz Steps:**
- Trigger: Click on quiz option, then "Next Question →" button
- Action: Advance progress bar width, hide current question panel, show next
- On Q6 complete: hide all question panels, show results panel
- Also: mark selected option with `.sel` class, enable "Next" button

**Ken Burns Hero:**
- CSS animation on `.kenburns` div: `scale(1.02) → scale(1.09)`, 18s, alternate, infinite
- JS slide crossfade: opacity transition 1200ms between slides, auto-advance every 6000ms

**Before/After Slider:**
- Handle at 54% position, drag left/right to reveal before image
- Gold handle circle, paper border, gold vertical line

**Gallery Scroll:**
- CSS animation: `translateX(0) → translateX(-50%)` (duplicate items make this seamless), 60s linear infinite
- Pauses on hover (`animation-play-state: paused`)

**Space Slider (room showcase):**
- Manual: prev/next buttons + dot indicators
- Slide transition: opacity crossfade 900ms
- Updates text content (title, body, meta) when slide changes

### Forms

**Booking / Contact Form** (contact.html):
- First Name, Last Name (row)
- Email, Phone (row)
- Service dropdown (select)
- Preferred Date, Preferred Time (row)
- Referral source (select: Google / Instagram / Friend / Existing client / Other)
- Message (textarea, min-height 130px, resize vertical)
- Submit: "Request Consultation →" — gold-500 primary button

**Career Application Form** (triggered from job listings):
- Full Name
- Email
- Phone
- Position applying for (pre-filled from job listing)
- Resume (file upload)
- Why Rejuvalase? (textarea)
- Submit

**Newsletter Form** (footer + section):
- Email input (placeholder: `eleanor@example.com`)
- "Subscribe →" inline button
- Below: "Unsubscribe anytime · 2,100 subscribers · No spam"

**Event RSVP Form** (events page):
- Name, Email, Party size
- "Reserve Spot →" button
- Note about cancellation policy

---

## 6. Image Assets

All images are from Unsplash. Format parameters: `?w=[width]&q=80&auto=format&fit=crop`

| Usage | Photo ID | Description |
|---|---|---|
| Hero slide 1 | `photo-1570172619644-dfd03ed5d881` | Clinical/treatment room ambiance |
| Hero slide 2 | `photo-1540555700478-4be289fbecef` | Spa interior, warm tones |
| Hero slide 3 | `photo-1487412947147-5cebf100ffc2` | Person in treatment/relaxed pose |
| Philosophy section | `photo-1552693673-1bf958298935` | Close-up clinical portrait |
| About hero | `photo-1552693673-1bf958298935` | Same clinical portrait |
| Service: Botox/Injectables | `photo-1512290923902-8a9f81dc236c` | Injectable/syringe aesthetic |
| Service: Sciton BBL | `photo-1629209648144-c27558e67a72` | Laser treatment device |
| Service: HydraFacial | `photo-1560750588-73207b1ef5b8` | Facial treatment |
| Service: Laser suite | `photo-1544161515-4ab6ce6db874` | Clinical laser room |
| Team member 1 (Dr. Maya Chen) | `photo-1594824476967-48c8b964273f` | Professional medical headshot |
| Team member 2 (Nadia Okafor) | `photo-1580489944761-15a19d654956` | Professional headshot |
| Team member 3 (Sara Whitfield) | `photo-1573496359142-b8d87734a5a2` | Professional headshot |
| Team member 4 (Ines Morales) | `photo-1531123897727-8f129e1688ce` | Professional headshot |
| Before/After — before | `photo-1499952127939-9bbf5af6c51c` | Skin texture before treatment |
| Before/After — after | `photo-1526045478516-99145907023c` | Improved skin after treatment |
| Special: Radiance Event | `photo-1570194065650-d99fb4bedf0a` | Spa/glow atmosphere |
| Special: First Botox | `photo-1614179689702-355944cd0918` | Injection/medspa |
| Special: Membership | `photo-1556228453-efd6c1ff04f6` | Luxury spa |
| Post 1 (Filler Fatigue) | `photo-1512290923902-8a9f81dc236c` | Injectable aesthetic |
| Post 2 (SPF) | `photo-1556228720-195a672e8a03` | Skincare/UV |
| Post 3 (Consult) | `photo-1620302751831-6a95fd1f3d0a` | Consultation setting |
| Gallery tile 1 | `photo-1540555700478-4be289fbecef` | Treatment Room 01 |
| Gallery tile 2 | `photo-1512290923902-8a9f81dc236c` | HydraFacial |
| Gallery tile 3 | `photo-1552693673-1bf958298935` | Dr. Chen portrait |
| Gallery tile 4 | `photo-1570172619644-dfd03ed5d881` | Consult Room |
| Gallery tile 5 | `photo-1629209648144-c27558e67a72` | Sciton BBL |
| Gallery tile 6 | `photo-1571646034647-52e6ea84b28c` | Skincare wall/products |
| Gallery tile 7 | `photo-1487412947147-5cebf100ffc2` | The Lobby |
| Gallery tile 8 | `photo-1598440947619-2c35fc9aa908` | Injector prep |
| Space slide 1 | `photo-1540555700478-4be289fbecef` | Treatment Room One |
| Space slide 2 | `photo-1544161515-4ab6ce6db874` | The Laser Suite |
| Space slide 3 | `photo-1487412947147-5cebf100ffc2` | Consultation Room |
| Space slide 4 | `photo-1600334129128-685c5582fd35` | The Massage Studio |
| Space slide 5 | `photo-1522337360788-8b13dee7a37e` | Reception & Lobby |
| Space slide 6 | `photo-1620916566398-39f1143ab7be` | The Product Wall |
| Quiz left panel | `photo-1580489944761-15a19d654956` | Person thoughtful portrait |
| Mega: Services feature | `photo-1570194065650-d99fb4bedf0a` | Spring event atmosphere |
| Mega: Medspa feature | `photo-1629209648144-c27558e67a72` | Laser/clinical |
| Mega: Dayspa feature | `photo-1600334129128-685c5582fd35` | Massage/relaxation |
| Mega: Gift card feature | `photo-1512290923902-8a9f81dc236c` | Gift/beauty |
| Events hero | `photo-1540555700478-4be289fbecef` | Spa interior |
| Landing page hero | `photo-1570194065650-d99fb4bedf0a` | Radiance Event atmosphere |
| Services hero | `photo-1544161515-4ab6ce6db874` | Clinical overview |
| Medspa full-photo | `photo-1629209648144-c27558e67a72` | Laser treatment |
| Dayspa atmospheric | `photo-1600334129128-685c5582fd35` | Massage studio |

**Unsplash base URL format:**
```
https://images.unsplash.com/[photo-id]?w=900&q=80&auto=format&fit=crop
```

Adjust `w=` parameter: 1800 for full-viewport heroes, 1200 for medium, 900 for cards, 700 for thumbs.

---

## 7. SVG Icon System

All icons are inline SVG sprites using `<symbol>` + `<use href="#i-[name]">`. These must be injected into the Webflow page or hosted as an embedded component.

Icon names and paths:
- `i-star` — polygon star (ratings, trust)
- `i-shield` — shield with checkmark (medical credentials)
- `i-users` — two people silhouette (team/clients)
- `i-leaf` — leaf (body treatments, wellness)
- `i-calendar` — calendar grid (scheduling, est. date)
- `i-sparkle` — cross/sparkle (facials, glow)
- `i-droplet` — teardrop (injectables, serums)
- `i-flower` — flower with petals (esthetics, PRP)
- `i-scan` — corner brackets + circle (laser, scanning)
- `i-hand` — stylized hand (massage therapy)
- `i-clock` — circle + hands (duration indicators)
- `i-map` — location pin (address)
- `i-phone` — handset receiver (contact)
- `i-mail` — envelope (email)
- `i-arrow-right` — → (CTAs, navigation)
- `i-check` — checkmark (lists, confirmation)
- `i-pen` — pen/edit tool (planning, customized)
- `i-tag` — price tag (specials)
- `i-play` — play triangle (video)
- `i-book` — open book (education, journal)
- `i-plus` — plus sign (FAQ toggle)
- `i-briefcase` — briefcase (careers)
- `i-award` — ribbon award (credentials)

SVG base settings: `stroke: currentColor; fill: none; stroke-width: 1.4`. Sizes: default 18×18, `.sm` 14×14, `.lg` 28×28.

---

## 8. Responsive Breakpoints

| Breakpoint | Key changes |
|---|---|
| ≤ 1100px | Credentials grid → 2-col; News body → 1-col; Footer → 2-col; 4-col card grid → 2-col; Philosophy → 1-col stacked |
| ≤ 900px | All `.sec-intro` text centers; Quiz → 1-col; Team grid → 2-col; Journal → 1-col; Space slider panel goes below image |
| ≤ 700px | Section padding → `80px 20px`; Nav left links hidden; Mega menus hidden; All grids → 1-col; Hero chrome hidden |

Mobile nav: Shows only logo + "Book Consultation" button. Hamburger menu not implemented in this design (mega menus require desktop).

---

## 9. Key Design Decisions to Preserve

1. **No rounded corners anywhere** — All cards, buttons, inputs have `border-radius: 0` or 2–3px maximum. The design is deliberately sharp and architectural.
2. **No drop shadows on main cards** — Service tiles and team cards use border + translate-lift hover, not shadows. Exception: service.html hero image has a box-shadow.
3. **Typography contrast is the visual hierarchy** — Cormorant at large sizes does heavy lifting. Resist the urge to add color or weight.
4. **Gold is used sparingly** — Only for eyebrows, active states, prices, icons, and italic em highlights. Never as a background on large areas except the CTA banner.
5. **Ink-900 sections are visual anchors** — Services, Before/After, Space Slider, Newsletter, and Footer all use ink-900. They create rhythm.
6. **Paper-2 is for alternating light sections** — Credentials, Journal, Process, Contact Methods use paper-2 as a subtle relief from paper.
7. **The wordmark is just text** — "Rejuvalase" in Cormorant Garamond 28px (nav) / 40px (footer). No logo mark. No SVG file needed.
8. **All transitions are 180–320ms** — Nothing animates slowly. The site is refined, not theatrical.
9. **Gallery and Space Slider images should be high-resolution** — Use `w=1800` for slider backgrounds.
10. **IBM Plex Mono drives the technical feel** — Every time you feel tempted to use Inter for a label or badge, use IBM Plex Mono instead.
