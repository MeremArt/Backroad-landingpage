import React from "react";
import Float from "../images/Float/Float";
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1 className="fix">Experience Adventures, Humor, and Drama.</h1>
        <p>Unleash Your Inner Hero With Every Page Turn.</p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
        <div className="">
          <Float />
        </div>
      </div>
    </section>
  );
};

export default Hero;
