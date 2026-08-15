import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import Manufacturing from '../components/Manufacturing/Manufacturing';
import Quality from '../components/Quality/Quality';
import Testimonials from '../components/Testimonials/Testimonials';
import Capability from '../components/Capability/Capability';


/**
 * Home Page
 *
 * Entry point for the SJMW landing page.
 * Composes Navbar + Hero sections.
 * Additional sections (About, Products, etc.) can be added here.
 */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Manufacturing />
      <Quality />
      <Testimonials />
      <Capability />


      {/*
        ── Future Sections ──────────────────────────────────
        <About />
        <Products />
        <Manufacturing />
        <Quality />
        <Gallery />
        <Contact />
        ──────────────────────────────────────────────────── */}
    </main>
  );
}
