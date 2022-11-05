import React from "react";
import "./Navbar.css";
import navbrand from "../../images/home/desktop/audiophile.png";
import CombinedShape from "../../images/home/desktop/Combined Shape.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-4 mx-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={navbrand} alt="" srcset="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link " aria-current="page" href="#">
                HOME
              </a>
              <a className="nav-link " href="#">
                HEADPHONES
              </a>
              <a className="nav-link " href="#">
                SPEAKERS
              </a>
              <a className="nav-link " href="#">
                EARPHONES
              </a>
            </div>
            <div classNameName="cart-icon">
              <a className="nav-link">
                <img src={CombinedShape} alt="" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
