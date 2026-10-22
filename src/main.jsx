import { createRoot } from 'react-dom/client';
import App, { pageName } from './App.jsx';
import pages from './data/pages.json';
const metadata = pages[pageName];
for (const [name, value] of Object.entries(metadata.body)) document.body.setAttribute(name, value ?? '');
document.title = pageName === 'Home' ? 'Kusum Communications | Stories That Stay With You' : metadata.title;
createRoot(document.getElementById('root')).render(<App />);
