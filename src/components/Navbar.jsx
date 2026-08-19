import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <div className="logo" onClick={() => scrollToSection('hero')} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <img src="/logo.jpg" alt="Sol & Bloom Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
          <span className="font-display">SOL & BLOOM</span>
        </div>

        <div className="desktop-menu md-hidden">
          <ul className="nav-links">
            <li onClick={() => scrollToSection('menu')}>Menu</li>
            <li onClick={() => scrollToSection('story')}>Our Story</li>
            <li onClick={() => scrollToSection('gallery')}>Gallery</li>
            <li onClick={() => scrollToSection('visit')}>Visit</li>
            <li><a href="https://www.instagram.com/solandbloom.cafe/" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
          <button className="btn btn-primary nav-cta" onClick={() => scrollToSection('visit')}>Visit Us</button>
        </div>

        <div className="mobile-toggle md-hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links font-display">
          <li onClick={() => scrollToSection('menu')}>Menu</li>
          <li onClick={() => scrollToSection('story')}>Our Story</li>
          <li onClick={() => scrollToSection('gallery')}>Gallery</li>
          <li onClick={() => scrollToSection('visit')}>Visit</li>
          <li><a href="https://www.instagram.com/solandbloom.cafe/" target="_blank" rel="noreferrer">Instagram</a></li>
        </ul>
        <button className="btn btn-primary" onClick={() => scrollToSection('visit')}>Visit Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
