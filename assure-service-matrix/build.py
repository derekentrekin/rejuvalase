#!/usr/bin/env python3
"""Build the Assure Plumbing service-by-area matrix embed from data.json.

Outputs:
  embed.html   - paste into a Webflow Embed element (or any HTML block)
  preview.html - standalone page for previewing the embed locally

The table is rendered by the inline script from a compact data blob so the
snippet stays under Webflow's 50,000-character Embed limit.
"""
import html
import json
from pathlib import Path

HERE = Path(__file__).parent
data = json.loads((HERE / "data.json").read_text())
SITE = data["site"].rstrip("/")
PHONE = data["phone"]
TEL = "tel:+1" + "".join(c for c in PHONE if c.isdigit())
services = data["services"]
areas = data["areas"]


def status(area, service):
    override = data["overrides"].get(area["name"], {})
    if service["id"] in override:
        return override[service["id"]]
    return data["defaults"][area["tier"]].get(service["id"], "yes")


def esc(s):
    return html.escape(s, quote=True)


PHONE_ICON = ('<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5.2 2.5l1.6 3-1.3 1.2a8.5 8.5 0 0 0 3.8 3.8'
              'l1.2-1.3 3 1.6-.6 2.4c-.1.5-.6.8-1.1.8A10.8 10.8 0 0 1 2 4.2c0-.5.3-1 .8-1.1z" /></svg>')


def compact():
    """Data blob the inline script renders the table from."""
    code = {"yes": "y", "call": "c", "no": "n"}
    return json.dumps({
        "site": SITE, "tel": TEL,
        "s": [[s["id"], s["name"], s["short"], s["url"]] for s in services],
        "a": [[a["name"], a["type"][0], a["url"], 1 if a["tier"] == "core" else 0,
               "".join(code[status(a, s)] for s in services)] for a in areas],
    }, separators=(",", ":")).replace("</", "<\\/")


options = "".join(f'<option value="{s["id"]}">{esc(s["name"])}</option>' for s in services)

