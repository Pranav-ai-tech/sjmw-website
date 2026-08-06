import React from 'react';

/**
 * QualityFeatureCard Component
 * 
 * Reusable glassmorphism card to display a single quality feature.
 */
export default function QualityFeatureCard({ feature, index }) {
  // Stagger animation based on index
  const delay = `${0.1 * index}s`;

  return (
    <div className="quality-feature-card" style={{ animationDelay: delay }}>
      <div className="quality-feature-card__icon" aria-hidden="true">
        {feature.icon}
      </div>
      <h3 className="quality-feature-card__title">{feature.title}</h3>
      <p className="quality-feature-card__desc">{feature.description}</p>
    </div>
  );
}
