import { useState } from 'react';
import coverage from '../data/pressCoverage.json';

export default function MediaCoverage() {
  const [selected, setSelected] = useState(coverage[0].id);
  const current = coverage.find(item => item.id === selected) || coverage[0];
  return <section id="media-coverage" className="kc-section kc-media-coverage">
    <div className="kc-shell"><div className="kc-section-head"><div><p className="kc-eyebrow">THE KUSUM STORY / IN THE PRESS</p><h2>Our story,<br /><em>in the headlines.</em></h2></div><p className="kc-head-aside">Explore published online coverage and press releases. Hover, focus or select Preview to see the matching publication.</p></div>
      <div className="kc-coverage-layout"><div className="kc-coverage-links">{coverage.map((item,index) => <div key={item.id} className={'kc-coverage-row'+(selected===item.id?' is-selected':'')} onPointerEnter={() => setSelected(item.id)}>
        <a href={item.url} target="_blank" rel="noopener noreferrer" onFocus={() => setSelected(item.id)}><span className="kc-coverage-number">{String(index+1).padStart(2,'0')}</span><span>{item.name}<small>Read the published story ↗</small></span></a>
        <button type="button" aria-pressed={selected===item.id} aria-controls="kc-coverage-preview" aria-label={`Preview ${item.name} coverage`} onClick={() => setSelected(item.id)} onFocus={() => setSelected(item.id)}>Preview</button>
      </div>)}</div>
      <figure className="kc-coverage-preview" id="kc-coverage-preview"><a className={'kc-coverage-paper kc-coverage-paper-'+current.id} href={current.url} target="_blank" rel="noopener noreferrer" aria-label={`Read the ${current.name} article in a new tab`}><img key={current.id} src={current.image} alt={current.alt} width="1200" height="850" loading="lazy" /></a><figcaption><strong aria-live="polite">{current.name}</strong><span>{current.imageType} · Online coverage</span><a href={current.url} target="_blank" rel="noopener noreferrer">Open original article ↗</a></figcaption></figure>
      </div><p className="kc-press-note">These links include syndicated press-release coverage. Previews are attributed to their original publishers and link to the source.</p>
    </div>
  </section>;
}

export function PressHighlights() {
  return <section className="kc-section kc-press-highlights"><div className="kc-shell"><div className="kc-section-head"><div><p className="kc-eyebrow">KUSUM IN THE NEWS</p><h2>Stories on screen.<br /><em>Stories in the press.</em></h2></div><a className="kc-text-link" href="/2026/09/06/kusum-communications-story/#media-coverage">Explore all media coverage ↗</a></div><div className="kc-press-grid">{coverage.filter(item=>item.featured).map(item => <a className="kc-press-card" key={item.id} href={item.url} target="_blank" rel="noopener noreferrer"><div className="kc-press-card-top"><span>{item.name}</span><span aria-hidden="true">↗</span></div><div className="kc-press-clipping"><img src={item.image} alt={item.alt} width="1200" height="850" loading="lazy" /></div><div className="kc-press-card-bottom"><h3>Ritu Vaidya & the Kusum Communications story</h3><span>Online article capture · Read coverage ↗</span></div></a>)}</div><p className="kc-press-note">Published online coverage, including syndicated press releases. Select a clipping to read the original source.</p></div></section>;
}
