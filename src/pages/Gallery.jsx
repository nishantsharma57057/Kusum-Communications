import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import ContactForm from '../components/ContactForm.jsx';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { navClass } from '../components/navigation.js';
import galleries from '../data/galleries.json';

export default function Gallery() {
  return (<>
    <div className={"body-inner-content"}>
      <SiteHeader variant={"inner"} />
      <div className={"stricky-header stricked-menu main-menu main-menu-three"}>
        <div className={"sticky-header__content"}>

        </div>
      </div>
      <div className={"mobile-nav__wrapper"}>
        <div className={"mobile-nav__overlay mobile-nav__toggler"}>

        </div>
        <div className={"mobile-nav__content"}>
          <span className={"mobile-nav__close mobile-nav__toggler"}>
            <i className={"fa fa-times"}>

            </i>
          </span>
          <div className={"logo-box"}>
            <a href={"/"}>
              <img data-lazyloaded={"1"} className={"img-fluid"} alt={""} width={"330"} height={"317"} src={"/wp-content/uploads/2025/07/cropped-Untitled_design__11_-removebg-preview.webp"} />
            </a>
          </div>
          <div className={"mobile-nav__container"}>

          </div>
          <ul className={"mobile-nav__contact list-unstyled"}>
            <li>
              <i className={"fa fa-envelope"}>

              </i>
              <a href={"mailto:kusumcommunications@gmail.com"}>
                {"\nkusumcommunications@gmail.com                "}
              </a>
            </li>
            <li>
              <i className={"fa fa-phone-alt"}>

              </i>
              <a href={"tel:‎+91 90820 54388"}>
                {"\n‎+91 90820 54388                "}
              </a>
            </li>
          </ul>
          <div className={"mobile-nav__top"}>
            <div className={"mobile-nav__social"}>

            </div>
          </div>
        </div>
      </div>
      <section className={"page-header"}>
        <div className={"page-header__bg"}>

        </div>
        <div className={"container"}>
          <div className={"page-header__inner"}>
            <p>
              {"Kusum Communications"}
            </p>
            <h2>
              {"Our Gallery"}
            </h2>
            <div className={"thm-breadcrumb__inner"}>
              <ul className={"thm-breadcrumb list-unstyled"}>
                <li>
                  <a href={"/"}>
                    {"Home"}
                  </a>
                </li>
                <li>
                  <span>
                    {"/"}
                  </span>
                </li>
                <li>
                  {"Our Gallery"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div id={"main-content"} className={"main-container theme-page-spacing"} role={"main"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-lg-12"}>
              <div className={"single-content"}>
                <div className={"entry-content"}>
                  <article id={"post-1052"} className={"post-1052 page type-page status-publish hentry"}>
                    <div className={"post-body clearfix"}>
                      <div className={"entry-content clearfix"}>
                        <div data-elementor-type={"wp-page"} data-elementor-id={"1052"} className={"elementor elementor-1052"} data-elementor-post-type={"page"}>
                          <div className={"elementor-element elementor-element-90293cc e-flex e-con-boxed e-con e-parent"} data-id={"90293cc"} data-element_type={"container"} data-e-type={"container"}>
                            <div className={"e-con-inner"}>
                              <div className={"elementor-element elementor-element-05830cd elementor-widget elementor-widget-heading"} data-id={"05830cd"} data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"heading.default"}>
                                <h2 className={"elementor-heading-title elementor-size-default"}>
                                  {"2026"}
                                </h2>
                              </div>
                              <div className={"elementor-element elementor-element-6858795 elementor-widget elementor-widget-gallery"} data-id={"6858795"} data-element_type={"widget"} data-e-type={"widget"} data-settings={"{\"lazyload\":\"yes\",\"gallery_layout\":\"grid\",\"columns\":4,\"columns_tablet\":2,\"columns_mobile\":1,\"gap\":{\"unit\":\"px\",\"size\":10,\"sizes\":[]},\"gap_tablet\":{\"unit\":\"px\",\"size\":10,\"sizes\":[]},\"gap_mobile\":{\"unit\":\"px\",\"size\":10,\"sizes\":[]},\"link_to\":\"file\",\"aspect_ratio\":\"3:2\",\"overlay_background\":\"yes\",\"content_hover_animation\":\"fade-in\"}"} data-widget_type={"static-gallery.default"}>
                                <PhotoGallery items={galleries.galleryGallery2} />
                              </div>
                              <div className={"elementor-element elementor-element-640f402 elementor-widget elementor-widget-heading"} data-id={"640f402"} data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"heading.default"}>
                                <h2 className={"elementor-heading-title elementor-size-default"}>
                                  {"2025"}
                                </h2>
                              </div>
                              <div className={"elementor-element elementor-element-342614f elementor-widget elementor-widget-gallery"} data-id={"342614f"} data-element_type={"widget"} data-e-type={"widget"} data-settings={"{\"gap\":{\"unit\":\"px\",\"size\":15,\"sizes\":[]},\"aspect_ratio\":\"4:3\",\"lazyload\":\"yes\",\"gallery_layout\":\"grid\",\"columns\":4,\"columns_tablet\":2,\"columns_mobile\":1,\"gap_tablet\":{\"unit\":\"px\",\"size\":10,\"sizes\":[]},\"gap_mobile\":{\"unit\":\"px\",\"size\":10,\"sizes\":[]},\"link_to\":\"file\",\"overlay_background\":\"yes\",\"content_hover_animation\":\"fade-in\"}"} data-widget_type={"static-gallery.default"}>
                                <PhotoGallery items={galleries.galleryGallery3} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
    <a href={"#"} data-target={"html"} className={"scroll-to-target scroll-to-top"}>
      <i className={"fas fa-arrow-up"}>

      </i>
    </a>
  </>);
}
