import React from "react";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Alerts = ({ alerts }) => {
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Alert className="alerts">
        <div className={alert.type} key={alert.id}>
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
