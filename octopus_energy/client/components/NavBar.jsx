import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavBar = (props) => {
  return (
    <Navbar color="faded" dark>
      <NavbarBrand href="/" className="mr-auto">
        <strong>octopus</strong>{' '}
        <span className="energy-navbar-title">energy</span>
      </NavbarBrand>
      <NavbarToggler onClick={props.toggleNavbar} className="navbar-toggler" />
      <Collapse isOpen={!props.collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink
              href="https://github.com/lukepvb/octoenergy"
              target="_blank"
            >
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
