import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { WEBSITE_NAME } from "../../utils/Data";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// Actions
import setAlert from "../../redux/actions/alertActions";
// layouts
import Spinner from "../layout/spinner";

const Login = (props) => {
  const { isAuthenticated, error, loading, login, clearErrors, setAlert } =
    props;

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

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
          setAlert(err.msg, "danger");
        });
      } else {
        setAlert(error, "danger");
      }

      clearErrors();
    }

    // eslint-disable-next-line
  }, [error]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Login`}</title>
      </Helmet>
      <Container>
        <div className="container-inner">
          <h4>
            <strong> Welcome back!</strong>
          </h4>
          <form className="input-form" onSubmit={onSubmit}>
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
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
                required
              />
            </div>
            {loading ? (
              <Spinner />
            ) : (
              <input type="submit" value="Login" className="button-primary" />
            )}
          </form>

          <p className="links">
            New member?{" "}
            <Link to="/register">
              <span className="link-secondary">Sign up</span>
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Login;
