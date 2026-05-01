/* ============================================================
   Rejuvalase — Shared Site JavaScript
   Injects: SVG sprite, announcement bar, nav, footer
   Wires:   mega menu, FAQ accordion, active nav state
   ============================================================ */

const SITE = {
  phone: '540 · 555 · 0134',
  phoneHref: 'tel:5405550134',
  address: '1347 Garrisonville Road<br>Suite 204 · Stafford, VA 22554',
  email: 'hello@rejuvalase.com',
};

/* ---------- SVG sprite ---------- */
const SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="i-star" viewBox="0 0 24 24"><polygon points="12,2 15,9 22,10 17,15 18,22 12,18.5 6,22 7,15 2,10 9,9"/></symbol>
<symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M9 12l2 2 4-4"/></symbol>
<symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20v-1c0-3 3-5 6-5s6 2 6 5v1"/><circle cx="17" cy="7" r="2.5"/><path d="M15 14c3 0 6 1.5 6 4v1"/></symbol>
<symbol id="i-leaf" viewBox="0 0 24 24"><path d="M20 3c-9 0-15 6-15 15 0 1 0 2 0 3 8 0 15-6 15-15 0-1 0-2 0-3z"/><path d="M5 21L15 11"/></symbol>
<symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16"/><path d="M3 10h18M8 3v4M16 3v4"/></symbol>
<symbol id="i-sparkle" viewBox="0 0 24 24"><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/><path d="M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3"/></symbol>
<symbol id="i-droplet" viewBox="0 0 24 24"><path d="M12 3c-4 5-7 8-7 12a7 7 0 0014 0c0-4-3-7-7-12z"/></symbol>
<symbol id="i-flower" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 9V4M12 15v5M15 12h5M9 12H4M14 10l3-3M7 17l3-3M14 14l3 3M7 7l3 3"/></symbol>
<symbol id="i-scan" viewBox="0 0 24 24"><path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4"/><circle cx="12" cy="12" r="3"/></symbol>
<symbol id="i-hand" viewBox="0 0 24 24"><path d="M8 11V5a2 2 0 114 0v6M12 11V3a2 2 0 114 0v8M16 11V6a2 2 0 114 0v10a6 6 0 01-6 6h-3l-4-4-3-5 2-2 3 2"/></symbol>
<symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></symbol>
<symbol id="i-map" viewBox="0 0 24 24"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></symbol>
<symbol id="i-phone" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014 2h3a2 2 0 012 1.7 13 13 0 00.7 2.8 2 2 0 01-.5 2L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012-.5 13 13 0 002.9.7 2 2 0 011.7 2.1z"/></symbol>
<symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14"/><path d="M3 7l9 6 9-6"/></symbol>
<symbol id="i-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path d="M5 13l4 4 10-10"/></symbol>
<symbol id="i-pen" viewBox="0 0 24 24"><path d="M17 3l4 4-11 11H6v-4z"/></symbol>
<symbol id="i-tag" viewBox="0 0 24 24"><path d="M20 12l-8 8-8-8V4h8z"/><circle cx="8.5" cy="8.5" r="1.5"/></symbol>
<symbol id="i-play" viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20"/></symbol>
<symbol id="i-book" viewBox="0 0 24 24"><path d="M4 4h7a4 4 0 014 4v12a3 3 0 00-3-3H4z"/><path d="M20 4h-7a4 4 0 00-4 4v12a3 3 0 013-3h8z"/></symbol>
<symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
<symbol id="i-briefcase" viewBox="0 0 24 24"><rect x="2" y="8" width="20" height="14"/><path d="M16 8V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></symbol>
<symbol id="i-award" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M8.56 13.89L7 22l5-3 5 3-1.56-8.11"/></symbol>
</defs></svg>`;

/* ---------- NAV HTML ---------- */
const NAV_HTML = `
<div class="announce">
  <span class="dot"></span>
  <span>Complimentary consultations · Every weekday</span>
  <span class="hide-sm">·</span>
  <span class="hide-sm">Spring Radiance Event · April 15–30 · <a href="specials.html">Reserve →</a></span>
</div>

