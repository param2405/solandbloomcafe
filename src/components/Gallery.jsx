import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800"
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const openLightbox = (img) => {
    setCurrentImg(img);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImg('');
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="gallery" className="gallery-section section bg-cream">
      <div className="container">
        <h2 className="font-display text-espresso text-center mb-8 text-4xl">Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              className={`gallery-item item-${idx}`}
              onClick={() => openLightbox(img)}
            >
              <img src={img} alt={`Gallery ${idx + 1}`} className="hover-scale" />
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
            <X size={32} color="#FDFBF7" />
          </button>
          <img src={currentImg} alt="Fullscreen View" className="lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Gallery;
