import React from "react";
import Bfooter from "./ButtonFooter";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

// renders the footer of the webpage
export default function Footer(page) {
  return (
    <div className="text-center p-1 rounded info-panel m-0" style={{ backgroundColor: "#FFFFFF" }}>
      <img style={{ width: 180 }}
        src={require("../../images/the-miracle-tea.png")}
        alt="Background"
      ></img>
      <div className='w-100' style={{ backgroundColor: "#FFFFFF" }}>
        <Bfooter width={"w-50"} size={"btn-sm"} page="/about-us">
          About Bulukutu Tea
        </Bfooter>

        <Bfooter width={"w-50"} size={"btn-sm"} page="/policy-page">
          Privacy Policy
        </Bfooter>

        <Bfooter width={"w-50"} size={"btn-sm"} page="/policy-page">
          Refunds & Return policy
        </Bfooter>

        <Bfooter width={"w-50"} size={"btn-sm"} page="/terms">
          Terms & Conditions
        </Bfooter>

        <Bfooter width={"w-50"} size={"btn-sm"} page="/contact-us">
          Contact Us
          
        </Bfooter>
      </div>
      <div className="text-center m-0">
        <p className="icons">
          <a href="https://www.instagram.com/bulukutu_tea/" target="_blank" rel="noreferrer noopener">
            <button className="btn btn-outline-dark btn-floating m-1">
              <FaInstagram />
            </button>
          </a>
          <a href="https://www.facebook.com/BulukutuTea" target="_blank" rel="noreferrer noopener">
            <button className="btn btn-outline-dark btn-floating m-1">
              <FaFacebookF />
            </button>
          </a>
          <a href="https://www.tiktok.com/@bulukututea" target="_blank" rel="noreferrer noopener">
          <button className="btn btn-outline-dark btn-floating m-1" href="#!">
            <FaTiktok />
          </button>
          </a>
        </p>
      
        <img
          src={require("../../images/product-symbols.png")}
          alt="Background"
          style={{ width: 100 }}
        ></img>
          <p className='m-0'>© Copyright 2022: Bulukutu Tea</p>
          <p className='m-0'>All rights reserved.</p>
          </div>
    </div>
  );
}