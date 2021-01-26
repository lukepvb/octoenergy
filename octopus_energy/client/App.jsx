import React from 'react';
import '../client/assets/styles.css';
import NavContainer from './containers/NavContainer';
import BodyContainer from './containers/BodyContainer';
import FooterContainer from './containers/FooterContainer';

const App = (props) => {
  return (
    <div>
      <NavContainer />
      <BodyContainer />
      <FooterContainer />
    </div>
  );
};

export default App;
