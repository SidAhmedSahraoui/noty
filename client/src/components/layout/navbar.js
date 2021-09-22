import React from "react";
import "../themes/navbar.scss";
import { Navbar, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <Navbar>
      <Container>
        <div className="main">
          <Link to="/">
            <h1 alt="N-Saver" className="img">
              {" "}
              NoteSaverApp
            </h1>
          </Link>{" "}
          <>
            <Link to="/register">
              <Button variant="outline-light">Get started</Button>
            </Link>
          </>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
