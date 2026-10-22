import fs from 'node:fs/promises';
import path from 'node:path';
import { renderToString } from 'react-dom/server';
import { components } from '../src/routes.jsx';
import { pageMeta } from '../src/siteConfig.js';
for (const [name, meta] of Object.entries(pageMeta)) {
  globalThis.window = { location:{pathname:meta.route,search:''} };
  const Page = components[name];
  const markup = renderToString(<Page />);
  const file = path.join(process.cwd(),'dist',meta.route,'index.html');
  const template = await fs.readFile(file,'utf8');
  if(!template.includes('<div id="root"></div>')) throw new Error(`Missing root placeholder for ${name}`);
  await fs.writeFile(file,template.replace('<div id="root"></div>',`<div id="root">${markup}</div>`));
  console.log(`Pre-rendered ${meta.route}`);
}
delete globalThis.window;
