import { useState, useRef, useEffect } from 'react';
import { getIconForIndustry } from '../../data/testimonialData';
import './Testimonials.css';

export default function TestimonialCard({ testimonial, index, isVisible }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  
  // Stagger stars animation delay based on card index
  const starDelays = [0, 80, 160, 240, 320];

  useEffect(() => {
    // Parallax effect logic
    const handleMouseMove = (e) => {
      // Respect prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      
      // Disable on mobile/tablet
      if (window.innerWidth <= 1024) return;

      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -2; // Max 2deg
      const rotateY = ((x - centerX) / centerX) * 3;  // Max 3deg
      
      setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateY(-8px)`);
    };

    const handleMouseLeave = () => {
      setTransformStyle(''); // Reset to default CSS hover state (handled in CSS)
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div 
      className={`testimonial-card-wrapper ${isVisible ? 'stars-visible' : ''}`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div 
        ref={cardRef}
        className="testimonial-card"
        style={transformStyle ? { transform: transformStyle } : {}}
      >
        <div className="testimonial__stars" aria-hidden="true">
          {starDelays.map((delay, i) => (
            <span 
              key={i} 
              className="testimonial__star"
              style={{ animationDelay: `${(index * 120) + 400 + delay}ms` }}
            >
              ★
            </span>
          ))}
        </div>
        
        <p className="testimonial__text">"{testimonial.text}"</p>
        
        <div className="testimonial__footer">
          <div className="testimonial__icon-wrap">
            {getIconForIndustry(testimonial.id)}
          </div>
          <div className="testimonial__meta">
            <span className="testimonial__company">{testimonial.company}</span>
            <span className="testimonial__details">{testimonial.industry} • {testimonial.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
