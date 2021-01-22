import React from 'react';
import '../assets/styles.css';

const Description = (props) => {
  const { description } = props;
  const { status } = props;
  const { style } = props;

  return (
    <div className="description">
      <h2>
        <strong>Description</strong>
      </h2>
      <h3 style={style}>{description}</h3>
      <a className="more-info-a" onClick={() => props.handleDropdown(status)}>
        Show more info
      </a>
    </div>
  );
};

export default Description;
