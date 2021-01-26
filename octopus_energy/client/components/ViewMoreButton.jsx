import React from 'react';
import '../assets/styles.css';

const ViewMoreButton = (props) => {
  return (
    <div className="view-more-button-div">
      <a href="https://www.octopus.energy" target="_blank">
        <button className="view-more">
          <h2>
            <strong>View more ways to save energy >></strong>
          </h2>
        </button>
      </a>
    </div>
  );
};

export default ViewMoreButton;
