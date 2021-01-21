import React from 'react';
import '../client/assets/styles.css';
import NavContainer from './containers/NavContainer';

const App = (props) => {
  return (
    <div>
      <NavContainer />
      <h1>This will be my BodyContainer</h1>
      <h3>This will be the FooterContainer</h3>
    </div>
  );
};

export default App;
