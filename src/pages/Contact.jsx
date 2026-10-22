import StudioPage, { PageHero } from '../components/StudioPage.jsx';
import ContactForm from '../components/ContactForm.jsx';
export default function Contact() {
  return <StudioPage><PageHero label="Contact" title="Good stories start" accent="with a conversation." description="Have a brief, a question or the beginnings of an idea? Tell us what you’re thinking." />
    <section className="kc-section"><div className="kc-shell kc-contact-layout"><div><p className="kc-eyebrow">LET’S MAKE SOMETHING TOGETHER</p><h2>Your next chapter<br /><em>starts here.</em></h2><div className="kc-contact-methods"><div><span>EMAIL THE STUDIO</span><a href="mailto:kusumcommunications@gmail.com">kusumcommunications@gmail.com ↗</a></div><div><span>LET’S TALK</span><a href="tel:+919082054388">+91 90820 54388 ↗</a></div><div><span>WHERE WE CREATE</span><p>Mumbai · Delhi · Hyderabad</p></div></div><p className="kc-contact-note">Share your idea, audience and timeline. We’ll take the conversation from there.</p></div><div className="kc-contact-form"><h3>Tell us about your project</h3><p>Complete the form to prepare an enquiry in your email app.</p><ContactForm /></div></div></section>
  </StudioPage>;
}
