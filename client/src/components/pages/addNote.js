import React from "react";
import { Helmet } from "react-helmet";
import { WEBSITE_NAME } from "../../utils/Data";
import { Container } from "react-bootstrap";

const AddNote = () => {
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
          <div className="form-note">
            <textarea
              className="input-note"
              type="text-area"
              name="note"
              placeholder="Type your note , reminder or tip"
              required
            />
            <div className="valid-form">
              <div>
                <select className="select-menu" name="note-type" id="note-type">
                  <option className="select-item" value="Type">
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
                <button className="button-primary"> Save </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default AddNote;