<nav class="main" aria-label="Primary">
  <div class="left">
    <ul>
      <li class="has-mega" data-mega="services"><a href="services.html">Services <svg class="ico sm chev"><use href="#i-arrow-right"/></svg></a></li>
      <li class="has-mega" data-mega="medspa"><a href="medspa.html">Medspa <svg class="ico sm chev"><use href="#i-arrow-right"/></svg></a></li>
      <li class="has-mega" data-mega="dayspa"><a href="dayspa.html">Dayspa <svg class="ico sm chev"><use href="#i-arrow-right"/></svg></a></li>
      <li class="has-mega" data-mega="specials"><a href="specials.html">Specials <svg class="ico sm chev"><use href="#i-arrow-right"/></svg></a></li>
      <li class="has-mega" data-mega="journal"><a href="blog.html">Journal <svg class="ico sm chev"><use href="#i-arrow-right"/></svg></a></li>
    </ul>
  </div>
  <a href="index.html" class="wm">Rejuvalase</a>
  <div class="right">
    <span class="phone"><svg class="ico sm"><use href="#i-phone"/></svg>${SITE.phone}</span>
    <a href="contact.html" class="btn primary">Book Consultation <svg class="ico sm"><use href="#i-arrow-right"/></svg></a>
  </div>

  <div class="mega-layer" id="megaLayer">
    <div class="mega" data-mega="services">
      <div class="mega-cap">
        <div class="mega-cols">
          <div class="mega-col">
            <h6>Medspa</h6>
            <a href="service.html"><span>Botox &amp; Filler</span><em>Fine lines · volume</em></a>
            <a href="service.html"><span>Sciton BBL</span><em>Pigment · redness</em></a>
            <a href="service.html"><span>Microneedling</span><em>Texture · pores</em></a>
            <a href="service.html"><span>Chemical Peels</span><em>Resurfacing</em></a>
            <a href="service.html"><span>PRP &amp; PRF</span><em>Hair · skin renewal</em></a>
          </div>
          <div class="mega-col">
            <h6>Dayspa</h6>
            <a href="service.html"><span>HydraFacial</span><em>Glow · zero downtime</em></a>
            <a href="service.html"><span>Signature Facials</span><em>Custom 60 &amp; 90 min</em></a>
            <a href="service.html"><span>Massage Therapy</span><em>Swedish · deep tissue</em></a>
            <a href="service.html"><span>Body Treatments</span><em>Scrubs · wraps</em></a>
          </div>
          <div class="mega-col">
            <h6>Wellness</h6>
            <a href="service.html"><span>IV Therapy</span><em>Hydration · immunity</em></a>
            <a href="service.html"><span>Laser Hair Removal</span><em>All skin types</em></a>
            <a href="specials.html"><span>Memberships</span><em>The Circle · $149/mo</em></a>
            <a href="contact.html"><span>Gift Cards</span><em>Any amount</em></a>
          </div>
        </div>
        <a href="specials.html" class="mega-feature" style="background-image:linear-gradient(180deg,rgba(21,18,13,0.1),rgba(21,18,13,0.75)),url('https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=900&q=80&auto=format&fit=crop');">
          <span class="kicker" style="color:var(--gold-300);">Featured · Spring event</span>
          <span class="t">The Radiance Event</span>
          <span class="s">BBL + HydraFacial · April 15–30</span>
          <span class="arr">Reserve <svg class="ico sm"><use href="#i-arrow-right"/></svg></span>
        </a>
      </div>
    </div>
    <div class="mega" data-mega="medspa">
      <div class="mega-cap">
        <div class="mega-cols">
          <div class="mega-col">
            <h6>Injectables</h6>
            <a href="service.html"><span>Botox &amp; Dysport</span><em>From $12 / unit</em></a>
            <a href="service.html"><span>Dermal Filler</span><em>Restylane · Juvéderm</em></a>
            <a href="service.html"><span>Lip Refinement</span><em>Balanced · natural</em></a>
            <a href="service.html"><span>Sculptra</span><em>Collagen stimulator</em></a>
          </div>
          <div class="mega-col">
            <h6>Laser &amp; Light</h6>
            <a href="service.html"><span>Sciton BBL</span><em>Pigment · redness</em></a>
            <a href="service.html"><span>CoolPeel Laser</span><em>Resurfacing</em></a>
            <a href="service.html"><span>Laser Hair Removal</span><em>Permanent reduction</em></a>
            <a href="service.html"><span>Vein Therapy</span><em>Sclerotherapy</em></a>
          </div>
          <div class="mega-col">
            <h6>Skin &amp; Cellular</h6>
            <a href="service.html"><span>Microneedling</span><em>SkinPen · PRP</em></a>
            <a href="service.html"><span>Chemical Peels</span><em>Light · medium · deep</em></a>
            <a href="service.html"><span>PRP &amp; PRF</span><em>Regenerative</em></a>
            <a href="service.html"><span>Medical Extractions</span><em>Acne protocol</em></a>
          </div>
        </div>
        <a href="specials.html" class="mega-feature" style="background-image:linear-gradient(180deg,rgba(21,18,13,0.1),rgba(21,18,13,0.75)),url('https://images.unsplash.com/photo-1629209648144-c27558e67a72?w=900&q=80&auto=format&fit=crop');">
          <span class="kicker" style="color:var(--gold-300);">New client</span>
          <span class="t">Botox at $10/unit</span>
          <span class="s">Up to 40 units · through May 31</span>
          <span class="arr">Book <svg class="ico sm"><use href="#i-arrow-right"/></svg></span>
        </a>
      </div>
    </div>
    <div class="mega" data-mega="dayspa">
      <div class="mega-cap">
        <div class="mega-cols">
          <div class="mega-col">
            <h6>Facials</h6>
            <a href="service.html"><span>HydraFacial</span><em>30 min · $199</em></a>
            <a href="service.html"><span>Signature Facial</span><em>60 min · $165</em></a>
            <a href="service.html"><span>Deep Cleanse</span><em>90 min · $225</em></a>
            <a href="service.html"><span>Back Facial</span><em>Underserved skin</em></a>
          </div>
          <div class="mega-col">
            <h6>Body</h6>
            <a href="service.html"><span>Swedish Massage</span><em>60 · 90 min</em></a>
            <a href="service.html"><span>Deep Tissue</span><em>Focused relief</em></a>
            <a href="service.html"><span>Prenatal Massage</span><em>Certified therapists</em></a>
            <a href="service.html"><span>Body Scrub &amp; Wrap</span><em>Hydrating ritual</em></a>
          </div>
          <div class="mega-col">
            <h6>Rituals</h6>
            <a href="service.html"><span>Half-Day Retreat</span><em>Facial · massage · lunch</em></a>
            <a href="service.html"><span>Couples Suite</span><em>Side-by-side tables</em></a>
            <a href="service.html"><span>Bridal Packages</span><em>Wedding-morning prep</em></a>
            <a href="contact.html"><span>Gift Cards</span><em>Any occasion</em></a>
          </div>
        </div>
        <a href="specials.html" class="mega-feature" style="background-image:linear-gradient(180deg,rgba(21,18,13,0.1),rgba(21,18,13,0.75)),url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=900&q=80&auto=format&fit=crop');">
          <span class="kicker" style="color:var(--gold-300);">Member</span>
          <span class="t">The Rejuvalase Circle</span>
          <span class="s">Monthly HydraFacial · $149/mo</span>
          <span class="arr">Learn <svg class="ico sm"><use href="#i-arrow-right"/></svg></span>
        </a>
      </div>
    </div>
    <div class="mega" data-mega="specials">
      <div class="mega-cap">
        <div class="mega-cols two">
          <a class="mega-thumb" href="special.html" style="background-image:linear-gradient(180deg,rgba(21,18,13,0.1),rgba(21,18,13,0.7)),url('https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=700&q=80&auto=format&fit=crop');">
            <span class="kicker" style="color:var(--gold-300);">Spring · Limited</span>
            <span class="t">The Radiance Event</span>
            <span class="s">BBL + HydraFacial · Apr 15–30</span>
          </a>
          <a class="mega-thumb" href="special.html" style="background-image:linear-gradient(180deg,rgba(21,18,13,0.1),rgba(21,18,13,0.7)),url('https://images.unsplash.com/photo-1614179689702-355944cd0918?w=700&q=80&auto=format&fit=crop');">
            <span class="kicker" style="color:var(--gold-300);">New client</span>
            <span class="t">First-time Botox</span>
            <span class="s">$10 / unit · up to 40 units</span>
          </a>
          <a class="mega-thumb" href="special.html" style="background-image:linear-gradient(180deg,rgba(21,18,13,0.1),rgba(21,18,13,0.7)),url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=700&q=80&auto=format&fit=crop');">
            <span class="kicker" style="color:var(--gold-300);">Member</span>
            <span class="t">The Rejuvalase Circle</span>
            <span class="s">$149/mo · cancel anytime</span>
          </a>
        </div>
        <a href="contact.html" class="mega-feature" style="background-image:linear-gradient(180deg,rgba(21,18,13,0.1),rgba(21,18,13,0.75)),url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=80&auto=format&fit=crop');">
          <span class="kicker" style="color:var(--gold-300);">Gift certificate</span>
          <span class="t">Give the Rejuvalase ritual</span>
          <span class="s">Digital or printed · any amount</span>
          <span class="arr">Purchase <svg class="ico sm"><use href="#i-arrow-right"/></svg></span>
        </a>
      </div>
    </div>
    <div class="mega" data-mega="journal">
      <div class="mega-cap">
        <div class="mega-cols">
          <div class="mega-col">
            <h6>Categories</h6>
            <a href="blog.html"><span>Injectables</span><em>Technical &amp; clinical notes</em></a>
            <a href="blog.html"><span>Skincare</span><em>Ingredients · routines</em></a>
            <a href="blog.html"><span>Laser &amp; Light</span><em>Devices · protocols</em></a>
            <a href="blog.html"><span>Practice Notes</span><em>How we operate</em></a>
          </div>
          <div class="mega-col">
            <h6>Recent</h6>
            <a href="post.html"><span>Filler fatigue is real</span><em>Mar 14 · 8 min read</em></a>
            <a href="post.html"><span>SPF, translated</span><em>Mar 2 · 5 min read</em></a>
            <a href="post.html"><span>Why our consult is free</span><em>Feb 22 · 3 min read</em></a>
          </div>
          <div class="mega-col">
            <h6>The Letter</h6>
            <a href="blog.html"><span>Monthly newsletter</span><em>6 letters/yr · zero spam</em></a>
            <a href="blog.html"><span>Client stories</span><em>In their words</em></a>
            <a href="blog.html"><span>Archive</span><em>Every post since 2019</em></a>
          </div>
        </div>
        <a href="post.html" class="mega-feature" style="background-image:linear-gradient(180deg,rgba(21,18,13,0.1),rgba(21,18,13,0.75)),url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=80&auto=format&fit=crop');">
          <span class="kicker" style="color:var(--gold-300);">Featured</span>
          <span class="t">Filler fatigue is real</span>
          <span class="s">Nadia Okafor, RN · Mar 14</span>
          <span class="arr">Read <svg class="ico sm"><use href="#i-arrow-right"/></svg></span>
        </a>
      </div>
    </div>
  </div>
