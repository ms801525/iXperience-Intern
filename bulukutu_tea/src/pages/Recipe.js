import React from "react";

// import style sheet
import "../styles/recipeStyles.css";

// renders recipe page (to blend the perfect tea)
export default function Recipe() {
  return (
    <div className="container p-3">
      <div className="title-center">
        <div className="text-center p-4 title">
          <h2 className="bulukutu-text-color">
            
            <b><i>How to Blend the Perfect Bulukutu Tea</i></b>
          </h2>
        </div>
      </div>

      <div className="info-panel p-4" style={{ borderRadius: "5px" }}>
        <div className="info-body">
          <div className="mt-4">
            <h1 >
              <b>For tea bag:</b></h1>
            <p style={{ fontSize: "x-large" }}>
              <ul>
                <li>
                  <p>Use one tea bag per cup</p>
                </li>
                <li>
                  <p>
                    Add freshly boiled water to a cup, and brew for 3-4 minutes.
                  </p>
                </li>
                <li>
                  <p>
                    Allow to steep and let it cool.
                  </p>
                </li>
                <li>
                  <p>
                    Brewing over 5 minutes will make the tea strong but
                    more effective.
                  </p>
                </li>
                <li>
                  <p>
                    For great results, best enjoy without honey, sugar or milk.
                  </p>
                </li>
              </ul>
            </p>
          </div>
          <div className="p-3">
            <h1><b>For tea leaves:</b></h1>
            <p style={{ fontSize: "x-large" }}>
              <ul>
                <li>
                  <p>
                    Put 2 cups of fresh water into a pot and slightly rinse 3-4
                    tea leaves
                  </p>
                </li>
                <li>
                  <p>
                    Add 3-4 tea leaves to the pot and bring to boil for 3-4
                    minutes.
                  </p>
                </li>
                <li>
                  <p>Remove from the stove</p>
                </li>
                <li>
                  <p>Allow to steep and let it cool.</p>
                </li>
                <li>
                  <p>
                    Brewing over 5 minutes will make the tea strong but
                    more effective.
                  </p>
                </li>
                <li>
                  <p>
                    For great results, best enjoy without honey, sugar or milk.
                  </p>
                </li>
                <li>
                  <p>The tea is organic and preservative-free.</p>
                </li>
              </ul>
            </p>
          </div>
          <div className="row align-items-start p-2">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col">
              <p className="font-size bulukutu-text-color">
                <b>ALWAYS STORE IN A COOL, DRY AREA</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
