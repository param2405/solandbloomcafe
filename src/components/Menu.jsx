import React, { useState } from 'react';
import './Menu.css';

const menuData = [
  {
    category: 'Breakfast',
    sections: [
      {
        title: "Chef's Favourites",
        items: [
          { name: 'Smashed Avocado on Sourdough', desc: 'Smashed avocado, beetroot hummus, cherry tomatoes, cucumber, feta & balsamic glaze on toasted sourdough', price: '$20.80' },
          { name: 'Eggs Benedict', desc: 'Poached eggs with your choice of bacon, smoked salmon, halloumi or mushroom, served on sourdough with hollandaise sauce', price: '$22.80' },
          { name: 'Big Breakfast', desc: 'Two eggs your way, bacon, chorizo, hash brown, roasted tomato & toasted sourdough', price: '$26.20' },
          { name: 'Buttermilk Pancakes', desc: 'Fluffy buttermilk pancakes with fresh berries, banana, vanilla mascarpone & maple syrup', price: '$18.50' },
        ],
      },
      {
        title: 'Toasts & Classics',
        items: [
          { name: 'Sourdough Toast', desc: 'Served with butter & your choice of jam, honey or Vegemite', price: '$7.80' },
          { name: 'Eggs on Toast', desc: 'Two eggs your way served on toasted sourdough', price: '$12.40' },
          { name: 'Avocado, Tomato & Feta Toast', desc: 'Smashed avocado, tomato, feta & balsamic glaze on toasted sourdough', price: '$15.40' },
          { name: 'Smoked Salmon & Avocado Toast', desc: 'Smashed avocado, smoked salmon, capers & lemon on toasted sourdough', price: '$18.40' },
          { name: 'BLAT Club', desc: 'Crispy bacon, lettuce, avocado, tomato & aioli on toasted sourdough', price: '$14.80' },
          { name: 'Ham, Cheese & Tomato Toastie', desc: 'Ham, cheese & tomato, freshly toasted', price: '$12.80' },
        ],
      },
      {
        title: 'Breakfast Rolls',
        items: [
          { name: 'Bacon & Egg Roll', desc: 'Crispy bacon, fried egg & your choice of BBQ or tomato sauce on a toasted milk bun', price: '$13.80' },
          { name: 'Breaky Roll', desc: 'Fried egg, cheese, tomato, hash brown & your choice of sauce on a toasted milk bun', price: '$13.50' },
          { name: 'Avocado & Egg Roll', desc: 'Avocado, fried egg, baby spinach, tomato & tomato relish on a toasted milk bun', price: '$12.00' },
        ],
      },
      {
        title: 'Omelettes',
        items: [
          { name: 'Ham, Cheese & Tomato', desc: 'Served with toasted sourdough', price: '$18.80' },
          { name: 'Spinach, Mushroom & Tomato', desc: 'Served with toasted sourdough', price: '$18.80' },
          { name: 'Smoked Salmon', desc: 'Smoked salmon, baby spinach, cherry tomatoes, feta & cheese. Served with toasted sourdough', price: '$19.40' },
          { name: 'Chorizo & Feta', desc: 'Chorizo, feta, roasted capsicum, tomato & baby spinach. Served with toasted sourdough', price: '$19.40' },
        ],
      },
      {
        title: 'Breakfast Wraps',
        items: [
          { name: 'Bacon Breakfast Wrap', desc: 'Bacon, egg, tomato, cheese, baby spinach & tomato relish', price: '$15.40' },
          { name: 'Smoked Salmon Wrap', desc: 'Smoked salmon, scrambled egg, avocado, baby spinach & hollandaise sauce', price: '$16.40' },
          { name: 'Chorizo & Egg Wrap', desc: 'Chorizo, scrambled egg, cheese, baby spinach & chilli mayo', price: '$18.40' },
          { name: 'Halloumi Breakfast Wrap', desc: 'Scrambled egg, grilled halloumi, tomato, baby spinach, pesto & aioli', price: '$16.40' },
        ],
      },
      {
        title: 'Sides & Extras',
        items: [
          { name: 'Bacon', price: '$4.00' },
          { name: 'Avocado', price: '$4.00' },
          { name: 'Hash Brown', price: '$4.00' },
          { name: 'Halloumi', price: '$4.00' },
          { name: 'Smoked Salmon', price: '$4.50' },
          { name: 'Chorizo', price: '$4.50' },
          { name: 'Mushrooms', price: '$4.00' },
          { name: 'Feta', price: '$1.50' },
          { name: 'Extra Egg', price: '$2.80' },
          { name: 'Sourdough', price: '$3.00' },
        ],
      },
    ],
  },
  {
    category: 'Lunch',
    sections: [
      {
        title: 'From the Chef',
        items: [
          { name: 'Chilli Prawn Linguine', desc: 'Linguine pasta tossed with garlic, chilli prawns, cherry tomatoes, fresh parsley & a touch of lemon', price: '$25.80' },
          { name: 'Fish & Chips', desc: 'Beer-battered fish served with crispy chips, garden salad, tartare sauce & lemon', price: '$23.80' },
          { name: 'Grilled Salmon with Asparagus', desc: 'Grilled salmon fillet served with roasted potatoes, tomato, spinach & grilled asparagus with lemon', price: '$26.40' },
          { name: 'Chicken Schnitzel', desc: 'Golden panko-crumbed chicken breast served with crispy chips, garden salad, lemon & garlic aioli', price: '$23.80' },
        ],
      },
      {
        title: 'Burgers',
        items: [
          { name: 'Sol & Bloom Signature Burger', desc: 'Angus beef patty, sliced cheese, caramelised onion, beetroot, pickles, lettuce, tomato & aioli', price: '$19.80' },
          { name: 'Sol & Bloom Chicken Burger', desc: 'Grilled chicken, sliced cheese, tomato, pickles, lettuce, tomato relish & garlic aioli', price: '$18.80' },
          { name: 'Maple Bacon Deluxe Burger', desc: 'Angus beef patty, bacon, American cheese, lettuce, tomato, onion, maple glaze & smoky burger sauce', price: '$20.80' },
          { name: 'Hot & Crispy Chicken Burger', desc: 'Crispy spicy chicken, sliced cheese, lettuce, pickles, tomato & spicy mayo', price: '$19.80' },
          { name: 'Veggie Halloumi Burger', desc: 'Grilled halloumi, tomato, avocado, sliced cheese, mixed lettuce & aioli sauce', price: '$18.80' },
        ],
      },
      {
        title: 'Sandwiches',
        items: [
          { name: 'Steak Sandwich', desc: 'Grilled rump steak, caramelised onion, tomato, sliced cheese, lettuce & smoky aioli on toasted Turkish bread', price: '$19.80' },
          { name: 'Chicken Schnitzel Sandwich', desc: 'Crispy chicken schnitzel, sliced cheese, tomato, lettuce & garlic aioli on toasted Turkish bread', price: '$19.80' },
        ],
      },
      {
        title: 'Wraps',
        items: [
          { name: 'Grilled Chicken Wrap', desc: 'Grilled chicken, sliced cheese, tomato, onion, mixed lettuce & mayo', price: '$19.80' },
          { name: 'Pesto Chicken Wrap', desc: 'Pesto chicken, baby spinach, sundried tomato, sliced cheese, avocado & aioli', price: '$19.80' },
          { name: 'Bacon & Chicken Wrap', desc: 'Bacon, grilled chicken, tomato, onion, sliced cheese, mixed lettuce & aioli', price: '$19.80' },
          { name: 'Steak & Caramelised Onion Wrap', desc: 'Beef steak, caramelised onion, sliced cheese, lettuce & smoky BBQ aioli', price: '$19.80' },
        ],
      },
      {
        title: 'Fresh Salads & Bowls',
        items: [
          { name: 'Grilled Chicken Salad', desc: 'Grilled chicken, avocado, mixed lettuce, capsicum, cucumber, onion, tomato, feta, olives & lemon dressing', price: '$24.80' },
          { name: 'Chicken Caesar Salad', desc: 'Cos lettuce, crispy bacon, parmesan, croutons, Caesar dressing & boiled egg', price: '$25.80' },
          { name: 'Quinoa Chicken Bowl', desc: 'Chicken, avocado, spinach, cherry tomato, feta, quinoa & lemon dressing', price: '$24.80' },
          { name: 'Halloumi Salad Bowl', desc: 'Halloumi, tomato, onion, avocado, spinach, olives & lemon dressing', price: '$24.80' },
        ],
      },
      {
        title: 'Bakery Favourites',
        items: [
          { name: 'Pie & Chips', desc: 'Your choice of homemade pie served with crispy chips', price: '$14.00' },
          { name: 'Pie & Garden Salad', desc: 'Your choice of homemade pie served with fresh garden salad', price: '$14.00' },
          { name: 'Pie, Chips & Garden Salad', desc: 'Your choice of homemade pie served with crispy chips & fresh garden salad', price: '$18.00' },
          { name: 'Sausage Roll & Chips', desc: 'Our homemade sausage roll served with crispy chips', price: '$12.40' },
          { name: 'Sausage Roll & Garden Salad', desc: 'Our homemade sausage roll served with fresh garden salad', price: '$12.40' },
          { name: "Today's Quiche & Garden Salad", desc: 'Freshly baked quiche of the day served with garden salad' },
        ],
      },
      {
        title: 'Sides & Extras',
        items: [
          { name: 'Chips', price: '$4.80' },
          { name: 'Garden Salad', price: '$6.40' },
          { name: 'Avocado', price: '$4.00' },
          { name: 'Halloumi', price: '$4.80' },
          { name: 'Grilled Chicken', price: '$6.20' },
          { name: 'Bacon', price: '$4.00' },
          { name: 'Extra Aioli', price: '$0.80' },
        ],
      },
    ],
  },
  {
    category: 'Pies & Bakery',
    sections: [
      {
        title: 'Pie by Sol & Bloom',
        note: 'Freshly baked every day',
        items: [
          { name: 'Beef Burgundy Pie', desc: 'Tender chunks of beef braised in red wine with carrot, onion & herbs', price: '$9.50' },
          { name: 'Steak & Mushroom Pie', desc: 'Premium chunk steak braised with mushrooms, onion & black pepper', price: '$9.50' },
          { name: 'Chicken & Leek Pie', desc: 'Chicken breast, leek cooked in creamy white sauce with a dash of white wine', price: '$9.50' },
          { name: 'Lamb Provencale Pie', desc: 'Tender lamb pieces with capsicum, tomatoes, eggplant & dill', price: '$9.50' },
          { name: 'Gourmet Minced Beef Pie', desc: 'Quality minced beef cooked with tomatoes, onion & seasoning', price: '$9.50' },
          { name: 'Vegetarian Pie', desc: 'Red beans braised with onions, carrot, spices & curry', price: '$9.50' },
          { name: 'Sausage Roll', desc: 'Beef mince, onion, sourdough bread crumbs & seasoning', price: '$7.00' },
          { name: 'Spinach & Ricotta Roll', desc: 'Spinach, ricotta cheese, shredded cheese, pepper & spices', price: '$9.50' },
        ],
      },
      {
        title: 'From Our Bakery',
        items: [
          { name: 'Plain Croissant', desc: 'Served with butter & jam', price: '$6.50' },
          { name: 'Ham & Cheese Croissant', desc: 'Fresh croissant filled with ham & cheese, served toasted', price: '$10.50' },
          { name: 'Banana Bread', desc: 'Toasted and served with butter', price: '$5.50' },
          { name: "Today's Fresh Pastries", desc: "Please see our display or ask our team for today's freshly baked selection" },
        ],
      },
    ],
  },
  {
    category: 'Coffee & Tea',
    sections: [
      {
        title: 'Hot Coffee',
        note: 'Regular / Large',
        items: [
          { name: 'Espresso', price: '$4.00' },
          { name: 'Double Espresso', price: '$4.50' },
          { name: 'Piccolo', price: '$4.50' },
          { name: 'Macchiato', price: '$4.50' },
          { name: 'Flat White', price: '$4.80 / $5.90' },
          { name: 'Cappuccino', price: '$4.80 / $5.90' },
          { name: 'Latte', price: '$4.80 / $5.90' },
          { name: 'Long Black', price: '$4.70 / $5.90' },
          { name: 'Mocha', price: '$5.50 / $6.50' },
          { name: 'Chai Latte', price: '$5.50 / $6.50' },
          { name: 'Hot Chocolate', price: '$5.50 / $6.50' },
          { name: 'Dirty Chai', price: '$5.90 / $6.90' },
          { name: 'Matcha Latte', price: '$5.90 / $6.90' },
        ],
      },
      {
        title: 'Tea',
        items: [
          { name: 'English Breakfast', price: '$5.20' },
          { name: 'Green Tea', price: '$5.20' },
          { name: 'Lemongrass Ginger', price: '$5.20' },
          { name: 'Masala Chai', price: '$5.20' },
          { name: 'Prana Chai', price: '$6.90' },
        ],
      },
      {
        title: 'Add-Ons',
        items: [
          { name: 'Oat / Almond / Soy Milk', price: '$0.90' },
          { name: 'Extra Shot', price: '$0.50' },
          { name: 'Vanilla / Hazelnut / Caramel Syrup', price: '$0.90' },
          { name: 'Decaf', price: '$0.90' },
        ],
      },
    ],
  },
  {
    category: 'Cold Drinks',
    sections: [
      {
        title: 'Featured Drinks',
        note: 'Seasonal flavours, brighter days',
        items: [
          { name: 'Peach Hibiscus Iced Tea', price: '$7.50' },
          { name: 'Lemon Myrtle Iced Tea', price: '$7.50' },
          { name: 'Strawberry Matcha Cloud', price: '$8.50' },
          { name: 'Coconut Cloud Matcha', price: '$8.50' },
          { name: 'Tropical Frappe', price: '$8.90' },
          { name: 'Cold Brew', price: '$6.50' },
          { name: 'Biscoff Iced Latte', price: '$8.50' },
          { name: 'Coconut Iced Long Black', price: '$8.50' },
          { name: 'Fresh Mint Lemonade', price: '$9.50' },
        ],
      },
      {
        title: 'Iced Drinks',
        items: [
          { name: 'Iced Coffee', price: '$7.20' },
          { name: 'Iced Latte', price: '$6.90' },
          { name: 'Iced Long Black', price: '$6.90' },
          { name: 'Iced Mocha', price: '$7.20' },
          { name: 'Iced Chocolate', price: '$7.20' },
          { name: 'Iced Matcha', price: '$7.20' },
        ],
      },
      {
        title: 'Signatures',
        items: [
          { name: 'Honey Cinnamon Latte', price: '$6.50' },
          { name: 'Salted Caramel Iced Latte', price: '$7.50' },
          { name: 'Iced Strawberry Matcha', price: '$8.50' },
          { name: 'Iced Coconut Matcha', price: '$8.50' },
        ],
      },
      {
        title: 'Milkshakes (Classic)',
        items: [
          { name: 'Chocolate Milkshake', price: '$9.50' },
          { name: 'Vanilla Milkshake', price: '$9.50' },
          { name: 'Strawberry Milkshake', price: '$9.50' },
          { name: 'Caramel Milkshake', price: '$9.50' },
          { name: 'Hazelnut Milkshake', price: '$9.50' },
        ],
      },
      {
        title: 'Refreshers',
        items: [
          { name: 'Fresh Juice', price: '$9.00' },
          { name: 'Smoothies', price: '$11.50' },
          { name: 'Acai Bowl', price: '$14.50' },
        ],
      },
    ],
  },
];

const categories = menuData.map(group => group.category);

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const activeGroup = menuData.find(group => group.category === activeCategory);

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

        {activeGroup.sections.map(section => (
          <div key={`${activeCategory}-${section.title}`} className="menu-subsection animate-fade-in">
            <div className="menu-subsection-header text-center">
              <h3 className="font-display text-espresso">{section.title}</h3>
              {section.note && (
                <p className="font-body text-espresso opacity-80 text-sm">{section.note}</p>
              )}
            </div>

            <div className="menu-grid">
              {section.items.map(item => (
                <div key={item.name} className="menu-item">
                  <div className="menu-item-header">
                    <h4 className="font-display text-espresso">{item.name}</h4>
                    <div className="menu-item-dots"></div>
                    {item.price && (
                      <span className="font-body text-espresso">{item.price}</span>
                    )}
                  </div>
                  {item.desc && (
                    <p className="font-body text-espresso opacity-80 text-sm">{item.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
