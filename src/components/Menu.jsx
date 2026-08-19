import React, { useState } from 'react';
import './Menu.css';

const menuData = [
  { id: 1, category: 'Coffee', name: 'Espresso', desc: 'Single origin rotating blend', price: '$4.00' },
  { id: 2, category: 'Coffee', name: 'Long Black', desc: 'Double espresso over hot water', price: '$4.50' },
  { id: 3, category: 'Coffee', name: 'Flat White', desc: 'Espresso with velvety steamed milk', price: '$5.00' },
  { id: 4, category: 'Coffee', name: 'Pour Over', desc: 'Filter coffee, delicate and clean', price: '$6.00' },
  
  { id: 5, category: 'Drinks', name: 'Matcha Latte', desc: 'Ceremonial grade matcha', price: '$6.50' },
  { id: 6, category: 'Drinks', name: 'Chai Latte', desc: 'House blended spices', price: '$5.50' },
  { id: 7, category: 'Drinks', name: 'Fresh Juice', desc: 'Orange / Apple / Green', price: '$7.00' },
  
  { id: 8, category: 'Breakfast', name: 'Sourdough Toast', desc: 'With cultured butter & house preserves', price: '$9.00' },
  { id: 9, category: 'Breakfast', name: 'Avocado Toast', desc: 'Whipped feta, chili, micro greens', price: '$18.00' },
  { id: 10, category: 'Breakfast', name: 'Granola Bowl', desc: 'House toasted oats, seasonal fruit, yogurt', price: '$16.00' },
  
  { id: 11, category: 'Bakery', name: 'Croissant', desc: 'Classic French butter croissant', price: '$6.00' },
  { id: 12, category: 'Bakery', name: 'Pain au Chocolat', desc: 'Dark chocolate batons', price: '$6.50' },
  { id: 13, category: 'Bakery', name: 'Fruit Danish', desc: 'Seasonal fruit, vanilla custard', price: '$7.00' },
];

const categories = ['All', 'Coffee', 'Drinks', 'Breakfast', 'Bakery'];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMenu = activeCategory === 'All' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="menu-section section bg-sand">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="font-display text-espresso text-4xl mb-4">Our Menu</h2>
          <div className="menu-filters">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-grid">
          {filteredMenu.map(item => (
            <div key={item.id} className="menu-item animate-fade-in">
              <div className="menu-item-header">
                <h4 className="font-display text-espresso">{item.name}</h4>
                <div className="menu-item-dots"></div>
                <span className="font-body text-espresso">{item.price}</span>
              </div>
              <p className="font-body text-espresso opacity-80 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