</nav>`;

/* ---------- FOOTER HTML ---------- */
const FOOTER_HTML = `
<section class="news">
  <div class="news-cap">
    <div class="news-body">
      <div>
        <div class="eyebrow" style="color:var(--gold-300);">The Monthly Letter</div>
        <h3 style="margin-top:14px;">Six <em>thoughtful</em><br>emails a year.</h3>
        <p>Treatment notes, before-and-after case studies, and early access to specials. Zero promotional noise, ever.</p>
      </div>
      <div>
        <form class="news-form" onsubmit="event.preventDefault();">
          <input type="email" placeholder="eleanor@example.com" aria-label="Email"/>
          <button type="submit">Subscribe <svg class="ico sm"><use href="#i-arrow-right"/></svg></button>
        </form>
        <div class="small"><svg class="ico sm"><use href="#i-mail"/></svg>Unsubscribe anytime · 2,100 subscribers · No spam</div>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="foot-grid">
    <div class="brand">
      <div class="wm">Rejuvalase</div>
      <p>Medical-grade aesthetics and dayspa care, built for the clients of Stafford and surrounding counties.</p>
    </div>
    <div>
      <h5>Medspa</h5>
      <ul>
        <li><a href="service.html">Botox &amp; Filler</a></li>
        <li><a href="service.html">Sciton BBL</a></li>
        <li><a href="service.html">Microneedling</a></li>
        <li><a href="service.html">Chemical Peels</a></li>
        <li><a href="service.html">Laser Hair Removal</a></li>
      </ul>
    </div>
    <div>
      <h5>Dayspa</h5>
      <ul>
        <li><a href="service.html">Facials</a></li>
        <li><a href="service.html">Massage</a></li>
        <li><a href="service.html">Body Treatments</a></li>
        <li><a href="specials.html">Memberships</a></li>
      </ul>
    </div>
    <div>
      <h5>Practice</h5>
      <ul>
        <li><a href="about.html">About</a></li>
        <li><a href="team.html">Team</a></li>
        <li><a href="blog.html">Journal</a></li>
        <li><a href="careers.html">Careers</a></li>
        <li><a href="faq.html">FAQ</a></li>
      </ul>
    </div>
    <div>
      <h5>Contact</h5>
      <ul>
        <li style="font-size:13px;color:rgba(250,246,237,0.75);line-height:1.5;">1347 Garrisonville Rd<br>Stafford, VA 22554</li>
        <li><a href="tel:5405550134">540 · 555 · 0134</a></li>
        <li><a href="mailto:hello@rejuvalase.com">hello@rejuvalase.com</a></li>
      </ul>
    </div>
  </div>
  <div class="foot-bottom">
    <span>© 2026 Rejuvalase Medspa</span>
    <span>Licensed by VA Board of Medicine</span>
    <span><a href="legal.html" style="color:inherit;border-bottom:1px solid rgba(250,246,237,0.25);">Privacy</a> · <a href="legal.html" style="color:inherit;border-bottom:1px solid rgba(250,246,237,0.25);">Terms</a> · <a href="legal.html" style="color:inherit;border-bottom:1px solid rgba(250,246,237,0.25);">Accessibility</a></span>
  </div>
