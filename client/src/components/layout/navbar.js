import React from "react";
import "../themes/navbar.scss";
import { Navbar, Button, Container } from "react-bootstrap";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <Navbar>
      <Container>
        <div className="main">
          <Link to="/">
            <img src={Logo} alt="N-Saver" className="img" />
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
