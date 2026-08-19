import React from 'react';

const Motif = ({ className = '', style = {} }) => {
  return (
    <div className={`motif-container ${className}`} style={{ ...style, width: '60px', height: '60px', opacity: 0.7 }}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="sun-motif">
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" />
        <path d="M50 5 L50 15 M95 50 L85 50 M50 95 L50 85 M5 50 L15 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 20 L28 28 M80 20 L72 28 M80 80 L72 72 M20 80 L28 72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 40 L45 50 L50 60 L55 50 Z" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
};

export default Motif;
