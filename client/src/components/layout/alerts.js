import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
const Alerts = ({ alerts }) => {
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Alert>
        <div className="alerts">
          <FontAwesomeIcon className="icon mr-2" icon={faInfoCircle} />
          <span>{alert.msg}</span>
        </div>
      </Alert>
    ))
  );
};

const mapSateToProps = (state) => ({
  alerts: state.alerts,
});

export default connect(mapSateToProps, {})(Alerts);
