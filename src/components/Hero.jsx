import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        {/* Using a high quality placeholder representing the artisan cafe vibe */}
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000" 
          alt="Sol and Bloom Cafe Interior" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content container">
        <h1 className="font-display animate-fade-in">SOL & BLOOM</h1>
        <h2 className="font-display animate-fade-in delay-1">CAFE + BAKERY</h2>
        
        <p className="hero-tagline animate-fade-in delay-2">
          "WARM. NATURAL. ARTISAN."
        </p>
        
        <div className="hero-buttons animate-fade-in delay-3">
          <button 
            className="btn btn-outline hero-btn"
            onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
          >
            EXPLORE MENU
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('visit').scrollIntoView({ behavior: 'smooth' })}
          >
            VISIT US
          </button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
