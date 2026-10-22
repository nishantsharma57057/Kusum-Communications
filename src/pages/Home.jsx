import { useRef, useState } from 'react';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import showcase from '../data/showcase.json';
import galleries from '../data/galleries.json';

const upload = '/wp-content/uploads/';
const services = [
  ['Microdramas & web series', 'Stories made for the next episode.', 'From character-led fiction to high-engagement vertical series, we create original stories for digital-first audiences.'],
  ['Branded content', 'Give your brand a story people feel.', 'Campaign films and brand stories that bring your identity, message and audience together.'],
  ['Corporate & industrial films', 'Make complex stories compelling.', 'Showcase your people, processes, products and capabilities with purposeful filmmaking.'],
  ['Events & creative production', 'Capture the moments that matter.', 'Production support, event films, podcasts, animation and post-production, brought together by one creative team.'],
];
const posterNames = ['Madchef Maddy', 'Final Boss — Season 2', 'Chhupa Rustom', 'Coolie Ki Diamond Dulhaniya', 'Meri Surrogate Girlfriend', 'Doosra Mauqa', 'Junoon-e-Ishq', 'Meri Sanki Dulhaniya', "Secretary’s Revenge", 'Swipe Right for Love', 'Dead Wife Is Online', 'Viral Queen', 'Don Dolly & Dulhaniya', 'Adha Pyaar'];

