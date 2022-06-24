import React from "react";

//NOTE: Height of some elements will be adjusted once information is typed and available,
// Need more info for about us

// import the bootstrap styles from node_modules folder
import "bootstrap/dist/css/bootstrap.css";
// import stylesheet for about us page
import "../styles/aboutUsStyles.css";

function AboutUsPage() {
  return (
    <div className="body container">
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <h1 className="p-3 header">What We Do</h1>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div
          style={{
            float: "left",
            display: "inline-block",
            marginRight: "50px",
          }}
        >
          <div className="infoPanel p-3">
            <div className="d-flex mb-4">
              <img
                className="background-image"
                src={require("../images/new-tea-5.png")}
                width="50%"
                height="50%"
                alt="background"
                style={{ marginRight: "30px" }}
              ></img>
              <div
                className="card"
                width="50%"
                height="50%"
              >
                <div
                  className="card-body p-5"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ fontSize: "x-large", color: "#779730" }}>
                    Our mission is to provide our customers with the finest tea
                    experience. We aim to provide a healthy beverage, which
                    encourages a healthy lifestyle. We ought to change the world
                    one cup at a time.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="card">
                <div
                  className="card-body p-5"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ fontSize: "x-large", color: "#779730" }}>
                    Our Vision is to provide a magnificent tea experience. We
                    are committed to providing our customers with the best
                    quality preservative-free and organic healthy tea. Our goal
                    is to contribute to our clients’ healthy lifestyle through
                    our herbal tea.
                  </p>
                </div>
              </div>
              <img
                className="background-image"
                src={require("../images/new-tea-3.png")}
                width="50%"
                height="50%"
                alt="background"
                style={{ marginLeft: "30px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="text-center">
          <h1 className="p-3 header">Benefits of Bulukutu Tea</h1>
        </div>
      </div>

      <div
        className="container p-4 rounded my-3 text-center"
        style={{
          backgroundColor: "white",
          color: "#779730",
          width: "2000px",
        }}
      >
        <h1>WHAT ARE THE HEALTH BENEFITS OF BULUKUTU?</h1>
        <h2>BULUKUTU (Lippia Multiflora) has many health benefits:</h2>
        <p style={{ fontSize: "large", color: "#779730" }}>
          Antioxidant. Relieves fatigue. Colic. High blood pressure. Menstrual
          cramps. Suppression of appetite. Helps digestion. De-bloating and
          Toxin Draining. Mood enhancer.
        </p>
        <div className="d-flex">
          <img
            className="background-image border"
            src={require("../images/benefits-tea.png")}
            width="50%"
            height="auto"
            alt="background"
            style={{ marginRight: "30px" }}
          ></img>
          <div
            className="card-body p-5"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              className="mt-4"
              style={{
                fontSize: "x-large",
                color: "#779730",
                borderRadius: "5px",
              }}
            >
              Bulukutu's healing power extends to every system of your body:
              Digestive, Nervous, Cardiac and Blood, Respiratory, Urinary, and
              Muscular. For the Common Cold and flu to Malaria - The tea is
              powerful to clean and soothe your cough, with anti-parasitic, and
              even anti-malaria virtues. Bulukutu tea is full of essential
              nutrients, including Vitamin A, Bs, and Vitamin C, and minerals
              Potassium, Calcium, Magnesium, Phosphorus, Manganese, Copper,
              Zinc, and Iron.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
