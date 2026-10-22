import StudioPage, { PageHero } from '../components/StudioPage.jsx';
import services from '../data/services.json';
export default function Services() {
  return <StudioPage><PageHero label="Services" title="From the first idea" accent="to the final frame." description="Creative thinking, production expertise and a love for stories. Find the right format for your next project." image="/wp-content/uploads/2026/07/BTS04607.webp" imageAlt="A Kusum Communications production in progress" />
    <section className="kc-section"><div className="kc-shell"><div className="kc-section-head"><div><p className="kc-eyebrow">Our capabilities</p><h2>Different formats.<br /><em>The same dedication.</em></h2></div><a className="kc-text-link" href="/#projects">See the work ↗</a></div><div className="kc-capabilities">{services.map(({title,text},index) => <article key={title}><span className="kc-capability-number">{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p><a href={'/contact/?service='+encodeURIComponent(title)}>Discuss this service <span aria-hidden="true">↗</span></a></article>)}</div></div></section>
    <section className="kc-section kc-service-banner"><div className="kc-shell"><p className="kc-eyebrow">Not sure which format fits?</p><h2>Start with your idea.<br /><em>We’ll find its shape.</em></h2><a className="kc-button" href="/contact/">Talk to the studio ↗</a></div></section>
  </StudioPage>;
}
