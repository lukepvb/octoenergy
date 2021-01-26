import React, { useState } from 'react';
import Specifications from '../components/Specifications';
import '../assets/styles.css';

const SpecificationsContainer = (props) => {
  const [status, setStatus] = useState(true);

  const hidden = {
    backgroundColor: 'black',
    color: 'white',
    overflow: 'hidden',
    fontWeight: 'lighter',
    display: 'none',
    // display: '-webkit-box',
    // WebkitLineClamp: 0,
    // WebkitBoxOrient: 'vertical',
  };
  const [style, setStyle] = useState(hidden);

  const visible = {
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'lighter',
  };

  const handleDropdown = (curStatus) => {
    if (curStatus === false) {
      setStatus(true);
      console.log(status);
    } else if (curStatus === true) {
      setStatus(false);
      console.log(status);
    }

    if (status === true) {
      setStyle(visible);
    } else if (!status) {
      setStyle(hidden);
    }
  };

  return (
    <div className="spec-container">
      <Specifications
        status={status}
        handleDropdown={handleDropdown}
        style={style}
      />
    </div>
  );
};

export default SpecificationsContainer;
