import React from "react";
import "../headphones/Headphones01.css";
import mobile01 from "../../images/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import tablet01 from "../../images/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import desktop01 from "../../images/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import { Link } from "react-router-dom";

import headphone from "../../images/xheadphones.png";
import speaker from "../../images/xspeakers.png";
import earphone from "../../images/xearphones.png";
import righticon from "../../images/shared/desktop/icon-arrow-right.svg";

import img01 from "../../images/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import img02 from "../../images/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import img03 from "../../images/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";

import img01tab from "../../images/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import img02tab from "../../images/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import img03tab from "../../images/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";

import img01desk from "../../images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import img02desk from "../../images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import img03desk from "../../images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

const Headphone01 = () => {
  return (
    <>
      <p className="heading-category01">Go Back</p>

      <div className="headphone-category01">
        <img className="section01-img" src={mobile01} alt="" />
        <img className="section02-img" src={tablet01} alt="" />
        <img className="section03-img" src={desktop01} alt="" />
        <div className="section01-text">
          <p className="new-product">New product</p>
          <h4>XX99 Mark II Headphones</h4>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>

          <h6>$ 2,999</h6>

          <div className="add-tocart">
            <div className="counter">
              <a href="">-</a>
              <p>1</p>
              <a href="">+</a>
            </div>
            <a href="/" className="btn">
              ADD TO CART
            </a>
          </div>
        </div>
      </div>

      <div className="text-area">
        <div>
          <h5>FEATURES</h5>
          <p>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
            <br />
            <br />
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>

        <div className="headphone-category01-section03">
          <div>
            <h5>IN THE BOX</h5>
          </div>

          <div>
            <div className="inboxflex">
              <p className="numbers-section01">1x</p>
              <p>Headphone Unit</p>
            </div>
            <div className="inboxflex">
              <p className="numbers-section01">1x</p>
              <p>Replacement Earcups</p>
            </div>
            <div className="inboxflex">
              <p className="numbers-section01">2x</p>
              <p> User manual</p>
            </div>

            <div className="inboxflex">
              <p className="numbers-section01">1x</p>
              <p>3.5mm 5m Audio Cable</p>
            </div>
            <div className="inboxflex">
              <p className="numbers-section01">1x</p>
              <p>Travel Bag</p>
            </div>
          </div>
        </div>
      </div>

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

      <h3>YOU MAY ALSO LIKE</h3>
      <div className="you-may-also-like">
        <div>
          <img src="" alt="" />
          <h5>XX99 MARK I</h5>
          <a href="/" className="btn">
            SEE PRODUCT
          </a>
        </div>
        <div>
          <img src="" alt="" />
          <h5>XX59</h5>
          <a href="/" className="btn">
            SEE PRODUCT
          </a>
        </div>
        <div>
          <img src="" alt="" />
          <h5>ZX9 SPEAKER</h5>
          <a href="/" className="btn">
            SEE PRODUCT
          </a>
        </div>
      </div>

      <div className="home02">
        <div className="container-home02">
          <img className="headphones-mobile" src={headphone} alt="" />
          <div className="text-container">
            {" "}
            <p>HEADPHONES</p>{" "}
            <a href="/headphone">
              SHOP
              <img id="righticon" src={righticon} alt="" />{" "}
            </a>{" "}
          </div>
        </div>

        <div className="container-home02">
          <img className="speakers-mobile" src={speaker} alt="" />
          <div className="text-container">
            {" "}
            <p>SPEAKERS</p>{" "}
            <a href="/speakers">
              SHOP
              <img id="righticon" src={righticon} alt="" />{" "}
            </a>{" "}
          </div>
        </div>

        <div className="container-home02">
          <img className="earphones-mobile" src={earphone} alt="" />
          <div className="text-container">
            {" "}
            <p>EARPHONES</p>{" "}
            <a href="/earphones">
              SHOP
              <img id="righticon" src={righticon} alt="" />{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Headphone01;
