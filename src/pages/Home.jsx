import { useState } from 'react';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import JournalNotice from '../components/JournalNotice.jsx';
import { HeroSlider, PosterCarousel } from '../components/StudioSliders.jsx';
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
  const [review, setReview] = useState(1);
  const current = showcase.reviews[review];
  return <div className="kc-home">
    <SiteHeader />
    <main id="main-content">
      <HeroSlider />
      <section id="productions" className="kc-section kc-productions"><div className="kc-shell kc-section-head"><div><p className="kc-eyebrow">01 / Original productions</p><h2>Made to keep<br /><em>you watching.</em></h2></div><div className="kc-head-aside"><p>Big emotions. Unexpected turns. Explore our original productions—swipe or use the arrows.</p></div></div><PosterCarousel names={posterNames} /></section>
      <section className="kc-stats" aria-label="Our impact"><div className="kc-shell kc-stats-grid"><div><strong>250M<span>+</span></strong><p>Cumulative views across our productions</p></div><div><strong>14<span>+</span></strong><p>Original productions across genres</p></div><div><strong>100M<span>+</span></strong><p>Views for Coolie Ki Diamond Dulhaniya in under two months</p></div></div></section>
      <section id="projects" className="kc-section kc-work"><div className="kc-shell"><div className="kc-section-head"><div><p className="kc-eyebrow">02 / Our projects</p><h2>Let the work<br /><em>do the talking.</em></h2></div><div className="kc-head-aside"><p>Brand stories, corporate films and visual experiences. Press play to explore our work.</p><a className="kc-text-link" href="#brief">Create something with us ↗</a></div></div><div className="kc-video-grid">{showcase.videos.map((id, i) => <article className="kc-film" key={id}><div className="kc-video-frame"><iframe className="elementor-video-iframe" src={`https://player.vimeo.com/video/${id}?autoplay=0&autopause=1&dnt=true&loop=0&muted=0&title=1&portrait=0&byline=0`} title={`Kusum Communications project film ${i + 1}`} loading="lazy" allow="fullscreen; picture-in-picture" allowFullScreen /></div><div className="kc-film-caption"><span>PROJECT FILM / {String(i + 1).padStart(2, '0')}</span><span>Creative direction & production</span></div></article>)}</div></div></section>
      <section className="feature-one kc-marquee" aria-label="Our services"><div className="feature-one__wrap"><div className="feature-one__title-box"><p className="feature-one__title">Our Services <span aria-hidden="true">✳</span></p></div><div className="feature-one__title-box" aria-hidden="true"><p className="feature-one__title">Our Services <span>✳</span></p></div></div></section>
      <section className="kc-section kc-services"><div className="kc-shell kc-services-layout"><div className="kc-services-intro"><p className="kc-eyebrow">03 / What we do</p><h2>Your vision.<br />Our craft.<br /><em>One team.</em></h2><p>Storytelling, creative direction and production, connected from concept to delivery.</p><a className="kc-text-link" href="/services/">Explore all services ↗</a><br /><a className="kc-text-link" href="/vertical-drama-production-house-india/">Vertical drama production in India ↗</a></div><div className="kc-service-list">{services.map(([title, tagline, text], index) => <details key={title} open={index === 0 ? true : undefined}><summary><span className="kc-service-number">0{index + 1}</span><h3>{title}</h3><span className="kc-service-plus" aria-hidden="true">+</span></summary><div className="kc-service-body"><h4>{tagline}</h4><p>{text}</p><a href="#brief">Discuss your project ↗</a></div></details>)}</div></div></section>
      <section className="kc-studio"><div className="kc-studio-photo"><img src={`${upload}2025/11/DSC07306-scaled.jpeg`} alt="The Kusum Communications team together on a production set" loading="lazy" width="1200" height="800" /><span>BEHIND THE STORIES</span></div><div className="kc-studio-copy"><p className="kc-eyebrow">04 / Meet the studio</p><h2>A little curiosity.<br />A lot of heart.<br /><em>That’s Kusum.</em></h2><p>We’re a content and production studio crafting stories that connect across platforms. Led by creative producer Ritu Vaidya, our work brings together narrative, craft and hands-on production.</p><a className="kc-button" href="/about/">Get to know us <span aria-hidden="true">↗</span></a></div></section>
      <section className="kc-section kc-reviews"><div className="kc-shell kc-review-grid"><div><p className="kc-eyebrow">05 / Client voices</p><h2>Good work.<br /><em>Great relationships.</em></h2><div className="kc-controls"><button onClick={() => setReview((review + showcase.reviews.length - 1) % showcase.reviews.length)} aria-label="Previous client review">←</button><button onClick={() => setReview((review + 1) % showcase.reviews.length)} aria-label="Next client review">→</button><span>{review + 1} / {showcase.reviews.length}</span></div></div><div className="kc-review" aria-live="polite"><span className="kc-quote-mark" aria-hidden="true">“</span><blockquote>{current.quote}</blockquote><p><strong>{current.name}</strong><span>{current.role}</span></p></div></div></section>
      <section className="kc-section kc-scenes"><div className="kc-shell"><div className="kc-section-head"><div><p className="kc-eyebrow">06 / Life on set</p><h2>Beyond the<br /><em>final frame.</em></h2></div><a className="kc-text-link" href="/our-gallery/">Step behind the scenes ↗</a></div><div className="kc-scenes-grid">{galleries.homeGallery0.map((item, i) => <a href="/our-gallery/" key={item.src} aria-label={`Explore behind-the-scenes gallery, image ${i + 1}`}><img src={item.thumbnail} alt="Behind the scenes of a Kusum Communications production" width="600" height="400" loading="lazy" /><span>ON SET ↗</span></a>)}</div></div></section>
      <section id="brief" className="kc-section kc-enquiry"><div className="kc-shell kc-enquiry-grid"><div><p className="kc-eyebrow">07 / Let’s collaborate</p><h2>Tell us what<br /><em>you have in mind.</em></h2><p>A film, a series, a brand story—or an idea waiting to take shape. We’d love to hear it.</p><a className="kc-text-link" href="tel:+919082054388">Prefer a conversation? +91 90820 54388 ↗</a></div><BriefForm /></div></section>
    </main>
    <SiteFooter />
    <JournalNotice />
  </div>;
}
