import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide1 from "../images/Slide.jpeg";
import Slide2 from "../images/Slide2.jpeg";
import Slide3 from "../images/Slide3.jpeg";
import Slide4 from "../images/Slide4.jpeg";
import Slide5 from "../images/Slide5.jpeg";
export default function Slide() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="Slide">
      <Carousel responsive={responsive}>
        <div>
          <img src={Slide1} />
        </div>
        <div>
          <img src={Slide2} />
        </div>
        <div>
          <img src={Slide3} />
        </div>
        <div>
          <img src={Slide4} />
        </div>
        <div>
          <img src={Slide5} />
        </div>
        <div>
          <img src={Slide1} />
        </div>
        <div>
          <img src={Slide2} />
        </div>
        <div>
          <img src={Slide3} />
        </div>
        <div>
          <img src={Slide4} />
        </div>
        <div>
          <img src={Slide5} />
        </div>
      </Carousel>
    </div>
  );
}
