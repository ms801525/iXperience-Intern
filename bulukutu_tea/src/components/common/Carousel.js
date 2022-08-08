import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide p-0 w-100 h-100 mx-0" data-bs-ride="carousel">
        <div className="carousel-inner w-100 h-100">
            <div className="carousel-item active w-100 h-100">
                <img src={require("../../images/new-tea-4.png")} className="d-block w-100 h-100" alt="..." data-bs-interval="5000" />
            </div>
            <div className="carousel-item w-100 h-100">
                <img src={require("../../images/tea-box3.jpeg")} className="d-block w-100 h-100" alt="..." data-bs-interval="5000"/>
            </div>
            <div className="carousel-item w-100 h-100">
                <img src={require("../../images/new-tea-3.png")} className="d-block w-100 h-100" alt="..." data-bs-interval="5000"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}
