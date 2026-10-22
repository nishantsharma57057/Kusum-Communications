import { useEffect } from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Gallery from './pages/Gallery.jsx';
import Story from './pages/Story.jsx';
import Contact from './pages/Contact.jsx';
import pages from './data/pages.json';
import { initializeTheme, initializeHomeExperience } from './themeRuntime.js';

const components = { Home, About, Services, Gallery, Story, Contact };
const normalize = path => path.replace(/\/+$/, '') || '/';
export const pageName = Object.keys(pages).find(name => normalize(pages[name].route) === normalize(window.location.pathname)) || 'Home';
export default function App() {
  const Page = components[pageName];
  useEffect(() => {
    const ready = pageName === 'Home' ? initializeHomeExperience() : initializeTheme(pages[pageName].scripts);
    ready.catch(error => {
      console.error(error);
      document.querySelectorAll('.preloader').forEach(el => { el.style.display = 'none'; });
      document.querySelectorAll('.elementor-invisible').forEach(el => el.classList.remove('elementor-invisible'));
    });
  }, []);
  return <Page />;
}
