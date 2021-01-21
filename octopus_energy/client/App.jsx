import React from 'react';
import '../client/assets/styles.css';
import NavContainer from './containers/NavContainer';
import BodyContainer from './containers/BodyContainer';

const App = (props) => {
  return (
    <div>
      <NavContainer />
      <BodyContainer />
      <h3>This will be the FooterContainer</h3>
    </div>
  );
};

export default App;
