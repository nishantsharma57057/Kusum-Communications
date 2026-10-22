export default function SiteFooter() {
  return <footer className="kc-footer">
    <div className="kc-shell kc-footer-main">
      <div><p className="kc-eyebrow">Your next story starts here</p><h2>Have a vision?<br /><em>Let’s make it real.</em></h2><a className="kc-button" href="/contact/">Start a conversation <span aria-hidden="true">↗</span></a></div>
      <div className="kc-footer-contact"><a href="mailto:kusumcommunications@gmail.com">kusumcommunications@gmail.com</a><a href="tel:+919082054388">+91 90820 54388</a><p>Mumbai · Delhi · Hyderabad</p><div className="kc-social"><a href="https://www.instagram.com/kusumcommunications/">Instagram ↗</a><a href="https://youtube.com/@kusumcommunications280">YouTube ↗</a><a href="https://www.facebook.com/share/1EfnHR4Zwh/?mibextid=wwXIfr">Facebook ↗</a></div></div>
    </div>
    <div className="kc-shell kc-footer-bottom"><a href="/" className="kc-wordmark">KUSUM COMMUNICATIONS</a><nav aria-label="Footer navigation"><a href="/about/">About</a><a href="/services/">Services</a><a href="/vertical-drama-production-house-india/">Vertical dramas</a><a href="/our-gallery/">Gallery</a><a href="/contact/">Contact</a></nav><small>© {new Date().getFullYear()} Kusum Communications</small></div>
  </footer>;
}
