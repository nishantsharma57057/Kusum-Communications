import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';
import showcase from '../data/showcase.json';
export default function StudioPage({ children }) {
  return <div className="kc-home kc-inner-page"><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></div>;
}
export function PageHero({ label, title, accent, description, image, imageAlt }) {
  return <section className={'kc-page-hero' + (image ? ' has-image' : '')}>
    <div className="kc-shell kc-page-hero-grid"><div><nav className="kc-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>{label}</span></nav><p className="kc-eyebrow">KUSUM / {label}</p><h1>{title}<br /><em>{accent}</em></h1>{description && <p className="kc-page-intro">{description}</p>}</div>{image && <figure><img src={image} alt={imageAlt} width="700" height="600" fetchPriority="high" /><figcaption>THE PEOPLE. THE PROCESS. THE STORIES.</figcaption></figure>}</div>
  </section>;
}
export function ProjectGrid() {
  return <div className="kc-video-grid">{showcase.videos.map((id,i) => <article key={id} className="kc-film"><div className="kc-video-frame"><iframe className="elementor-video-iframe" src={`https://player.vimeo.com/video/${id}?autoplay=0&autopause=1&dnt=true&loop=0&muted=0&title=1&portrait=0&byline=0`} title={`Kusum Communications project film ${i+1}`} loading="lazy" allow="fullscreen; picture-in-picture" allowFullScreen /></div><div className="kc-film-caption"><span>PROJECT FILM / {String(i+1).padStart(2,'0')}</span><span>Creative direction & production</span></div></article>)}</div>;
}
