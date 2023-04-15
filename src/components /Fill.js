import React from "react";
import Spoibook from "../images/spibook.png";
import Bang from "../images/Bang.png";
const Fill = () => {
  return (
    <section className="hero2">
      <main className="ohhno">
        <h2 className="avenger">The Avengers Spectacular Special Issue</h2>
        <p className="ppps">
          The start of a great new avengers line-up, avengers assemble.
        </p>
        <button className="Download-buttons">Download</button>
      </main>
      <div className="captains">
        <img src={Spoibook} alt="product-image" />

        <img src={Bang} className="bang" alt="product-image" />
      </div>
    </section>
  );
};

export default Fill;
