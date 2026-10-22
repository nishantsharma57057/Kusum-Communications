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
  // Absolute positions keep the same cards mounted as they move through the view.
  const [position, setPosition] = useState(0);
  const touchStart = useRef(null);
  const moving = useRef(false);
  const unlock = useRef(null);
  const count = showcase.posters.length;
  const active = ((position % count) + count) % count;
  useEffect(() => () => clearTimeout(unlock.current), []);
  const move = delta => {
    if (moving.current) return;
    moving.current = true;
    setPosition(value => value + Math.sign(delta));
    unlock.current = setTimeout(() => { moving.current = false; }, 560);
  };
  const slots = Array.from({ length: 7 }, (_, index) => position + index - 3);
  return <div className="kc-coverflow" role="region" aria-label="Original productions" aria-roledescription="carousel">
    <div className="kc-coverflow-stage" tabIndex={0} aria-label="Use left and right arrow keys or swipe to browse productions" onKeyDown={event => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); } }} onTouchStart={event => { touchStart.current = { x:event.touches[0].clientX, y:event.touches[0].clientY }; }} onTouchCancel={() => { touchStart.current = null; }} onTouchEnd={event => { if (!touchStart.current) return; const dx = touchStart.current.x - event.changedTouches[0].clientX; const dy = touchStart.current.y - event.changedTouches[0].clientY; if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) move(dx > 0 ? 1 : -1); touchStart.current = null; }}>
      {slots.map(slot => {
        const index = ((slot % count) + count) % count;
        const distance = slot - position;
        const outside = Math.abs(distance) > 2;
        return <button key={slot} className={'kc-coverflow-card' + (distance === 0 ? ' is-active' : '')} style={{ '--offset':distance, '--depth':Math.abs(distance), zIndex:count-Math.abs(distance), opacity:outside ? 0 : 1, pointerEvents:outside ? 'none' : 'auto' }} tabIndex={-1} aria-hidden={outside} aria-label={`Show ${names[index]}`} onClick={() => { if (distance) move(distance); }}><img src={showcase.posters[index]} alt={`${names[index]} poster`} width="300" height="450" decoding="async" draggable={false} /></button>;
      })}
    </div>
    <div className="kc-coverflow-bottom kc-shell"><div className="kc-coverflow-caption" aria-live="polite"><span>ORIGINAL PRODUCTION / {String(active+1).padStart(2,'0')}</span><h3>{names[active]}</h3></div><div className="kc-controls"><button onClick={() => move(-1)} aria-label="Previous production">←</button><span>{active+1} / {count}</span><button onClick={() => move(1)} aria-label="Next production">→</button></div></div>
  </div>;
}