function BriefForm() {
  const [draft, setDraft] = useState('');
  function submit(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`${values.get('service')} enquiry — ${values.get('name').trim()}`);
    const body = encodeURIComponent(`Name: ${values.get('name').trim()}\nEmail: ${values.get('email')}\nService: ${values.get('service')}\n\nProject brief:\n${values.get('brief')}`);
    const href = `mailto:kusumcommunications@gmail.com?subject=${subject}&body=${body}`;
    setDraft(href);
    window.location.href = href;
  }
  return <form className="kc-brief-form" onSubmit={submit}>
    <div className="kc-form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Name" /></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label></div>
    <label>What are you creating?<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map(([title]) => <option key={title}>{title}</option>)}<option>Something else — let’s discuss</option></select></label>
    <label>A little about your idea<textarea name="brief" required rows={3} placeholder="Your idea, audience, timeline and anything else we should know…" /></label>
    <button className="kc-button" type="submit">Prepare my enquiry <span aria-hidden="true">↗</span></button>
    <p className="kc-form-note">Opens a draft in your email app. Review it and press Send to reach us.</p>
    {draft && <p role="status">Your draft is ready. <a href={draft}>Open your email draft</a>, or call <a href="tel:+919082054388">+91 90820 54388</a>.</p>}
  </form>;
}
export default function Home() {
  const rail = useRef(null);
  const [review, setReview] = useState(1);
  const current = showcase.reviews[review];
  const moveRail = direction => rail.current?.scrollBy({ left: direction * rail.current.clientWidth * .75, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  return <div className="kc-home">
    <SiteHeader />
    <main id="main-content">
      <section className="kc-hero">
        <div className="kc-shell kc-hero-grid">
          <div className="kc-hero-copy"><p className="kc-eyebrow"><span className="kc-live-dot" />Independent minds. Unforgettable stories.</p><h1>We create stories<br />that <em>stay<br className="kc-desktop-break" /> with you.</em></h1><p className="kc-hero-intro">A creative production studio turning your ideas into films, microdramas and branded content. From the first thought to the final frame.</p><div className="kc-actions"><a className="kc-button" href="#projects">Explore our work <span aria-hidden="true">↘</span></a><a className="kc-text-link" href="#brief">Tell us your idea ↗</a></div></div>
          <div className="kc-hero-art"><div className="kc-frame-label"><span>THE KUSUM COLLECTION</span><span>01 — 14</span></div><a className="kc-poster-composition" href="#productions" aria-label="Explore our original productions"><img className="kc-poster-left" src={showcase.posters[0]} alt="Madchef Maddy poster" width="300" height="450" /><img className="kc-poster-right" src={showcase.posters[2]} alt="Chhupa Rustom poster" width="300" height="450" /><img className="kc-poster-front" src={showcase.posters[3]} alt="Coolie Ki Diamond Dulhaniya poster" width="300" height="450" fetchPriority="high" /><span className="kc-round-link" aria-hidden="true">↗</span></a><p className="kc-art-caption">Original stories. Real emotion. Every screen.</p></div>
        </div>
        <div className="kc-shell kc-hero-bottom"><p>MUMBAI <span>·</span> DELHI <span>·</span> HYDERABAD</p><a href="#productions">Scroll to discover <span aria-hidden="true">↓</span></a></div>
      </section>
      <section className="kc-stats" aria-label="Our impact"><div className="kc-shell kc-stats-grid"><div><strong>250M<span>+</span></strong><p>Cumulative views across our productions</p></div><div><strong>14<span>+</span></strong><p>Original productions across genres</p></div><div><strong>100M<span>+</span></strong><p>Views for Coolie Ki Diamond Dulhaniya in under two months</p></div></div></section>
      <section id="productions" className="kc-section kc-productions"><div className="kc-shell kc-section-head"><div><p className="kc-eyebrow">01 / Original productions</p><h2>Made to keep<br /><em>you watching.</em></h2></div><div className="kc-head-aside"><p>Big emotions. Unexpected turns. Discover the stories we’ve brought to life.</p><div className="kc-controls"><button onClick={() => moveRail(-1)} aria-label="Scroll productions left">←</button><button onClick={() => moveRail(1)} aria-label="Scroll productions right">→</button></div></div></div><div className="kc-poster-rail" ref={rail} tabIndex={0} aria-label="Original production posters, scroll horizontally">{showcase.posters.map((src, index) => <figure key={src}><img src={src} alt={`${posterNames[index]} poster`} loading="lazy" width="300" height="450" /><figcaption><span>{String(index + 1).padStart(2, '0')}</span>{posterNames[index]}</figcaption></figure>)}</div></section>
      <section id="projects" className="kc-section kc-work"><div className="kc-shell"><div className="kc-section-head"><div><p className="kc-eyebrow">02 / Our projects</p><h2>Let the work<br /><em>do the talking.</em></h2></div><div className="kc-head-aside"><p>Brand stories, corporate films and visual experiences. Press play to explore our work.</p><a className="kc-text-link" href="#brief">Create something with us ↗</a></div></div><div className="kc-video-grid">{showcase.videos.map((id, i) => <article className="kc-film" key={id}><div className="kc-video-frame"><iframe className="elementor-video-iframe" src={`https://player.vimeo.com/video/${id}?autoplay=0&autopause=1&dnt=true&loop=0&muted=0&title=1&portrait=0&byline=0`} title={`Kusum Communications project film ${i + 1}`} loading="lazy" allow="fullscreen; picture-in-picture" allowFullScreen /></div><div className="kc-film-caption"><span>PROJECT FILM / {String(i + 1).padStart(2, '0')}</span><span>Creative direction & production</span></div></article>)}</div></div></section>
      <section className="feature-one kc-marquee" aria-label="Our services"><div className="feature-one__wrap"><div className="feature-one__title-box"><p className="feature-one__title">Our Services <span aria-hidden="true">✳</span></p></div><div className="feature-one__title-box" aria-hidden="true"><p className="feature-one__title">Our Services <span>✳</span></p></div></div></section>
      <section className="kc-section kc-services"><div className="kc-shell kc-services-layout"><div className="kc-services-intro"><p className="kc-eyebrow">03 / What we do</p><h2>Your vision.<br />Our craft.<br /><em>One team.</em></h2><p>Storytelling, creative direction and production, connected from concept to delivery.</p><a className="kc-text-link" href="/services/">Explore all services ↗</a></div><div className="kc-service-list">{services.map(([title, tagline, text], index) => <details key={title} open={index === 0 ? true : undefined}><summary><span className="kc-service-number">0{index + 1}</span><h3>{title}</h3><span className="kc-service-plus" aria-hidden="true">+</span></summary><div className="kc-service-body"><h4>{tagline}</h4><p>{text}</p><a href="#brief">Discuss your project ↗</a></div></details>)}</div></div></section>
      <section className="kc-studio"><div className="kc-studio-photo"><img src={`${upload}2025/11/DSC07306-scaled.jpeg`} alt="The Kusum Communications team together on a production set" loading="lazy" width="1200" height="800" /><span>BEHIND THE STORIES</span></div><div className="kc-studio-copy"><p className="kc-eyebrow">04 / Meet the studio</p><h2>A little curiosity.<br />A lot of heart.<br /><em>That’s Kusum.</em></h2><p>We’re a content and production studio crafting stories that connect across platforms. Led by creative producer Ritu Vaidya, our work brings together narrative, craft and hands-on production.</p><a className="kc-button" href="/about/">Get to know us <span aria-hidden="true">↗</span></a></div></section>
      <section className="kc-section kc-reviews"><div className="kc-shell kc-review-grid"><div><p className="kc-eyebrow">05 / Client voices</p><h2>Good work.<br /><em>Great relationships.</em></h2><div className="kc-controls"><button onClick={() => setReview((review + showcase.reviews.length - 1) % showcase.reviews.length)} aria-label="Previous client review">←</button><button onClick={() => setReview((review + 1) % showcase.reviews.length)} aria-label="Next client review">→</button><span>{review + 1} / {showcase.reviews.length}</span></div></div><div className="kc-review" aria-live="polite"><span className="kc-quote-mark" aria-hidden="true">“</span><blockquote>{current.quote}</blockquote><p><strong>{current.name}</strong><span>{current.role}</span></p></div></div></section>
      <section className="kc-section kc-scenes"><div className="kc-shell"><div className="kc-section-head"><div><p className="kc-eyebrow">06 / Life on set</p><h2>Beyond the<br /><em>final frame.</em></h2></div><a className="kc-text-link" href="/our-gallery/">Step behind the scenes ↗</a></div><div className="kc-scenes-grid">{galleries.homeGallery0.map((item, i) => <a href="/our-gallery/" key={item.src} aria-label={`Explore behind-the-scenes gallery, image ${i + 1}`}><img src={item.thumbnail} alt="Behind the scenes of a Kusum Communications production" width="600" height="400" loading="lazy" /><span>ON SET ↗</span></a>)}</div></div></section>
      <section id="brief" className="kc-section kc-enquiry"><div className="kc-shell kc-enquiry-grid"><div><p className="kc-eyebrow">07 / Let’s collaborate</p><h2>Tell us what<br /><em>you have in mind.</em></h2><p>A film, a series, a brand story—or an idea waiting to take shape. We’d love to hear it.</p><a className="kc-text-link" href="tel:+919082054388">Prefer a conversation? +91 90820 54388 ↗</a></div><BriefForm /></div></section>
    </main>
    <SiteFooter />
  </div>;
}
