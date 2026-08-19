import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import FeaturedItems from './components/FeaturedItems';
import Menu from './components/Menu';
import BakerySection from './components/BakerySection';
import StorySection from './components/StorySection';
import ExperienceSection from './components/ExperienceSection';
import Gallery from './components/Gallery';
import InstagramCTA from './components/InstagramCTA';
import VisitSection from './components/VisitSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandIntro />
      <FeaturedItems />
      <Menu />
      <BakerySection />
      <StorySection />
      <ExperienceSection />
      <Gallery />
      <InstagramCTA />
      <VisitSection />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
