import React from 'react';
import { getIconForIndustry } from '../../data/testimonialData';
import './Testimonials.css';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="sjmw-testimonial-card">
      <div className="sjmw-testimonial-card__header">
        <div className="sjmw-testimonial-card__avatar">
          {getIconForIndustry(testimonial.id)}
        </div>
        <div className="sjmw-testimonial-card__info">
          <span className="sjmw-testimonial-card__name">{testimonial.company}</span>
          <span className="sjmw-testimonial-card__role">{testimonial.industry}</span>
        </div>
      </div>
      <p className="sjmw-testimonial-card__text">
        "{testimonial.text}"
      </p>
    </div>
  );
}
