import { createRoot, hydrateRoot } from 'react-dom/client';
import App, { pageName } from './App.jsx';
import { pageMeta } from './siteConfig.js';
document.title = pageMeta[pageName].title;
const root = document.getElementById('root');
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
