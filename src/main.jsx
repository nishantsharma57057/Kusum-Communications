import { createRoot } from 'react-dom/client';
import App, { pageName } from './App.jsx';
import pages from './data/pages.json';
const metadata = pages[pageName];
for (const [name, value] of Object.entries(metadata.body)) document.body.setAttribute(name, value ?? '');
document.title = metadata.title;
createRoot(document.getElementById('root')).render(<App />);
