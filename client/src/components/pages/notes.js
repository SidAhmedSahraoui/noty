import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { WEBSITE_NAME } from "../../utils/Data";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { getNotes, clearErrors } from "../../redux/actions/noteActions";

// App Layout
import NoteCard from "../layout/noteCard";

const Notes = (props) => {
  const { user, notes, loading, getNotes, clearErrors } = props;
  const [note, setNote] = useState("");

  useEffect(() => {
    getNotes();

    // eslint-disable-next-line
  }, []);

  const { name, username, gender } = user || {};

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | All Notes`}</title>
      </Helmet>
      <Container>
        <div className="container-notes">
          <h4>
            <strong> My Notes and Reminders</strong>
          </h4>
          <Link to="/notes/add">
            <button className="button-primary"> Add Note </button>
          </Link>
          <br />
          <Link to="/my-notes">
            <button className="link-primary"> Notes </button>
          </Link>
          <Link to="/my-reminders">
            <button className="link-primary"> Reminders </button>
          </Link>
          <Link to="/my-tips">
            <button className="link-primary"> Tips </button>
          </Link>
          <div className="cards-container">
            {!notes || !notes.length ? (
              <h6 className="title ">
                You didn't save any note yet!{" "}
                <span role="img" aria-label="sad">
                  😥
                </span>
              </h6>
            ) : (
              notes.map((note) => <NoteCard key={note._id} note={note} />)
            )}
          </div>
        </div>
      </Container>
    </>
  );
};
const mapSateToProps = (state) => ({
  user: state.auth.user,
  notes: state.note.notes,
  loading: state.note.loading,
  error: state.note.error,
});

export default connect(mapSateToProps, {
  getNotes,
  clearErrors,
})(Notes);
