import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { site, pageMeta } from '../src/siteConfig.js';
const titles = new Set();
for(const [name,meta] of Object.entries(pageMeta)) {
 const html=await fs.readFile(path.join('dist',meta.route,'index.html'),'utf8');
 assert(html.includes(`rel="canonical" href="${site.url}${meta.route}"`),`${name}: canonical missing`);
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${name}: exactly one visible h1`);
 assert(!html.includes('<div id="root"></div>'),`${name}: missing rendered content`);
 assert(html.includes('name="description"'),`${name}: missing description`);
 assert(!titles.has(meta.title),'duplicate title');titles.add(meta.title);
 const schema=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
 assert(schema['@graph'].some(n=>n['@type']==='Organization'));
 if(name==='Gallery')assert.equal((html.match(/Enlarge photo:/g)||[]).length,166);
 if(name==='Home'||name==='About'){
   assert.equal((html.match(/class="elementor-video-iframe"/g)||[]).length,6);
   assert(!html.includes('autoplay=1'));
 }
 if(name==='VerticalDrama')for(const q of schema['@graph'].find(n=>n['@type']==='FAQPage').mainEntity){assert(html.includes(q.name));assert(html.includes(q.acceptedAnswer.text));}
 for(const [,href] of html.matchAll(/href="(\/[^"#?]*)(?:[^" ]*)"/g)) {
   if(href.startsWith('//'))continue;
   const local = path.join('dist',href);
   if(path.extname(href)) await fs.access(local);
   else await fs.access(path.join(local,'index.html'));
 }
 console.log(`${name}: rendered HTML, canonical, metadata, schema and internal links OK`);
}
const sitemap=await fs.readFile('dist/sitemap.xml','utf8');
assert.equal((sitemap.match(/<loc>/g)||[]).length,Object.keys(pageMeta).length);
assert(sitemap.includes(site.url+'/vertical-drama-production-house-india/'));
assert((await fs.readFile('dist/robots.txt','utf8')).includes('User-agent: OAI-SearchBot\nAllow: /'));
console.log('Sitemap and search crawler access checks passed.');
