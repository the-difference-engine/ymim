import React from "react";
import "./image.css";

const EventImage = ({ url, image, type }) => {
  return (
    <div className={`eventImage ${type}`}>
      <img src={image} alt="" />
    </div>
  );
};

export default EventImage;
