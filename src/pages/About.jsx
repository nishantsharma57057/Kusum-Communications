import StudioPage, { PageHero, ProjectGrid } from '../components/StudioPage.jsx';
import PhotoGallery from '../components/PhotoGallery.jsx';
import galleries from '../data/galleries.json';
import paragraphs from '../data/studioAbout.json';
export default function About() {
  return <StudioPage><PageHero label="About the studio" title="We’re here to" accent="make stories matter." description={paragraphs[0]} image="/wp-content/uploads/2025/11/DSC07306-scaled.jpeg" imageAlt="Kusum Communications cast and crew together on set" />
    <section className="kc-section"><div className="kc-shell kc-founder-grid"><figure className="kc-founder-portrait"><img src="/wp-content/uploads/2026/08/IMG_0931.JPG.webp" alt="Ritu Vaidya, founder of Kusum Communications" width="600" height="900" loading="lazy" /><figcaption>RITU VAIDYA / FOUNDER & CREATIVE PRODUCER</figcaption></figure><div><p className="kc-eyebrow">The person behind the vision</p><h2>Driven by stories.<br /><em>Grounded in craft.</em></h2><div className="kc-body-copy">{paragraphs.slice(1).map(text => <p key={text}>{text}</p>)}</div><a className="kc-text-link" href="/2026/09/06/kusum-communications-story/">Read the Kusum story ↗</a></div></div></section>
    <section className="kc-section kc-scenes"><div className="kc-shell"><div className="kc-section-head"><div><p className="kc-eyebrow">A shared creative spirit</p><h2>Meet us<br /><em>behind the scenes.</em></h2></div><a className="kc-text-link" href="/our-gallery/">Explore the full gallery ↗</a></div><PhotoGallery items={galleries.aboutGallery1} /></div></section>
    <section id="projects" className="kc-section kc-work"><div className="kc-shell"><div className="kc-section-head"><div><p className="kc-eyebrow">Our projects</p><h2>Ideas, brought<br /><em>to life.</em></h2></div><p className="kc-head-aside">Explore our films, then tell us the story you’d like to create.</p></div><ProjectGrid /></div></section>
  </StudioPage>;
}
