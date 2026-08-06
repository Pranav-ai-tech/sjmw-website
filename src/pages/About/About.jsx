import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './About.css';
import factoryImage from '../../assets/4722af16-cce2-47cb-93c1-d9f73c6f7751.jpg'; // Using the real factory image

const MILESTONES = [
  { 
    year: '1988', 
    label: 'Foundation',
    details: [
      'SJMW Established',
      'Aluminium Alloy Manufacturing Begins',
      'Chennai Manufacturing Facility'
    ]
  },
  { 
    year: '2000', 
    label: 'Expansion',
    details: [
      'Production Capacity Increased',
      'New Industrial Customers',
      'Expanded Supply Network'
    ]
  },
  { 
    year: '2012', 
    label: 'Modernization',
    details: [
      'Advanced Furnace Technology',
      'Better Quality Control',
      'Improved Manufacturing Efficiency'
    ]
  },
  { 
    year: '2025', 
    label: 'Sustainability',
    details: [
      'Eco-friendly Manufacturing',
      'Better Energy Utilization',
      'Responsible Material Recycling'
    ]
  },
  { 
    year: 'Today', 
    label: 'Industry Leader',
    details: [
      '36+ Years of Manufacturing',
      'Premium Aluminium Alloy Ingots',
      'Trusted by 150+ Industrial Customers'
    ]
  }
];

export default function About() {
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeMilestones, setActiveMilestones] = useState([false, false, false, false, false]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Timeline Animation Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Ensure it only runs once

          // Progress animation sequence (1.8s total duration)
          const totalDuration = 1800; // ms
          const numMilestones = 5;
          const stepDuration = totalDuration / (numMilestones - 1); // 450ms per step

          // Animate the progress bar width over 1.8s
          setProgress(100);

          // Activate milestones sequentially
          for (let i = 0; i < numMilestones; i++) {
            setTimeout(() => {
              setActiveMilestones(prev => {
                const newState = [...prev];
                newState[i] = true;
                return newState;
              });

            }, i * stepDuration);
          }
        }
      },
      { threshold: 0.3 } // Trigger when 30% of timeline is visible
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) observer.unobserve(timelineRef.current);
    };
  }, [hasAnimated]);

  return (
    <div className="about-page">
      <Navbar />

      {/* Background Elements */}
      <div className="about__noise" aria-hidden="true"></div>
      <div className="about__glow" aria-hidden="true"></div>

      <div className="about__content">
        
        {/* ── Section 1: Hero Banner ──────────────────────────────── */}
        <section className="about-hero" aria-labelledby="about-hero-heading">
          <img 
            src={factoryImage} 
            alt="Sri Jothi Moulding Works factory exterior" 
            className="about-hero__bg"
          />
          <div className="about-hero__overlay"></div>
          
          <div className="about-hero__inner">
            <div className="about-hero__label">
              <span className="about-hero__label-dot"></span>
              ABOUT SJMW
            </div>
            <h1 id="about-hero-heading" className="about-hero__title">
              Our Legacy of <span className="about-hero__title-highlight">Aluminium Excellence</span>
            </h1>
            <p className="about-hero__desc">
              For more than 36 years, Sri Jothi Moulding Works has been manufacturing premium aluminium alloy ingots, setting the benchmark for industrial quality, structural integrity, and technical excellence. Our commitment to precision engineering and consistent quality has made us a trusted partner for industries across India.
            </p>
          </div>
        </section>

        {/* ── Section 2: Company Overview ─────────────────────────── */}
        <section className="about-overview" aria-labelledby="about-overview-heading">
          
          <div className="about-overview__left">
            <h2 id="about-overview-heading" className="about-overview__title">
              Manufacturing Excellence Since 1988
            </h2>
            <p className="about-overview__text">
              Established with a vision to redefine industrial standards, Sri Jothi Moulding Works has grown into a trusted aluminium alloy manufacturer known for quality, reliability, and precision. Over the past three decades, SJMW has continuously invested in advanced manufacturing technologies, stringent quality control systems, and long-term customer relationships. Today, our premium aluminium alloy ingots support automotive, engineering, foundry, electrical, and industrial applications across the country.
            </p>
            
            <div className="about-overview__grid">
              <div className="about-card">
                <span className="about-card__icon" aria-hidden="true">🏭</span>
                <h3 className="about-card__title">36+ Years of Excellence</h3>
                <p className="about-card__subtitle">Manufacturing Experience</p>
              </div>
              <div className="about-card">
                <span className="about-card__icon" aria-hidden="true">⚙️</span>
                <h3 className="about-card__title">Premium Alloy Manufacturing</h3>
                <p className="about-card__subtitle">Industrial Grade Aluminium Ingots</p>
              </div>
              <div className="about-card">
                <span className="about-card__icon" aria-hidden="true">✓</span>
                <h3 className="about-card__title">Strict Quality Assurance</h3>
                <p className="about-card__subtitle">Every Batch Thoroughly Tested</p>
              </div>
              <div className="about-card">
                <span className="about-card__icon" aria-hidden="true">🤝</span>
                <h3 className="about-card__title">Trusted Industrial Partner</h3>
                <p className="about-card__subtitle">Serving Manufacturers Across India</p>
              </div>
            </div>
          </div>

          <div className="about-overview__right">
            <div className="about-overview__overlay"></div>
            <img 
              src={factoryImage} 
              alt="Sri Jothi Moulding Works facility" 
              className="about-overview__image"
            />
          </div>
          
        </section>

        {/* ── Section 3: Manufacturing Journey ────────────────────── */}
        <section className="about-journey" aria-labelledby="about-journey-heading">
          <div className="about-journey__header">
            <h2 id="about-journey-heading" className="about-journey__title">Our Manufacturing Journey</h2>
            <p className="about-journey__subtitle">
              A legacy forged through precision, innovation, and continuous growth.
            </p>
          </div>

          <div className="about-timeline" ref={timelineRef}>
            
            {/* The Background Track */}
            <div className="about-timeline__track"></div>
            
            {/* The Animated Orange Progress Line */}
            <div 
              className="about-timeline__progress" 
              style={{ '--progress': `${progress}%` }}
            ></div>

            {/* Timeline Milestones */}
            {MILESTONES.map((milestone, index) => (
              <div 
                key={index} 
                className={`about-timeline__item ${activeMilestones[index] ? 'active' : ''} ${hoveredIndex === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setHoveredIndex(hoveredIndex === index ? null : index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={hoveredIndex === index}
              >
                <div className="about-timeline__dot"></div>
                <div className="about-timeline__content">
                  <div className="about-timeline__year">{milestone.year}</div>
                  <div className="about-timeline__label">{milestone.label}</div>
                </div>

                {/* Floating Information Card */}
                <div className={`about-timeline__floating-card ${hoveredIndex === index ? 'visible' : ''}`}>
                  <div className="about-timeline__floating-title">{milestone.year}</div>
                  <ul className="about-timeline__floating-list">
                    {milestone.details.map((detail, idx) => (
                      <li key={idx}>✓ {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>
        </section>

      </div>
    </div>
  );
}
