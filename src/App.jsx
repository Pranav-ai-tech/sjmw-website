import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/About';
import Catalogue from './pages/Catalogue/Catalogue';

import Footer from './components/Footer/Footer';

import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';

/**
 * App.jsx — Root Application Component
 * Sri Jothi Moulding Works
 */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/catalogue" element={<Catalogue />} />
      </Routes>
      <FloatingWhatsApp />
      <Footer />
    </Router>
  );
}