CSS = """
#apx-matrix{--apx-ink:#0f1f3d;--apx-muted:#5b6780;--apx-line:#e3e8f0;--apx-bg:#ffffff;--apx-soft:#f5f7fb;
--apx-accent:#1557c0;--apx-accent-soft:#e7effc;--apx-call:#9a4d00;--apx-call-soft:#fff3e2;--apx-radius:14px;
font-family:Outfit,system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--apx-ink);background:var(--apx-bg);
max-width:1200px;margin:0 auto;box-sizing:border-box;line-height:1.4}
#apx-matrix *,#apx-matrix *::before,#apx-matrix *::after{box-sizing:border-box}
#apx-matrix a{color:inherit;text-decoration:none}
#apx-matrix .apx-head{margin-bottom:20px}
#apx-matrix .apx-eyebrow{font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--apx-accent);margin:0 0 6px}
#apx-matrix h2{font-size:clamp(26px,4vw,38px);font-weight:600;line-height:1.15;margin:0 0 8px;color:var(--apx-ink)}
#apx-matrix .apx-sub{font-size:16px;color:var(--apx-muted);margin:0;max-width:60ch}
#apx-matrix .apx-controls{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:0 0 14px}
#apx-matrix input,#apx-matrix select{font:inherit;font-size:15px;color:var(--apx-ink);background:var(--apx-bg);border:1px solid var(--apx-line);
border-radius:10px;padding:10px 12px;min-height:44px}
#apx-matrix input{flex:1 1 220px;min-width:0}
#apx-matrix select{flex:0 1 220px}
#apx-matrix input:focus,#apx-matrix select:focus,#apx-matrix button:focus-visible,#apx-matrix a:focus-visible{outline:2px solid var(--apx-accent);outline-offset:2px}
#apx-matrix .apx-seg{display:inline-flex;border:1px solid var(--apx-line);border-radius:10px;padding:3px;background:var(--apx-soft)}
#apx-matrix .apx-seg button{font:inherit;font-size:14px;font-weight:500;border:0;background:transparent;color:var(--apx-muted);
padding:8px 14px;border-radius:7px;cursor:pointer;min-height:36px}
#apx-matrix .apx-seg button[aria-pressed="true"]{background:var(--apx-bg);color:var(--apx-ink);box-shadow:0 1px 2px rgba(15,31,61,.12)}
#apx-matrix .apx-legend{display:flex;flex-wrap:wrap;gap:16px;font-size:13px;color:var(--apx-muted);margin:0 0 12px;padding:0;list-style:none}
#apx-matrix .apx-legend li{display:flex;align-items:center;gap:6px}
#apx-matrix .apx-key{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:6px;font-size:11px;font-weight:600}
#apx-matrix .apx-wrap{border:1px solid var(--apx-line);border-radius:var(--apx-radius);overflow:auto;max-height:640px;background:var(--apx-bg);
-webkit-overflow-scrolling:touch}
#apx-matrix table{border-collapse:separate;border-spacing:0;width:100%;min-width:900px;font-size:14px}
#apx-matrix thead th{position:sticky;top:0;z-index:2;background:var(--apx-soft);font-weight:600;font-size:12.5px;
padding:12px 4px;text-align:center;border-bottom:1px solid var(--apx-line);vertical-align:bottom;line-height:1.2}
#apx-matrix thead th a:hover{color:var(--apx-accent)}
#apx-matrix thead th:first-child{left:0;z-index:3;text-align:left;padding-left:16px}
#apx-matrix tbody th[scope="row"]{position:sticky;left:0;z-index:1;background:var(--apx-bg);text-align:left;font-weight:500;
padding:10px 12px 10px 16px;white-space:nowrap;border-right:1px solid var(--apx-line);min-width:190px}
#apx-matrix tbody th[scope="row"] a:hover{color:var(--apx-accent);text-decoration:underline}
#apx-matrix td{text-align:center;padding:6px 4px;border-bottom:1px solid var(--apx-line)}
#apx-matrix tbody th[scope="row"]{border-bottom:1px solid var(--apx-line)}
#apx-matrix .apx-group th{background:var(--apx-soft);text-align:left;font-size:12px;font-weight:600;letter-spacing:.08em;
text-transform:uppercase;color:var(--apx-muted);padding:8px 16px;border-bottom:1px solid var(--apx-line);position:sticky;left:0}
#apx-matrix .apx-row:hover th[scope="row"],#apx-matrix .apx-row:hover td{background:#fafbfd}
#apx-matrix .apx-yes a,#apx-matrix .apx-call a{display:inline-grid;place-items:center;width:32px;height:32px;border-radius:8px}
#apx-matrix .apx-yes a,#apx-matrix .apx-key.y{background:var(--apx-accent-soft);color:var(--apx-accent)}
#apx-matrix .apx-yes a:hover{background:var(--apx-accent);color:#fff}
#apx-matrix .apx-yes svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
#apx-matrix .apx-call a{width:auto;padding:0 8px;font-size:12px;font-weight:600}
#apx-matrix .apx-call a,#apx-matrix .apx-key.c{background:var(--apx-call-soft);color:var(--apx-call)}
#apx-matrix .apx-call a:hover{background:var(--apx-call);color:#fff}
#apx-matrix .apx-no span,#apx-matrix .apx-key.n{color:#a3adbf}
#apx-matrix .apx-key.n{background:var(--apx-soft)}
#apx-matrix .apx-badge{display:inline-block;margin-left:8px;font-size:11px;font-weight:600;color:var(--apx-accent);
background:var(--apx-accent-soft);padding:2px 7px;border-radius:999px;vertical-align:1px}
#apx-matrix [data-hl]{background:rgba(21,87,192,.05)}
#apx-matrix thead th[data-hl]{background:var(--apx-accent-soft);color:var(--apx-accent)}
#apx-matrix .apx-empty{display:none;padding:28px 16px;text-align:center;color:var(--apx-muted)}
#apx-matrix .apx-hint{font-size:12.5px;color:var(--apx-muted);margin:8px 2px 0}
#apx-matrix .apx-cta{display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;margin-top:18px;
padding:18px 20px;border-radius:var(--apx-radius);background:var(--apx-ink);color:#fff}
#apx-matrix .apx-cta p{margin:0;font-size:16px}
#apx-matrix .apx-cta small{display:block;color:#c3cde0;font-size:13px;margin-top:2px}
#apx-matrix .apx-btn{display:inline-flex;align-items:center;gap:8px;background:#fff;color:var(--apx-ink);font-weight:600;
padding:12px 18px;border-radius:10px;min-height:44px}
#apx-matrix .apx-btn:hover{background:var(--apx-accent-soft)}
#apx-matrix .apx-btn svg{width:16px;height:16px;fill:currentColor}
@media (max-width:640px){#apx-matrix select{flex:1 1 100%}#apx-matrix tbody th[scope="row"]{min-width:150px;white-space:normal}
#apx-matrix .apx-badge{display:table;margin:3px 0 0}}
"""

