import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container style={{ justifyContent: "center" }}>
        <Navbar.Brand href="#">Your Daily Dose of Latest News</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
