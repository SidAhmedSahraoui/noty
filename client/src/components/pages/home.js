import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
// Utils
import { WEBSITE_NAME } from "../../utils/Data";
import Notes from "../../images/notes.svg";
import "../themes/home.scss";
const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Home`}</title>
      </Helmet>
      <div className="home">
        <div className="container">
          <div className="description box">
            <h1 className="title"> Note Saver </h1>
            <p>
              Where you can save your
              <span>
                <Typewriter
                  options={{
                    strings: ["notes", "tips", "reminders"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </p>
          </div>
          <div className="image-col box">
            <img className="image image-fluid" src={Notes} alt="Home" />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Home;
