import React from "react";
import "../../components/earphones/Earphones.css";
import mobile01 from "../../images/product-yx1-earphones/mobile/image-product.jpg";
import tablet01 from "../../images/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import desktop01 from "../../images/product-yx1-earphones/desktop/image-product.jpg";

import headphone from "../../images/xheadphones.png";
import speaker from "../../images/xspeakers.png";
import earphone from "../../images/xearphones.png";
import righticon from "../../images/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const Earphones = () => {
  return (
    <div>
      <>
        <div className="heading">
          <h4>EARPHONES</h4>
        </div>
        <div className="section01">
          <img className="section01-img" src={mobile01} alt="" />
          <img className="section02-img" src={tablet01} alt="" />
          <img className="section03-img" src={desktop01} alt="" />
          <div className="section01-text">
            <h6>NEW PRODUCT</h6>
            <h4>
              YX1 WIRELESS <br /> EARPHONES
            </h4>
            <p>
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>

            <Link to="/earphone01" className="btn">
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
              <a href="">
                SHOP NOW <img id="righticon" src={righticon} alt="" />{" "}
              </a>{" "}
            </div>
          </div>

          <div className="container-home02">
            <img className="speakers-mobile" src={speaker} alt="" />
            <div className="text-container">
              {" "}
              <p>SPEAKERS</p>{" "}
              <a href="">
                SHOP NOW <img id="righticon" src={righticon} alt="" />{" "}
              </a>{" "}
            </div>
          </div>

          <div className="container-home02">
            <img className="earphones-mobile" src={earphone} alt="" />
            <div className="text-container">
              {" "}
              <p>EARPHONES</p>{" "}
              <a href="">
                SHOP NOW <img id="righticon" src={righticon} alt="" />{" "}
              </a>{" "}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Earphones;
