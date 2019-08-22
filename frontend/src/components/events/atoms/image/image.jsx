import React from "react";
import "./image.css";

const EventImage = ({
  url,
  image
}) => {
  return (
    <div className="eventImage">
      <a href={url}>
        <img src={image} alt=""/>
      </a>
    </div>
  );
};

export default EventImage;