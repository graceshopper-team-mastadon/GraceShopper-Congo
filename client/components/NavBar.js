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
          <Nav.Link href="/products">All Products</Nav.Link>
          <Nav.Link href="/new">New Selection </Nav.Link>
          <NavDropdown title="Pokemon" id="basic-nav-dropdown">
            <NavDropdown.Item href="/category/pokemon-all">All Pokemon</NavDropdown.Item>
            <NavDropdown.Item href="">Generation I</NavDropdown.Item>
            <NavDropdown.Item href="">Generation II</NavDropdown.Item>
            <NavDropdown.Item href="">Generation III</NavDropdown.Item>
            <NavDropdown.Item href="">Generation IV</NavDropdown.Item>
            <NavDropdown.Item href="">Generation V</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/category/pokeballs">Pokeballs</Nav.Link>
          <Nav.Link href="/category/potions">Potions</Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
