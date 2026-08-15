import React from 'react';
import './Capability.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Capability() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="sjmw-capability" id="capability" ref={ref}>
      <div className="sjmw-capability__container">
        
        {/* Header Section */}
        <div className={`sjmw-capability__header ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="sjmw-capability__title">
            Built for Industries.<br />
            Trusted for Excellence.
          </h2>
          <p className="sjmw-capability__subtitle">
            Premium aluminium alloy solutions manufactured with precision,<br />
            consistency and industrial expertise.
          </p>
          <a href="#contact" className="sjmw-capability__cta">
            Talk to Our Team <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Visual Map Area */}
        <div className={`sjmw-capability__visual ${isVisible ? 'is-visible' : ''}`}>
          
          {/* Abstract Dotted Background */}
          <div className="sjmw-capability__map-bg"></div>

          {/* SVG Connecting Lines Overlay */}
          <svg className="sjmw-capability__lines" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice">
            {/* Elegant Global Route */}
            <path className="sjmw-capability__path" d="M 150 280 Q 400 200 600 320 T 900 280" style={{ animationDelay: '0s' }} />
            
            {/* Nodes */}
            <circle cx="150" cy="280" r="5" className="sjmw-capability__node" style={{ animationDelay: '0s' }} />
            <circle cx="600" cy="320" r="5" className="sjmw-capability__node" style={{ animationDelay: '1.2s' }} />
            <circle cx="900" cy="280" r="5" className="sjmw-capability__node" style={{ animationDelay: '2.5s' }} />
          </svg>

          {/* Floating Statistic Cards */}
          <div className="sjmw-capability__cards">
            
            <div className="sjmw-stat-card card-1">
              <span className="sjmw-stat-card__indicator"></span>
              <div className="sjmw-stat-card__content">
                <span className="sjmw-stat-card__label">Experience</span>
                <span className="sjmw-stat-card__value">36+</span>
                <span className="sjmw-stat-card__desc">Years of Manufacturing</span>
              </div>
            </div>

            <div className="sjmw-stat-card card-2">
              <span className="sjmw-stat-card__indicator"></span>
              <div className="sjmw-stat-card__content">
                <span className="sjmw-stat-card__label">Foundation</span>
                <span className="sjmw-stat-card__value">1988</span>
                <span className="sjmw-stat-card__desc">Established</span>
              </div>
            </div>

            <div className="sjmw-stat-card card-3">
              <span className="sjmw-stat-card__indicator"></span>
              <div className="sjmw-stat-card__content">
                <span className="sjmw-stat-card__label">Quality</span>
                <span className="sjmw-stat-card__value">Premium</span>
                <span className="sjmw-stat-card__desc">Aluminium Alloy Ingots</span>
              </div>
            </div>

            <div className="sjmw-stat-card card-4">
              <span className="sjmw-stat-card__indicator"></span>
              <div className="sjmw-stat-card__content">
                <span className="sjmw-stat-card__label">Reach</span>
                <span className="sjmw-stat-card__value">Multiple</span>
                <span className="sjmw-stat-card__desc">Industrial Applications</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
