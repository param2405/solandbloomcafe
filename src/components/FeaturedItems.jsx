import React from 'react';
import './FeaturedItems.css';

const featuredData = [
  {
    id: 1,
    name: "Specialty Pour Over",
    desc: "Single origin, roasted to highlight delicate floral notes.",
    img: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Almond Croissant",
    desc: "Twice baked, flaked almond crust, rich frangipane center.",
    img: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Rustic Sourdough",
    desc: "Naturally leavened, dark crust, airy crumb. Baked fresh daily.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Avocado & Ricotta Toast",
    desc: "House sourdough, whipped ricotta, chili flakes, micro herbs.",
    img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=800"
  }
];

const FeaturedItems = () => {
  return (
    <section className="featured-section section bg-cream">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2 className="font-display text-espresso mb-2 text-4xl">What We're Serving</h2>
          <p className="font-body text-espresso opacity-80">A selection of our artisanal favorites</p>
        </div>

        <div className="featured-grid">
          {featuredData.map((item, index) => (
            <div 
              key={item.id} 
              className={`featured-card ${index % 2 === 0 ? 'offset-down' : 'offset-up'}`}
            >
              <div className="featured-img-wrapper overflow-hidden">
                <img src={item.img} alt={item.name} className="featured-img hover-scale" />
              </div>
              <div className="featured-info text-center mt-4">
                <h3 className="font-display text-espresso text-xl mb-1">{item.name}</h3>
                <p className="font-body text-espresso opacity-80 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
