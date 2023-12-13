// Callout.js
import React from "react";

const Callout = ({ type, children }) => {
  const styles = {
    border: "2px solid",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor:
      type === "info" ? "#e2f0ff" : type === "warning" ? "#ffe5b3" : "#d9f7be",
    borderColor:
      type === "info" ? "#1890ff" : type === "warning" ? "#faad14" : "#52c41a",
  };

  return <div style={styles}>{children}</div>;
};

export default Callout;
