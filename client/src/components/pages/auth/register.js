import React from "react";
import { Helmet } from "react-helmet";
import { Container, Form } from "react-bootstrap";
import { WEBSITE_NAME } from "../../../utils/Data";
import "../../themes/register.scss";
const Register = () => {
  return (
    <Container>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Register`}</title>
      </Helmet>
      <div className="root">
        <Form className="form-container">
          <h1> Create your account</h1>
          <Form.Group>
            <Form.Label> Email </Form.Label>
            <Form.Control type="email" placeholder="Email" name="email" />
          </Form.Group>
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
          <Form.Group>
            <Form.Label> Password confirmation </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password confirmation"
              name="password2"
            />
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};
export default Register;
