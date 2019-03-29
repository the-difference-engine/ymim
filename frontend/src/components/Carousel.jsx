import React, { Component } from "react";

class Carousel extends Component {
    render() {
        return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block w-100" src="" alt="First slide"/>
         </div>
        <div className="carousel-item">
        <img className="d-block w-100" src="..." alt="Second slide"/>
        </div>
        <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
</div>
  );
}
}

export default Carousel;
