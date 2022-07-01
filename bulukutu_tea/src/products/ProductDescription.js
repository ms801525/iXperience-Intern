import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductsService from "../products/services/product.service";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Imagegallery from "./imagegallery";

// renders product description
export default function ProductDescription() {
  let { productId } = useParams();
  const [product, setProduct] = useState(null);
  // const thisProduct =  ProductsService.fetchMyProduct(
  //   productId)

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    //replace with fetch one product
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

  return (
    <>
      {product?.length === 0 ? (
        <div className="no-products-div">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="container my-4">
          <div>
            <div className='d-flex flex-wrap'>
              <div
                className="col-xl-5 col-lg-5 col-md-5 product-img"
                style={{ flex: "5" }}
              >
                <div
                  className="container"
                  style={{ border: "5px solid red", padding: "200px" }}
                ></div>
                {/* <Imagegallery
              product={product}
              className="card-img-thumbnail"
              alt="product cover"
            /> */}
              </div>
              <div
                className="container col-xl-4 col-lg-4 col-md-4"
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
                  <Link to="" className="btn btn-outline-dark col-6 col-sm-3">
                    <BsFillCartFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="container-fluid mx-10">
            <h2 className="d-flex align-items-center">You may also like:</h2>
            <div className="d-flex justify-content-center">
              {getRelatedProducts().map((product) => (
                <div
                  className="container-fluid"
                  key={product.id}
                  style={{ width: "227px" }}
                >
                  <div className="card " hoverable="true">
                    <img
                      src={product.downloadUrls}
                      className="card-img-top d-flex justify-content-center"
                      alt="product cover"
                      style={{
                        height: "200px",
                        width: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title align-top">{product.title}</h5>
                      <p className="align-middle">ZAR {product.price}</p>
                      <Link
                        to={`/products/${product.id}`}
                        className="btn btn-outline-dark"
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
      )}
    </>
  );
}
