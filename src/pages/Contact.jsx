import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import ContactForm from '../components/ContactForm.jsx';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { navClass } from '../components/navigation.js';
import galleries from '../data/galleries.json';

export default function Contact() {
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
        <div style={{"backgroundImage": "url(https://themedox.com/eston/wp-content/uploads/2023/08/page-header-bg-8.jpg)"}} className={"page-header__bg"}>

        </div>
        <div className={"container"}>
          <div className={"page-header__inner"}>
            <p>
              {"Kusum Communications"}
            </p>
            <h2>
              {"Contact"}
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
                  {"Contact"}
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
                  <article id={"post-335"} className={"post-335 page type-page status-publish hentry"}>
                    <div className={"post-body clearfix"}>
                      <div className={"entry-content clearfix"}>
                        <div data-elementor-type={"wp-page"} data-elementor-id={"335"} className={"elementor elementor-335"} data-elementor-post-type={"page"}>
                          <section className={"elementor-section elementor-top-section elementor-element elementor-element-fedd204 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"} data-id={"fedd204"} data-element_type={"section"} data-e-type={"section"} data-settings={"{\"stretch_section\":\"section-stretched\"}"}>
                            <div className={"elementor-container elementor-column-gap-no"}>
                              <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-43adcc9"} data-id={"43adcc9"} data-element_type={"column"} data-e-type={"column"}>
                                <div className={"elementor-widget-wrap elementor-element-populated"}>
                                  <div className={"elementor-element elementor-element-7df51fb elementor-widget elementor-widget-theme-contact-info"} data-id={"7df51fb"} data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"theme-contact-info.default"}>
                                    <div className={"elementor-widget-container"}>
                                      <section className={"contact-page"}>
                                        <div className={"container"}>
                                          <div className={"row"}>
                                            <div className={"col-xl-4 col-lg-4"}>
                                              <div className={"contact-page__single contact-page__single-1"}>
                                                <h3 className={"contact-page__title"}>
                                                  {"Office Location"}
                                                </h3>
                                                <p className={"contact-page__text"}>
                                                  {" Mumbai | Delhi | Hyderabad"}
                                                </p>
                                                <div className={"contact-page__icon"}>
                                                  <img data-lazyloaded={"1"} decoding={"async"} alt={"Icon"} width={"128"} height={"128"} src={"/wp-content/uploads/2025/07/location.webp"} />
                                                </div>
                                                <div className={"contact-page__count"}>

                                                </div>
                                              </div>
                                            </div>
                                            <div className={"col-xl-4 col-lg-4"}>
                                              <div className={"contact-page__single contact-page__single-1"}>
                                                <h3 className={"contact-page__title"}>
                                                  {"Tel: ‎+91 90820 54388"}
                                                </h3>
                                                <p className={"contact-page__text"}>
                                                  {"To get in touch with us, please submit\nthe form below"}
                                                </p>
                                                <div className={"contact-page__icon"}>
                                                  <img data-lazyloaded={"1"} decoding={"async"} alt={"Icon"} width={"128"} height={"128"} src={"/wp-content/uploads/2025/07/phone-call.webp"} />
                                                </div>
                                                <div className={"contact-page__count"}>

                                                </div>
                                              </div>
                                            </div>
                                            <div className={"col-xl-4 col-lg-4"}>
                                              <div className={"contact-page__single contact-page__single-1"}>
                                                <h3 className={"contact-page__title"}>
                                                  {"kusumcommunications@gmail.com"}
                                                </h3>
                                                <p className={"contact-page__text"}>
                                                  {"To better connect with our team\nsend your mail."}
                                                </p>
                                                <div className={"contact-page__icon"}>
                                                  <img data-lazyloaded={"1"} decoding={"async"} alt={"Icon"} width={"128"} height={"128"} src={"/wp-content/uploads/2025/07/email.webp"} />
                                                </div>
                                                <div className={"contact-page__count"}>

                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className={"elementor-section elementor-top-section elementor-element elementor-element-b7c45fb elementor-section-stretched contact-bg-custom elementor-section-boxed elementor-section-height-default elementor-section-height-default"} data-id={"b7c45fb"} data-element_type={"section"} data-e-type={"section"} data-settings={"{\"stretch_section\":\"section-stretched\"}"}>
                            <div className={"elementor-container elementor-column-gap-default"}>
                              <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-13cae02"} data-id={"13cae02"} data-element_type={"column"} data-e-type={"column"}>
                                <div className={"elementor-widget-wrap elementor-element-populated"}>
                                  <div className={"elementor-element elementor-element-56ac08d elementor-widget elementor-widget-heading"} data-id={"56ac08d"} data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"heading.default"}>
                                    <h2 className={"elementor-heading-title elementor-size-default"}>
                                      {"Get In Touch"}
                                    </h2>
                                  </div>
                                  <div className={"elementor-element elementor-element-92e24ae elementor-widget elementor-widget-heading"} data-id={"92e24ae"} data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"heading.default"}>
                                    <h2 className={"elementor-heading-title elementor-size-default"}>
                                      {"Let’s talk with us"}
                                    </h2>
                                  </div>
                                  <div className={"elementor-element elementor-element-86b8c4b elementor-button-align-stretch elementor-widget elementor-widget-form"} data-id={"86b8c4b"} data-element_type={"widget"} data-e-type={"widget"} data-settings={"{\"step_next_label\":\"Next\",\"step_previous_label\":\"Previous\",\"button_width\":\"100\",\"step_type\":\"number_text\",\"step_icon_shape\":\"circle\"}"}>
                                    <ContactForm />
                                  </div>
                                </div>
                              </div>
                              <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6e1f0b3"} data-id={"6e1f0b3"} data-element_type={"column"} data-e-type={"column"}>
                                <div className={"elementor-widget-wrap elementor-element-populated"}>
                                  <div className={"elementor-element elementor-element-38dcae0 elementor-widget elementor-widget-google_maps"} data-id={"38dcae0"} data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"google_maps.default"}>
                                    <div className={"elementor-custom-embed"}>
                                      <iframe data-lazyloaded={"1"} src={"https://maps.google.com/maps?q=mumbai&t=m&z=12&output=embed&iwloc=near"} loading={"lazy"} title={"mumbai"} aria-label={"mumbai"}>

                                      </iframe>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
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
