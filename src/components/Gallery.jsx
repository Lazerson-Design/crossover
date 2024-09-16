import React from 'react';
import './Gallery.css'; 

const Gallery = () => {
  const images = [
    { id: 1, src: 'portfolio-7-sm.jpg', alt: 'Vinyl Record', name: 'Vinyl Record', link: '/project-1' },
    { id: 2, src: 'portfolio-4-sm.jpg', alt: 'Modern T-Shirt', name: 'Modern T-Shirt', link: '/project-2' },
    { id: 3, src: 'portfolio-5-sm.jpg', alt: 'Minimal Bag', name: 'Minimal Bag', link: '/project-3' },
    { id: 4, src: 'portfolio-9-sm.jpg', alt: 'Clean & Groovy', name: 'Clean & Groovy', link: '/project-4' },
    { id: 5, src: 'portfolio-3-sm (1).jpg', alt: 'Minimal Mobile App', name: 'Minimal Mobile App', link: '/project-5' },
    { id: 6, src: 'portfolio-8-sm.jpg', alt: 'White T-Shirt', name: 'White T-Shirt', link: '/project-6' },
    { id: 7, src: 'portfolio-2-sm.jpg', alt: 'Business Card', name: 'Business Card', link: '/project-7' },
    { id: 8, src: 'portfolio-6-sm.jpg', alt: 'Heja Stockholm', name: 'Heja Stockholm', link: '/project-8' },
    { id: 9, src: 'portfolio-12-sm.jpg', alt: 'Paper Bag', name: 'Paper Bag', link: '/project-9' },
  ];

  return (
    <section className="gallery">
      <h2 className="gallery-header">Best Projects</h2>
      <p className="gallery-description">
        Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam, pellentesque faucibus. Vestibulum gravida volutpat ipsum non ultrices.
      </p>
      <div className="gallery-grid">
        {images.map((image) => (
          <a key={image.id} href={image.link} className="gallery-item" title={image.name}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <div className="gallery-overlay">
              <span className="gallery-name">{image.name}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
