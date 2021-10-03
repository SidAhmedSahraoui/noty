import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faClock,
  faLaptopCode,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

// Utils
import Days from "../../utils/Days";

// Actions
import { favNote, clearErrors } from "../../redux/actions/noteActions";

const NoteCard = ({ note, favNote }) => {
  const { fav, _id, title, content, date } = note || {};
  const [Fav, setFav] = useState(fav);
  const [style, setStyle] = useState({});
  useEffect(() => {
    Fav === true
      ? setStyle({ color: "#18ad85" })
      : setStyle({ color: "#fd485a" });

    // eslint-disable-next-line
  }, []);

  const markFav = async () => {
    setFav(!Fav);

    await favNote(_id);
    Fav === false
      ? setStyle({ color: "#18ad85" })
      : setStyle({ color: "#fd485a" });
  };
  return (
    <>
      <div className="card">
        <div className="fav-icon">
          <FontAwesomeIcon
            style={style}
            className="icon"
            icon={faHeart}
            onClick={markFav}
            size="lg"
          />
        </div>
        <h3 className="title">{note.title}</h3>

        <FontAwesomeIcon
          style={{ color: "#6610f2" }}
          className="type-icon"
          icon={
            note.type === "Note"
              ? faBookmark
              : note.type === "Reminder"
              ? faClock
              : faLaptopCode
          }
          size="lg"
        />
        <h4 className="content">{note.content}</h4>
        <p className="day">{Days(note.date)}</p>
      </div>
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
  favNote,
  clearErrors,
})(NoteCard);
