import React from "react";
import {
  FormGroup,
  FormControl,
  Button,
  Form,
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";

const PokeHome = () => {
  return (
    <div>
      <Navbar className="navbar navbar-fixed-bottom bg-light">
        <Container>
          <Navbar.Brand href="/">PokeHome</Navbar.Brand>
          <Form className="navbar bg-light">
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};
export default PokeHome;
