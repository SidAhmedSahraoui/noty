import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { WEBSITE_NAME } from "../../utils/Data";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { getNotes, clearErrors } from "../../redux/actions/noteActions";

// App Layout
import NoteCard from "./noteCard";

const MyNotes = (props) => {
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
            <strong> My Notes </strong>
          </h4>
          <Link to="/notes/add">
            <button className="button-primary"> Add Note </button>
          </Link>
          <br />
          <Link to="/my-notes">
            <span className="link-primary"> Notes </span>
          </Link>
          <Link to="/my-reminders">
            <span className="link-primary"> Reminders </span>
          </Link>
          <Link to="/my-tips">
            <span className="link-primary"> Tips </span>
          </Link>
          <Link to="/notes">
            <span className="link-primary"> All </span>
          </Link>
          <Link to="/favorite">
            <span className="link-primary"> Favorite </span>
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
              notes.map((note) =>
                note.type === "Note" ? (
                  <NoteCard key={note._id} note={note} />
                ) : (
                  <></>
                )
              )
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
})(MyNotes);
