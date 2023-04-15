import React from "react";
import Spider from "../images/SpidHang.png";
function Spiderman() {
  return (
    <div>
      {" "}
      <section className="Spiderman">
        <main className="ohhnoSpi">
          <h2 className="aven">Read More & Subscribe To Our</h2>
          <p className="ppps">NEWSLETTER</p>
        </main>
        <div className="captains">
          <img src={Spider} className="Spiman" alt="product-image" />
        </div>
      </section>
    </div>
  );
}

export default Spiderman;
