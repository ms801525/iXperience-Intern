//THIS IS THE PRODUCT DESCRIPTION PAGE WHICH DISPLAYS THE SPECIFIC SELECTED PRODUCT'S DETAILS
//TO-DO
  // Uncomment this page's route in App.js
  // create a function that only adds to cart when its more than 0 products
  // you can create another carousel that doesnt pile up here (to make the code neat) or you can re-use the imagegallery (refer to imagegallery.js and display products pages)
  //work on the quantity and add to cart buttons
  //FEEL FREE TO MODIFY IT AS PER MANAGER'S INSTRUCTIONS

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductsService from "../products/services/product.service";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/common/Spinner";
// import stylesheet for page
import "../styles/DisplayProducts.css"
import { Order } from '../models/order';

// renders product description
export default function ProductDescription(props) {
  let { productId } = useParams();
  const [product, setProduct] = useState(null);

  //displaying the product that was selected
  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const thisProduct = await ProductsService.fetchMyProduct(productId);
    console.log(thisProduct);
    setProduct(thisProduct);
  }

  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  function onAddToCartClick() {
    let order = new Order (null, product?.title, product?.price, num, true, null);
    props.onAddToCartClick(order);
  }


  //to fetch the other products other than the product displayed
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    try {
      const products = await ProductsService.fetchProducts();
      setProducts(products);
    } catch (err) {}
  }

  function getRelatedProducts() {
    return products.filter((product) => product.id !== productId);
  }

  //once the page is refreshed it should be redirected to the product selected
  function refreshPage() {
    window.location.pathname(product.id);
  }

  const navigate = useNavigate();


  return (
    <>
      <div>
        {product?.length === 0 ? (
          <div className="no-products-div">
            <Spinner/>
          </div>
        ) : (
          <div className="container my-4">
            <div>
              <div className="d-flex flex-wrap">
                <div
                  className="col-xl-5 col-lg-5 col-md-5 product-img "
                  style={{ flex: "5", }}
                >
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel">
                    <div className="carousel-size carousel-inner p-2" >
                      <div className="carousel-item active">
                        <img
                          src={product?.downloadUrls[0]}
                          className="d-block w-100"
                          alt="Background"
                        ></img>
                      </div>
                      <div className="carousel-item">
                        <img
                          src={product?.downloadUrls[1]}
                          className="d-block w-100"
                          alt="Background"
                        ></img>
                      </div>
                      <div className="carousel-item">
                        <img
                          src={product?.downloadUrls[2]}
                          className="d-block w-100"
                          alt="Background"
                        ></img>
                      </div>
                      <div className="carousel-item">
                        <img
                          src={product?.downloadUrls[3]}
                          className="d-block w-100"
                          alt="Background"
                        ></img>
                      </div>
                      <div className="carousel-item">
                        <img
                          src={product?.downloadUrls[4]}
                          className="d-block w-100"
                          alt="Background"
                        ></img>
                      </div>
                      <div className="carousel-item">
                        <img
                          src={product?.downloadUrls[5]}
                          className="d-block w-100"
                          alt="Background"
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
                <div
                  className="container col-xl-4 col-lg-4 col-md-4 mx-3"
                  style={{ flex: "5" }}
                >
                  <h5 className="card-title">{product?.title}</h5>
                  <p className="card-title">{product?.description}</p>
                  <br></br>
                  <div className="row">
                    <h5 className="col-6 col-sm-3" style={{ flex: "0.5" }}>
                      ZAR {product?.price}
                    </h5>
                    <hr></hr>
                    <div className="quantity">
                      <h5>Quantity:</h5>
                      <p className="btn-group">
                        <span
                          className="btn btn-outline-primary"
                          onClick={decNum}
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="border border-primary px-3 text-center">
                          {num}
                        </span>
                        <span
                          className="btn btn-outline-primary"
                          onClick={incNum}
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <Link 
                    onClick={(e) => {onAddToCartClick()}} 
                    to="/coming-soon" 
                    className="btn btn-outline-dark col-6 col-sm-3">
                      <BsFillCartFill />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
          </div>
        )}
        <div className="container-fluid mx-10">
          <h2 className="d-flex align-items-center">You may also like:</h2>
          <div className="row justify-content-center p-2">
            {getRelatedProducts().map((theproduct) => (
              <div
                className="container-fluid col-4"
                key={theproduct.id}
              >
                <div className="card " hoverable="true" style={{ width: "204px" }}>
                  <img
                    src={theproduct.downloadUrls}
                    className="card-img-top d-flex justify-content-center"
                    alt="product cover"
                    style={{
                      height: "200px",
                      width: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body d-block">
                    <h5 className="card-title ">{theproduct.title}</h5>
                    <p className="">ZAR {theproduct.price}</p>
                    <Link
                      to={`/products/${theproduct?.id}`}
                      className="btn btn-outline-dark"
                      onClick={refreshPage}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-outline-dark"
          onClick={() => navigate("/products")}
        >
          Back to Products page
        </button>
      </div>
      <br></br>
    </>
  );
}
