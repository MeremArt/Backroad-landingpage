import React from "react";
import Title from "./Title";
import Capcom from "../images/Capcom.png";
import Captain from "../images/captain.png";
const Service = () => {
  return (
    <section className="hero2">
      <main className="oh">
        <h2 className="avenger">The Avengers Spectacular Special Issue</h2>
        <p className="pp">
          The start of a great new avengers line-up, avengers assemble.
        </p>
        <button className="Download-button">Download</button>
      </main>
      <div className="captain">
        <img src={Capcom} alt="product-image" />

        <img src={Captain} />
      </div>
    </section>
  );
};

export default Service;
