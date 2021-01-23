import React from 'react';
import '../assets/styles.css';

const Specifications = (props) => {
  const { status } = props;
  const { style } = props;

  const specObj = {
    Brand: 'Phillips',
    'Item Weight': '77g',
    'Product Dimensions': '12.6 x 6.2 x 6.2 cm',
    'Item model number': 'E27 ES',
    'Part Number': 8727900925944,
    Weight: '75 Grams',
    'Number of Items': 1,
    Colour: 'Cool Daylight',
    Shape: 'Spiral',
    Finish: 'White',
    Voltage: '220 volts',
  };

  const specComponents = [];

  for (const [key, value] of Object.entries(specObj)) {
    specComponents.push(
      <div className="key-value-div" key={Math.random()}>
        <span>
          <h5 key={Math.random()} className="key">
            {key}
          </h5>

          <h5 key={Math.random()} className="value">
            {value}
          </h5>
        </span>
        <hr key={Math.random()} className="horizontal-line"></hr>
      </div>
    );
  }

  return (
    <div className="specifications">
      <h2>
        <strong>Specifications</strong>
      </h2>

      <h3 style={style}>{specComponents}</h3>

      <a className="more-info-a" onClick={() => props.handleDropdown(status)}>
        Show more info
      </a>
    </div>
  );
};

export default Specifications;
