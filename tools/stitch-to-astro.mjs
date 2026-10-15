// Stitch -> Astro converter (build tool, one-off). Output: src/pages/**, src/components/{Footer,DealerFooter}.astro
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const ROOT = 'd:/IVS/Website/LTB';
const STITCH = ROOT + '/stitch';
const PAGES = [
  { src: 'trang_ch_long_thanh_beer_company_limited', out: 'index', layout: 'public', active: 'trang-chu' },
  { src: 'gi_i_thi_u_long_thanh_beer_company_limited', out: 'gioi-thieu', layout: 'public', active: 'gioi-thieu' },
  { src: 's_n_ph_m_b_o_gi_b2b_long_thanh_beer_company_limited', out: 'san-pham', layout: 'public', active: 'san-pham' },
  { src: 'i_t_c_ph_n_ph_i_long_thanh_beer_company_limited', out: 'doi-tac-phan-phoi', layout: 'public', active: 'doi-tac-phan-phoi' },
  { src: 'tin_t_c_th_tr_ng_long_thanh_beer_company_limited', out: 'tin-tuc', layout: 'public', active: 'tin-tuc' },
  { src: 'li_n_h_x_c_th_c_ph_p_nh_n_long_thanh_beer_company_limited', out: 'lien-he', layout: 'public', active: 'lien-he' },
  { src: 'ng_nh_p_x_c_th_c_h_s_c_ng_i_l_ltb', out: 'dai-ly/dang-nhap', layout: 'bare' },
  { src: 't_o_y_u_c_u_t_h_ng_b2b_c_ng_i_l_ltb', out: 'dai-ly/tao-yeu-cau', layout: 'dealer', active: 'danh-muc-dat-hang' },
  { src: 'qu_n_l_n_t_h_ng_l_ch_s_tr_ng_th_i_c_ng_i_l_ltb', out: 'dai-ly/index', layout: 'dealer', active: 'don-dat-hang-cua-toi' },
  { src: 'h_ng_i_duy_t_h_s_i_l_x_l_n_h_ng_cms_admin_ltb', out: 'admin/index', layout: 'admin', active: 'dashboard' },
];

const ROUTES = {
  'trang-chu': '/', 'gioi-thieu': '/gioi-thieu', 'san-pham': '/san-pham', 'doi-tac-phan-phoi': '/doi-tac-phan-phoi',
  'tin-tuc': '/tin-tuc', 'lien-he': '/lien-he',
  'dashboard': '/dai-ly', 'danh-muc-dat-hang': '/dai-ly/tao-yeu-cau', 'don-dat-hang-cua-toi': '/dai-ly',
  'dang-nhap': '/dai-ly/dang-nhap', 'ho-so-dai-ly': '/dai-ly',
};

