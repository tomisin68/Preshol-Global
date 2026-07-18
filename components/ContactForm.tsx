'use client';

import { useRef, useState, type FormEvent } from 'react';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Basic validation — mirrors the original's [required] field check.
    const requiredFields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('[required]'));
    let ok = true;
    const nextInvalid = new Set<string>();
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        nextInvalid.add(field.name);
        ok = false;
      }
    });
    setInvalidFields(nextInvalid);
    if (!ok) return;

    // Honeypot check.
    const honey = form.elements.namedItem('_honey') as HTMLInputElement | null;
    if (honey && honey.value) return;

    // Simulate success (replace with Formspree / EmailJS endpoint).
    setShowSuccess(true);
    form.reset();
    setInvalidFields(new Set());

    if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
    successTimeoutRef.current = setTimeout(() => setShowSuccess(false), 6000);
  };

  const borderStyle = (name: string) =>
    invalidFields.has(name) ? { borderColor: 'var(--terra)' } : undefined;

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="contact-wrap">

        <div className="contact-image" role="img" aria-label="Preshol Global team in community outreach">
          <div className="contact-image-overlay">
            <blockquote className="contact-quote">
              &quot;Your partnership<br />changes <span>lives</span><br />beyond borders.&quot;
            </blockquote>
            <div className="contact-detail">
              <strong>Email</strong>
              info@presholglobal.com
              <strong>WhatsApp</strong>
              Available on request
              <strong>Partnership</strong>
              For NGOs, Corporates &amp; Individuals
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          <h2 id="contact-heading">Get In Touch</h2>
          <p>Whether you want to partner, volunteer, support, or simply connect — we would love to hear from you.</p>

          <form id="contactForm" noValidate ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="fname">Full Name *</label>
                <input type="text" id="fname" name="name" placeholder="Your full name" required aria-required="true" style={borderStyle('name')} />
              </div>
              <div className="field">
                <label htmlFor="femail">Email Address *</label>
                <input type="email" id="femail" name="email" placeholder="your@email.com" required aria-required="true" style={borderStyle('email')} />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="fphone">Phone / WhatsApp</label>
                <input type="tel" id="fphone" name="phone" placeholder="+234 xxx xxx xxxx" />
              </div>
              <div className="field">
                <label htmlFor="fcountry">Country / Location</label>
                <input type="text" id="fcountry" name="country" placeholder="e.g. Nigeria" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="fpurpose">Purpose of Contact *</label>
              <select id="fpurpose" name="purpose" required aria-required="true" defaultValue="" style={borderStyle('purpose')}>
                <option value="" disabled>Select a reason…</option>
                <option value="enquiry">General Enquiry</option>
                <option value="partner">Partner With Us</option>
                <option value="volunteer">Volunteer Interest</option>
                <option value="media">Media / Press</option>
                <option value="donate">Support / Donate</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="fmessage">Your Message *</label>
              <textarea id="fmessage" name="message" placeholder="Tell us how you'd like to get involved or how we can help…" required aria-required="true" style={borderStyle('message')}></textarea>
            </div>

            {/* Honeypot anti-spam */}
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />

            <button type="submit" className="form-submit">Send Message →</button>

            <div className={`form-success${showSuccess ? ' show' : ''}`} id="formSuccess" role="alert">
              <p>✅ Thank you! We&apos;ll be in touch within 48 hours.</p>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
