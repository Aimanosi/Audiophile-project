import React from "react";
import "../../components/speakers/Speakers.css";
import mobile01 from "../../images/product-zx9-speaker/mobile/image-product.jpg";
import tablet01 from "../../images/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import desktop01 from "../../images/product-zx9-speaker/desktop/image-product.jpg";

import mobile02 from "../../images/product-zx7-speaker/mobile/image-product.jpg";
import tablet02 from "../../images/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import desktop02 from "../../images/product-zx7-speaker/desktop/image-product.jpg";

import headphone from "../../images/xheadphones.png";
import speaker from "../../images/xspeakers.png";
import earphone from "../../images/xearphones.png";
import righticon from "../../images/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const Speakers = () => {
  return (
    <div>
      <>
        <div className="heading">
          <h4>SPEAKERS</h4>
        </div>

        <div className="section01">
          <img className="section01-img" src={mobile01} alt="" />
          <img className="section02-img" src={tablet01} alt="" />
          <img className="section03-img" src={desktop01} alt="" />
          <div className="section01-text">
            <h6>NEW PRODUCT</h6>
            <h4>ZX9 speaker</h4>
            <p>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>

            <Link to="/speaker01" className="btn">
              SEE PRODUCT
            </Link>
          </div>
        </div>

        <div className="section01" id="section02">
          <img className="section01-img" src={mobile02} alt="" />
          <img className="section02-img" src={tablet02} alt="" />
          <img className="section03-img" src={desktop02} alt="" />
          <div className="section01-text" id="section02-text">
            <h4 className="heading-02">
              ZX7 <br /> SPEAKER
            </h4>
            <p>
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>

            <Link to="/speaker02" className="btn">
              SEE PRODUCT
            </Link>
          </div>
        </div>

        {/* HOME SECTION 2 */}

        <div className="home02">
          <div className="container-home02">
            <img className="headphones-mobile" src={headphone} alt="" />
            <div className="text-container">
              {" "}
              <p>HEADPHONES</p>{" "}
              <a href="/headphone">
                SHOP <img id="righticon" src={righticon} alt="" />{" "}
              </a>{" "}
            </div>
          </div>

          <div className="container-home02">
            <img className="speakers-mobile" src={speaker} alt="" />
            <div className="text-container">
              {" "}
              <p>SPEAKERS</p>{" "}
              <a href="/speakers">
                SHOP <img id="righticon" src={righticon} alt="" />{" "}
              </a>{" "}
            </div>
          </div>

          <div className="container-home02">
            <img className="earphones-mobile" src={earphone} alt="" />
            <div className="text-container">
              {" "}
              <p>EARPHONES</p>{" "}
              <a href="/earphones">
                SHOP <img id="righticon" src={righticon} alt="" />{" "}
              </a>{" "}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Speakers;
