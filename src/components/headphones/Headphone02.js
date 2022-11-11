import React from "react";
import "../headphones/Headphones01.css";
import mobile01 from "../../images/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import tablet01 from "../../images/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import desktop01 from "../../images/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

import headphone from "../../images/xheadphones.png";
import speaker from "../../images/xspeakers.png";
import earphone from "../../images/xearphones.png";
import righticon from "../../images/shared/desktop/icon-arrow-right.svg";

import img01 from "../../images/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg";
import img02 from "../../images/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg";
import img03 from "../../images/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg";

import img01tab from "../../images/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg";
import img02tab from "../../images/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg";
import img03tab from "../../images/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg";

import img01desk from "../../images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import img02desk from "../../images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import img03desk from "../../images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";

import imgsection05mob01 from "../../images/shared/mobile/image-xx99-mark-two-headphones.jpg";
import imgsection05mob02 from "../../images/shared/mobile/image-xx59-headphones.jpg";
import imgsection05mob03 from "../../images/shared/mobile/image-zx9-speaker.jpg";

import imgsection05tab01 from "../../images/shared/tablet/image-xx99-mark-two-headphones.jpg";
import imgsection05tab02 from "../../images/shared/tablet/image-xx59-headphones.jpg";
import imgsection05tab03 from "../../images/shared/tablet/image-zx9-speaker.jpg";

import imgsection05desk01 from "../../images/shared/desktop/image-xx99-mark-two-headphones.jpg";
import imgsection05desk02 from "../../images/shared/desktop/image-xx59-headphones.jpg";
import imgsection05desk03 from "../../images/shared/desktop/image-zx9-speaker.jpg";

const Headphone01 = () => {
  const [count, setCount] = useState(1);
  const decrease = () => {
    setCount(count > 1 ? count - 1 : count);
  };
  const increase = () => {
    setCount(count + 1);
  };

  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      {/* section 01 */}

      <div className="heading-category01">
        <Link to="#" onClick={goBack}>
          Go Back
        </Link>
      </div>

      <div className="headphone-category01">
        <img className="section01-img" src={mobile01} alt="" />
        <img className="section02-img" src={tablet01} alt="" />
        <img className="section03-img" src={desktop01} alt="" />
        <div className="section01-text">
          <h4>XX99 Mark I Headphones</h4>
          <p>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>

          <h6>$ 1,750</h6>

          <div className="add-tocart">
            <div className="counter">
              <button onClick={decrease}>-</button>
              <p id="count">{count}</p>
              <button onClick={increase}>+</button>
            </div>
            <Link to="/" className="btn">
              ADD TO CART
            </Link>
          </div>
        </div>
      </div>

      {/* section 02 */}

      <div className="text-area">
        <div>
          <h5>FEATURES</h5>
          <p>
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz.
          </p>
          <p>
            From the handcrafted microfiber ear cushions to the robust metal
            headband with inner damping element, the components work together to
            deliver comfort and uncompromising sound. Its closed-back design
            delivers up to 27 dB of passive noise cancellation, reducing
            resonance by reflecting sound to a dedicated absorber. For
            connectivity, a specially tuned cable is included with a balanced
            gold connector.
          </p>
        </div>

        {/* section 03 */}

        <div className="headphone-category01-section03">
          <div>
            <h5>IN THE BOX</h5>
          </div>
          <div>
            <p>
              {" "}
              <span className="numbers-section01">1x</span>Headphone Unit
            </p>
            <p>
              {" "}
              <span className="numbers-section01">2x</span>Replacement Earcups
            </p>
            <p>
              {" "}
              <span className="numbers-section01">1x</span>User manual
            </p>
            <p>
              {" "}
              <span className="numbers-section01">1x</span>3.5mm 5m Audio Cable
            </p>
          </div>
        </div>
      </div>

      {/* section 04 */}

      <div className="pictures-headphone-c01">
        <img className="pictures01" src={img01} alt="" />
        <img className="pictures02" src={img02} alt="" />
        <img className="pictures03" src={img03} alt="" />
      </div>

      <div className="pictures-headphone-c02">
        <img className="pictures01" src={img01tab} alt="" />
        <img className="pictures03" src={img03tab} alt="" />
        <img className="pictures02" src={img02tab} alt="" />
      </div>

      <div className="pictures-headphone-c03">
        <img className="pictures01" src={img01desk} alt="" />
        <img className="pictures03" src={img03desk} alt="" />
        <img className="pictures02" src={img02desk} alt="" />
      </div>

      {/* secton 05 */}

      <h3 className="section05heading">YOU MAY ALSO LIKE</h3>
      <div className="you-may-also-like">
        <div>
          <img className="imgsection05mob" src={imgsection05mob01} alt="" />
          <img className="imgsection05tab" src={imgsection05tab01} alt="" />
          <img className="imgsection05desk" src={imgsection05desk01} alt="" />
          <h5>XX99 MARK II</h5>
          <Link to="/headphone01" className="btn">
            SEE PRODUCT
          </Link>
        </div>
        <div>
          <img className="imgsection05mob" src={imgsection05mob02} alt="" />
          <img className="imgsection05tab" src={imgsection05tab02} alt="" />
          <img className="imgsection05desk" src={imgsection05desk02} alt="" />
          <h5>XX59</h5>
          <Link to="/headphone03" className="btn">
            SEE PRODUCT
          </Link>
        </div>
        <div>
          <img className="imgsection05mob" src={imgsection05mob03} alt="" />
          <img className="imgsection05tab" src={imgsection05tab03} alt="" />
          <img className="imgsection05desk" src={imgsection05desk03} alt="" />
          <h5>ZX9 SPEAKER</h5>
          <Link to="/speaker01" className="btn">
            SEE PRODUCT
          </Link>
        </div>
      </div>

      <div className="home02">
        <div className="container-home02">
          <img className="headphones-mobile" src={headphone} alt="" />
          <div className="text-container">
            {" "}
            <p>HEADPHONES</p>{" "}
            <Link to="/headphone">
              SHOP
              <img id="righticon" src={righticon} alt="" />{" "}
            </Link>{" "}
          </div>
        </div>

        <div className="container-home02">
          <img className="speakers-mobile" src={speaker} alt="" />
          <div className="text-container">
            {" "}
            <p>SPEAKERS</p>{" "}
            <Link to="/speakers">
              SHOP
              <img id="righticon" src={righticon} alt="" />{" "}
            </Link>{" "}
          </div>
        </div>

        <div className="container-home02">
          <img className="earphones-mobile" src={earphone} alt="" />
          <div className="text-container">
            {" "}
            <p>EARPHONES</p>{" "}
            <Link to="/earphones">
              SHOP
              <img id="righticon" src={righticon} alt="" />{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Headphone01;
