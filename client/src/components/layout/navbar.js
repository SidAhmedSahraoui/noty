import React from "react";
import "../themes/navbar.scss";
import { Navbar, Button, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar>
      <Container>
        <div className="main">
          <img className="img" src="" alt="" />
          <Button> Get Started</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
