import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { WEBSITE_NAME } from "../../utils/Data";
import { Container, Button, Form } from "react-bootstrap";

// Actions
import { saveNote, clearErrors } from "../../redux/actions/noteActions";
import { setAlert } from "../../redux/actions/alertActions";

const AddNote = (props) => {
  const { error, saveNote, clearErrors, setAlert } = props;
  const [note, setNote] = useState({
    Fav: false,
    title: "",
    content: "",
    type: "",
  });

  const { Fav, title, content, type } = note;

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(note);
  };

  useEffect(() => {
    if (error && error.length) {
      if (typeof error === "object") {
        error.forEach((err) => {
          console.log(err.msg, "danger");
        });
      } else {
        console.log(error, "danger");
      }

      clearErrors();
    }

    // eslint-disable-next-line
  }, [error]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (title === "" || content === "" || type === "") {
      setAlert("Please enter all fields", "danger");
    } else {
      await saveNote({ title, content, type });
      setAlert("Note saved", "success");
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Add Note`}</title>
      </Helmet>
      <Container>
        <div className="container-notes">
          <h4>
            <strong> Add Note </strong>
          </h4>
          <form className="form-note" onSubmit={onSubmit}>
            <input
              className="input-text"
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              placeholder="Title"
              required
            />
            <textarea
              className="input-note"
              type="text-area"
              name="content"
              value={content}
              onChange={onChange}
              placeholder="Type note ..."
              required
            />
            <div className="valid-form">
              <div>
                <select
                  value={type}
                  onChange={onChange}
                  className="select-menu"
                  name="type"
                  id="note-type"
                >
                  <option className="select-item" value="">
                    All Types
                  </option>
                  <option className="select-item" value="Note">
                    Note
                  </option>
                  <option className="select-item" value="Reminder">
                    Reminder
                  </option>
                  <option className="select-item" value="Tip">
                    Tip
                  </option>
                </select>
              </div>
              <div>
                <Button className="button-primary" type="submit">
                  Save
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};
const mapSateToProps = (state) => ({
  notes: state.note.notes,
  error: state.note.error,
});

export default connect(mapSateToProps, { saveNote, clearErrors, setAlert })(
  AddNote
);
