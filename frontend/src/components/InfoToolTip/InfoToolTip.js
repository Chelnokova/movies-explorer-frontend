import "./InfoToolTip.css";
import React from "react";

function InfoToolTip({ resStatus, text }) {
  return (
    <span
      className={`status-messange ${resStatus ? "status-messange_active" : ""}`}
    >
      {text}
    </span>
  );
}

export default InfoToolTip;
