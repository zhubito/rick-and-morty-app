import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const navbar = () => {
  return (
    <Container className="navbarRadius bg-light">
      <Navbar collapseOnSelect expand="md" variant="light">
        <Link className="navbar-brand" to="/">
          <Navbar.Brand className="colorHoum p-4">Rick and Morty</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              <Navbar.Brand>Inicio</Navbar.Brand>
            </Link>
            <Link className="nav-link" to="/buscador">
              <Navbar.Brand>Buscador</Navbar.Brand>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default navbar;
