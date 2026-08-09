import React from 'react';
import './Hero.css';
import heroImage from '../../assets/4722af16-cce2-47cb-93c1-d9f73c6f7751.jpg';
import ingotImage from '../../assets/ingot-product.png'; // Small ingot for the floating card
import StatsCard from '../StatsCard/StatsCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ── Statistics data ───────────────────────────────────────── */
const STATS = [
  { number: '35+',   label: 'Years in Industry',   delay: '0s'   },
  { number: '5000+', label: 'Tons Manufactured',   delay: '0.2s' },
  { number: '150+',  label: 'Industrial Customers',delay: '0.4s' },
  { number: '99%',   label: 'Quality Assurance',   delay: '0.6s' },
];

/**
 * Hero Component
 * Redesigned to match the premium Steevlp aesthetic with a massive 
 * rounded container, floating info card, and a circular overlapping button.
 */
export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section 
      id="home" 
      className={`hero-section reveal-section ${isVisible ? 'is-visible' : ''}`} 
      aria-labelledby="hero-heading"
      ref={ref}
    >
      <div className="hero__container">
        {/* ── Background Image ─────────────────────────────────── */}
        <div className="hero__bg" aria-hidden="true">
          <img
            src={heroImage}
            alt="Sri Jothi Moulding Works aluminium manufacturing facility"
            className="hero__bg-img"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* ── Overlay ──────────────────────────────────────────── */}
        <div className="hero__overlay" aria-hidden="true" />

        {/* ── Content ──────────────────────────────────────────── */}
        <div className="hero__content">
          
          <div className="hero__left">
            <h1 id="hero-heading" className="hero__heading">
              Precision Aluminium Manufacturing for Modern Industries
            </h1>

            <p className="hero__description">
              For over 35 years, Sri Jothi Moulding Works has been delivering
              high-quality aluminium ingots with advanced manufacturing processes,
              strict quality control, and reliable industrial solutions.
            </p>

            <div className="hero__buttons">
              <a href="#products" className="btn-hero-primary" aria-label="Get a free quote">
                GET A FREE QUOTE
                <span className="btn-arrow-circle" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Statistics ──────────────────────────────────── */}
      <div className="hero__stats-container">
        {STATS.map(({ number, label, delay }, index) => (
          <div className="hero__stat-block" key={label} style={{ animationDelay: delay }}>
            <span className="stat-number">{number}</span>
            <span className="stat-label">{label}</span>
            {index < STATS.length - 1 && <div className="stat-divider" />}
          </div>
        ))}
      </div>
    </section>
  );
}
