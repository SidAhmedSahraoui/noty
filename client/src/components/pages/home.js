import React from "react";
import { Helmet } from "react-helmet";
import { WEBSITE_NAME } from "../../utils/Data";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
//images
import Home1 from "../../images/notes.svg";
//styles
import "../styles/_home.scss";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Notes and reminders saver`}</title>
      </Helmet>
      <Container className="main-container">
        <div className="home">
          <div className="welcome">
            <h1 className="title">Welcome to Noty!</h1>
            <p className="paragraphe">
              Where you can save <br />
              <p>
                every{" "}
                <strong>
                  <Typewriter
                    options={{
                      strings: ["note", "reminder", "tip"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </strong>
              </p>
            </p>
          </div>
          <img className="image" src={Home1} alt="home_image" />
        </div>
        <Link to="/notes">
          <Button variant="primary" className="button-home">
            Get started
          </Button>
        </Link>
      </Container>
    </>
  );
};
export default Home;
