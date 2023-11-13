import "./InfoToolTip.css";
import React from "react";

function InfoToolTip({ resStatus, text, castomClass }) {
  return (
    <span
      className={`status-messange ${castomClass} ${
        resStatus ? "status-messange_active" : ""
      }`}
    >
      {text}
    </span>
  );
}

export default InfoToolTip;
