import React from "react";
import Title from "./Title";
import Spi from "../images/spiderbook.png";
import Spider from "../images/spider.png";
const Service = () => {
  return (
    <section className="hero2">
      <main className="ohh">
        <h2 className="avenger">The Amazing Spider - Man Series</h2>
        <p className="ppp">
          The start of a great new avengers line-up, avengers assemble.
        </p>
        <button className="Download-buttons">Download</button>
      </main>
      <div className="captains">
        <img src={Spider} alt="product-image" />

        <img src={Spi} alt="product-image" />
      </div>
    </section>
  );
};

export default Service;
