import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none"
  };

  return (
    <div>
      <Navbar className="navbar">
        <Container>
          <Link to="/products" style={linkStyle}>
            All Products
          </Link>
          <Link to="/new" style={linkStyle}>
            Newest Arrivals
          </Link>
          <NavDropdown title="Pokemon" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/category/pokemon-all">
                All Pokemon
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/products/GenI')}>
              Generation I
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/products/GenII')}>
              Generation II
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/products/GenIII')}>
              Generation III
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/products/GenIV')}>
              Generation IV
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/products/GenV')}>
              Generation V
            </NavDropdown.Item>
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
