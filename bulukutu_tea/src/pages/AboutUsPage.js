import React from "react";

// import stylesheet for about us page
import "../styles/aboutUsStyles.css";

//renders the about us page
function AboutUsPage() {
  return (
    <div className="body container">
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <h1 className="p-3 header">What We Do</h1>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="infoPanel p-3">
          <div className="d-flex mb-4">
            <img
              className="background-image"
              src={require("../images/tea-quote.jpeg")}
              width="50%"
              height="50%"
              alt="background"
            ></img>
            <div className="card-body p-5 margin-left">
              <p>
                Our mission is to provide our customers with the finest tea
                experience. We aim to provide a healthy beverage, which
                encourages a healthy lifestyle. We ought to change the world one
                cup at a time.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="card-body p-5 margin-right">
              <p>
                Our vision is to provide a magnificent tea experience. We are
                committed to providing our customers with the best quality
                preservative-free and organic healthy tea. Our goal is to
                contribute to our clients’ healthy lifestyle through our herbal
                tea.
              </p>
            </div>
            <img
              className="background-image"
              src={require("../images/new-tea-3.png")}
              width="50%"
              height="50%"
              alt="background"
            ></img>
          </div>
        </div>
      </div>

      <div className="container p-4 rounded my-3 text-center benefits-panel">
        <h1>WHAT ARE THE HEALTH BENEFITS OF BULUKUTU?</h1>
        <h2>BULUKUTU (Lippia Multiflora) has many health benefits:</h2>
        <p style={{ fontSize: "large" }}>
          Antioxidant. Relieves fatigue. Colic. High blood pressure. Menstrual
          cramps. Suppression of appetite. Helps digestion. De-bloating and
          Toxin Draining. Mood enhancer.
        </p>
        <div className="d-flex">
          <div
            id="carouselExampleControls"
            className="carousel slide benefits-carousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="background-image border margin-right"
                  src={require("../images/benefits-tea.png")}
                  width="100%"
                  height="auto"
                  alt="background"
                ></img>
              </div>
              <div className="carousel-item">
              <img
                  className="background-image border margin-right"
                  src={require("../images/benefits-tea2.jpg")}
                  width="100%"
                  height="auto"
                  alt="background"
                ></img>
              </div>
              <div className="carousel-item">
              <img
                  className="background-image border margin-right"
                  src={require("../images/benefits-tea3.jpg")}
                  width="100%"
                  height="auto"
                  alt="background"
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
          <div className="card-body p-5">
            <p className="mt-4">
              Bulukutu's healing power extends to every system of your body:
              <b>Digestive, Nervous, Cardiac and Blood, Respiratory, Urinary, and
              Muscular</b>. For the Common Cold and flu to Malaria - The tea is
              powerful to clean and soothe your cough, with anti-parasitic, and
              even anti-malaria virtues. Bulukutu tea is full of essential
              nutrients, including <b>Vitamin A, Bs, and Vitamin C, and minerals
              Potassium, Calcium, Magnesium, Phosphorus, Manganese, Copper,
              Zinc, and Iron</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
