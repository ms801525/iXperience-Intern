import React from "react";

import Button from "./Button";

export default function NewNavBar() {
  return (
    <div className="container-fluid mt-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-8">
            <div
              className="card m-1 text-center"
              style={{
                backgroundColor: "white",
                color: "#779730",
                height: "65px",
                width: "75%",
                fontSize: "xxx-large",
              }}
            >
              Bulukutu Tea
            </div>
          </div>
          <div className="col">
            <div
              className="m-1 text-center"
              style={{
                backgroundColor: "white",
                color: "#779730",
                height: "50px",
                width: "70px",
                borderRadius: "5px",
              }}
            >
              Welcome Username
            </div>
          </div>
          <div className="col">
            <Button size={"btn-sm"} page="/cart">
              <i class="bi bi-cart3"></i>
            </Button>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg p-4">
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
      </nav>
    </div>
  );
}