const imgDir = ROOT + '/public/images/stitch';
fs.mkdirSync(imgDir, { recursive: true });
const imgCache = {};
async function localizeImages(html) {
  const urls = [...new Set(html.match(/https:\/\/lh3\.googleusercontent\.com\/[^"')\s]+/g) || [])];
  for (const u of urls) {
    if (!imgCache[u]) {
      const id = crypto.createHash('sha1').update(u).digest('hex').slice(0, 10);
      try {
        const r = await fetch(u);
        if (!r.ok) throw new Error(r.status);
        const ct = r.headers.get('content-type') || '';
        const ext = ct.includes('png') ? 'png' : ct.includes('webp') ? 'webp' : 'jpg';
        fs.writeFileSync(`${imgDir}/${id}.${ext}`, Buffer.from(await r.arrayBuffer()));
        imgCache[u] = `/images/stitch/${id}.${ext}`;
      } catch (e) { console.warn('IMG FAIL', u.slice(0, 80), String(e)); imgCache[u] = u; }
    }
    html = html.split(u).join(imgCache[u]);
  }
  return html;
}

function fixClasses(c) {
  let t = c.split(/\s+/).filter(Boolean);
  // gradients -> flat tint
  if (t.some((x) => x.startsWith('bg-gradient-to-'))) {
    const from = t.find((x) => x.startsWith('from-'));
    const via = t.find((x) => x.startsWith('via-'));
    const pick = (via || from || '').replace(/^(from|via)-/, '');
    t = t.filter((x) => !/^(bg-gradient-to-|from-|via-|to-)/.test(x));
    if (pick && pick !== 'transparent') t.push('bg-' + pick);
  }
  const hadShadow = t.some((x) => /^shadow-(sm|md|lg|xl|\[.*\])$/.test(x));
  const hadHoverShadow = t.some((x) => /^hover:shadow-/.test(x));
  const hasBorder = t.some((x) => /^border(-|$)/.test(x));
  t = t.filter((x) => !/^((group-)?hover:)?(backdrop-blur(-.*)?|blur(-.*)?|scale-105|shadow-(sm|md|lg|xl|\[.*\])|drop-shadow.*)$/.test(x));
  if (hadShadow && !hasBorder) t.push('border', 'border-outline-variant/40');
  if (hadHoverShadow) t.push('hover:border-primary-container');
  return t.join(' ');
}

function sanitize(html) {
  html = html.replace(/<div class="[^"]*(?:radial-gradient|blur-3xl|blur-2xl)[^"]*"><\/div>\s*/g, '');
  html = html.replace(/class="([^"]*)"/g, (m, c) => 'class="' + fixClasses(c) + '"');
  // route links
  html = html.replace(/<a([^>]*?)data-path="([^"]+)"([^>]*?)href="#"/g, (m, a, p, b) => `<a${a}data-path="${p}"${b}href="${ROUTES[p] || '#'}"`);
  html = html.replace(/<a([^>]*?)href="#"([^>]*?)data-path="([^"]+)"/g, (m, a, b, p) => `<a${a}href="${ROUTES[p] || '#'}"${b}data-path="${p}"`);
  // official logo
  html = html.replace(/<img[^>]*src="https:\/\/lh3\.googleusercontent\.com\/aida\/[^"]+"[^>]*>/g, '<img src="/brand/ltb-monogram.svg" alt="Logo Long Thanh Beer (LTB)" class="h-full w-full object-contain">');
  // Astro: escape braces in text
  html = html.replace(/[{}]/g, (c) => (c === '{' ? '&#123;' : '&#125;'));
  return html;
}

function writeFile(rel, content) {
  const f = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content, 'utf8');
}

const report = [];
for (const p of PAGES) {
  const raw = fs.readFileSync(`${STITCH}/${p.src}/code.html`, 'utf8');
  const title = (raw.match(/<title>(.*?)<\/title>/) || [])[1];
  const bodyOpen = raw.match(/<body([^>]*)>/);
  const bodyClass = ((bodyOpen[1].match(/class="([^"]*)"/) || [])[1]) || '';
  let body = raw.slice(raw.indexOf('<body') + bodyOpen[0].length).replace(/<\/body>\s*<\/html>\s*$/, '');
  const scripts = [];
  body = body.replace(/<script>([\s\S]*?)<\/script>/g, (m, s) => { scripts.push(s); return ''; });
  let header = (body.match(/<header[\s\S]*?<\/header>/) || [''])[0];
  let footer = (body.match(/<footer[\s\S]*<\/footer>/) || [''])[0];
  if (header) body = body.replace(header, '');
  if (footer) body = body.replace(footer, '');
  if (p.out === 'index') writeFile('src/components/Footer.astro', '---\n---\n' + sanitize(await localizeImages(footer)).replace(/\n/g, '\n') + '\n');
  if (p.out === 'dai-ly/index') {
    writeFile('src/components/DealerFooter.astro', '---\n---\n' + sanitize(footer) + '\n');
    writeFile('src/components/_dealer_header_raw.html', sanitize(header));
  }
  body = sanitize(await localizeImages(body)).trim();
  const depth = p.out.split('/').length - 1;
  const rel = '../'.repeat(depth + 1);
  const layoutImport = { public: 'PublicLayout', dealer: 'DealerLayout', admin: 'DealerLayout', bare: 'BaseLayout' }[p.layout];
  const props = [`title=${JSON.stringify(title)}`, `bodyClass=${JSON.stringify(bodyClass)}`];
  if (p.active) props.push(`active=${JSON.stringify(p.active)}`);
  if (p.layout === 'admin') props.push('area="admin"');
  const scriptBlock = scripts.length ? `\n${scripts.map((s) => `<script is:inline>${s}</script>`).join('\n')}\n` : '';
  const content = `---\nimport ${layoutImport} from '${rel}layouts/${layoutImport}.astro';\n---\n<${layoutImport} ${props.join(' ')}>\n${body}${scriptBlock}</${layoutImport}>\n`;
  writeFile(`src/pages/${p.out}.astro`, content);
  report.push(`${p.src} -> src/pages/${p.out}.astro (${p.layout})`);
}
console.log(report.join('\n'));
