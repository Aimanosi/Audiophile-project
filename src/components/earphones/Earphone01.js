import React from "react";
import "../headphones/Headphones01.css";
import mobile01 from "../../images/product-yx1-earphones/mobile/image-product.jpg";
import tablet01 from "../../images/product-yx1-earphones/tablet/image-product.jpg";
import desktop01 from "../../images/product-yx1-earphones/desktop/image-product.jpg";
import { Link } from "react-router-dom";

import headphone from "../../images/xheadphones.png";
import speaker from "../../images/xspeakers.png";
import earphone from "../../images/xearphones.png";
import righticon from "../../images/shared/desktop/icon-arrow-right.svg";

import img01 from "../../images/product-yx1-earphones/mobile/image-gallery-1.jpg";
import img02 from "../../images/product-yx1-earphones/mobile/image-gallery-2.jpg";
import img03 from "../../images/product-yx1-earphones/mobile/image-gallery-3.jpg";

import img01tab from "../../images/product-yx1-earphones/tablet/image-gallery-1.jpg";
import img02tab from "../../images/product-yx1-earphones/tablet/image-gallery-2.jpg";
import img03tab from "../../images/product-yx1-earphones/tablet/image-gallery-3.jpg";

import img01desk from "../../images/product-yx1-earphones/desktop/image-gallery-1.jpg";
import img02desk from "../../images/product-yx1-earphones/desktop/image-gallery-2.jpg";
import img03desk from "../../images/product-yx1-earphones/desktop/image-gallery-3.jpg";

import imgsection05mob01 from "../../images/shared/mobile/image-xx99-mark-one-headphones.jpg";
import imgsection05mob02 from "../../images/shared/mobile/image-xx59-headphones.jpg";
import imgsection05mob03 from "../../images/shared/mobile/image-zx9-speaker.jpg";

import imgsection05tab01 from "../../images/shared/tablet/image-xx99-mark-one-headphones.jpg";
import imgsection05tab02 from "../../images/shared/tablet/image-xx59-headphones.jpg";
import imgsection05tab03 from "../../images/shared/tablet/image-zx9-speaker.jpg";

import imgsection05desk01 from "../../images/shared/desktop/image-xx99-mark-one-headphones.jpg";
import imgsection05desk02 from "../../images/shared/desktop/image-xx59-headphones.jpg";
import imgsection05desk03 from "../../images/shared/desktop/image-zx9-speaker.jpg";

const Headphone01 = () => {
  return (
    <>
      {/* section 01 */}

      <a
        href="/headphone"
        className="heading-category01"
        id="heading-category01"
      >
        Go Back
      </a>

      <div className="headphone-category01">
        <img className="section01-img" src={mobile01} alt="" />
        <img className="section02-img" src={tablet01} alt="" />
        <img className="section03-img" src={desktop01} alt="" />
        <div className="section01-text">
          <p className="new-product">New product</p>
          <h4>
            YX1 WIRELESS <br /> EARPHONES
          </h4>
          <p>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>

          <h6>$ 599</h6>

          <div className="add-tocart">
            <div className="counter">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <a href="/" className="btn">
              ADD TO CART
            </a>
          </div>
        </div>
      </div>

      {/* section 02 */}

      <div className="text-area">
        <div>
          <h5>FEATURES</h5>
          <p>
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound.
          </p>
          <p>
            The YX1 Wireless Earphones features customizable controls for
            volume, music, calls, and voice assistants built into both earbuds.
            The new 7-hour battery life can be extended up to 28 hours with the
            charging case, giving you uninterrupted play time. Exquisite
            craftsmanship with a splash resistant design now available in an all
            new white and grey color scheme as well as the popular classic
            black.
          </p>
        </div>

        {/* section 03 */}

        <div className="headphone-category01-section03">
          <div>
            <h5>IN THE BOX</h5>
          </div>

          <div>
            <div className="inboxflex">
              <p className="numbers-section01">2x</p>
              <p>Earphone Unit</p>
            </div>
            <div className="inboxflex">
              <p className="numbers-section01">6x</p>
              <p>Multi-size Earplugs</p>
            </div>
            <div className="inboxflex">
              <p className="numbers-section01">1x</p>
              <p> User manual</p>
            </div>

            <div className="inboxflex">
              <p className="numbers-section01">1x</p>
              <p>USB-C Charging Cable</p>
            </div>
            <div className="inboxflex">
              <p className="numbers-section01">1x</p>
              <p>Travel Pouch</p>
            </div>
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
          <h5>XX99 MARK I</h5>
          <Link href="/" className="btn">
            SEE PRODUCT
          </Link>
        </div>
        <div>
          <img className="imgsection05mob" src={imgsection05mob02} alt="" />
          <img className="imgsection05tab" src={imgsection05tab02} alt="" />
          <img className="imgsection05desk" src={imgsection05desk02} alt="" />
          <h5>XX59</h5>
          <Link href="/" className="btn">
            SEE PRODUCT
          </Link>
        </div>
        <div>
          <img className="imgsection05mob" src={imgsection05mob03} alt="" />
          <img className="imgsection05tab" src={imgsection05tab03} alt="" />
          <img className="imgsection05desk" src={imgsection05desk03} alt="" />
          <h5>ZX9 SPEAKER</h5>
          <Link href="/" className="btn">
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
            <Link href="/headphone">
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
            <Link href="/speakers">
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
            <Link href="/earphones">
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
