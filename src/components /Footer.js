import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="best">
      <footer className="feet flex  bg-dark text-white container-fluid ">
        <div className="row">
          <div className="column">
            <article className="art-1 col-md-4">
              <h1> About us</h1>
              <p>
                aspernatur aut odit aut fugit, sed quia consequuntur
                <br />
                magni dolores eos qui ratione voluptatem sequi nesciunt
                <br />
                magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>

              <img
                className="logo-2"
                src="images/collegly.png"
                width="70"
                height="70"
                alt="logo"
              />
            </article>
          </div>
          <div className="column">
            <article className="contact col-md-4">
              <h1>Contact Info</h1>
              <p>
                {" "}
                Address: ipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliq
              </p>
              <p>
                {" "}
                Phone:090909090
                <br />
                info@domain.com
              </p>
            </article>
          </div>
        </div>
        <section className="row">
          <section className="column">
            <div>
              <article className="links col-md-4">
                <h1>Important Links</h1>
                <p>
                  <ul>
                    <li key="my-account">
                      <a className="custom-color custom-class" href="#">
                        My Account
                      </a>
                    </li>
                    <li key="brand-domain">
                      <a className="custom-color custom-class" href="#">
                        Brand domain
                      </a>
                    </li>
                    <li key="shopping-cart">
                      <a className="custom-color custom-class" href="#">
                        Shopping Cart
                      </a>
                    </li>
                  </ul>
                </p>
              </article>
            </div>
          </section>
          <section className="column">
            <div>
              <article className="news col-md-4">
                <h1> Newsletter </h1>
                <p>
                  aspernatur aut odit aut fugit, sed quia consequuntur
                  <br />
                  magni dolores eos qui ratione voluptatem sequi nesciunt
                  <br />
                  magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <form className="" action="index.html" method="post">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <button className="btnn" type="submit" name="button">
                    submit
                  </button>
                </form>
              </article>
            </div>
          </section>
          <hr style={{ border: "5px solid #white", width: "50%" }} />
          <section className="col-12 text-center container-fluid g">
            <p>Copyright &copy; 2021 Your Website</p>
            <a href="#">
              <i className="fab fa-facebook-square fa-2x custom-color"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter-square fa-2x custom-color"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram-square fa-2x custom-color"></i>
            </a>
          </section>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
