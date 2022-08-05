//HAVE HE MANAGER GIVE YOU MORE FAQS FOR THE WEBSITE

import React from "react";
import { useState } from "react";
import { db } from "../firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "support"), {
        name: name,
        email: email,
        message: message,
      });
      alert("Thank you, we have received your message");
    } catch {}
  }

  return (
    <div>
      <div className="card card-body">
        <h1 className="text-center">Contact Us!</h1>

        <p className="text-center">We will be more than happy to assist you!</p>

        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              vaule={name}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              vaule={email}
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label ">Message</label>
            <input
              onChange={(e) => setMessage(e.target.value)}
              vaule={message}
              type="text"
              className="form-control py-4"
              style={{ width: "100%" }}
            />
          </div>
          <button
            style={{ width: "100%", backgroundColor: "#779730" }}
            type="submit"
            className="btn"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="card">
        <h1 className="text-center">FAQs</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How can I reach the company if I have questions or want to place an order?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Fill in the form above and we will respond.
                <p>However, if you are in a rush You can send an email to {" "}
                <code>info@bulukututea.com</code>, and we will help you promptly </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How can we buy the products?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                You can buy any of the products either for business (in bulk/wholesale) or for personal use (in retail) and the prices vary accordingly
              </div>
            </div>
          </div>
          {/* <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
