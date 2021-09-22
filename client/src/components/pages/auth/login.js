import React from "react";
import { Helmet } from "react-helmet";
import { Container, Form } from "react-bootstrap";
import { WEBSITE_NAME } from "../../../utils/Data";
import { Link } from "react-router-dom";
import "../../themes/auth.scss";
const Login = () => {
  return (
    <Container>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Login`}</title>
      </Helmet>
      <div className="root">
        <Form className="form-container">
          <h1> Sign in</h1>

          <Form.Group>
            <Form.Label> Username </Form.Label>
            <Form.Control type="text" placeholder="Username" name="username" />
          </Form.Group>
          <Form.Group>
            <Form.Label> Password </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>

          <div className="submition">
            <input type="submit" value="Login" className="button-primary" />
            <p>Login Trouble? </p>{" "}
            <Link to="/register">
              <h1 className="s-link">Reset password</h1>
            </Link>
          </div>
        </Form>
      </div>
    </Container>
  );
};
export default Login;
