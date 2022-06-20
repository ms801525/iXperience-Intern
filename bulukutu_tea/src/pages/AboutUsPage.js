import React from "react";

//NOTE: Height of some elements will be adjusted once information is typed and available

// import the bootstrap styles from node_modules folder
import "bootstrap/dist/css/bootstrap.css";
// import stylesheet for about us page
import "../styles/aboutUsStyles.css";

function AboutUsPage() {
  return (
    <div className="body">
      <div className="d-flex justify-content-center">
        <div style={{ float: "left", display: "inline", marginRight: "210px" }}>
          <div className="text-center">
            <h1 className="p-3 header">What We Do</h1>
          </div>
        </div>

        <div style={{ float: "left", display: "inline", marginLeft: "210px" }}>
          <div className="text-center">
            <h1 className="p-3 header">Our Story</h1>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div style={{float: "left", display: "inline-block", marginRight: "50px" }}>
          <div className="infoPanel p-3">
            <img
              className="background-image"
              src={require("../images/tea.png")}
              width="100%"
              height="auto"
              alt="background"
            ></img>
            <div class="card" style={{ marginTop: "40px" }}>
              <div class="card-body">Bulukutu Tea's motives and purpose!</div>
            </div>
          </div>
        </div>
        
        <div style={{ float: "left", display: "inline-block", marginLeft: "50px" }}>
          <div className="infoPanel p-3">
            <div class="card">
              <div class="card-body">
                Story and the uprising info of Bulukutu Tea!
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
