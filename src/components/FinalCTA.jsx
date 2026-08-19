import React from 'react';

const FinalCTA = () => {
  return (
    <section className="section bg-espresso" style={{ textAlign: 'center', padding: '8rem 5%' }}>
      <div className="container">
        <h2 className="font-display text-cream mb-2 text-4xl" style={{ letterSpacing: '2px' }}>GOOD COFFEE.</h2>
        <h2 className="font-display text-cream mb-2 text-4xl" style={{ letterSpacing: '2px' }}>FRESH BAKES.</h2>
        <h2 className="font-display text-cream mb-8 text-4xl" style={{ letterSpacing: '2px' }}>WARM MOMENTS.</h2>
        
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            className="btn btn-outline" 
            style={{ color: '#FDFBF7', borderColor: '#FDFBF7' }}
            onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
          >
            EXPLORE MENU
          </button>
          <button 
            className="btn btn-primary" 
            style={{ backgroundColor: '#FDFBF7', color: '#2A1A17' }}
            onClick={() => document.getElementById('visit').scrollIntoView({ behavior: 'smooth' })}
          >
            VISIT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
