import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        Crafted with{" "}
        <span role="img" aria-label="heart">
          💜
        </span>{" "}
        By{" "}
        <div className="social">
          <a
            href="https://github.com/sidahmedsahraoui"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} size="lg" />
          </a>
        </div>
        <br />
      </div>
    </Container>
  );
};
export default Footer;
