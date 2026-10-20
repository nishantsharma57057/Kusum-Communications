import { navClass } from './navigation.js';
export default function SiteHeader({variant}) {
  return variant === 'home' ? (
    <header className={"main-header"}>
      <nav className={"main-menu"}>
        <div className={"main-menu__wrapper"}>
          <div className={"main-menu__wrapper-inner"}>
            <div className={"main-menu__logo"}>
              <a href={"#home"}>
                <img data-lazyloaded={"1"} style={{"width": "100px"}} alt={""} width={"330"} height={"317"} src={"/wp-content/uploads/2025/07/cropped-Untitled_design__11_-removebg-preview.webp"} />
              </a>
            </div>
            <div className={"main-menu__main-menu-box"}>
              <a href={"#"} className={"mobile-nav__toggler"}>
                <i className={"fa fa-bars"}>

                </i>
              </a>
              <div className={"menu-main-menu-container"}>
                <ul id={"primary-menu"} className={"main-menu__list"}>
                  <li id={"menu-item-902"} className={navClass("menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-902","#home")}>
                    <a href={"#home"} aria-current={"page"}>
                      {"Home"}
                    </a>
                  </li>
                  <li id={"menu-item-823"} className={navClass("menu-item menu-item-type-post_type menu-item-object-page menu-item-823","/about/")}>
                    <a href={"/about/"}>
                      {"About"}
                    </a>
                  </li>
                  <li id={"menu-item-829"} className={navClass("menu-item menu-item-type-post_type menu-item-object-page menu-item-829","/services/")}>
                    <a href={"/services/"}>
                      {"Services"}
                    </a>
                  </li>
                  <li id={"menu-item-1087"} className={navClass("menu-item menu-item-type-post_type menu-item-object-page menu-item-1087","/our-gallery/")}>
                    <a href={"/our-gallery/"}>
                      {"Our Gallery"}
                    </a>
                  </li>
                  <li id={"menu-item-1980"} className={navClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1980","/2026/09/06/kusum-communications-story/")}>
                    <a href={"/2026/09/06/kusum-communications-story/"}>
                      {"Blogs"}
                    </a>
                    <ul className={"sub-menu"}>
                      <li id={"menu-item-1981"} className={navClass("menu-item menu-item-type-post_type menu-item-object-post menu-item-1981","/2026/09/06/kusum-communications-story/")}>
                        <a href={"/2026/09/06/kusum-communications-story/"}>
                          {"Kusum Communications Story"}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li id={"menu-item-839"} className={navClass("menu-item menu-item-type-post_type menu-item-object-page menu-item-839","/contact/")}>
                    <a href={"/contact/"}>
                      {"Contact"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={"main-menu__right"}>
              <div className={"main-menu__nav-sidebar-icon"}>
                <a className={"navSidebar-button menu-tigger"} href={"#"}>
                  <span className={"icon-dots-menu"}>

                  </span>
                </a>
              </div>
              <div className={"main-menu__btn-box"}>
                <a href={"/contact/"} className={"main-menu__btn thm-btn"}>
                  <span className={"fas fa-long-arrow-alt-right"}>

                  </span>
                  {"\nLets Talk                                "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={"extra-info"}>
        <div className={"close-icon menu-close"}>
          <button>
            <i className={"far fa-window-close"}>

            </i>
          </button>
        </div>
        <div id={"block-14"} className={"header-panel-nav-widget widget widget_block widget_media_image"}>
          <figure className={"wp-block-image size-full canvas-logo-custom"}>
            <img data-lazyloaded={"1"} decoding={"async"} alt={""} className={"wp-image-13"} width={"106"} height={"27"} src={"https://themedox.com/eston/wp-content/uploads/2023/08/logo-1.png"} />
          </figure>
        </div>
        <div id={"block-15"} className={"header-panel-nav-widget widget widget_block"}>
          <div className={"content-box"}>
            <h4>
              {"About Us"}
            </h4>
            <p>
              {"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam laboris."}
            </p>
          </div>
        </div>
        <div id={"block-16"} className={"header-panel-nav-widget widget widget_block"}>
          <p>
            {"[contact-form-7 id=\"d1b306e\" title=\"New Form 2\"]"}
          </p>
        </div>
      </div>
      <div className={"offcanvas-overly"}>

      </div>
    </header>
  ) : (
    <header className={"main-header-three"}>
      <div className={"main-header-three__top"}>
        <div className={"main-header-three__top-inner"}>
          <ul className={"list-unstyled main-header-three__contact-info"}>
            <li>
              <a href={"kusumcommunications@gmail.com"}>
                {"\nkusumcommunications@gmail.com\n"}
              </a>
            </li>
            <li>
              <a href={"tel:‎+91 90820 54388"}>
                {"\n‎+91 90820 54388                    "}
              </a>
            </li>
          </ul>
          <p className={"main-header-three__top-text"}>

          </p>
          <div className={"main-header-three__social-box"}>
            <h4 className={"main-header-three__social-title"}>
              {"Follow Us"}
            </h4>
            <div className={"main-header-three__social"}>

            </div>
          </div>
        </div>
      </div>
      <nav className={"main-menu main-menu-three"}>
        <div className={"main-menu-three__wrapper"}>
          <div className={"main-menu-three__wrapper-inner"}>
            <div className={"main-menu-three__logo"}>
              <a href={"/"}>
                <img data-lazyloaded={"1"} style={{"width": "100px"}} alt={""} width={"330"} height={"317"} src={"/wp-content/uploads/2025/07/cropped-Untitled_design__11_-removebg-preview.webp"} />
              </a>
            </div>
            <div className={"main-menu-three__main-menu-box"}>
              <a href={"#"} className={"mobile-nav__toggler"}>
                <i className={"fa fa-bars"}>

                </i>
              </a>
              <div className={"menu-main-menu-container"}>
                <ul id={"primary-menu"} className={"main-menu__list"}>
                  <li id={"menu-item-902"} className={navClass("menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-902","/")}>
                    <a href={"/"}>
                      {"Home"}
                    </a>
                  </li>
                  <li id={"menu-item-823"} className={navClass("menu-item menu-item-type-post_type menu-item-object-page menu-item-823","/about/")}>
                    <a href={"/about/"}>
                      {"About"}
                    </a>
                  </li>
                  <li id={"menu-item-829"} className={navClass("menu-item menu-item-type-post_type menu-item-object-page menu-item-829","/services/")}>
                    <a href={"/services/"}>
                      {"Services"}
                    </a>
                  </li>
                  <li id={"menu-item-1087"} className={navClass("menu-item menu-item-type-post_type menu-item-object-page menu-item-1087","/our-gallery/")}>
                    <a href={"/our-gallery/"}>
                      {"Our Gallery"}
                    </a>
                  </li>
                  <li id={"menu-item-1980"} className={navClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1980","/2026/09/06/kusum-communications-story/")}>
                    <a href={"/2026/09/06/kusum-communications-story/"}>
                      {"Blogs"}
                    </a>
                    <ul className={"sub-menu"}>
                      <li id={"menu-item-1981"} className={navClass("menu-item menu-item-type-post_type menu-item-object-post menu-item-1981","/2026/09/06/kusum-communications-story/")}>
                        <a href={"/2026/09/06/kusum-communications-story/"}>
                          {"Kusum Communications Story"}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li id={"menu-item-839"} className={navClass("menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-335 current_page_item menu-item-839","/contact/")}>
                    <a href={"/contact/"} aria-current={"page"}>
                      {"Contact"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={"main-menu-three__right"}>
              <div className={"main-menu-three__nav-sidebar-icon"}>
                <a className={"navSidebar-button menu-tigger"} href={"#"}>
                  <span className={"icon-dots-menu"}>

                  </span>
                </a>
              </div>
              <div className={"main-menu-three__btn-box"}>
                <a href={"/contact/"} className={"main-menu-three__btn thm-btn"}>
                  <span className={"fas fa-long-arrow-alt-right"}>

                  </span>
                  {"Lets Talk\t\t\t\t\t\t\t"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
