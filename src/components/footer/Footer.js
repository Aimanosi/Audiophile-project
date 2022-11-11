import React from "react";
import "../footer/Footer.css";
import mobileimg from "../../images/shared/mobile/image-best-gear.jpg";
import tabimg from "../../images/shared/tablet/image-best-gear.jpg";
import deskimg from "../../images/shared/desktop/image-best-gear.jpg";
import navbrand from "../../images/home/desktop/audiophile.png";

import facebookicon from "../../images/shared/desktop/icon-facebook.svg";
import twittericon from "../../images/shared/desktop/icon-twitter.svg";
import instagramicon from "../../images/shared/desktop/icon-instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-img">
        <img className="mobileimg" src={mobileimg} alt="" />
        <img className="tabimg" src={tabimg} alt="" />

        <div className="footer-text">
          <h1>
            Bringing you the <br /> <span>best</span> audio gear
          </h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img className="deskimg" src={deskimg} alt="" />
      </div>

      {/* section 2 */}

      <div className="footer-body">
        <h6></h6>

        <div className="navitems">
          <div className="navbrand">
            <img src={navbrand} alt="" />
          </div>

          <div className="links">
            <Link to="/">HOME</Link>
            <Link to="/headphone">HEADPHONES</Link>
            <Link to="/speakers">SPEAKERS</Link>
            <Link to="/earphones">EARPHONES</Link>
          </div>
        </div>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <div className="cr-link">
          <p>Copyright 2021. All Rights Reserved</p>
          <div className="socials">
            <Link to="#">
              <img src={facebookicon} alt="" />
            </Link>
            <Link to="#">
              <img id="twitter" src={twittericon} alt="" />
            </Link>
            <Link to="#">
              {" "}
              <img src={instagramicon} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
