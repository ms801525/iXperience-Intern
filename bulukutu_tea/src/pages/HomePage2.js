import React, { useRef, useState } from "react";

// Buttons for the home page
import Carousel from "../components/common/Carousel";
import Button1 from "../components/common/Button";
// import Button2 from "../components/common/Button2";
// import BreakLine from "../components/common/BreakLine";

// import stylesheet for homepage
import "../styles/homePageStyles.css";

export default function HomePage() {
  // const navigate = useNavigate()
  // const [isHovering, setHovering] = useState(false);
  const vidRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  
  function handlePlayVideo() {
    if (!isPlaying) {
      vidRef.current.play();
      setIsPlaying(true)
    } else {
      vidRef.current.pause();
      setIsPlaying(false)
    }
  }

  return (
    <div className="container-fluid p-0 g-0">
      <div className="container-fluid d-flex p-0 g-0 flex-wrap">
        <div className='d-flex p-0 g-0 responsive'>
          <video ref={vidRef} src={require("../images/video.mp4")} alt="...">
          </video>
           
        </div>
        <div className="side_content">
          <h3>
            <b>
              <i> Central Congo's Finest</i>
            </b>
          </h3>
          <p className="bulukutu-quote text-center mt-4">
            <b>Bulukutu Tea</b> is an aromatic and perennial plant from the
            Savannah bush found in the DRC. The tea leaf is <b>pungent</b> yet
            soft on the palate. It has a hint of{" "}
            <b>lemon, mint, and eucalyptus</b> aroma - an aroma that surrounds
            you like a comforting mist. The tea is <b>caffeine free</b>.
          </p>
          <p className="bulukutu-quote text-center mt-4">
            Grown solely on African soil and <b>ethically sourced</b>, our
            gourmet teas pay tribute to African elegance and refinement. The
            careful blending of the finest buds, leaves and spices ensures that
            you are not just drinking our tea, but also{" "}
            <b>tasting a piece of our story</b>.
          </p>
           {!isPlaying ? (
              <button className='btn btn-dark btn-large' onClick={handlePlayVideo}>Play Video <i class="bi bi-play-circle" ></i></button>
            ):(
              <button className='btn btn-dark btn-large' onClick={handlePlayVideo}>Pause Video <i class="bi bi-pause-circle"></i></button>
            )}
        </div>
      </div>
      {/* <BreakLine></BreakLine> */}

      <div className="container-fluid d-flex justify-content-center align-items-center p-0 g-0">
        <Carousel></Carousel>
        

        <div className="d-flex flex-column justify-content-center bgpattern">
          {/* <img
            src={require("../images/home_page_design.png")}
            alt="..."
            style={{width: '50%', height: "33%" }}
          /> */}

          <div>
            <div className="card card-body text-center">
              <button
                className="btn btn-lg"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                style={{ color: "#779730", fontSize: "40px" }}
              >
                <b>
                  <i>Where To Buy:</i>
                </b>
              </button>
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
              <Button1 size={"btn-lg"} width={"w-100"} page="/products">
                Shop Online
              </Button1>
            </div>
          </div>

          {/* <img
            src={require("../images/home_page_design.png")}
            alt="..."
            style={{ width: '50%', height: "33%" }}
          /> */}
        </div>
      </div>
    </div>
  );
}

require("../images/home_page_design.png");
