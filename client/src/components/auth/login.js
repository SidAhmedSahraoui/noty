import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { WEBSITE_NAME } from "../../utils/Data";
import { Link } from "react-router-dom";
const Login = () => {
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
          <form className="input-form">
            <div className="form-group">
              <input
                className="input-text"
                type="text"
                name="username"
                placeholder="Username"
                required
              />
            </div>

            <div className="form-group">
              <input
                className="input-text"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <input type="submit" value="Login" className="button-primary" />
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
