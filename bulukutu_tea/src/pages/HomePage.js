// HOME PAGE OF WEBSITE
import React from "react";

// Buttons for the home page
import Button from "../components/common/Button";

// import stylesheet for homepage
import "../styles/homePageStyles.css";

//renders homepage
export default function homepage() {
  return (
    <div className="mb-5">
      <div className="container carousel-size text-center">
        <div className="carousel-center">
          <div className="carousel-panel">
            <div
              id="carouselExampleControls"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-size carousel-inner p-2">
                <div className="carousel-item active">
                  <img
                    src={require("../images/new-tea-4.png")}
                    className="d-block w-100"
                    alt="Background"
                    data-bs-interval="5000"
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../images/tea-box3.jpeg")}
                    className="d-block w-100"
                    alt="Background"
                    data-bs-interval="5000"
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../images/new-tea-3.png")}
                    className="d-block w-100"
                    alt="Background"
                    data-bs-interval="5000"
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
        </div>

        <div className="overlay">
          <Button size={"btn-lg"} width={"w-100"} page="/image-list">
            View Full Gallery
          </Button>
        </div>
      </div>

      <br></br>

      <div className="p-4 rounded mt-4 info-panel">
        <h3 className="bulukutu-text-color text-center">
          <b><i>Central Congo's Finest</i></b>
        </h3>
        <p className="bulukutu-quote text-center mt-4">
          <b>Bulukutu Tea</b> is an aromatic and perennial plant from the Savannah bush found
          in the DRC. The tea leaf is <b>pungent</b> yet soft on the palate. It has a hint of <b>lemon, 
          mint, and eucalyptus</b> aroma- an aroma that surrounds you like a comforting mist. The
          tea is <b>caffeine free</b>.
        </p>
        <p className="bulukutu-quote text-center mt-4">
          Grown solely on African soil and <b>ethically sourced</b>, our gourmet
          teas pay tribute to African elegance and refinement. The careful 
          blending of the finest buds, leaves and spices ensures that you 
          are not just drinking our tea, but also <b>tasting a piece of our story</b>.
        </p>
        <p>
          <button
            className="btn w-100 btn-lg"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            style={{ color: "#779730", fontSize: "x-large" }}
          >
            <b><i>Where To Buy:</i></b>
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body text-center">
            <div className="row">
              <div className="col">
                <img
                  className="border border-dark shop-img"
                  src={require("../images/shop1.png")}
                  alt="Background"
                ></img>
              </div>
              <div className="col">
                <img
                  className="border border-dark shop-img"
                  src={require("../images/shop2.png")}
                  alt="Background"
                ></img>
              </div>
              <div className="col">
                <img
                  className="border border-dark shop-img"
                  src={require("../images/shop3.png")}
                  alt="Background"
                ></img>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <img
                  className="border border-dark shop-img"
                  src={require("../images/shop4.png")}
                  alt="Background"
                ></img>
              </div>

              <div className="col">
                <img
                  className="border border-dark shop-img"
                  src={require("../images/shop6.png")}
                  alt="Background"
                ></img>
              </div>
              <div className="col">
                <img
                  className="border border-dark shop-img"
                  src={require("../images/shop7.png")}
                  alt="Background"
                ></img>
              </div>
            </div>

            {/* HAVE THE BUTTON NAVIGATE TO THE "/PRODUCTS" PAGE INSTEAD OF COMING SOON */}
            <Button size={"btn-lg"} width={"w-100"} page="/coming-soon">
              Shop Online
            </Button>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md">
            <img
              className="info-img"
              src={require("../images/back1.jpg")}
              alt="Background"
            ></img>
          </div>
          <div className="col-md">
            <img
              className="info-img"
              src={require("../images/tea.jpg")}
              alt="Background"
            ></img>
          </div>
          <div className="col-md">
            <img
              className="info-img"
              src={require("../images/new-tea-4.png")}
              alt="Background"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
