import React from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faCog,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

// Images
import Logo from "../../images/logo.png";

const Navbar = () => {
  const userMenu = (
    <>
      <Dropdown alignRight>
        <Dropdown.Toggle variant="outline-light">
          Hey, <strong>sid ahmed</strong>
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu">
          <Link to="/" className="dropdown-item">
            <FontAwesomeIcon className="icon mr-3" icon={faUser} size="lg" />
            Profile
          </Link>
          <Link to="/notes" className="dropdown-item">
            <FontAwesomeIcon
              className="icon mr-3"
              icon={faBookmark}
              size="lg"
            />
            Notes
          </Link>
          <Link to="/settings" className="dropdown-item">
            <FontAwesomeIcon className="icon mr-3" icon={faCog} size="lg" />
            Settings
          </Link>
          <Dropdown.Divider></Dropdown.Divider>
          <button className="dropdown-item">
            <FontAwesomeIcon
              className="icon mr-3"
              icon={faSignOutAlt}
              size="lg"
            />
            Logout
          </button>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );

  const guestMenu = (
    <>
      <Link to="/login">
        <button className="button-nav">Get Started</button>
      </Link>
    </>
  );

  return (
    <div className="navbar">
      <Container>
        <Link to="/">
          <img className="logo" src={Logo} alt="Noty" />
        </Link>
        <div> {5 === 3 ? userMenu : guestMenu} </div>
      </Container>
    </div>
  );
};

export default Navbar;
