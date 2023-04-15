import React from "react";
import Book1 from "../images/Group1.jpeg";
import Book2 from "../images/Group2.png";
import Book3 from "../images/Group3.png";
import TypingAnimation from "./Typeanimation";

const About = () => {
  const texts = [
    { text: "Spider man.", delay: 100 },
    { text: "Batman.", delay: 200 },
    { text: "Avengers.", delay: 300 },
    { text: "X-men.", delay: 400 },
    { text: "Wonder woman.", delay: 300 },
  ];
  return (
    <section className="best-selling" id="about">
      <h2>Best Selling Comics</h2>
      <section className="comic-list">
        {" "}
        <ul className="comic-ul">
          <TypingAnimation texts={texts} />
          <div className="comic-ul">
            {" "}
            <img className="b1" src={Book1} />
            <img className="b2" src={Book2} />
            <img className="b3" src={Book3} />
          </div>
        </ul>
      </section>
    </section>
  );
};

export default About;
