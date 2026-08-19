import React from 'react';
import './BakerySection.css';

const BakerySection = () => {
  return (
    <section className="bakery-section section bg-cream">
      <div className="container">
        <div className="bakery-content">
          <div className="bakery-images">
            <div className="img-wrapper-1">
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800" 
                alt="Fresh bread" 
                className="hover-scale"
              />
            </div>
            <div className="img-wrapper-2">
              <img 
                src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=800" 
                alt="Pastries" 
                className="hover-scale"
              />
            </div>
          </div>
          <div className="bakery-text">
            <h2 className="font-display text-espresso mb-4 text-4xl">The Bakery</h2>
            <p className="font-body text-espresso mb-4">
              Our bakery is the heart of Sol & Bloom. Every morning, before the sun rises, 
              our bakers are at work. We use only the finest flour, cultured butter, and 
              time-honored techniques to create our artisanal breads and pastries.
            </p>
            <p className="font-body text-espresso mb-6">
              From the flaky layers of our croissants to the deeply caramelized crust of 
              our sourdough, every item is baked with intention and care.
            </p>
            <button className="btn btn-outline" onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>
              SEE BAKERY MENU
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BakerySection;
