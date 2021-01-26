import React from 'react';
import '../assets/styles.css';
import main from '../assets/img/product-image.jpg';

const MainImage = () => {
  return (
    <div className="main-image">
      <img src={main} alt="main-image" />
    </div>
  );
};

export default MainImage;