</footer>`;

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Inject sprite
  document.body.insertAdjacentHTML('afterbegin', SPRITE);
  // Inject nav
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  // Inject footer
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Mark active nav link
  const cur = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main ul a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === cur || (cur === '' && href === 'index.html')) {
      a.classList.add('active-page');
    }
  });

  // Mega menu
  const items = document.querySelectorAll('nav.main .has-mega');
  const panels = document.querySelectorAll('.mega');
  const backdrop = document.createElement('div');
  backdrop.className = 'mega-backdrop';
  document.body.appendChild(backdrop);

  let closeTimer = null;
  function openMega(key) {
    clearTimeout(closeTimer);
    items.forEach(it => it.classList.toggle('open', it.dataset.mega === key));
    panels.forEach(p => p.classList.toggle('open', p.dataset.mega === key));
    backdrop.classList.add('on');
  }
  function scheduleClose() { closeTimer = setTimeout(closeMega, 140); }
  function closeMega() {
    items.forEach(it => it.classList.remove('open'));
    panels.forEach(p => p.classList.remove('open'));
    backdrop.classList.remove('on');
  }
  items.forEach(it => {
    it.addEventListener('mouseenter', () => openMega(it.dataset.mega));
    it.addEventListener('mouseleave', scheduleClose);
    it.querySelector('a').addEventListener('focus', () => openMega(it.dataset.mega));
  });
  panels.forEach(p => {
    p.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    p.addEventListener('mouseleave', scheduleClose);
  });
  backdrop.addEventListener('click', closeMega);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMega(); });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const isOpen = item.classList.contains('open');
      // close all
      document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        const a = i.nextElementSibling;
        if (a && a.classList.contains('faq-answer')) a.classList.remove('open');
      });
      if (!isOpen && answer && answer.classList.contains('faq-answer')) {
        item.classList.add('open');
        answer.classList.add('open');
      }
    });
  });

  // Filter pills
  document.querySelectorAll('.filter-bar').forEach(bar => {
    bar.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        bar.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('on'));
        pill.classList.add('on');
        const filter = pill.dataset.filter;
        if (!filter) return;
        const grid = bar.nextElementSibling;
        if (!grid) return;
        grid.querySelectorAll('[data-cat]').forEach(card => {
          card.style.display = (filter === 'all' || card.dataset.cat === filter) ? '' : 'none';
        });
      });
    });
  });
});
