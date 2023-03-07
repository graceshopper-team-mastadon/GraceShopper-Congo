import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar className="navbar bg-light">
        <Container>
          <Link to="/products">All Products</Link>
          <Link to="/new">New Selection </Link>
          <NavDropdown title="Pokemon" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/category/pokemon-all"> All Pokemon</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="">Generation I</NavDropdown.Item>
            <NavDropdown.Item href="">Generation II</NavDropdown.Item>
            <NavDropdown.Item href="">Generation III</NavDropdown.Item>
            <NavDropdown.Item href="">Generation IV</NavDropdown.Item>
            <NavDropdown.Item href="">Generation V</NavDropdown.Item>
          </NavDropdown>
          <Link to="/category/pokeballs">Pokeballs</Link>
          <Link to="/category/potions">Potions</Link>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
