import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faCog,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

// Images
import Logo from "../../images/logo.png";
// Actions
import { logout, loadUser } from "../../redux/actions/authActions";

const Navbar = (props) => {
  const { isAuthenticated, user, logout, loadUser } = props;
  useEffect(() => {
    // if (localStorage.token)
    loadUser();

    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();

    // window.location.href = '/';
  };

  const userMenu = (
    <>
      <Dropdown alignRight>
        <Dropdown.Toggle variant="outline-light">
          Hi 👋 <strong>ahmed_dz</strong>
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu">
          <Link to="/profile" className="dropdown-item">
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
          <button onClick={onLogout} className="dropdown-item">
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

        <div>{isAuthenticated ? userMenu : guestMenu}</div>
      </Container>
    </div>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapSateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapSateToProps, { logout, loadUser })(Navbar);
