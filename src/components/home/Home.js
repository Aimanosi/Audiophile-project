import React from "react";
import "../home/Home.css";
import imageheader from "../../images/home/mobile/image-header.jpg";
import imageheadertab from "../../images/home/tablet/image-header.jpg";
import imageheaderdesk from "../../images/home/desktop/image-hero.jpg";
import righticon from "../../images/shared/desktop/icon-arrow-right.svg";
import speaker03 from "../../images/home/mobile/image-speaker-zx9.png";
import speaker04 from "../../images/image-removebg-preview.png";
import section04mobile from "../../images/home/mobile/image-speaker-zx7.jpg";
import section04tablet from "../../images/home/tablet/image-speaker-zx7.jpg";
import section04desktop from "../../images/home/desktop/image-speaker-zx7.jpg";

import section05mobile from "../../images/home/mobile/image-earphones-yx1.jpg";
import section05tablet from "../../images/home/tablet/image-earphones-yx1.jpg";
import section05desktop from "../../images/home/desktop/image-earphones-yx1.jpg";

import headphone from "../../images/xheadphones.png";
import speaker from "../../images/xspeakers.png";
import earphone from "../../images/xearphones.png";

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
          <a href="#" className="btn">
            SEE PRODUCT
          </a>
        </div>
      </div>

      {/* HOME SECTION 2 */}

      <div className="home02">
        <div className="container-home02">
          <img className="headphones-mobile" src={headphone} alt="" />
          <div className="text-container">
            {" "}
            <p>HEADPHONES</p>{" "}
            <a href="">
              SHOP NOW <img src={righticon} alt="" />{" "}
            </a>{" "}
          </div>
        </div>

        <div className="container-home02">
          <img className="speakers-mobile" src={speaker} alt="" />
          <div className="text-container">
            {" "}
            <p>SPEAKERS</p>{" "}
            <a href="">
              SHOP NOW <img src={righticon} alt="" />{" "}
            </a>{" "}
          </div>
        </div>

        <div className="container-home02">
          <img className="earphones-mobile" src={earphone} alt="" />
          <div className="text-container">
            {" "}
            <p>EARPHONES</p>{" "}
            <a href="">
              SHOP NOW <img src={righticon} alt="" />{" "}
            </a>{" "}
          </div>
        </div>
      </div>

      {/* HOME SECTION 3 */}

      <div className="home03">
        <img className="img-home03" src={speaker03} alt="" />
        <img className="img-home04" src={speaker04} alt="" />

        <div className="home03-text">
          <h1>
            ZX9 <br /> SPEAKER
          </h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <a className="btn" href="#">
            SEE PRODUCT
          </a>
        </div>
      </div>

      {/* HOME SECTION 4 */}
      <div className="home04">
        <img className="mob-img" src={section04mobile} alt="" />
        <img className="mob-tab" src={section04tablet} alt="" />
        <img className="mob-desk" src={section04desktop} alt="" />

        <div className="home04-text">
          <h5>ZX7 SPEAKER</h5>
          <a className="btn" href="#">
            SEE PRODUCT
          </a>
        </div>
      </div>

      {/* HOME SECTION 5 */}

      <div className="home05">
        <img className="mob-ear" src={section05mobile} alt="" />
        <img className="tab-ear" src={section05tablet} alt="" />
        <img className="desk-ear" src={section05desktop} alt="" />
        <div className="home05-text">
          <h5>YX1 EARPHONES</h5>
          <a className="btn" href="#">
            SEE PRODUCT
          </a>
        </div>
      </div>
    </>
  );
};

export default home;
