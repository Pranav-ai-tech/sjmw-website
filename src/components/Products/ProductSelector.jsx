import React from 'react';

/**
 * ProductSelector Component
 * 
 * Displays the list of available alloys.
 * Highlights the currently selected alloy.
 */
export default function ProductSelector({ alloys, selectedAlloy, onSelectAlloy }) {
  return (
    <div className="product-selector">
      <div className="product-selector__header">
        <h3 className="product-selector__title">Alloy Catalogue</h3>
        <span className="product-selector__badge">{alloys.length} Variants</span>
      </div>
      
      <div className="product-selector__list">
        {alloys.map((alloy) => (
          <div
            key={alloy.id}
            className={`product-selector__item ${selectedAlloy.id === alloy.id ? 'active' : ''}`}
            onClick={() => onSelectAlloy(alloy)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => { if (e.key === 'Enter') onSelectAlloy(alloy); }}
          >
            <div className="product-selector__item-content">
              <div className="product-selector__item-header">
                <span className="product-selector__item-name">{alloy.name}</span>
                <span className="product-selector__item-badge">{alloy.badge}</span>
              </div>
              <span className="product-selector__item-desc">{alloy.description}</span>
            </div>
            <span className="product-selector__item-icon">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}
