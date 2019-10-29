import React from "react";
import "./image.css";

const EventImage = ({ url, image, type }) => {
  return (
    <div className={`eventImage ${type}`}>
      <a target="_blank" rel="noopener noreferrer" href={url}>
        <img src={image} alt="" />
      </a>
    </div>
  );
};

export default EventImage;
