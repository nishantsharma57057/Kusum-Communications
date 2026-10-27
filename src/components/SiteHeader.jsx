import { useEffect, useRef, useState } from 'react';
import '../studio.css';

const links = [['Home', '/'], ['About', '/about/'], ['Services', '/services/'], ['Our gallery', '/our-gallery/'], ['Journal', '/2026/09/06/kusum-communications-story/']];
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const header = useRef(null);
  const path = typeof window === 'undefined' ? '/' : window.location.pathname;
  useEffect(() => {
    const close = event => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    const outside = event => { if (!header.current?.contains(event.target)) setOpen(false); };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', outside); };
  }, []);
  return <header className="kc-header" ref={header}>
    <a className="kc-skip" href="#main-content">Skip to content</a>
    <a className="kc-logo" href="/" aria-label="Kusum Communications home">
      <img src="/wp-content/uploads/2025/07/cropped-Untitled_design__11_-removebg-preview.webp" width="58" height="56" alt="" />
      <span>Kusum Communications</span>
    </a>
    <button className="kc-menu-toggle" ref={toggle} aria-expanded={open} aria-controls="kc-navigation" onClick={() => setOpen(!open)}>{open ? 'Close ×' : 'Menu ☰'}</button>
    <nav id="kc-navigation" className={open ? 'kc-nav is-open' : 'kc-nav'} aria-label="Main navigation">
      {links.map(([label, href]) => <a key={href} href={href} aria-current={path === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      <a href="/contact/" className="kc-button kc-button-small" onClick={() => setOpen(false)}>Start a project <span aria-hidden="true">↗</span></a>
    </nav>
  </header>;
}
