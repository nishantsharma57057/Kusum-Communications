import { renderToStaticMarkup } from 'react-dom/server';
import Home from '../src/pages/Home.jsx';
import About from '../src/pages/About.jsx';
import Services from '../src/pages/Services.jsx';
import Gallery from '../src/pages/Gallery.jsx';
import Story from '../src/pages/Story.jsx';
import Contact from '../src/pages/Contact.jsx';
import VerticalDrama from '../src/pages/VerticalDrama.jsx';
const pages = { Home, About, Services, Gallery, Story, Contact, VerticalDrama };
for (const [name, Page] of Object.entries(pages)) {
  globalThis.window = { location: { pathname: '/' } };
  const html = renderToStaticMarkup(<Page />);
  if (!html.includes('<header') || !html.includes('<footer')) throw new Error(`${name}: missing shared layout`);
  if (name === 'Gallery' && (html.match(/Enlarge photo:/g) || []).length !== 166) throw new Error('Gallery photos missing');
  if (name === 'Contact' && !html.includes('contact-email')) throw new Error('Contact form missing');
  console.log(`${name}: React rendered successfully`);
}
