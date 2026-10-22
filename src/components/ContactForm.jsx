import { useState } from 'react';
import services from '../data/services.json';

export default function ContactForm() {
  const [draft, setDraft] = useState('');
  const requested = typeof window === 'undefined' ? '' : new URLSearchParams(window.location.search).get('service') || '';
  const selectedService = services.some(item => item.title === requested) ? requested : '';
  function submit(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = values.get('name').trim();
    const body = `Name: ${name}\nEmail: ${values.get('email')}\nPhone: ${values.get('phone')}\nService: ${values.get('service')}\n\n${values.get('message')}`;
    const href = `mailto:kusumcommunications@gmail.com?subject=${encodeURIComponent(`Website enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setDraft(href);
    window.location.href = href;
  }
  return <form className="elementor-form" onSubmit={submit} aria-label="Contact Form">
    <div className="elementor-form-fields-wrapper elementor-labels-above">
      <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100 elementor-field-required">
        <label htmlFor="contact-name" className="elementor-field-label">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Name" required className="elementor-field elementor-size-md elementor-field-textual" />
      </div>
      <div className="elementor-field-type-email elementor-field-group elementor-column elementor-col-100 elementor-field-required">
        <label htmlFor="contact-email" className="elementor-field-label">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="Email" required className="elementor-field elementor-size-md elementor-field-textual" />
      </div>
      <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-col-100 elementor-field-required">
        <label htmlFor="contact-phone" className="elementor-field-label">Phone</label>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone" required minLength={5} maxLength={30} className="elementor-field elementor-size-md elementor-field-textual" />
      </div>
      <div className="elementor-field-group"><label htmlFor="contact-service" className="elementor-field-label">What are you creating?</label><select id="contact-service" name="service" defaultValue={selectedService}><option value="">Select a service (optional)</option>{services.map(item => <option key={item.title}>{item.title}</option>)}</select></div>
      <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-col-100">
        <label htmlFor="contact-message" className="elementor-field-label">Message</label>
        <textarea id="contact-message" name="message" rows={4} placeholder="Message" className="elementor-field elementor-size-md elementor-field-textual" />
      </div>
      <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
        <button type="submit" className="elementor-button elementor-size-md"><span className="elementor-button-content-wrapper"><span className="elementor-button-text">Prepare enquiry ↗</span></span></button>
      </div>
    </div>
    {draft && <p role="status" className="contact-status">Your email draft is ready. Send it from your email app to complete your enquiry. <a href={draft}>Open email draft</a></p>}
  </form>;
}
