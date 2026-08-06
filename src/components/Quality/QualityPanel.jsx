import React from 'react';

/**
 * QualityPanel Component
 * 
 * Displays the Quality Assurance Standards checklist in a glassmorphism card.
 */
export default function QualityPanel() {
  const standards = [
    '100% Composition Tested',
    'Spectrometer Verified',
    'Batch Traceability via ERP',
    'Final Inspection Completed'
  ];

  return (
    <div className="quality-panel">
      <h3 className="quality-panel__title">Quality Assurance Standards</h3>
      <ul className="quality-panel__list">
        {standards.map((standard, index) => (
          <li key={index} className="quality-panel__item">
            <span className="quality-panel__icon" aria-hidden="true">✓</span>
            {standard}
          </li>
        ))}
      </ul>
    </div>
  );
}
