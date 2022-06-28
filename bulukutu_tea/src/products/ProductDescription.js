import React from 'react'
import { useParams, Link} from 'react-router-dom'
import { useState, useEffect, props  } from 'react'
import ProductsService from './services/product.service'
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// renders product description
export default function ProductDescription() {

  // const productId = props.match.params.productId
  const productId = useParams;
  const [productDetail,setProductDetail] = useState([])
  const [products] = ProductsService.fetchProducts();

  // const thisProduct = ProductsService.fetchProducts(prod => prod.id === productId{
  //           setProductDetail(products);
  //         })

  useEffect(()=>{
    // const products = ProductsService.fetchProducts();
    // if (productId){
      products.forEach(product =>{
        if(product.id === productId){
          setProductDetail(products);
        }
      })
    // }
  }, [productId,products])

  // const [productDetail,setProductDetail] = useState([])

  // useEffect(()=>{
  //   fetchProducts();
  // }, [])

  // async function fetchProducts(){
  //   try {
  //     const products = await ProductsService.fetchProducts();
  //     setProductDetail(products);
  //   } catch (err) {
  //   }
  // }  console.log(productDetail)

  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

  // const [package,setPackage]=useState('')

  if(productDetail.length === 0) return null;

  return (
    <div className='container my-4'>
      <div className='d-flex justify-content-end'>
        <Link to='/upload'>Add Product</Link>
      </div>

      <div className='d-flex flex-wrap'>
        {
          productDetail.map(productDetail =>
            <div className='container-fluid'>
            <div key={productDetail.id} className="row" >
              <div className="col-xl-6 col-lg-6 col-md-6" >
                <img src={productDetail.downloadUrl} className="card-img-thumbnail product-img" alt="product cover" />
              </div>
              <div className="container col-xl-6 col-lg-6 col-md-6" >
                <h5 className="card-title">{productDetail.title}</h5>
                <p className="card-title">{productDetail.description}</p>
                <br></br>

                <div className="quantity">
                  <h5>Quantity:</h5>
                  <p className="btn-group">
                    <span className="btn btn-outline-primary" onClick={decNum}><AiOutlineMinus /></span>
                    <span className="border border-primary px-3 text-center">{num}</span>
                    <span className="btn btn-outline-primary" onClick={incNum}><AiOutlinePlus /></span>
                  </p>
              </div>

                <div className='row'>
                  <h5 className="col-6 col-sm-3">ZAR {productDetail.price}</h5>
                  <h5 className='btn btn-outline-dark col-6 col-sm-3 '>
                    <BsFillCartFill/>
                  </h5>
                </div>
                <Link to={`details/${productDetail.id}`} className="btn btn-outline-dark"> Read More</Link>
              </div>
              <br></br>
            </div>
            <hr></hr>
            </div>
          )
        }
      </div>
    </div>
  )
}