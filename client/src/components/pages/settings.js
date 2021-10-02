import React from "react";
import { Container } from "react-bootstrap";

const Settings = () => {
  return (
    <Container>
      <div className="settings">
        <form className="input-form">
          <h3 className="title"> Settings </h3>
          <div className="form-group">
            <label>Name</label>
            <input
              className="input-text"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email </label>
            <input
              className="input-text"
              type="text"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              className="input-text"
              type="text"
              name="phone"
              placeholder="Phone"

              // required
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              className="input-text"
              name="gender"

              // required
            >
              <option value="Non">Not define</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <input type="submit" value="Save" className="button-primary" />
        </form>
        <form className="input-form">
          <h3 className="title"> Security </h3>
          <div className="form-group">
            <label> Old password </label>
            <input
              className="input-text"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="form-group">
            <label> New password </label>
            <input
              className="input-text"
              type="password"
              name="password2"
              placeholder="Password confirmation"
              required
            />
          </div>

          <input type="submit" value="Save" className="button-primary" />
        </form>
      </div>
    </Container>
  );
};
export default Settings;
