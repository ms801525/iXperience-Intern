import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = (props) => {
  const { children } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
      <div className="carousel-container carousel slide" id="carouselExampleControls" data-bs-ride="carousel">
        <div className="carousel-wrapper">
          {/* <button onClick={prev} className="left-arrow">
            &lt;
          </button> */}
          <button
            onClick={prev}
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
                aria-hidden="true"
            ></span>
          </button>
          <div className="carousel-content-wrapper carousel-inner">
            <div
              className="carousel-content active"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {children}
            </div>
          </div>
          {/* <button onClick={next} className="right-arrow">
            &gt;
          </button> */}
          <button
            onClick={next}   
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
  );
};

export default Carousel;
