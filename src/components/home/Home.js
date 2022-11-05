import React from "react";
import "../home/Home.css";
import imageheader from "../../images/home/mobile/image-header.jpg";
import imageheadertab from "../../images/home/tablet/image-header.jpg";
import imageheaderdesk from "../../images/home/desktop/image-hero.jpg";

const home = () => {
  return (
    <>
      <div className="home01">
        <div>
          <div className="imageshome">
            <img className="mobile-image" src={imageheader} alt="" />
          </div>
          <div>
            <img className="tablet-image" src={imageheadertab} alt="" />
          </div>
          <div>
            <img className="desktop-image" src={imageheaderdesk} alt="" />
          </div>
        </div>
        <div className="home01-text">
          <h5>NEW PRODUCT</h5>
          <h1>
            XX99 Mark II <br /> Headphones
          </h1>
          <p>
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <a href="" className="btn">
            SEE PRODUCT
          </a>
        </div>
      </div>
    </>
  );
};

export default home;
