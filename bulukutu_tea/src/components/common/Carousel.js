import React from 'react'
import Button from './Button'

export default function Carousel() {
  return (
    <div className="container carousel-size text-center g-0">
          <div className="carousel-center">
            <div className="carousel-panel w-100">
              <div
                id="carouselExampleControls"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-size carousel-inner p-2">
                  <div className="carousel-item active">
                    <img
                      src={require("../../images/new-tea-4.png")}
                      className="d-block w-100"
                      alt="Background"
                      data-bs-interval="5000"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={require("../../images/tea-box3.jpeg")}
                      className="d-block w-100"
                      alt="Background"
                      data-bs-interval="5000"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={require("../../images/new-tea-3.png")}
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
  )
}
