import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faHeart,
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
          Hi{" "}
          <span role="img" aria-label="imoji">
            👋
          </span>{" "}
          <strong> {user && user.username} </strong>
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
          <Link to="/favorite" className="dropdown-item">
            <FontAwesomeIcon className="icon mr-3" icon={faHeart} size="lg" />
            Favorite
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
const mapSateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});
export default connect(mapSateToProps, { logout, loadUser })(Navbar);
