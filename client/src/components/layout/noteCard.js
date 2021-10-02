import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const NoteCard = ({ note, markFavAction }) => {
  const { title, fav, _id, content, date } = note || {};
  const [Fav, setFav] = useState(note.fav);
  const [style, setStyle] = useState({});
  useEffect(() => {
    note.fav === true
      ? setStyle({ color: "#18ad85" })
      : setStyle({ color: "#fd485a" });

    // eslint-disable-next-line
  }, []);

  const markFav = async () => {
    setFav(!Fav);
    await markFavAction(_id);
    /* Fav === true
      ? setStyle({ color: "#18ad85" })
      : setStyle({ color: "#fd485a" });*/
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
        <h1 className="title">{note.title}</h1>
        <p className="content">{note.content}</p>
      </div>
    </>
  );
};
export default NoteCard;