JS = r"""
(function(){var r=document.getElementById('apx-matrix');if(!r)return;
var D=JSON.parse(r.querySelector('.apx-data').textContent),S=D.s,ids=S.map(function(s){return s[0]});
function e(x){return String(x).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var ck='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7"/></svg>',h='<tr><th scope="col">Area</th>',b='';
S.forEach(function(s){h+='<th scope="col" data-s="'+s[0]+'"><a href="'+D.site+s[3]+'" title="'+e(s[1])+'">'+e(s[2])+'</a></th>'});
[['c','Cities &amp; towns','city'],['o','Counties','county']].forEach(function(g){
b+='<tr class="apx-group" data-type="'+g[2]+'"><th scope="rowgroup" colspan="'+(S.length+1)+'">'+g[1]+'</th></tr>';
D.a.forEach(function(a){if(a[1]!==g[0])return;
b+='<tr class="apx-row" data-type="'+g[2]+'" data-name="'+e(a[0].toLowerCase())+'" data-st="'+a[4]+'"><th scope="row"><a href="'+D.site+a[2]+'">'+e(a[0])+'</a>'+(a[3]?'<span class="apx-badge">Home base</span>':'')+'</th>';
S.forEach(function(s,i){var st=a[4][i],l=e(s[1]+' in '+a[0]),d=' data-s="'+s[0]+'"';
b+=st==='y'?'<td class="apx-yes"'+d+'><a href="'+D.site+s[3]+'" aria-label="'+l+': available">'+ck+'</a></td>':
st==='c'?'<td class="apx-call"'+d+'><a href="'+D.tel+'" aria-label="'+l+': call to confirm">Call</a></td>':
'<td class="apx-no"'+d+'><span role="img" aria-label="'+l+': not offered">&ndash;</span></td>'});b+='</tr>'})});
r.querySelector('thead').innerHTML=h+'</tr>';r.querySelector('tbody').innerHTML=b;
var q=r.querySelector('.apx-q'),sel=r.querySelector('.apx-svc'),seg=r.querySelectorAll('.apx-seg button'),
rows=r.querySelectorAll('.apx-row'),groups=r.querySelectorAll('.apx-group'),empty=r.querySelector('.apx-empty'),type='all';
function run(){var t=q.value.trim().toLowerCase(),s=sel.value,si=ids.indexOf(s),n=0,seen={};
rows.forEach(function(tr){var ok=(type==='all'||tr.dataset.type===type)&&(!t||tr.dataset.name.indexOf(t)>-1)&&
(si<0||tr.dataset.st.charAt(si)!=='n');tr.hidden=!ok;if(ok){n++;seen[tr.dataset.type]=1}});
groups.forEach(function(g){g.hidden=!seen[g.dataset.type]});
r.querySelectorAll('[data-hl]').forEach(function(x){x.removeAttribute('data-hl')});
if(s)r.querySelectorAll('[data-s="'+s+'"]').forEach(function(x){x.setAttribute('data-hl','')});
empty.style.display=n?'none':'block'}
q.addEventListener('input',run);sel.addEventListener('change',run);
seg.forEach(function(x){x.addEventListener('click',function(){type=x.dataset.type;
seg.forEach(function(y){y.setAttribute('aria-pressed',String(y===x))});run()})});})();
"""

SNIPPET = f"""<!-- Assure Plumbing & Septic: service-by-area matrix (generated by build.py; edit data.json, not this file) -->
<style>{CSS.strip()}</style>
<section id="apx-matrix" aria-labelledby="apx-title">
  <div class="apx-head">
    <p class="apx-eyebrow">Service areas</p>
    <h2 id="apx-title">What we offer, where you live</h2>
    <p class="apx-sub">Find your town or county to see which plumbing and septic services we provide there. Click a check mark to learn more about that service.</p>
  </div>
  <div class="apx-controls">
    <input class="apx-q" type="search" placeholder="Search your town or county" aria-label="Search your town or county">
    <div class="apx-seg" role="group" aria-label="Area type">
      <button type="button" data-type="all" aria-pressed="true">All</button>
      <button type="button" data-type="city" aria-pressed="false">Cities</button>
      <button type="button" data-type="county" aria-pressed="false">Counties</button>
    </div>
    <select class="apx-svc" aria-label="Filter by service"><option value="">All services</option>{options}</select>
  </div>
  <ul class="apx-legend">
    <li><span class="apx-key y">&#10003;</span>Available</li>
    <li><span class="apx-key c">Call</span>Call to confirm</li>
    <li><span class="apx-key n">&ndash;</span>Not offered in this area</li>
  </ul>
  <div class="apx-wrap">
    <table>
      <caption style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">Assure Plumbing &amp; Septic services by service area</caption>
      <thead></thead>
      <tbody></tbody>
    </table>
    <p class="apx-empty">No matching areas. Call <a href="{TEL}"><strong>{PHONE}</strong></a> and we&rsquo;ll tell you if we can help.</p>
  </div>
  <p class="apx-hint">Septic pump-outs are offered in Fredericksburg, Spotsylvania County and Stafford only.</p>
  <div class="apx-cta">
    <p>Don&rsquo;t see your area?<small>We serve the I-95 corridor from Stafford to Richmond. Call and ask.</small></p>
    <a class="apx-btn" href="{TEL}">{PHONE_ICON}{PHONE}</a>
  </div>
<script type="application/json" class="apx-data">{compact()}</script>
</section>
<script>{JS.strip()}</script>
"""

PREVIEW = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Service Area Matrix</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>body{{margin:0;background:#fff;padding:48px 16px}}</style>
</head><body>
{SNIPPET}
</body></html>
"""

(HERE / "embed.html").write_text(SNIPPET)
(HERE / "preview.html").write_text(PREVIEW)
print(f"embed.html: {len(SNIPPET):,} chars, {len(areas)} areas x {len(services)} services")
