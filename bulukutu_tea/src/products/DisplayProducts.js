import React, {useState, useEffect} from 'react'
import ProductsService from '../products/services/product.service'
import { Link } from 'react-router-dom'
import "../styles/DisplayProducts.css"
import { BsFillCartFill } from "react-icons/bs";
import Imagegallery from './imagegallery';

export default function DisplayProducts() {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    fetchProducts();
  }, [])

  async function fetchProducts(){
    try {
      const products = await ProductsService.fetchProducts();
      setProducts(products);
    } catch (err) {

    }
  }


  return (
    <>
    <div className='container my-4'>
      <div className='d-flex justify-content-end'>
        <Link to='/upload'>Add Product</Link>
      </div>

      {products.length === 0?
        <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
          <h2>No products yet...</h2>
        </div> :

        <div className='d-flex flex-wrap'>
        {
          products.map(product =>
            <div className='container-fluid'>
                <div key={product.id} className="row" >
                <div className="col-xl-5 col-lg-5 col-md-5" >
                    {/* <img src={product.downloadUrl} className="card-img-thumbnail product-img" alt="product cover" /> */}
                    <Imagegallery items ={product} className="card-img-thumbnail product-img" alt="product cover"/>
                </div>
                <div className="container col-xl-4 col-lg-4 col-md-4" >
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-title">{product.description}</p>
                    <br></br>
                    <div className='row'>
                        <h5 className="col-6 col-sm-3">ZAR {product.price}</h5>
                        <Link to="" className='btn btn-outline-dark col-6 col-sm-3 '>
                        <BsFillCartFill/>
                        </Link>
                    </div>
                    <Link to={`/products/${product.id}`} className="btn btn-outline-dark"> Read More</Link>
                </div>
                <br></br>
                </div>
                <hr></hr>
            </div>
          )
        }
      </div>}

      <div className ="container-fluid mx-10" >
          <h2>Related Products</h2>
              <div className='d-flex justify-content-center'>
                  {
                    products.map(product =>
                      <div className='container-fluid'  style={{width:"300px"}}>
                        <div key={product.id} className="card" hoverable="true" >
                            <img src={product.downloadUrl[1]} className="card-img-top" alt="product cover" style={{height: "200px", width: "200px",objectFit: "cover"}} />
                          <div className='card-body'>
                            <h5 className="card-title">{product.title}</h5>
                            <h5 className="col">ZAR {product.price}</h5>
                            <Link to={`/products/${product.id}`} className="btn btn-outline-dark"> Read More</Link>
                          </div>
                        </div>
                    </div>
                    )
                  }
              </div>
        </div>
      
      </div>
      </>
  )
}
