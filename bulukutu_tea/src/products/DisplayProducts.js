//THIS IS THE DISPLAY PRODUCTS PAGE WHICH SHOWS THE PRODUCTS THAT ARE AVAILABLE FOR SALE
// there's currently only two products being displayed.
//TO-DO
  //uncomment the rounting to this page in App.js
  //uncomment the quantity and add to cart buttons below to see how they work.
  //you can work on making the overall layout cleaner too.. (maybe create a frame for all the images instead of them resizing randomly etc)
  //FEEL FREE TO MODIFY IT AS PER MANAGER'S INSTRUCTIONS 
  //the read more button navigates to the product description which for now the route is also commented out in App.js - so dont forget to uncomment it

import React, { useState, useEffect } from "react";
import ProductsService from "../products/services/product.service";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

import Spinner from "../components/common/Spinner";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// import from image gallery
import Imagegallery from "./imagegallery";

// import stylesheet for page
import "../styles/DisplayProducts.css";
import { Order } from "../models/order";
import Button2 from "../components/common/Button";

// displays products
export default function DisplayProducts(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const product_list = await ProductsService.fetchProducts();
      setProducts(product_list);
    } catch (err) {
      console.log(err)
    }
  }

  //handle add to cart
  function onAddToCartClick(product) {
    let order = new Order(null, product.title, product.price, num, true, null);
    props.onAddToCartClick(order);
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

  return (
    <>
      <div className="container d-flex justify-content-center flex-column my-4">
        {/* <div className="d-flex justify-content-end">
          <Link to="/upload">Add Product</Link>
        </div> */}

        <h2 className='my-5'>There is a bug that makes both counters the same. Please adjust the amount before every click</h2>

        {products.length === 0 ? (
          <div className="no-products-div">
            <Spinner />
          </div>
        ) : (
          <div className="d-flex flex-wrap">
            {products.map((product) => (
              <div key={product.id} className="container-fluid">
                <div className="row">
                  <div
                    className="col-xl-5 col-lg-5 col-md-5 product-img"
                    style={{ flex: "5", objectFit: "cover" }}
                  >
                    <Imagegallery
                      product={product}
                      className="card-img-thumbnail"
                      alt="product cover"
                    />
                  </div>
                  <div
                    className="container col-xl-4 col-lg-4 col-md-4"
                    style={{ flex: "5" }}
                  >
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-title">{product.description}</p>
                    <br></br>
                    <h5 className="col-6 col-sm-3" style={{ flex: "0.5" }}>
                      ZAR {product.price}
                    </h5>
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
                    <div
                      className="row justify-content-between"
                      style={{ width: "500px" }}
                    >
                      <Link
                        to={`/products/${product.id}`}
                        className="btn btn-outline-dark col-6 col-sm-3"
                        style={{ flex: "1" }}
                      >
                        {" "}
                        Read More
                      </Link>
                      <Link
                        onClick={(e) => {
                          onAddToCartClick(product);
                        }}
                        to="/cart"
                        width="w-100"
                        className="btn btn-outline-dark col-6 col-sm-3"
                        style={{ flex: "1" }}
                        data-bs-target="#myModal"
                        data-bs-toggle="modal"
                      >
                        <BsFillCartFill />
                      </Link>
                      <div className="modal" tabIndex="-1" id="myModal">
                        <div className="modal-dialog">
                          <div className="modal-body alert alert-success">
                            <p>
                              {num} {product.title} added successfully!!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                </div>
                <hr></hr>
              </div>
            ))}
          </div>
        )}

        <Button2 page='/cart'>Proceed to Cart</Button2>
      </div>
    </>
  );
}