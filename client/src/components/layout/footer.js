import React from "react";
import "../themes/footer.scss";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <div className="copyright mx-auto">
        <p>Copyright &copy; 2021 NoteSaver</p>
      </div>{" "}
    </Container>
  );
};

export default Footer;
