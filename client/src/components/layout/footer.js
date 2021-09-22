import React from "react";
import "../themes/footer.scss";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <div className="copyright mx-auto">
        <p>
          Crafted with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          By{" "}
          <a
            className="gh"
            href="https://github.com/sidahmedsahraoui"
            target="_blank"
            rel="noopener noreferrer"
          >{`<Github />`}</a>
        </p>
        <br />
        <p>Copyright &copy; 2021 NoteSaver</p>
      </div>{" "}
    </Container>
  );
};

export default Footer;
