// CustomHeading.jsx
import React from "react";

export default function CustomTag({ children, bgcolor }) {
  return (
    <span
      style={{
        backgroundColor: bgcolor,
        padding: "0.5rem",
        borderRadius: "0.5rem",
        color: "black",
        fontWeight: "bold",
        fontSize: "0.8rem",
        margin: "0.5rem",
      }}
    >
      {children}
    </span>
  );
}
