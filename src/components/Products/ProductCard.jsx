import React from 'react';
import ingotImage from '../../assets/ingot-product.png';

/**
 * ProductCard Component
 * 
 * Displays the detailed information for the currently selected alloy.
 */
export default function ProductCard({ alloy }) {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <div className="product-card__image-overlay">
          <span className="product-card__selection-badge">CURRENT SELECTION</span>
          <h2 className="product-card__title">{alloy.fullTitle}</h2>
        </div>
        <img 
          src={ingotImage} 
          alt="Premium Aluminium Alloy Ingot" 
          className="product-card__image" 
        />
      </div>

      <div className="product-card__specs">
        <div className="product-card__specs-grid">
          
          <div className="product-card__spec-group">
            <span className="product-card__spec-label">Applications</span>
            <ul className="product-card__spec-list">
              {alloy.applications.map((app, idx) => (
                <li key={idx} className="product-card__spec-item">{app}</li>
              ))}
            </ul>
          </div>

          <div className="product-card__spec-group">
            <span className="product-card__spec-label">Properties</span>
            <ul className="product-card__spec-list">
              {alloy.properties.map((prop, idx) => (
                <li key={idx} className="product-card__spec-item">{prop}</li>
              ))}
            </ul>
          </div>

          <div className="product-card__spec-group">
            <span className="product-card__spec-label">Composition</span>
            <span className="product-card__spec-value">{alloy.composition}</span>
          </div>

          <div className="product-card__spec-group">
            <span className="product-card__spec-label">Standard</span>
            <span className="product-card__spec-value">{alloy.standard}</span>
          </div>
          
        </div>

        <div className="product-card__actions">
          <a 
            href="/#contact" 
            className="btn-primary-product"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '/#contact');
              }
            }}
          >
            Request Quote 📄
          </a>
        </div>
      </div>
    </div>
  );
}
