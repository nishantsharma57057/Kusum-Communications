import fs from 'node:fs/promises';
import path from 'node:path';
import { site, pageMeta } from '../src/siteConfig.js';
import faqs from '../src/data/verticalFaqs.json' with { type: 'json' };
const escape = text => String(text).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const isPreview = process.env.VERCEL_ENV === 'preview';
for (const [name, meta] of Object.entries(pageMeta)) {
  const url = site.url + meta.route;
  const orgId = site.url + '/#organization';
  const image = site.url + (meta.image || site.image);
  const graph = [
    { '@type':'Organization', '@id':orgId, name:site.name, url:site.url+'/', logo:site.url+site.logo, email:site.email, telephone:site.telephone, founder:{'@type':'Person',name:'Ritu Vaidya',url:site.url+'/about/'}, sameAs:['https://www.instagram.com/kusumcommunications/','https://youtube.com/@kusumcommunications280'] },
    { '@type':'WebSite', '@id':site.url+'/#website', url:site.url+'/', name:site.name, publisher:{'@id':orgId}, inLanguage:'en-IN' },
    { '@type':name==='About'?'AboutPage':name==='Contact'?'ContactPage':'WebPage', '@id':url+'#webpage', url, name:meta.title, description:meta.description, isPartOf:{'@id':site.url+'/#website'}, about:{'@id':orgId}, inLanguage:'en-IN', primaryImageOfPage:{'@type':'ImageObject',url:image} },
  ];
  if(name!=='Home') graph.push({'@type':'BreadcrumbList','@id':url+'#breadcrumb',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:site.url+'/'},{'@type':'ListItem',position:2,name:meta.label,item:url}]});
  if(name==='Story') graph.push({'@type':'Article','@id':url+'#article',headline:'From Corporate Boardrooms to 255 Million+ Views',description:meta.description,datePublished:'2026-09-06',author:{'@type':'Organization',name:site.name,url:site.url+'/'},publisher:{'@id':orgId},image:[image],mainEntityOfPage:{'@id':url+'#webpage'},inLanguage:'en-IN'});
  if(name==='VerticalDrama') {
    graph.push({'@type':'Service','@id':url+'#service',name:'Vertical drama and microdrama production',serviceType:'Vertical drama production',provider:{'@id':orgId},areaServed:{'@type':'Country',name:'India'},url,description:meta.description});
    graph.push({'@type':'FAQPage','@id':url+'#faq',mainEntity:faqs.map(({question,answer})=>({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}}))});
  }
  const json = JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c');
  const html = `<!doctype html>
<html lang="en-IN"><head>
<meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${escape(meta.title)}</title>
<meta name="description" content="${escape(meta.description)}" />
<meta name="robots" content="${isPreview?'noindex, follow':'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="${name==='Story'?'article':'website'}" /><meta property="og:site_name" content="${site.name}" /><meta property="og:locale" content="en_IN" />
<meta property="og:title" content="${escape(meta.title)}" /><meta property="og:description" content="${escape(meta.description)}" /><meta property="og:url" content="${url}" /><meta property="og:image" content="${image}" /><meta property="og:image:alt" content="${name==='Story'?'Ritu Vaidya, founder of Kusum Communications':'Kusum Communications production team'}" />
<meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="${escape(meta.title)}" /><meta name="twitter:description" content="${escape(meta.description)}" /><meta name="twitter:image" content="${image}" />
<meta name="theme-color" content="#102923" /><link rel="icon" href="${site.logo}" />
<link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" />
<script type="application/ld+json">${json}</script>
<style>html{scroll-behavior:smooth;scroll-padding-top:100px}body{margin:0}#root{min-height:100vh}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}</style>
</head><body><div id="root"></div><script type="module" src="/src/main.jsx"></script></body></html>`;
  const file = path.join(process.cwd(), meta.route, 'index.html');
  await fs.mkdir(path.dirname(file),{recursive:true});
  await fs.writeFile(file,html);
}
await fs.writeFile('public/robots.txt',`User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
await fs.writeFile('public/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.values(pageMeta).map(meta=>`  <url><loc>${site.url}${meta.route}</loc></url>`).join('\n')}\n</urlset>\n`);
await fs.writeFile('public/sitemap_index.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${site.url}/sitemap.xml</loc></sitemap></sitemapindex>\n`);
console.log(`Prepared metadata, structured data and sitemaps for ${Object.keys(pageMeta).length} pages.`);
