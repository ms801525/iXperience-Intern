import React from "react";

import Button from "../components/common/Button";

export default function homepage() {
  return (
    <div className="mb-5">
      <div
        className="container text-center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ backgroundColor: "white", width: "100%" }}>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div
              class="carousel-inner p-2"
              style={{ minWidth: "500px", maxWidth: "100vw" }}
            >
              <div class="carousel-item active">
                <img
                  src={require("../images/new-tea-1.png")}
                  class="d-block w-100"
                  alt="Background"
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  src={require("../images/new-tea-2.png")}
                  class="d-block w-100"
                  alt="Background"
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  src={require("../images/new-tea-3.png")}
                  class="d-block w-100"
                  alt="Background"
                ></img>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="overlay">
          <Button size={"btn-lg"} width={"w-100"} page="/product-description">
            Learn More
          </Button>
        </div>
      </div>
      <br></br>
      <div
        className="container p-4 rounded mt-4"
        style={{
          backgroundColor: "white",
          minWidth: "500px",
          maxWidth: "100vw",
        }}
      >
        <h1 className="text-center" style={{ color: "#779730" }}>
          Bulukutu Tea
        </h1>
        <h3 className="text-center" style={{ color: "#779730" }}>
          Central Congo's Finest
        </h3>
        <p
          className="text-center mt-4"
          style={{ fontFamily: "REFINMENT, Serif", color: "#779730" }}
        >
          “GROWN SOLELY ON AFRICAN SOIL AND ETHICALLY SOURCED, OUR GOURMET TEAS
          PAY TRIBUTE TO AFRICAN ELEGANCE AND REFINEMENT. THE CAREFUL BLENDING
          OF THE FINEST BUDS, LEAVES AND SPICES ENSURES THAT YOU ARE NOT JUST
          DRINKING OUR TEA, BUT ALSO TASTING A PIECE OF OUR STORY.”
        </p>
        <p
          className="text-center my-4"
          style={{ fontSize: "large", color: "#779730" }}
        >
          Bulukutu Tea is an aromatic and perennial plant from the Savannah bush
          found in the DRC. The tea leaf is pungent yet soft on the palate. It
          has a hint of lemon, mint and eucalyptus aroma– An aroma that
          surrounds you like a comforting mist. The tea is caffeine-free. The
          tea leaf is pungent yet soft on the palate. It has a hint of lemon and
          eucalyptus aroma– An aroma that surrounds you like a comforting mist.
          The tea is caffeine-free.
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
