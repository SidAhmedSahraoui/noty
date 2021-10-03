import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { WEBSITE_NAME } from "../../utils/Data";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { setAlert } from "../../redux/actions/alertActions";
import { register, clearErrors } from "../../redux/actions/authActions";

// Layouts
import Spinner from "../layout/spinner";

const Register = (props) => {
  const { setAlert, isAuthenticated, error, loading, register, clearErrors } =
    props;

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const { username, email, phone, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  useEffect(() => {
    if (error && error.length) {
      if (typeof error === "object") {
        error.forEach((err) => {
          console.log("error");
        });
      } else {
        console.log("error");
      }

      clearErrors();
    }

    // eslint-disable-next-line
  }, [error]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || phone === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password.length < 6) {
      setAlert("Password must be at least 6 characters", "danger");
    } else {
      // Register function
      await register({ username, phone, email, password });
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Register`}</title>
      </Helmet>
      <Container>
        <div className="container-inner">
          <h4>
            <strong> Create Account</strong>
          </h4>
          <form className="input-form">
            <div className="form-group">
              <input
                className="input-text"
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                className="input-text"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                className="input-text"
                type="text"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={onChange}
                // required
              />
            </div>

            <div className="form-group">
              <input
                className="input-text"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                className="input-text"
                type="password"
                name="password2"
                placeholder="Password confirmation"
                value={password2}
                onChange={onChange}
                required
              />
            </div>

            {loading ? (
              <Spinner />
            ) : (
              <input
                onClick={onSubmit}
                type="submit"
                value="Register"
                className="button-primary"
              />
            )}
          </form>

          <p className="links">
            Already have an account?{" "}
            <Link to="/login">
              <span className="link-secondary">Sign in</span>
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
};

const mapSateToProps = (state) => ({
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapSateToProps, { register, clearErrors, setAlert })(
  Register
);
