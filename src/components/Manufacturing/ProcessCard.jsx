import React from 'react';

/**
 * ProcessCard Component
 * 
 * Reusable glassmorphism card to display a single manufacturing step.
 */
export default function ProcessCard({ step, index }) {
  // Stagger animation based on index
  const delay = `${0.1 * index}s`;

  return (
    <div className="process-card" style={{ animationDelay: delay }}>
      <div className="process-card__header">
        <span className="process-card__step">[{step.id}]</span>
        <span className="process-card__badge">{step.badge}</span>
      </div>
      <h3 className="process-card__title">{step.title}</h3>
      <p className="process-card__desc">{step.description}</p>
    </div>
  );
}
