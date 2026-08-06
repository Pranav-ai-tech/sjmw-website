import './Hero.css';
import heroImage from '../../assets/4722af16-cce2-47cb-93c1-d9f73c6f7751.jpg';
import StatsCard from '../StatsCard/StatsCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ── Statistics data ───────────────────────────────────────── */
const STATS = [
  { number: '36+',   label: 'Years in Industry',   delay: '0s'   },
  { number: '5000+', label: 'Tons Manufactured',   delay: '0.6s' },
  { number: '150+',  label: 'Business Clients',    delay: '1.2s' },
  { number: '99%',   label: 'Quality Assurance',   delay: '1.8s' },
];

/**
 * Hero Component
 *
 * Full-viewport landing section featuring:
 * - Ken Burns background zoom animation
 * - Dark overlay with gradient depth
 * - Left: headline, description, CTA buttons
 * - Right: 2×2 glassmorphism stats card grid
 * - Scroll indicator at bottom
 */
export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section 
      id="home" 
      className={`hero reveal-section ${isVisible ? 'is-visible' : ''}`} 
      aria-labelledby="hero-heading"
      ref={ref}
    >

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

      {/* ── Main Content Grid ────────────────────────────────── */}
      <div className="hero__content">

        {/* ── Left Column ────────────────────────────────────── */}
        <div className="hero__left">

          {/* Industry badge */}
          <div className="hero__badge" aria-label="Established industrial manufacturer">
            <span className="hero__badge-dot" aria-hidden="true" />
            <span className="hero__badge-text">Since 1988 · Aluminium Manufacturing</span>
          </div>

          {/* Main heading */}
          <h1 id="hero-heading" className="hero__heading">
            Precision{' '}
            <span className="hero__heading-accent">Aluminium</span>{' '}
            Manufacturing for Modern Industries
          </h1>

          {/* Description */}
          <p className="hero__description">
            For over 36 years, Sri Jothi Moulding Works has been delivering
            high-quality aluminium ingots with advanced manufacturing processes,
            strict quality control, and reliable industrial solutions.
          </p>

          {/* CTA Buttons */}
          <div className="hero__buttons">
            <a href="#products" className="btn-primary" aria-label="Explore our products">
              Explore Products
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>

            <span className="hero__btn-divider" role="separator" aria-hidden="true" />

            <a href="#contact" className="btn-secondary" aria-label="Contact us">
              Contact Us
            </a>
          </div>


        </div>

        {/* ── Right Column: Stats ─────────────────────────────── */}
        <div className="hero__right">
          <div className="stats-grid" role="list" aria-label="Company statistics">
            {STATS.map(({ number, label, delay }) => (
              <StatsCard
                key={label}
                number={number}
                label={label}
                delay={delay}
              />
            ))}
          </div>
        </div>

      </div>

      {/* ── Scroll Hint ──────────────────────────────────────── */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </div>

    </section>
  );
}
