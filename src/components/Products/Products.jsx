import React, { useState } from 'react';
import './Products.css';
import { alloys } from '../../data/alloys';
import ProductSelector from './ProductSelector';
import ProductCard from './ProductCard';
import ProductStats from './ProductStats';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/**
 * Products Section Component
 * 
 * Main wrapper for the "Our Aluminium Alloy Products" section.
 * Manages the state for the currently selected alloy and orchestrates
 * the layout with the selector, product card, and statistics.
 */
export default function Products() {
  const [selectedAlloy, setSelectedAlloy] = useState(alloys[0]);
  const { ref, isVisible } = useScrollReveal();

  // Listen for hash changes to update selected alloy from footer links
  React.useEffect(() => {
    const updateAlloyFromHash = () => {
      const hash = window.location.hash;
      if (hash.includes('?alloy=')) {
        const alloyId = hash.split('?alloy=')[1];
        const foundAlloy = alloys.find(a => a.id === alloyId);
        if (foundAlloy) {
          setSelectedAlloy(foundAlloy);
        }
      }
    };

    // Initial check
    updateAlloyFromHash();

    // Add listeners for hash changes and popstate (triggered by custom routing)
    window.addEventListener('hashchange', updateAlloyFromHash);
    window.addEventListener('popstate', updateAlloyFromHash);

    return () => {
      window.removeEventListener('hashchange', updateAlloyFromHash);
      window.removeEventListener('popstate', updateAlloyFromHash);
    };
  }, []);

  return (
    <section 
      id="products" 
      className={`products-section reveal-section ${isVisible ? 'is-visible' : ''}`} 
      aria-labelledby="products-heading"
      ref={ref}
    >
      
      {/* Background Elements */}
      <div className="products__noise" aria-hidden="true" />
      <div className="products__glow" aria-hidden="true" />
      
      <div className="products__container">
        
        {/* Section Header */}
        <header className="products__header">
          <h2 id="products-heading" className="products__title">
            Our <span className="products__title-highlight">Aluminium Alloy</span> Products
          </h2>
          <p className="products__subtitle">
            For over 36 years, Sri Jothi Moulding Works has been manufacturing premium aluminium alloy
            ingots that meet international quality standards for automotive, engineering, foundry, electrical
            and industrial applications.
          </p>
        </header>

        {/* Main Content Area */}
        <div className="products__main">
          
          {/* Left Panel: Alloy Selector */}
          <ProductSelector 
            alloys={alloys} 
            selectedAlloy={selectedAlloy} 
            onSelectAlloy={setSelectedAlloy} 
          />
          
          {/* Right Panel: Product Detail Card */}
          <ProductCard alloy={selectedAlloy} />
          
        </div>

        {/* Bottom Statistics Area */}
        <ProductStats />
        
      </div>
    </section>
  );
}
