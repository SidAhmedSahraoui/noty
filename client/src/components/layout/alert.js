import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Alerts = ({ alert }) => {
  return (
    <div key={alert.id} className="alert">
      <FontAwesomeIcon className="icon mr-2" icon={faInfoCircle} />
      {alert.msg}
    </div>
  );
};

export default Alerts;
