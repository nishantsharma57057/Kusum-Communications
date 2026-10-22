import { useEffect, useRef, useState } from 'react';
import showcase from '../data/showcase.json';

const slides = [
  ['2025/11/DSC07306-scaled.jpeg', 'The Kusum team on set'],
  ['2026/03/NGG02755-compressed-scaled.webp', 'Cast and crew together on location'],
  ['2025/11/11.jpeg', 'The people behind our productions'],
  ['2026/03/DSC00664-compressed-scaled.webp', 'Our production team on location'],
  ['2025/11/55.jpeg', 'A moment with the cast and crew'],
  ['2025/11/111-scaled.jpeg', 'Behind the scenes with Kusum Communications'],
  ['2026/03/NGG01307-compressed-scaled.webp', 'Cast and crew on a fiction production'],
  ['2026/03/NGG01012-compressed-scaled.webp', 'Creating stories together'],
];
export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(query.matches);
    sync(); query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);
  useEffect(() => {
    if (paused || reduced) return;
    const timer = setInterval(() => { if (!document.hidden) setActive(value => (value + 1) % slides.length); }, 6000);
    return () => clearInterval(timer);
  }, [paused, reduced]);
  const move = delta => { setPaused(true); setActive(value => (value + delta + slides.length) % slides.length); };
  return <section className="kc-hero kc-photo-hero" aria-label="Kusum production highlights" aria-roledescription="carousel">
    <div className="kc-hero-slides" aria-hidden="true">{slides.map(([src], index) => <img key={src} className={index === active ? 'is-active' : ''} src={'/wp-content/uploads/' + src} alt="" width="1920" height="1080" loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} />)}</div>
    <div className="kc-shell kc-photo-hero-content"><p className="kc-eyebrow"><span className="kc-live-dot" />Independent minds. Unforgettable stories.</p><h1>We create stories<br />that <em>stay with you.</em></h1><p className="kc-hero-intro">A creative production studio turning your ideas into films, microdramas and branded content. From the first thought to the final frame.</p><div className="kc-actions"><a className="kc-button" href="#projects">Explore our work <span aria-hidden="true">↘</span></a><a className="kc-text-link" href="#brief">Tell us your idea ↗</a></div></div>
    <div className="kc-shell kc-photo-controls"><div><p className="kc-eyebrow">ON SET / {String(active + 1).padStart(2, '0')}</p><p aria-live={paused || reduced ? 'polite' : 'off'}>{slides[active][1]}</p></div><div className="kc-controls"><button aria-label="Previous hero image" onClick={() => move(-1)}>←</button><span>{active + 1} / {slides.length}</span><button aria-label="Next hero image" onClick={() => move(1)}>→</button>{!reduced && <button className="kc-slider-pause" onClick={() => setPaused(!paused)} aria-label={paused ? 'Resume hero slideshow' : 'Pause hero slideshow'}>{paused ? 'Play' : 'Pause'}</button>}</div></div>
  </section>;
}
export function PosterCarousel({ names }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);
  const count = showcase.posters.length;
  const move = delta => setActive(value => (value + delta + count) % count);
  const offset = index => {
    let difference = (index - active + count) % count;
    if (difference > count / 2) difference -= count;
    return difference;
  };
  return <div className="kc-coverflow" role="region" aria-label="Original productions" aria-roledescription="carousel">
    <div className="kc-coverflow-stage" tabIndex={0} aria-label="Use left and right arrow keys or swipe to browse productions" onKeyDown={event => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); } }} onTouchStart={event => {touchStart.current = event.touches[0].clientX;}} onTouchEnd={event => { if (touchStart.current === null) return; const distance = touchStart.current - event.changedTouches[0].clientX; if (Math.abs(distance) > 45) move(distance > 0 ? 1 : -1); touchStart.current = null; }}>
      {showcase.posters.map((src, index) => { const distance = offset(index); return <button key={src} className={'kc-coverflow-card' + (distance === 0 ? ' is-active' : '')} style={{'--offset':distance, '--depth':Math.abs(distance), zIndex:count - Math.abs(distance)}} hidden={Math.abs(distance) > 2} tabIndex={-1} aria-label={`Show ${names[index]}`} onClick={() => setActive(index)}><img src={src} alt={`${names[index]} poster`} width="300" height="450" loading="lazy" /></button>; })}
    </div>
    <div className="kc-coverflow-bottom kc-shell"><div className="kc-coverflow-caption" aria-live="polite"><span>ORIGINAL PRODUCTION / {String(active + 1).padStart(2,'0')}</span><h3>{names[active]}</h3></div><div className="kc-controls"><button onClick={() => move(-1)} aria-label="Previous production">←</button><span>{active + 1} / {count}</span><button onClick={() => move(1)} aria-label="Next production">→</button></div></div>
  </div>;
}
