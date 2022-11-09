import React from "react";
import "../../components/headphones/Headphone.css";
import mobile01 from "../../images/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import tablet01 from "../../images/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import desktop01 from "../../images/product-xx99-mark-two-headphones/desktop/image-product.jpg";

import mobile02 from "../../images/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import tablet02 from "../../images/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import desktop02 from "../../images/product-xx99-mark-one-headphones/desktop/image-product.jpg";

import mobile03 from "../../images/product-xx59-headphones/mobile/image-product.jpg";
import tablet03 from "../../images/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import desktop03 from "../../images/product-xx59-headphones/desktop/image-product.jpg";

import headphone from "../../images/xheadphones.png";
import speaker from "../../images/xspeakers.png";
import earphone from "../../images/xearphones.png";
import righticon from "../../images/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import Headphone01 from "./Headphone01";

const Headphone = () => {
  return (
    <>
      <div className="heading">
        <h4>HEADPHONES</h4>
      </div>

      <div className="section01">
        <img className="section01-img" src={mobile01} alt="" />
        <img className="section02-img" src={tablet01} alt="" />
        <img className="section03-img" src={desktop01} alt="" />
        <div className="section01-text">
          <h6>NEW PRODUCT</h6>
          <h4>XX99 Mark II Headphones</h4>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>

          <a href="/headphone01" className="btn">
            SEE PRODUCT
          </a>
        </div>
      </div>

      <div className="section01" id="section02">
        <img className="section01-img" src={mobile02} alt="" />
        <img className="section02-img" src={tablet02} alt="" />
        <img className="section03-img" src={desktop02} alt="" />
        <div className="section01-text" id="section02-text">
          <h4 className="heading-02">
            XX99 Mark I <br /> Headphones
          </h4>
          <p>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>

          <a href="/headphone02" className="btn">
            SEE PRODUCT
          </a>
        </div>
      </div>

      <div className="section01">
        <img className="section01-img" src={mobile03} alt="" />
        <img className="section02-img" src={tablet03} alt="" />
        <img className="section03-img" src={desktop03} alt="" />
        <div className="section01-text">
          <h4 className="heading-02">
            XX59 <br /> Headphones
          </h4>
          <p>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>

          <a href="/headphones03" className="btn">
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
  );
};

export default Headphone;
