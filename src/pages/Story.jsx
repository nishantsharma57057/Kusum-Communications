import StudioPage, { PageHero } from '../components/StudioPage.jsx';
import JournalArticle from '../components/JournalArticle.jsx';
import MediaCoverage from '../components/MediaCoverage.jsx';
export default function Story() {
  return <StudioPage><PageHero label="Journal" title="From corporate boardrooms" accent="to 255 million+ views." description="How Ritu Vaidya built Kusum Communications into a digital storytelling powerhouse." />
    <section className="kc-section kc-journal-section"><div className="kc-shell kc-journal-layout"><aside className="kc-journal-sidebar"><img src="/wp-content/uploads/2026/08/IMG_0931.JPG.webp" alt="Producer and founder Ritu Vaidya" width="600" height="900" /><p className="kc-eyebrow">THE KUSUM STORY</p><p>Ritu Vaidya<br /><span>Founder & creative producer</span></p><time dateTime="2026-09-06">6 September 2026</time><a className="kc-text-link" href="/about/">Meet the studio ↗</a></aside><article><div className="kc-article-meta"><span>STUDIO JOURNAL</span><span>Stories · People · Perspective</span></div><JournalArticle /><div className="kc-article-end"><p>Have a story of your own?</p><a className="kc-button" href="/contact/">Let’s bring it to life ↗</a></div></article></div></section>
    <MediaCoverage />
  </StudioPage>;
}
