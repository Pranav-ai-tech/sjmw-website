import React from 'react';

/**
 * ProductStats Component
 * 
 * Displays the 4 bottom statistics in a grid.
 */
export default function ProductStats() {
  const stats = [
    { number: '15+', label: 'Alloy Grades', icon: '❖' },
    { number: '36+', label: 'Years Experience', icon: '◷' },
    { number: '100%', label: 'Composition Tested', icon: '⚗' },
    { number: '99%', label: 'Quality Assurance', icon: '✓' }
  ];

  return (
    <div className="product-stats">
      {stats.map((stat, idx) => (
        <div key={idx} className="product-stat-card">
          <div className="product-stat-card__icon">
            {stat.icon}
          </div>
          <div className="product-stat-card__info">
            <span className="product-stat-card__number">{stat.number}</span>
            <span className="product-stat-card__label">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
