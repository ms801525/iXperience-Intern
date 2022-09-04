//THIS IS THE CHECKOUT PAGE FROM WHICH A CUSTOMER CAN ENTER THEIR
//SHIPPING AND PAYMENT DETAILS

import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../styles/CartPage.css";
import emailjs from "emailjs-com";
import PaystackPop from "@paystack/inline-js";

// services imports
import ShippingPaymentService from "../services/shipping_payment.service";

// Shipping and payment details model import
import { Shipping_Payment } from "../models/shipping_payment";

//renders the checkout page
export default function Checkout(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  // const [nameOnCard, setNameOnCard] = useState("");
  // const [creditCardNumber, setCreditCardNumber] = useState(0);
  // const [expiration, setExpiration] = useState();
  // const [cvv, setCVV] = useState(0);

  // const [successMsg, setSuccessMsg] = useState("");

  const ordersList = props.cartOrder;
  const order = ordersList.reduce(
    (a, v) => (a = a + v.name + " " + v.quantity.toString() + " "),
    ""
  );

  // const nodemailer = require("nodemailer");

  // async function mail() {

  //   let testAccount = await nodemailer.createTestAccount()

  //   let transporter = nodemailer.createTransport({
  //     host: "smtp.ethereal.email",
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: testAccount.user,
  //       pass: testAccount.pass,
  //     },
  //   });

  //   let info = await transporter.sendMail({
  //     from: '"shipping info" <bulukututeasa@gmail.com>',
  //     to: "bulukututeasa@gmail.com",
  //     subject: "New Order",
  //     text: "",
  //     html: `<b>Name: ${name} ${surname} ${email} </b> <b>Shipping Address: ${address} ${address2} ${city} </b> <b>Please confirm you received payment confirmation from this email and name</b>`,
  //   });

  //   console.log("Message sent: %s", info.messageId);
  //   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  // }

  // mail().catch(console.error)

  async function onFormSubmit(e) {
    e.preventDefault();

    // console.log(e.target)

    // let data = new FormData(e.target)
    // data.append('order', order)

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
        // nameOnCard: nameOnCard,
        // creditCardNumber: creditCardNumber,
        // expiration: expiration,
        // cvv: cvv,
      })
    ).then(() => {
      console.log("Order payment successful, confirmation email sent");
    });
  }

  async function payWithPaystack() {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      // test key
      key: "pk_live_c160e3cce9a6bbf37729541e241be2baec2b3f6c",
      amount: props.price * 100,
      email: email,
      name,
      surname,
      onSuccess(transaction) {
        emailjs
          .send(
            "service_at0bjyq",
            "template_hbyyvok",
            {
              name: name,
              surname: surname,
              phoneNumber: phoneNumber,
              e_mail: email,
              address: address,
              address2: address2,
              city: city,
              order: order,
            },
            "GT5TUMHRCPFCXnHnX"
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));

        emailjs
          .send(
            "service_at0bjyq",
            "template_bqwvo8o",
            {
              name: name,
              surname: surname,
              phoneNumber: phoneNumber,
              e_mail: email,
              address: address,
              address2: address2,
              city: city,
              order: order,
            },
            "GT5TUMHRCPFCXnHnX"
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));

        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);

        setEmail("");
        setName("");
        setAddress("");
        setAddress2("");
        setSurname("");
        setPhoneNumber(0);
        setCity("");
      },
      onCancel() {
        alert("You have cancelled the transaction");
      },
    });
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="main-card" style={{ maxWidth: 980 }}>
        <div
          className="card card-body border-secondary para"
          style={{ maxWidth: 950 }}
        >
          <h1 className="text-center display-1 mb-2">Checkout</h1>
          <h2 className="my-3">Shipping only available in South Africa</h2>
          <h2 className="my-3">
            Make sure you fill in every bit before clicking pay
          </h2>
          <form onSubmit={onFormSubmit}>
            <h3 className="mb-3">Billing address</h3>
            <div className="container d-flex justify-content-evenly">
              <div className="m-3">
                <label className="form-label">Firstname</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="form-control"
                  name="name"
                  required
                />
              </div>
              <div className="m-3">
                <label className="form-label">Surname</label>
                <input
                  type="text"
                  onChange={(e) => setSurname(e.target.value)}
                  value={surname}
                  className="form-control"
                  name="surname"
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
                  name="e_mail"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  pattern="[0-9]{10}"
                  placeholder="123-456-7890, with hyphens"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className="form-control"
                  name="phoneNumber"
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
                name="address"
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
                name="address2"
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
                name="city"
                required
              ></input>
            </div>

            {/* <h2 className="mt-4 mb-1">Payment</h2>

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
        </div> */}

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="submit"
                className="btn btn-primary btn-md my-3"
                onClick={payWithPaystack}
              >
                Pay
              </button>
            </div>

            <hr></hr>
            {/* {successMsg && (
            <>
              <div className="success-msg">{successMsg}</div>
              <br></br>
            </>
          )} */}
          </form>
        </div>
      </div>
    </div>
  );
}
