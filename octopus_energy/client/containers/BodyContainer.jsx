import React from 'react';
import MainImage from '../components/MainImage';
import AddItemContainer from '../containers/AddItemContainer';
import DescriptionContainer from '../containers/DescriptionContainer';
import SpecificationsContainer from '../containers/SpecificationsContainer';
import '../assets/styles.css';

const BodyContainer = (props) => {
  return (
    <div className="body-container">
      <MainImage />
      <AddItemContainer />
      <DescriptionContainer />
      <SpecificationsContainer />
      {/* <CarouselContainer />
      <ViewMoreButton /> */}
    </div>
  );
};

export default BodyContainer;
