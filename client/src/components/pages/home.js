import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
// Utils
import { WEBSITE_NAME } from "../../utils/Data";
import "../themes/home.scss";
const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Home`}</title>
      </Helmet>
      <div className="description">
        <h1 className="title">Note Saver</h1>{" "}
        <p className="paragraph">
          where you can save your <br />
          notes , dailly missions and tips <br />
        </p>
      </div>
    </Container>
  );
};
export default Home;
