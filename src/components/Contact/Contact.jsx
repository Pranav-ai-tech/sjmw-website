import React from 'react';
import './Contact.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import factoryImage from '../../assets/4722af16-cce2-47cb-93c1-d9f73c6f7751.jpg';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal(0.2);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Enquiry form submitted");
  };

  return (
    <section 
      id="contact" 
      className={`contact-section reveal-section ${isVisible ? 'is-visible' : ''}`}
      ref={ref}
      aria-labelledby="contact-heading"
    >
      <div className="contact__noise" aria-hidden="true" />
      <div className="contact__glow" aria-hidden="true" />

      <div className="contact__container">
        {/* Section Header */}
        <header className="contact__header">
          <div className="contact__label">
            <span className="contact__label-dot"></span>
            CONTACT SJMW
          </div>
          <h2 id="contact-heading" className="contact__title">
            Let's Build Something <span className="contact__title-highlight">Together</span>
          </h2>
          <p className="contact__desc">
            Whether you require premium aluminium alloy ingots, customized alloy solutions, or long-term manufacturing support, our experienced team is ready to assist. Contact Sri Jothi Moulding Works for product enquiries, quotations, technical support, and reliable manufacturing partnerships.
          </p>
        </header>

        {/* Main Content Area */}
        <div className="contact__content">
          
          {/* Left Column */}
          <div className="contact__info-col">
            
            {/* Address Card */}
            <div className="contact__card">
              <div className="contact__card-item">
                <div className="contact__card-icon">
                  <span aria-hidden="true">📍</span>
                </div>
                <div className="contact__card-details">
                  <h4>Factory Address</h4>
                  <p>Sri Jothi Moulding Works</p>
                  <p>Thirumudivakkam</p>
                  <p>Chennai – 600044</p>
                  <p>Tamil Nadu</p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="contact__card-item" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
                  <div className="contact__card-icon" style={{ width: '32px', height: '32px', fontSize: '1rem' }}>
                    <span aria-hidden="true">☎</span>
                  </div>
                  <div className="contact__card-details">
                    <h4 style={{ fontSize: '1rem' }}>Phone</h4>
                    <a href="tel:+919551798698">+91 95517 98698</a>
                  </div>
                </div>
                
                <div className="contact__card-item" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
                  <div className="contact__card-icon" style={{ width: '32px', height: '32px', fontSize: '1rem' }}>
                    <span aria-hidden="true">✉</span>
                  </div>
                  <div className="contact__card-details">
                    <h4 style={{ fontSize: '1rem' }}>Email</h4>
                    <a href="mailto:info@sjmw.in">info@sjmw.in</a>
                  </div>
                </div>
              </div>

              <div className="contact__card-item" style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
                <div className="contact__card-icon" style={{ width: '32px', height: '32px', fontSize: '1rem' }}>
                  <span aria-hidden="true">🕒</span>
                </div>
                <div className="contact__card-details">
                  <h4 style={{ fontSize: '1rem' }}>Working Hours</h4>
                  <p>Monday – Saturday</p>
                  <p>9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Component */}
            <div className="contact__map-container">
              <div className="contact__map-wrapper">
                <iframe
                  title="Sri Jothi Moulding Works Location"
                  src="https://maps.google.com/maps?q=Sri%20Jothi%20Moulding%20Works,%20Thirumudivakkam,%20Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
                <div className="contact__map-badge">
                  <span className="contact__map-badge-icon" aria-hidden="true">📍</span>
                  <span className="contact__map-badge-text">
                    Thirumudivakkam, Chennai
                  </span>
                </div>
              </div>

              <a 
                href="https://www.google.com/maps/search/Sri+Jothi+Moulding+Works+Thirumudivakkam+Chennai"
                target="_blank" 
                rel="noopener noreferrer"
                className="contact__map-btn"
                aria-label="Get directions to Sri Jothi Moulding Works"
              >
                Get Directions <span className="contact__map-btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>

          </div>

          {/* Right Column (Form) */}
          <div className="contact__form-col">
            <div className="contact__form-card">
              <h3 className="contact__form-title">Send an Enquiry</h3>
              
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="fullName" className="contact__form-label">Full Name</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      className="contact__form-input" 
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="companyName" className="contact__form-label">Company Name</label>
                    <input 
                      type="text" 
                      id="companyName" 
                      name="companyName" 
                      className="contact__form-input" 
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="email" className="contact__form-label">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="contact__form-input" 
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="phone" className="contact__form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="contact__form-input" 
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject" className="contact__form-label">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="contact__form-input" 
                    placeholder="Enquiry about Aluminum Die Casting"
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__form-label">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="contact__form-textarea" 
                    placeholder="Please describe your requirements..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Send Enquiry 
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
