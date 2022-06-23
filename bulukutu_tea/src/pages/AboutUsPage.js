import React from "react";

//NOTE: Height of some elements will be adjusted once information is typed and available

// import the bootstrap styles from node_modules folder
import "bootstrap/dist/css/bootstrap.css";
// import stylesheet for about us page
import "../styles/aboutUsStyles.css";

function AboutUsPage() {
  return (
    <div className="body container">
      <div className="d-flex justify-content-center">
        <div style={{ float: "left", display: "inline", marginRight: "300px" }}>
          <div className="text-center">
            <h1 className="p-3 header">What We Do</h1>
          </div>
        </div>

        <div style={{ float: "left", display: "inline", marginLeft: "300px" }}>
          <div className="text-center">
            <h1 className="p-3 header">Our Story</h1>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-5">
        <div
          style={{
            float: "left",
            display: "inline-block",
            marginRight: "50px",
          }}
        >
          <div className="infoPanel p-3">
            <img
              className="background-image"
              src={require("../images/new-tea-5.png")}
              width="100%"
              height="auto"
              alt="background"
            ></img>
            <div className="card" style={{ marginTop: "40px" }}>
              <div className="card-body p-5" style={{ fontSize: "x-large", color: "#779730" }}>
                <p>
                  Our mission is to provide our customers with the finest tea
                  experience. We aim to provide a healthy beverage, which
                  encourages a healthy lifestyle. We ought to change the world
                  one cup at a time.
                </p>
                <p className="mt-5">
                  Our Vision is to provide a magnificent tea experience. We are
                  committed to providing our customers with the best quality
                  preservative-free and organic healthy tea. Our goal is to
                  contribute to our clients’ healthy lifestyle through our
                  herbal tea.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ float: "left", display: "inline-block", marginLeft: "50px" }}
        >
          <div className="infoPanel p-3">
            <div className="card">
              <div className="card-body">
                <p>asd</p>
              </div>
            </div>
            <img
              className="background-image"
              src={require("../images/tea-2.png")}
              width="100%"
              height="auto"
              alt="background"
              style={{ marginTop: "40px" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
