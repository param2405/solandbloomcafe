import React from 'react';
import './VisitSection.css';

const VisitSection = () => {
  return (
    <section id="visit" className="visit-section section bg-cream">
      <div className="container">
        <div className="visit-content">
          <div className="visit-info">
            <h2 className="font-display text-espresso mb-6 text-4xl">Visit Us</h2>
            
            <div className="info-block mb-4">
              <h4 className="font-display text-espresso text-xl mb-1">Address</h4>
              <p className="font-body text-espresso opacity-80">
                [ADD VERIFIED ADDRESS] <br />
                Sydney, NSW
              </p>
            </div>
            
            <div className="info-block mb-4">
              <h4 className="font-display text-espresso text-xl mb-1">Hours</h4>
              <p className="font-body text-espresso opacity-80">
                Mon - Fri: 6:30am - 3:00pm <br />
                Sat - Sun: 7:00am - 4:00pm
              </p>
            </div>
            
            <div className="info-block mb-6">
              <h4 className="font-display text-espresso text-xl mb-1">Contact</h4>
              <p className="font-body text-espresso opacity-80">
                [ADD VERIFIED EMAIL] <br />
                [ADD VERIFIED PHONE]
              </p>
            </div>
            
            <div className="visit-buttons">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-primary mb-2" style={{ marginRight: '1rem' }}>
                GET DIRECTIONS
              </a>
              <a href="tel:0000000000" className="btn btn-outline mb-2">
                CALL US
              </a>
            </div>
          </div>
          
          <div className="visit-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.408106150892!2d151.23556299999998!3d-33.8791419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ad1de245d85f%3A0x9fe553ce1a7ec000!2sSol%20%26%20Bloom%20Bakery%20and%20Cafe!5e0!3m2!1sen!2sin!4v1787109876900!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sol & Bloom Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
