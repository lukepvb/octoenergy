import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import '../assets/styles.css';

const BodyContainer = (props) => {
  return (
    <div className="body-container">
      <h1>body component 1</h1>
      <h1>body component 2</h1>
      <h1>body component 3</h1>
    </div>
  );
};

export default BodyContainer;
