import React from "react";
import Bfooter from "./Button-footer";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer(page) {
  return (
    <div className="text-center p-3" style={{ backgroundColor: "#FFFFFF" }}>
      <img
        src={require("../../images/the-miracle-tea.png")}
        alt="Background"
      ></img>
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <Bfooter width={"w-50"} size={"btn-sm"} page="/about-us">
          About us
        </Bfooter>

        <Bfooter width={"w-50"} size={"btn-sm"} page="/privacy">
          Privacy Policy
        </Bfooter>

        <Bfooter width={"w-50"} size={"btn-sm"} page="/Returnpol">
          Refunds & Return policy
        </Bfooter>

        <Bfooter width={"w-50"} size={"btn-sm"} page="/term">
          Terms & Conditions
        </Bfooter>

        <Bfooter width={"w-50"} size={"btn-sm"} page="/contact">
          Contact Us
        </Bfooter>
      </div>
      <div className="container text-center">
        <p className="icons">
          <a href="https://www.instagram.com/bulukutu_tea/">
            <button className="btn btn-outline-dark btn-floating m-1">
              <FaInstagram />
            </button>
          </a>
          <a href="https://www.facebook.com/BulukutuTea">
            <button className="btn btn-outline-dark btn-floating m-1">
              <FaFacebookF />
            </button>
          </a>
          <button className="btn btn-outline-dark btn-floating m-1" href="#!">
            <FaTiktok />
          </button>
        </p>
      </div>
      <div className="p-2">
        <img
          src={require("../../images/product-symbols.png")}
          alt="Background"
          style={{ width: "200px" }}
        ></img>
        <div className="mt-2">
          <p>© Copyright 2022: Bulukutu Tea</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
