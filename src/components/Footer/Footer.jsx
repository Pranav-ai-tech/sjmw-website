import { useLocation, useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import sjmwLogo from '../../assets/sjmw-logo.jpg';
import './Footer.css';

export default function Footer() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const [path, query] = href.split('?');
    if (path.startsWith('/#')) {
      const targetId = path.substring(2);
      if (location.pathname !== '/') {
        navigate(href);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
          // Manually trigger a popstate event so the Products component detects the URL change
          window.dispatchEvent(new Event('popstate'));
        } else {
          navigate(href);
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <footer className={`footer ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      {/* Background Watermark */}
      <div className="footer__watermark" aria-hidden="true">
        SJMW
      </div>

      <div className="footer__inner">
        <div className="footer__grid">
          
          {/* Column 1: Brand */}
          <div className="footer__column">
            <div className="footer__brand">
              <img src={sjmwLogo} alt="SJMW Logo" className="footer__logo" />
              <div className="footer__brand-text">
                <span className="footer__brand-name">SJMW</span>
                <span className="footer__brand-name" style={{fontSize: '0.875rem', fontWeight: 'normal'}}>Sri Jothi Moulding Works</span>
              </div>
            </div>
            <div className="footer__subtitle">
              Premium Aluminium Alloy Manufacturer Since 1988
            </div>
            <p className="footer__desc">
              For more than 35 years, Sri Jothi Moulding Works has been manufacturing premium aluminium alloy ingots trusted by foundries, automotive manufacturers, engineering industries, and OEMs across India.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <span>in</span>
              </a>
              <a href="mailto:info@sjmw.in" className="footer__social-link" aria-label="Email">
                <span>✉</span>
              </a>
              <a href="#" className="footer__social-link" aria-label="WhatsApp">
                <span style={{fontWeight: 'bold'}}>W</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer__column">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__list">
              <li><a href="/#home" onClick={(e) => handleLinkClick(e, '/#home')} className="footer__link">Home</a></li>
              <li><a href="/#products" onClick={(e) => handleLinkClick(e, '/#products')} className="footer__link">Products</a></li>
              <li><a href="/#manufacturing" onClick={(e) => handleLinkClick(e, '/#manufacturing')} className="footer__link">Manufacturing</a></li>
              <li><a href="/#quality" onClick={(e) => handleLinkClick(e, '/#quality')} className="footer__link">Quality</a></li>
              <li><a href="/#testimonials" onClick={(e) => handleLinkClick(e, '/#testimonials')} className="footer__link">Testimonials</a></li>
              <li><a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="footer__link">About Us</a></li>
              <li><a href="/#contact" onClick={(e) => handleLinkClick(e, '/#contact')} className="footer__link">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="footer__column">
            <h3 className="footer__title">Products</h3>
            <ul className="footer__list">
              <li><a href="/#products?alloy=adc12" onClick={(e) => handleLinkClick(e, '/#products?alloy=adc12')} className="footer__link">Die Casting Alloys</a></li>
              <li><a href="/#products?alloy=lm6" onClick={(e) => handleLinkClick(e, '/#products?alloy=lm6')} className="footer__link">Gravity Casting Alloys</a></li>
              <li><a href="/#products?alloy=adc12" onClick={(e) => handleLinkClick(e, '/#products?alloy=adc12')} className="footer__link">Automotive Alloys</a></li>
              <li><a href="/#products?alloy=lm24" onClick={(e) => handleLinkClick(e, '/#products?alloy=lm24')} className="footer__link">Engineering Alloys</a></li>
              <li><a href="/#products?alloy=mm230" onClick={(e) => handleLinkClick(e, '/#products?alloy=mm230')} className="footer__link">Customized Alloys</a></li>
            </ul>
            <a href="/#products" onClick={(e) => handleLinkClick(e, '/#products')} className="footer__explore-link">
              Explore Full Catalogue <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Column 4: Contact & Company */}
          <div className="footer__column">
            <h3 className="footer__title">Contact & Company</h3>
            <ul className="footer__list">
              <li className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">📍</span>
                <span>Chennai, Tamil Nadu</span>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">☎</span>
                <span>+91 95517 98698</span>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">✉</span>
                <span>info@sjmw.in</span>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">🕒</span>
                <span>Monday–Saturday<br/>9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            © 2026 Sri Jothi Moulding Works. All Rights Reserved.
          </div>
          <div className="footer__credits">
            Designed & Developed by <span className="footer__procomets">Procomets</span>.
          </div>
        </div>
      </div>
    </footer>
  );
}
