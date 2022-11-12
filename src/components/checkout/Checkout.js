import React from "react";
import "../checkout/Checkout.css";
import xx99markTwo from "../../images/cart/image-xx99-mark-two-headphones.jpg";
import xx59markOne from "../../images/cart/image-xx59-headphones.jpg";
import yx1 from "../../images/cart/image-yx1-earphones.jpg";

const checkout = () => {
  return (
    <>
      <div>
        <h4>checkout</h4>

        <p className="checkoutHeading">Billing details</p>
        <form action="">
          <div className="name">
            <p>Name</p>
            <input className="input" type="text" placeholder="Nasiru Hammed" />
          </div>

          <div className="emailAddress">
            <p>Email address</p>
            <input
              className="input"
              type="text"
              placeholder="nasaces360@gmail.com"
            />
          </div>

          <div className="phoneNumber">
            <p>Phone number</p>
            <input className="input" type="text" placeholder="09082716040" />
          </div>
        </form>

        <p className="checkoutHeading">Shipping info</p>
        <form action="">
          <div className="yourAddress">
            <p>Your Address</p>
            <input
              className="input"
              type="text"
              placeholder="39 bola street, Lagos state"
            />
          </div>

          <div className="zipCode">
            <p>ZIP code</p>
            <input className="input" type="text" placeholder="10001" />
          </div>

          <div className="city">
            <p>City</p>
            <input className="input" type="text" placeholder="Lagos" />
          </div>
        </form>

        <p className="checkoutHeading">Payment details</p>
        <form action="">
          <div>
            <p>Payment Method</p>
          </div>
          <div>
            <div className="checkbox">
              <input type="checkbox" id="cash-on-delivery" />
              <label htmlFor="e-money">e-money</label>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="cash-on-delivery" />
              <label htmlFor="cash-on-delivery">Cash on Delivery</label>
            </div>
          </div>
        </form>

        <form action="">
          <div className="e-money">
            <p>e-Money Number</p>
            <input className="input" type="text" placeholder="238521993" />
          </div>

          <div className="e-pin">
            <p>e-Money pin</p>
            <input className="input" type="text" placeholder="6891" />
          </div>
        </form>
      </div>

      <div className="summary">
        <h6>Summary</h6>

        <div>
          <div className="summary-flex">
            <img src={xx99markTwo} alt="" />
            <div className="text">
              <p className="summary-p">
                XX99 MK II <p className="opacity">x1</p>
              </p>
              <p className="amount">$2,999</p>
            </div>
          </div>

          <div className="summary-flex">
            <img src={xx59markOne} alt="" />

            <div>
              <p className="summary-p">
                XX59 <p className="opacity">x1</p>
              </p>
              <p className="amount">$899</p>
            </div>
          </div>

          <div className="summary-flex">
            <img src={yx1} alt="" />
            <div>
              <p className="summary-p">
                YX1 <p className="opacity">x1</p>
              </p>
              <p className="amount">$599</p>
            </div>
          </div>
          <h6>
            Total <span className="price">$5,396</span>
          </h6>

          <h6>
            Shipping <span className="price">$5,396</span>
          </h6>

          <h6>
            Vat(included) <span className="price">$5,396</span>
          </h6>

          <h6>
            Grand total <span className="grandPrice">$5,396</span>
          </h6>
        </div>
      </div>
    </>
  );
};

export default checkout;
