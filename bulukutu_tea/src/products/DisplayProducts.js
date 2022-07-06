import React, {useState, useEffect} from 'react'
import ProductsService from '../products/services/product.service'
import { Link } from 'react-router-dom'
import { BsFillCartFill } from "react-icons/bs";

import Spinner from '../components/common/Spinner';
import Button from '../components/common/ButtonFooter';

// import from image gallery
import Imagegallery from './imagegallery';

// import stylesheet for page
import "../styles/DisplayProducts.css"
import { Order } from '../models/order';

// displays products
export default function DisplayProducts(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const products = await ProductsService.fetchProducts();
      setProducts(products);
    } catch (err) {}
  }

  function onAddToCartClick(product) {
    let order = new Order (null, product.title, product.price, "1", true, null);
    props.onAddToCartClick(order);
  }

  return (
    <>
      <div className="container my-4">
        <div className="d-flex justify-content-end">
          <Link to="/upload">Add Product</Link>
        </div>

      {products.length === 0?
        <div className='no-products-div'>
          <Spinner/>
        </div> :

        <div className='d-flex flex-wrap'>
        {
          products.map(product =>
            <div  key={product.id} className='container-fluid'>
                <div className="row" >
                <div className="col-xl-5 col-lg-5 col-md-5 product-img" style={{flex:"5", objectFit: "cover"}} >
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
                    <div className="row">
                      <h5 className="col-6 col-sm-3" style={{ flex: "0.5" }}>
                        ZAR {product.price}
                      </h5>
                      <div onClick={(e) => {onAddToCartClick(product)}}>
                        <Button page="" className="col-6 col-sm-3">
                          Add to cart!
                        </Button>
                      </div>
                      
                    </div>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      {" "}
                      Read More
                    </Link>
                  </div>
                  <br></br>
                </div>
                <hr></hr>
              </div>
            )}
          </div>
        }

      </div>
    </>
  );
}
