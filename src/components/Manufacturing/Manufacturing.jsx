import React from 'react';
import './Manufacturing.css';
import { manufacturingSteps } from '../../data/manufacturingSteps';
import ProcessCard from './ProcessCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import manufacturingImage from '../../assets/manufacturing-process.png';

/**
 * Manufacturing Section Component
 * 
 * Showcases the 6-step manufacturing process using a 3-column layout on desktop.
 * Left: Steps 1-3, Center: Image, Right: Steps 4-6.
 */
export default function Manufacturing() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { number: '36+', label: 'Years of Manufacturing', icon: '◷' },
    { number: '5000+', label: 'Tons Manufactured', icon: '⛟' },
    { number: '100%', label: 'Composition Tested', icon: '⚗' },
    { number: '99%', label: 'Quality Assurance', icon: '✓' }
  ];

  return (
    <section 
      id="manufacturing" 
      className={`manufacturing-section reveal-section ${isVisible ? 'is-visible' : ''}`} 
      aria-labelledby="manufacturing-heading"
      ref={ref}
    >
      
      {/* Background Elements */}
      <div className="manufacturing__noise" aria-hidden="true" />
      
      <div className="manufacturing__container">
        
        {/* Section Header */}
        <header className="manufacturing__header">
          <div className="manufacturing__label">
            <span className="manufacturing__label-dot"></span>
            Manufacturing Excellence
          </div>
          <h2 id="manufacturing-heading" className="manufacturing__title">
            Our Aluminium <span className="manufacturing__title-highlight">Manufacturing</span> Process
          </h2>
          <p className="manufacturing__subtitle">
            At Sri Jothi Moulding Works, every aluminium alloy ingot is manufactured through a carefully 
            controlled production process, combining advanced technology, skilled craftsmanship, and 
            rigorous quality control to deliver premium industrial-grade aluminium alloys.
          </p>
        </header>

        {/* Main Layout (3 Columns on Desktop) */}
        <div className="manufacturing__main">
          
          {/* Left Column (Steps 1-3) */}
          <div className="manufacturing__col-left">
            {manufacturingSteps.slice(0, 3).map((step, index) => (
              <ProcessCard key={step.id} step={step} index={index} />
            ))}
          </div>

          {/* Center Column (Image) */}
          <div className="manufacturing__col-center">
            <div className="manufacturing__image-glow" aria-hidden="true"></div>
            <div className="manufacturing__image-wrapper">
              <img 
                src={manufacturingImage} 
                alt="Molten aluminium being poured in a state-of-the-art facility" 
                className="manufacturing__image" 
              />
            </div>
            {/* Optional subtle connectors */}
            <div className="manufacturing__connector"></div>
          </div>

          {/* Right Column (Steps 4-6) */}
          <div className="manufacturing__col-right">
            {manufacturingSteps.slice(3, 6).map((step, index) => (
              <ProcessCard key={step.id} step={step} index={index + 3} />
            ))}
          </div>
          
        </div>

        {/* Bottom Statistics */}
        <div className="manufacturing-stats">
          {stats.map((stat, idx) => (
            <div key={idx} className="m-stat-card">
              <span className="m-stat-card__number">{stat.number}</span>
              <span className="m-stat-card__label">{stat.label}</span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
