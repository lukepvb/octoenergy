import React from 'react';
import MainImage from '../components/MainImage';
import AddItemContainer from '../containers/AddItemContainer';
import '../assets/styles.css';

const BodyContainer = (props) => {
  return (
    <div className="body-container">
      <MainImage />
      <AddItemContainer />
    </div>
  );
};

export default BodyContainer;
