import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { WEBSITE_NAME } from "../../utils/Data";
import "../styles/_profile.scss";
import Male from "../../images/male_avatar.svg";
import Female from "../../images/female_avatar.svg";
import { Link } from "react-router-dom";
import { Old } from "../../utils/Days";
// Actions
import { loadUser } from "../../redux/actions/authActions";

const Profile = (props) => {
  const { user, loading } = props;

  const { username, email, gender, date } = user || {};

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | ${
          loading ? "Loading..." : username || "Not found"
        }`}</title>
      </Helmet>
      <div className="main-profile">
        <div className="general">
          <img
            className="avatar"
            alt="avatar"
            src={gender === 1 ? Male : gender === 2 ? Female : Male}
          />
          <h1 className="title">{username}</h1>
          <h4>email : {email}</h4>
          <p className="day">Joined {Old(date)}</p>
          <div className="control">
            <Link to="/notes/add">
              <button className="button-primary"> Add Note </button>
            </Link>
            <Link to="/notes">
              <button className="button-primary"> My Notes </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
const mapSateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
});

export default connect(mapSateToProps, {
  loadUser,
})(Profile);
