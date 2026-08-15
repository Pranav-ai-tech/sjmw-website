import React from 'react';
import { Link } from 'react-router-dom';
import './Quality.css';
import { qualityFeatures } from '../../data/qualityFeatures';
import { useScrollReveal } from '../../hooks/useScrollReveal';

// Premium industrial SVG icons for the 4 features
const FeatureIcons = {
  1: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ), // Consistent Quality (Checkmark circle/badge)
  2: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ), // 35+ Years (Gear)
  3: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="22" y1="12" x2="18" y2="12" />
      <line x1="6" y1="12" x2="2" y2="12" />
      <line x1="12" y1="6" x2="12" y2="2" />
      <line x1="12" y1="22" x2="12" y2="18" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ), // Precision Manufacturing (Crosshair)
  4: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ) // Trusted Partner (Shield check)
};

export default function Quality() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="quality" 
      className={`sjmw-quality reveal-section ${isVisible ? 'is-visible' : ''}`}
      ref={ref}
    >
      <div className="sjmw-quality__bg-grid" />
      
      <div className="sjmw-quality__container">
        
        {/* Header (2 Columns) */}
        <header className="sjmw-quality__header">
          <div className="sjmw-quality__header-left">
            <h2 className="sjmw-quality__title animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Why Choose <span className="sjmw-quality__title-highlight">SJMW?</span>
            </h2>
          </div>
          <div className="sjmw-quality__header-right">
            <p className="sjmw-quality__desc animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Discover the difference of working with a trusted aluminium alloy manufacturer focused on quality, consistency, and long-term industrial partnerships.
            </p>
            <Link 
              to="/about" 
              className="sjmw-quality__cta animate-fade-up" 
              style={{ animationDelay: '0.3s' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              Learn More &rarr;
            </Link>
          </div>
        </header>

        {/* Features (4 Columns) */}
        <div className="sjmw-quality__features">
          {qualityFeatures.map((feature, index) => (
            <div 
              key={feature.id} 
              className="sjmw-quality__feature animate-fade-up"
              style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
            >
              <div className="sjmw-quality__icon-wrapper">
                {FeatureIcons[feature.id]}
              </div>
              <h3 className="sjmw-quality__feature-title">{feature.title}</h3>
              <p className="sjmw-quality__feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
