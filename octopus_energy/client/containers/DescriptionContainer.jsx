import React, { useState } from 'react';
import Description from '../components/Description';
import '../assets/styles.css';

const DescriptionContainer = (props) => {
  const [status, setStatus] = useState(true);

  const hidden = {
    backgroundColor: 'black',
    color: 'white',
    overflow: 'hidden',
    fontWeight: 'lighter',
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
  };
  const [style, setStyle] = useState(hidden);

  const visible = {
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'lighter',
  };

  /* If we were to fetch from a database, I would retrieve all the items, update state w/ an array of descriptions which I would pass down as props,
  for the purposes of this take home, I will be mostly hardcoding, but I would destructure the descriptions and associate them w/ ID so they would be displayed w/ 
  the correct product */

  const description = [
    'Available in 7watts, 9watts, 11watts Spiral Light Bulb in B22, bulb switches on Instantly no waiting around warm start and flicker free feature in addition to many other great features, so many great features that I literally cannot sleep!',
  ];

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
    <div className="description-container">
      <Description
        description={description[0]}
        status={status}
        handleDropdown={handleDropdown}
        style={style}
      />
    </div>
  );
};

export default DescriptionContainer;
