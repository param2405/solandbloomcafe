import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sand section" style={{ padding: '4rem 5% 2rem 5%' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', borderBottom: '1px solid rgba(42, 26, 23, 0.1)', paddingBottom: '3rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
            <img src="/logo.jpg" alt="Sol & Bloom Logo" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
            <h3 className="font-display text-espresso" style={{ fontSize: '1.5rem', letterSpacing: '1px', margin: 0 }}>SOL & BLOOM</h3>
          </div>
          <p className="font-body text-espresso opacity-80 mb-2">Cafe + Bakery</p>
          <p className="font-body text-espresso opacity-80">Warm. Natural. Artisan.</p>
        </div>
        
        <div>
          <h4 className="font-display text-espresso mb-4" style={{ fontSize: '1.2rem' }}>Navigation</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><button className="font-body text-espresso opacity-80" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>Menu</button></li>
            <li><button className="font-body text-espresso opacity-80" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}>Our Story</button></li>
            <li><button className="font-body text-espresso opacity-80" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}>Gallery</button></li>
            <li><button className="font-body text-espresso opacity-80" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={() => document.getElementById('visit').scrollIntoView({ behavior: 'smooth' })}>Visit Us</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-display text-espresso mb-4" style={{ fontSize: '1.2rem' }}>Contact</h4>
          <p className="font-body text-espresso opacity-80 mb-2">[ADD VERIFIED ADDRESS]</p>
          <p className="font-body text-espresso opacity-80 mb-2">[ADD VERIFIED PHONE]</p>
          <p className="font-body text-espresso opacity-80 mb-4">[ADD VERIFIED EMAIL]</p>
          <a href="https://www.instagram.com/solandbloom.cafe/" target="_blank" rel="noreferrer" className="font-body text-espresso" style={{ textDecoration: 'underline' }}>Instagram</a>
        </div>
      </div>
      
      <div className="container" style={{ textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Sol & Bloom Cafe + Bakery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
