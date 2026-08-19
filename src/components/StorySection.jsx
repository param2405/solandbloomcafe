import React from 'react';
import Motif from './Motif';

const StorySection = () => {
  return (
    <section id="story" className="section bg-sand">
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <Motif className="text-gold mb-4 mx-auto" style={{ margin: '0 auto' }} />
          <h2 className="font-display text-espresso mb-6 text-4xl">Our Story</h2>
          <p className="font-body text-espresso mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.9 }}>
            Born from a passion for honest food and exceptional coffee, Sol & Bloom was created to be a gathering place. 
            The name reflects our philosophy: "Sol" for the warmth and light we hope to bring to your day, and "Bloom" 
            for the natural ingredients and growth of our community.
          </p>
          <p className="font-body text-espresso" style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.9 }}>
            We focus on what matters—sourcing ethically, baking with intention, and serving every cup with a smile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
