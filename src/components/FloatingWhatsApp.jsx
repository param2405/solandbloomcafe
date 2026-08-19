import React from 'react';
import { MessageCircle } from 'lucide-react';

// Store the number in one editable variable
const WHATSAPP_NUMBER = "[ADD VERIFIED NUMBER]";

const FloatingWhatsApp = () => {
  const handleClick = (e) => {
    e.preventDefault();
    if (WHATSAPP_NUMBER !== "[ADD VERIFIED NUMBER]") {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
    } else {
      alert("WhatsApp contact not yet configured.");
    }
  };

  return (
    <a 
      href="#" 
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#25D366',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        zIndex: 1000,
        transition: 'transform 0.3s ease'
      }}
      className="hover-scale"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default FloatingWhatsApp;
