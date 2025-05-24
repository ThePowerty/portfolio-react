import React, { useState, useEffect } from 'react';
import './Carousel.css';

export const Carousel = ({ children }) => {
  const [itemsToShow, setItemsToShow] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = React.Children.count(children);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3); // Pantallas grandes
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2); // Pantallas medianas
      } else {
        setItemsToShow(1); // Pantallas pequeñas
      }
    };

    updateItemsToShow(); // Llama a la función al cargar el componente
    window.addEventListener('resize', updateItemsToShow); // Escucha cambios de tamaño

    return () => {
      window.removeEventListener('resize', updateItemsToShow); // Limpia el listener
    };
  }, []);

  const maxIndex = length - itemsToShow < 0 ? 0 : length - itemsToShow;

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-content-flex"
        style={{
          transform: `translateX(-${(100 / length) * currentIndex}%)`,
          width: `${(100 / itemsToShow) * length}%`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="carousel-item-flex"
            style={{ width: `${100 / length}%` }}
            aria-hidden={index < currentIndex || index >= currentIndex + itemsToShow}
          >
            {child}
          </div>
        ))}
      </div>

      <button
        className="nav-button left"
        onClick={goToPrev}
        aria-label="Previous Slide"
        type="button"
      >
        ‹
      </button>
      <button
        className="nav-button right"
        onClick={goToNext}
        aria-label="Next Slide"
        type="button"
      >
        ›
      </button>

      <div className="indicator-container">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setCurrentIndex(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};
