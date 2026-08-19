import React from 'react';

const InstagramCTA = () => {
  return (
    <section className="section bg-sand" style={{ textAlign: 'center' }}>
      <div className="container">
        <h2 className="font-display text-espresso mb-4 text-3xl">Come Find Us on Instagram</h2>
        <p className="font-body text-espresso mb-6" style={{ opacity: 0.8 }}>@solandbloom.cafe</p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '1rem',
          marginBottom: '3rem',
          maxWidth: '1000px',
          margin: '0 auto 3rem auto'
        }}>
          {[
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=400"
          ].map((img, idx) => (
            <div key={idx} style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '12px' }}>
              <img 
                src={img} 
                alt={`Instagram ${idx}`} 
                className="hover-scale" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          ))}
        </div>
        
        <a 
          href="https://www.instagram.com/solandbloom.cafe/" 
          target="_blank" 
          rel="noreferrer"
          className="btn btn-outline"
        >
          FOLLOW US
        </a>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .bg-sand .container > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default InstagramCTA;
