import React from "react";
import Iron from "../images/Iron.png";
function Ironman() {
  return (
    <section className="Iron">
      <main className="ohhnoman">
        <h2 className="Iron-avenger">30% Bonus</h2>
        <p className="Iron-text">
          For All Iron Man Books For The Next 30 Days.
        </p>
        <button className="Download-buttons">Download</button>
      </main>
      <article className="captains">
        <img className="Ironman" src={Iron} alt="product-image" />
      </article>
    </section>
  );
}

export default Ironman;
