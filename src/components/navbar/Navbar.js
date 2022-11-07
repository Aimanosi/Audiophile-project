import React from "react";
import "./Navbar.css";
import navbrand from "../../images/home/desktop/audiophile.png";
import CombinedShape from "../../images/home/desktop/Combined Shape.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-4 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={navbrand} alt="" srcset="" />
          </Link>
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
              <Link className="" aria-current="page" to="/">
                HOME
              </Link>
              <Link className="" to="/headphone">
                HEADPHONES
              </Link>
              <Link className="" to="/Speakers">
                SPEAKERS
              </Link>
              <Link className="" to="Earphones">
                EARPHONES
              </Link>
            </div>
            <div classNameName="cart-icon">
              <Link className="nav-link">
                <img src={CombinedShape} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
