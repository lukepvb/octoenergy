import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import '../assets/styles.css';

const NavContainer = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="nav-container">
      <NavBar collapsed={collapsed} toggleNavbar={toggleNavbar} />
    </div>
  );
};

export default NavContainer;
