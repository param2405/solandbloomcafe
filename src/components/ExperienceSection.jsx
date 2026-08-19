import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="section bg-espresso">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center' }}>
        <div className="experience-text">
          <h2 className="font-display text-cream mb-4 text-4xl">The Experience</h2>
          <p className="font-body text-cream mb-4" style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.8 }}>
            Our space is designed to be an extension of your living room. Natural light, 
            warm wood tones, and the rich aroma of espresso invite you to slow down.
          </p>
          <p className="font-body text-cream" style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.8 }}>
            Whether you're catching up with friends, diving into a good book, or simply 
            enjoying a moment of quiet, Sol & Bloom offers a tranquil escape from the bustling city.
          </p>
        </div>
        <div className="experience-image" style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '12px' }}>
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" 
            alt="Cafe Interior" 
            className="hover-scale"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          .experience-text { order: 2; }
          .experience-image { order: 1; height: 350px !important; }
          .bg-espresso .container { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
