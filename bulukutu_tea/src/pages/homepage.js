import React from "react";

export default function homepage() {
  return (
    <div>
      <div className="container text-center">
        <img
          className="image"
          src={require("../images/bulu.jpeg")}
          alt="Background"
        ></img>
        <div className="overlay">
          <button
            className="btn btn-lg btn-block w-100"
            style={{ backgroundColor: "#B2755E" }}
          >
            Learn More
          </button>
        </div>
      </div>
      <br></br>
      <div
        className="container p-3 border border-dark rounded"
        style={{ backgroundColor: "#cfb09c" }}
      >
        <h2 className="text-center">Bulukutu Tea</h2>
        <h4 className="text-center">Central Congo's Finest</h4>
        <div className="row align-items-end text-center">
          <div className="col">
            <div className="p-0">
              <img
                className="background-image"
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
                className="background-image"
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
                className="background-image"
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
