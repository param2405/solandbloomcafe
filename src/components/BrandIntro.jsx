import React from 'react';
import Motif from './Motif';
import './BrandIntro.css';

const BrandIntro = () => {
  return (
    <section className="brand-intro section bg-sand">
      <div className="container">
        <div className="intro-content">
          <div className="intro-text">
            <Motif className="text-gold mb-4" />
            <h2 className="font-display text-espresso mb-4">Crafting Moments of Warmth</h2>
            <p className="font-body text-espresso mb-4">
              At Sol & Bloom, we believe in the quiet beauty of a morning well spent. 
              Our cafe and bakery is a sanctuary for those who appreciate the artisan touch. 
              From specialty coffee roasted to perfection, to warm, fresh pastries baked daily, 
              we bring the comfort of nature and the craft of baking to your table.
            </p>
            <p className="font-body text-espresso">
              Embrace the simple pleasures. Welcome to Sol & Bloom.
            </p>
          </div>
          <div className="intro-images">
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" 
              alt="Coffee preparation" 
              className="img-primary hover-scale"
            />
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600" 
              alt="Fresh artisan bread" 
              className="img-secondary hover-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;
