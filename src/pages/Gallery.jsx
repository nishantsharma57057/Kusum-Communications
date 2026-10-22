import StudioPage, { PageHero } from '../components/StudioPage.jsx';
import PhotoGallery from '../components/PhotoGallery.jsx';
import galleries from '../data/galleries.json';
const photos = [...galleries.galleryGallery2, ...galleries.galleryGallery3];
export default function Gallery() {
  return <StudioPage><PageHero label="Gallery" title="Life beyond" accent="the final frame." description="The sets, the people and the moments in between. Step inside the world of Kusum Communications." />
    <section className="kc-section kc-gallery-section"><div className="kc-shell"><div className="kc-gallery-toolbar"><p className="kc-eyebrow">ON LOCATION / BEHIND THE SCENES</p><span>{photos.length} moments · Select a photo to explore</span></div><PhotoGallery items={photos} /></div></section>
  </StudioPage>;
}
