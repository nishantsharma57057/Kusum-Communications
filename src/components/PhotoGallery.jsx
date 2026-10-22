import { useLayoutEffect, useRef, useState } from 'react';

export default function PhotoGallery({ items }) {
  const grid = useRef(null);
  const dialog = useRef(null);
  const opener = useRef(null);
  const [active, setActive] = useState(null);
  useLayoutEffect(() => {
    if (active === null) return;
    dialog.current.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [active === null]);
  const move = offset => setActive(index => (index + offset + items.length) % items.length);
  const close = () => { dialog.current.close(); setActive(null); opener.current?.focus(); };
  return <>
    <div className="elementor-gallery__container react-photo-grid" ref={grid} style={{'--photo-columns': items.length <= 4 ? 2 : 4, '--photo-ratio': '3/2'}}>
      {items.map((item, index) => <a key={`${item.src}-${index}`} className="e-gallery-item elementor-gallery-item elementor-animated-content" href={item.src} aria-label={`Enlarge photo: ${item.alt}`} onClick={event => { event.preventDefault(); opener.current = event.currentTarget; setActive(index); }}>
        <div className="e-gallery-image elementor-gallery-item__image"><img src={item.thumbnail} alt={item.alt} loading="lazy" decoding="async" /></div>
        <div className="elementor-gallery-item__overlay" />
      </a>)}
    </div>
    {active !== null && <dialog className="photo-viewer" ref={dialog} aria-label="Gallery photo viewer" onCancel={event => { event.preventDefault(); close(); }} onClick={event => { if (event.target === event.currentTarget) close(); }} onKeyDown={event => { if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } if (event.key === 'ArrowRight') { event.preventDefault(); move(1); } }}>
      <button className="photo-close" aria-label="Close photo" onClick={close}>×</button>
      <button className="photo-prev" aria-label="Previous photo" onClick={() => move(-1)}>‹</button>
      <figure><img src={items[active].src} alt={items[active].alt} /><figcaption>{active + 1} / {items.length}</figcaption></figure>
      <button className="photo-next" aria-label="Next photo" onClick={() => move(1)}>›</button>
    </dialog>}
  </>;
}
