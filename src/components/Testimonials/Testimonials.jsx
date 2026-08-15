import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonialData } from '../../data/testimonialData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  // Create seamless loops by duplicating the data array
  // 3 copies ensures there's enough content to fill wide screens during animation
  const row1Data = [...testimonialData, ...testimonialData, ...testimonialData];
  
  // Shift the array for row 2 so the same testimonials don't align vertically
  const shiftedData = [...testimonialData.slice(3), ...testimonialData.slice(0, 3)];
  const row2Data = [...shiftedData, ...shiftedData, ...shiftedData];

  return (
    <section 
      id="testimonials" 
      className={`sjmw-testimonials reveal-section ${isVisible ? 'is-visible' : ''}`}
      ref={ref}
      aria-label="Client Testimonials"
    >
      <div className="sjmw-testimonials__bg-grid" aria-hidden="true" />
      
      <div className="sjmw-testimonials__container">
        
        {/* Header */}
        <header className="sjmw-testimonials__header">
          <h2 className="sjmw-testimonials__title animate-fade-up" style={{ animationDelay: '0.1s' }}>
            What our Clients say!
          </h2>
        </header>

        {/* Marquee Area */}
        <div className="sjmw-testimonials__marquee-wrapper">
          
          {/* Subtle Edge Masks */}
          <div className="sjmw-testimonials__edge sjmw-testimonials__edge--left" aria-hidden="true" />
          <div className="sjmw-testimonials__edge sjmw-testimonials__edge--right" aria-hidden="true" />

          {/* Row 1: Right to Left */}
          <div className="sjmw-testimonials__row sjmw-testimonials__row--1 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="sjmw-testimonials__track sjmw-testimonials__track--right-to-left">
              {row1Data.map((testimonial, index) => (
                <TestimonialCard 
                  key={`r1-${testimonial.id}-${index}`} 
                  testimonial={testimonial} 
                />
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="sjmw-testimonials__row sjmw-testimonials__row--2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="sjmw-testimonials__track sjmw-testimonials__track--left-to-right">
              {row2Data.map((testimonial, index) => (
                <TestimonialCard 
                  key={`r2-${testimonial.id}-${index}`} 
                  testimonial={testimonial} 
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
