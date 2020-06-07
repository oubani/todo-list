import React from "react";

const Alert = ({ alert }) => {
  if (alert)
    return <div className={`alert alert-${alert.type} `}>{alert.msg}</div>;
  else return " ";
};

export default Alert;
