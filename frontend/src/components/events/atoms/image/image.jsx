import React from "react";
import "./image.css";

const EventImage = ({ url, image, type }) => {
  return (
    <div className={`eventImage ${type}`}>
      <a href={url}>
        <img src={image} alt="" />
      </a>
    </div>
  );
};

export default EventImage;
