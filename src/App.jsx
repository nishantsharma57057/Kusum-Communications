import { useEffect } from 'react';
import { components } from './routes.jsx';
import { pageMeta } from './siteConfig.js';
import { initializeStudioExperience } from './themeRuntime.js';
const normalize = path => path.replace(/\/+$/, '') || '/';
export const pageName = Object.keys(pageMeta).find(name => normalize(pageMeta[name].route) === normalize(window.location.pathname)) || 'Home';
export default function App() {
  const Page = components[pageName];
  useEffect(() => { void initializeStudioExperience().catch(error => console.warn('Video controls unavailable:', error)); }, []);
  return <Page />;
}
