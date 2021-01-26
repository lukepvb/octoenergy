import React from 'react';
import CarouselComponent from '../components/Carousel';
import '../assets/styles.css';

const CarouselContainer = (props) => {
  return (
    <div>
      <div className="pre-carousel-title">
        <p>You may also like...</p>
      </div>
      <div className="carousel-container">
        <CarouselComponent />
      </div>
    </div>
  );
};

export default CarouselContainer;
