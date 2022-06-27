// HOME PAGE OF WEBSITE
import React from "react";

// Buttons for the home page
import Button from "../components/common/Button";

// import stylesheet for homepage
import "../styles/homePageStyles.css";

export default function homepage() {
  //renders homepage
  return (
    <div className="mb-5">
      <div
        className="container text-center"
      >
        <div className="carousel-panel">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div
              className="carousel-inner p-2"
              style={{ minWidth: "500px", maxWidth: "100vw"}}
            >
              <div className="carousel-item active">
                <img
                  src={require("../images/new-tea-1.png")}
                  className="d-block w-100"
                  alt="Background"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src={require("../images/new-tea-2.png")}
                  className="d-block w-100"
                  alt="Background"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src={require("../images/new-tea-3.png")}
                  className="d-block w-100"
                  alt="Background"
                ></img>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="overlay">
          <Button size={"btn-lg"} width={"w-100"} page="/about-us">
            Learn More
          </Button>
        </div>
      </div>

      <br></br>

      <div
        className="container p-4 rounded mt-4"
        style={{
          backgroundColor: "white",
          width: "2000px"
        }}
      >
        <h1 className="bulukutu-text-color text-center">
          Bulukutu Tea
        </h1>
        <h3 className="bulukutu-text-color text-center">
          Central Congo's Finest
        </h3>
        <p
          className="bulukutu-text-color bulukutu-quote text-center mt-4"
        >
          “GROWN SOLELY ON AFRICAN SOIL AND ETHICALLY SOURCED, OUR GOURMET TEAS
          PAY TRIBUTE TO AFRICAN ELEGANCE AND REFINEMENT. THE CAREFUL BLENDING
          OF THE FINEST BUDS, LEAVES AND SPICES ENSURES THAT YOU ARE NOT JUST
          DRINKING OUR TEA, BUT ALSO TASTING A PIECE OF OUR STORY.”
        </p>
        <Button size={"btn-lg"} width={"w-100"} page="/product-description">
          Learn More
        </Button>
        <div className="row align-items-end text-center">
          <div className="col">
            <div className="p-0">
              <img
                className="background-image border border-dark"
                src={require("../images/back1.jpeg")}
                alt="Background"
                width="100%"
                height="340px"
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
                height="340px"
              ></img>
            </div>
          </div>
          <div className="col">
            <div className="p-0">
              <img
                className="background-image border border-dark"
                src={require("../images/new-tea-4.png")}
                alt="Background"
                width="100%"
                height="340px"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
