import React from "react";

import Button from "../components/common/Button";

export default function homepage() {
  return (
    <div>
      <div
        className="container text-center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <img
            className="image px-5"
            style={{ width: "100vw" }}
            src={require("../images/bulu.jpeg")}
            alt="Background"
          ></img>
        </div>
        <div className="overlay">
          <Button size={"btn-lg"} width={"w-100"} page="/product-description">
            Learn More
          </Button>
        </div>
      </div>
      <br></br>
      <div
        className="container p-4 rounded"
        style={{ backgroundColor: "white" }}
      >
        <h1 className="text-center">Bulukutu Tea</h1>
        <h3 className="text-center">Central Congo's Finest</h3>
        <p className="text-center mt-4" style={{fontFamily: "REFINMENT, Serif", color: "#779730"}}>
          “GROWN SOLELY ON AFRICAN SOIL AND ETHICALLY SOURCED, OUR GOURMET TEAS
          PAY TRIBUTE TO AFRICAN ELEGANCE AND REFINEMENT. THE CAREFUL BLENDING
          OF THE FINEST BUDS, LEAVES AND SPICES ENSURES THAT YOU ARE NOT JUST
          DRINKING OUR TEA, BUT ALSO TASTING A PIECE OF OUR STORY.”
        </p>
        <div className="row align-items-end text-center">
          <div className="col">
            <div className="p-0">
              <img
                className="background-image border border-dark"
                src={require("../images/back1.jpeg")}
                alt="Background"
                width="100%"
                height="auto"
              ></img>
            </div>
          </div>
          <div className="col">
            <div className="p-0 ">
              <img
                className="background-image border border-dark"
                src={require("../images/tea.jpeg")}
                alt="Background"
                width="100%"
                height="auto"
              ></img>
            </div>
          </div>
          <div className="col">
            <div className="p-0">
              <img
                className="background-image border border-dark"
                src={require("../images/bulu.jpeg")}
                alt="Background"
                width="100%"
                height="auto"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-5">
        <div className="row align-items-end text-center">
          <div className="col">
            <div className="p-0">
              <img
                className="background-image"
                src={require("../images/instagram.png")}
                alt="Background"
                width="15%"
                height="20%"
              ></img>
            </div>
            <button
              className="btn btn-outline-dark m-1"
              style={{ backgroundColor: "#B2755E" }}
            >
              Connect
            </button>
          </div>
          <div className="col">
            <div className="p-0">
              <img
                className="background-image"
                src={require("../images/facebook.png")}
                alt="Background"
                width="15%"
                height="20%"
              ></img>
            </div>
            <button
              className="btn btn-outline-dark m-1"
              style={{ backgroundColor: "#B2755E" }}
            >
              Connect
            </button>
          </div>
          <div className="col">
            <div className="p-0">
              <img
                className="background-image"
                src={require("../images/tiktok.png")}
                alt="Background"
                width="15%"
                height="20%"
              ></img>
            </div>
            <button
              className="btn btn-outline-dark m-1"
              style={{ backgroundColor: "#B2755E" }}
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
