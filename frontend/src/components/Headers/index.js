import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
  } from 'reactstrap';

  import './styles.css';

  import logo from '../../assets/logo.png'

  const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar fixed="top" expand="md" className="bg-dark">
        <NavbarBrand href="/">
              <img src={logo} alt="Netflix" width="30%"/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }

export default Headers;