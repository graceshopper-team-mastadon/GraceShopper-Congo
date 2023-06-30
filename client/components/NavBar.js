import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

//THIS PAGE IS DEPRECATED FOR NOW

const NavBar = () => {
  const navigate = useNavigate()
  // const linkStyle = {
  //   margin: "1rem",
  //   textDecoration: "none"
  // };

  // return (
  //   <div>
  //     <Navbar className="navbar">
  //       <Container>
  //         <Link to="/products" style={linkStyle}>
  //           All Products
  //         </Link>
  //         <Link to="/new" style={linkStyle}>
  //           Newest Arrivals
  //         </Link>
  //         <NavDropdown title="Pokemon" id="basic-nav-dropdown">
  //           <NavDropdown.Item>
  //             <Link to="/category/pokemon-all">
  //               All Pokemon
  //             </Link>
  //           </NavDropdown.Item>
  //           <NavDropdown.Item onClick={() => navigate('/products/GenI')}>
  //             Generation I
  //           </NavDropdown.Item>
  //           <NavDropdown.Item onClick={() => navigate('/products/GenII')}>
  //             Generation II
  //           </NavDropdown.Item>
  //           <NavDropdown.Item onClick={() => navigate('/products/GenIII')}>
  //             Generation III
  //           </NavDropdown.Item>
  //           <NavDropdown.Item onClick={() => navigate('/products/GenIV')}>
  //             Generation IV
  //           </NavDropdown.Item>
  //           <NavDropdown.Item onClick={() => navigate('/products/GenV')}>
  //             Generation V
  //           </NavDropdown.Item>
  //         </NavDropdown>
  //         <Link to="/category/pokeballs" style={linkStyle}>
  //           Pokeballs
  //         </Link>
  //         <Link to="/category/potions" style={linkStyle}>
  //           Potions
  //         </Link>
  //       </Container>
  //     </Navbar>
  //   </div>
  // );


  // return (
  //   <section className="navbar-container">
  //     <div className="navbar-middle">
  //       <ul>
  //         <Link to="/products" className="navbar-middle-content">All Products</Link>
  //         <Link to="/new" className="navbar-middle-content">Newest Arrivals</Link>
  //         <Link to="/category/pokemon-all" className="navbar-middle-content">Pokemon</Link>
  //         <Link to="/category/pokeballs" className="navbar-middle-content">Pokeballs</Link>
  //         <Link to="/category/potions" className="navbar-middle-content">Potions</Link>
  //       </ul>
  //     </div>
  //   </section>
  // );
};
export default NavBar;
