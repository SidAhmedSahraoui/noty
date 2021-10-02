import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import "../styles/_profile.scss";
import Male from "../../images/male_avatar.svg";
import Female from "../../images/female_avatar.svg";

// layouts
import Spinner from "../layout/spinner";

// Utils
import { WEBSITE_NAME } from "../../utils/Data";
import { Container } from "react-bootstrap";

const Profile = () => {
  const [user, setUser] = useState({
    name: "ayoub",
    username: "ayoub_dz",
    email: "exemple@exemple.com",
    gender: 1,
  });
  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | profile`}</title>
      </Helmet>
      <div className="main-profile">
        <div className="general">
          <img
            className="avatar"
            src={user.gender === 1 ? Male : user.gender === 2 ? Female : ""}
          />
          <h1 className="title">{user.name}</h1>
          <h1 className="title">{user.email}</h1>
          <h1 className="title">@{user.username}</h1>

          <h3> hello there !! </h3>
        </div>
      </div>
    </>
  );
};
export default Profile;
