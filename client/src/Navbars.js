import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom';

const Navbars = () => {
  return (
    <>
      <Navbar className="navbars" bg="primary" data-bs-theme="dark">
        <Navbar.Brand as={Link} to='/'>Inicio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='nosotros'>Nosotros</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navbars;
