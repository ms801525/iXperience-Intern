//THIS IS THE CHECKOUT PAGE FROM WHICH A CUSTOMER CAN ENTER THEIR
//SHIPPING AND PAYMENT DETAILS

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CartPage.css";

// services imports
import {ShippingPaymentService} from "../services/shipping_payment.service";

// Shipping and payment details model import
import { Shipping_Payment } from "../models/shipping_payment";

//renders the checkout page
export default function Checkout() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState(0);
  const [expiration, setExpiration] = useState();
  const [cvv, setCVV] = useState(0);

  const [successMsg, setSuccessMsg]=useState('');

  async function onFormSubmit(e) {
    e.preventDefault();

    // save details to firebase
    await ShippingPaymentService.createShippingPaymentDetails(
      new Shipping_Payment({
        name: name,
        surname: surname,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        address2: address2,
        city: city,
        nameOnCard: nameOnCard,
        creditCardNumber: creditCardNumber,
        expiration: expiration,
        cvv: cvv,
      })
    ).then(() => {
      setSuccessMsg("Order payment successful, confirmation email sent");
    });
  }

  return (
    <div className="container main-card" style={{ width: 980 }}>
      <div className="card card-body border-secondary para" style={{ width: 950 }}>
        <h1 className="text-center display-1 mb-2">Checkout</h1>

        <form onSubmit={onFormSubmit}>
        <h2>Billing address</h2>
        <div className="container d-flex justify-content-evenly">
          <div className="mb-3">
            <label className="form-label">Firstname</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Surname</label>
            <input
              type="text"
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="container d-flex justify-content-evenly">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="container mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            placeholder="1234 Main St"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            className="form-control"
            required
          />
        </div>
        <div className="container mb-3">
          <label className="form-label">Address 2</label>
          <input
            type="text"
            placeholder="Apartment or suite"
            onChange={(e) => setAddress2(e.target.value)}
            value={address2}
            className="form-control"
          />
        </div>
        <div className="container">
          <label for="city" class="form-label">
            City
          </label>
          <input
            class="form-control"
            type="text"
            placeholder="Johannesburg"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            required
          ></input>
        </div>

        <h2 className="mt-4 mb-1">Payment</h2>

        <div className="container mb-3">
          <label className="form-label">Name on card</label>
          <input
            type="text"
            onChange={(e) => setNameOnCard(e.target.value)}
            value={nameOnCard}
            className="form-control"
            required
          />
        </div>
        <div className="container mb-3">
          <label className="form-label">Credit card number</label>
          <input
            type="number"
            onChange={(e) => setCreditCardNumber(e.target.value)}
            value={creditCardNumber}
            className="form-control"
            required
          />
        </div>

        <div className="container d-flex justify-content-evenly">
          <div className="mb-3">
            <label className="form-label">Expiration</label>
            <input
              type="number"
              placeholder="01/01"
              pattern="[1-9]{1,2}/[0-9]{4}"
              onChange={(e) => setExpiration(e.target.value)}
              value={expiration}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">CVV</label>
            <input
              type="number"
              id="cvv"
              pattern="[0-9]{3}"
              placeholder="3-digit CVV"
              onChange={(e) => setCVV(e.target.value)}
              value={cvv}
              className="form-control"
              required
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn btn-primary btn-md mb-3">SUBMIT</button>
        </div>
        
        <hr></hr>
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>} 

        </form>
      </div>
    </div>
  );
}
