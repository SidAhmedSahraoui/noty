import React from "react";
import Helmet from "react-helmet";
import { WEBSITE_NAME } from "../../utils/Data";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Notes = () => {
  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Notes`}</title>
      </Helmet>
      <Container>
        <div className="container-notes">
          <h4>
            <strong> My Notes and Reminders</strong>
          </h4>
          <Link to="/notes/add">
            <button className="button-primary"> Add Note </button>
          </Link>
          <div></div>
        </div>
      </Container>
    </>
  );
};
export default Notes;
