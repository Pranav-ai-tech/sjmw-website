import { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonialData } from '../../data/testimonialData';
import './Testimonials.css';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Setup intersection observer to trigger entrance animations
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Trigger when 15% of the section is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="testimonials" 
      className={`testimonials-section reveal-section ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
      aria-label="Client Testimonials"
    >
      <div className="testimonials__container">
        
        <header className="testimonials__header">
          <div className="testimonials__label">
            <span className="dot" aria-hidden="true"></span>
            CLIENT TESTIMONIALS
          </div>
          <h2 className="testimonials__title">
            Trusted by <span className="highlight">Industry Leaders</span>
          </h2>
          <p className="testimonials__description">
            For over 36 years, Sri Jothi Moulding Works has earned the trust of manufacturers by consistently delivering premium aluminium alloy ingots with reliable quality, precision manufacturing and dependable customer service.
          </p>
        </header>

        <div className="testimonials__grid">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
              isVisible={isVisible}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
