import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    fontFamily: "optima",
    color: "steelblue",
  };

  return (
    <div>
      <Navbar className="navbar bg-light">
        <Container>
          <Link to="/products" style={linkStyle}>
            All Products
          </Link>
          <Link to="/new" style={linkStyle}>
            New Selection{" "}
          </Link>
          <NavDropdown title="Pokemon" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/category/pokemon-all" style={linkStyle}>
                {" "}
                All Pokemon
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="">Generation I</NavDropdown.Item>
            <NavDropdown.Item href="">Generation II</NavDropdown.Item>
            <NavDropdown.Item href="">Generation III</NavDropdown.Item>
            <NavDropdown.Item href="">Generation IV</NavDropdown.Item>
            <NavDropdown.Item href="">Generation V</NavDropdown.Item>
          </NavDropdown>
          <Link to="/category/pokeballs" style={linkStyle}>
            Pokeballs
          </Link>
          <Link to="/category/potions" style={linkStyle}>
            Potions
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
