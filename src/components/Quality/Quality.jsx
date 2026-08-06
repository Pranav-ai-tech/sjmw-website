import React from 'react';
import './Quality.css';
import { qualityFeatures } from '../../data/qualityFeatures';
import QualityFeatureCard from './QualityFeatureCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import QualityPanel from './QualityPanel';
import qualityImage from '../../assets/quality-inspection.png';

/**
 * Quality Section Component
 * 
 * Showcases SJMW's rigorous quality control process.
 * Layout: 2 Columns on desktop (40% left with 2x2 grid of feature cards, 60% right with image and panel).
 */
export default function Quality() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="quality" 
      className={`quality-section reveal-section ${isVisible ? 'is-visible' : ''}`} 
      aria-labelledby="quality-heading"
      ref={ref}
    >
      
      {/* Background Elements */}
      <div className="quality__noise" aria-hidden="true" />
      <div className="quality__glow" aria-hidden="true" />
      
      <div className="quality__container">
        
        {/* Section Header */}
        <header className="quality__header">
          <div className="quality__label">
            <span className="quality__label-dot"></span>
            Quality Excellence
          </div>
          <h2 id="quality-heading" className="quality__title">
            <span className="quality__title-highlight">Quality</span> You Can Trust
          </h2>
          <p className="quality__desc">
            At Sri Jothi Moulding Works, quality is integrated into every stage of aluminium alloy manufacturing. 
            From raw material inspection to final composition testing, every ingot undergoes rigorous quality checks 
            to ensure consistency, reliability, and compliance with industrial standards.
          </p>
        </header>

        {/* Main Layout (2 Columns on Desktop) */}
        <div className="quality__main">
          
          {/* Left Column (Feature Cards Grid) */}
          <div className="quality__features-grid">
            {qualityFeatures.map((feature, index) => (
              <QualityFeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>

          {/* Right Column (Image + Assurance Panel) */}
          <div className="quality__media-wrapper">
            
            <div className="quality__image-container">
              <img 
                src={qualityImage} 
                alt="Quality control technician using a spectrometer on an aluminium ingot in a laboratory" 
                className="quality__image" 
              />
            </div>

            <QualityPanel />
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
