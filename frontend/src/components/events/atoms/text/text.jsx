import React from "react";
import "./text.css";

const Text = ({ text, type }) => {
  return (
    <p className={`text ${type}`}>
      {text}
    </p>
  );
};

export default Text;
