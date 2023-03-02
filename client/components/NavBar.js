import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <div>
      <Navbar className="navbar bg-light">
        <Container>
          <Nav.Link href="">Favorites</Nav.Link>
          <NavDropdown title="Pokemon" id="basic-nav-dropdown">
            <NavDropdown.Item href="/products">All Pokemon</NavDropdown.Item>
            <NavDropdown.Item href="">Types</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="">Pokeballs</Nav.Link>
          <Nav.Link href="">Potions</Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
