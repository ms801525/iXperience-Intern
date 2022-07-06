import React from "react";
import { Link } from 'react-router-dom'

// import for nav buttons
import Button from "./Button";

// import for nav bar stylesheet
import "../../styles/navBarStyles.css";

// renders the navbar
export default function Navbar() {
  return (
    <div className="container-fluid mb-5 navbar-panel">
      <div className="container center-title">
        <div className="p-3">
          <Link to="/">
          <img
            src={require("../../images/bulukutu-title.png")}
            alt="Background"
          ></img></Link>
          <div className="text-center cart-position">
            <Button size={"btn-sm"} page="/cart">
              <i className="bi bi-cart3"></i>
            </Button>
            <div className="m-1 text-center">Welcome Username</div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-light navbar-expand-lg p-4">
        <form className="container-fluid">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 col">
                <li className="col nav-item mx-3">
                  <Button width={"w-100"} size={"btn-sm"} page="/">
                    Home
                  </Button>
                </li>
                <li className="col nav-item mx-3">
                  <Button width={"w-100"} size={"btn-sm"} page="/shop">
                    Shop
                  </Button>
                </li>
                <li className="col nav-item mx-3">
                  <Button width={"w-100"} size={"btn-sm"} page="/about-us">
                    About Bulukutu Tea
                  </Button>
                </li>
                <li className="col nav-item mx-3">
                  <Button width={"w-100"} size={"btn-sm"} page="/recipe">
                    Tea Recipes
                  </Button>
                </li>
                <li className="col nav-item mx-3">
                  <Button width={"w-100"} size={"btn-sm"} page="/contact">
                    Contact
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </nav>
    </div>
  );
}