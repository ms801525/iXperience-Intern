import React, {Fragment,useState} from 'react'
import { Row, Col } from 'antd';
import { Carousel } from 'bootstrap'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function ProductDescription() {
    const [quantity, setQuantity] = useState(1)
    const increaseQty = () => {
        const count = document.querySelector('.count')

        const qty = count.valueAsNumber + 1;
        setQuantity(qty)
    }

    const decreaseQty = () => {

        const count = document.querySelector('.count')

        if (count.valueAsNumber <= 1) return;

        const qty = count.valueAsNumber - 1;
        setQuantity(qty)

    }
  return (
    // <div className='small-container isngle-product'>
    //     <div className='row'>
    //         <div className='col-2'>
    //             <img src='teasample-3.jpg' width={"100%"} id = "product-img" alt='' style={{borderColor:"red", borderWidth:"5px"}} ></img>

    //             <div className='small-img-row'>
    //                 <div className='small-img-col'>
    //                     <img src='teasample-5.jpg' width={"100%"} id = "small-img" alt='' style={{borderColor:"red", borderWidth:"5px"}} />
    //                 </div>
    //                 <div className='small-img-col'>
    //                     <img src='teasample-3.jpg' width={"100%"} id = "small-img" alt=''/>
    //                 </div>
    //                 <div className='small-img-col'>
    //                     <img src='teasample-3.jpg' width={"100%"} id = "small-img" alt=''/>
    //                 </div>
    //                 <div className='small-img-col'>
    //                     <img src='teasample-5.jpg' width={"100%"} id = "small-img" alt=''/>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className='col-2'>
    //             <p>NAME</p>
    //             <h1>BYLINE</h1>
    //             <h4>PRICE</h4>
    //             <select>
    //                 <option>Select Size</option>
    //                 <option>Select Size</option>
    //                 <option>Select Size</option>
    //                 <option>Select Size</option>
    //                 <option>Select Size</option>
    //             </select>
    //             <input type="number" value = "1">
    //                 {/* <a href= "#" className='btn'>ADD TO CART</a>
    //                 <a href= "#" className='btn'>BUY NOW</a> */}
    //             </input>
    //         </div>
    //     </div>
    // </div>
    // <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

    //         <div style={{ display: 'flex', justifyContent: 'center' }}>
    //             <h1>Product Title</h1>
    //         </div>

    //         <br />

    //         <Row gutter={[16, 16]} >
    //             <Col lg={12} xs={24}>
    //                 {/* <ProductImage detail={Product} /> */}
    //                 Product Image
    //             </Col>
    //             <Col lg={12} xs={24}>
    //                 {/* <ProductInfo addToCart={addToCartHandler} detail={Product} /> */}
    //                 Product Info
    //             </Col>
    //         </Row>
    //     </div>

    // <Fragment>
    //         {/* {loading ? <Loader /> : ( */}
    //             <Fragment>
    //                 {/* <MetaData title={product.name} /> */}
    //                 <div className="row d-flex justify-content-around">
    //                     <div className="col-12 col-lg-5 img-fluid" id="product_image">
    //                         {/* <Carousel pause='hover'>  */}
    //                         Product images
    //                             {/* {product.images && product.images.map(image => (
    //                                 <Carousel.Item key={image.public_id}>
    //                                     <img className="d-block w-100" src={image.url} alt={product.title} />
    //                                 </Carousel.Item>
    //                             ))} */}
    //                         {/* </Carousel> */}
    //                     </div>

    //                     <div className="col-12 col-lg-5 mt-5">
    //                         {/* <h3>{product.name}</h3> */} <h3>product name</h3>
    //                         {/* <p id="product_id">Product # {product._id}</p> */}<p id="product_id">Product # </p>

    //                         <hr />

    //                         <div className="rating-outer">
    //                             {/* <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div> */}
    //                             <div className="rating-inner" ></div>
    //                         </div>
    //                         {/* <span id="no_of_reviews">({product.numOfReviews} Reviews)</span> */}
    //                         <span id="no_of_reviews">( Reviews)</span>

    //                         <hr />

    //                         {/* <p id="product_price">${product.price}</p> */}
    //                         <p id="product_price">price</p>
    //                         <div className="stockCounter d-inline">
    //                             <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

    //                             <input type="number" className="form-control count d-inline" value={quantity} readOnly />

    //                             <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
    //                         </div>
    //                         {/* <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" disabled={product.stock === 0} onClick={addToCart}>Add to Cart</button> */}
    //                         <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>

    //                         <hr />

    //                         {/* <p>Status: <span id="stock_status" className={product.stock > 0 ? 'greenColor' : 'redColor'} >{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p> */}

    //                         <p>Status: <span id="stock_status" >stock</span></p>

    //                         <hr />

    //                         <h4 className="mt-2">Description:</h4>
    //                         {/* <p>{product.description}</p> */}
    //                         <p>product description</p>
    //                         <hr />
    //                         {/* <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p> */}
    //                         <p id="product_seller mb-3">Sold by: <strong>product seller</strong></p>

    //                         {/* {user ? <button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal" onClick={setUserRatings}>
    //                             Submit Your Review
    //                         </button> */}

    //                         {/* {user ? <button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal" onClick={setUserRatings}>
    //                             Submit Your Review
    //                         </button>
    //                             :
    //                             <div className="alert alert-danger mt-5" type='alert'>Login to post your review.</div>
    //                         } */}
    //                         <button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">
    //                             Submit Your Review
    //                         </button>
                            

    //                         <div className="row mt-2 mb-5">
    //                             <div className="rating w-50">

    //                                 <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog" aria-labelledby="ratingModalLabel" aria-hidden="true">
    //                                     <div className="modal-dialog" role="document">
    //                                         <div className="modal-content">
    //                                             <div className="modal-header">
    //                                                 <h5 className="modal-title" id="ratingModalLabel">Submit Review</h5>
    //                                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //                                                     <span aria-hidden="true">&times;</span>
    //                                                 </button>
    //                                             </div>
    //                                             <div className="modal-body">

    //                                                 <ul className="stars" >
    //                                                     <li className="star"><i className="fa fa-star"></i></li>
    //                                                     <li className="star"><i className="fa fa-star"></i></li>
    //                                                     <li className="star"><i className="fa fa-star"></i></li>
    //                                                     <li className="star"><i className="fa fa-star"></i></li>
    //                                                     <li className="star"><i className="fa fa-star"></i></li>
    //                                                 </ul>

    //                                                 <textarea
    //                                                     name="review"
    //                                                     id="review" className="form-control mt-3"
    //                                                     // value={comment}
    //                                                     // onChange={(e) => setComment(e.target.value)}
    //                                                 >

    //                                                 </textarea>

    //                                                 <button className="btn my-3 float-right review-btn px-4 text-white"  data-dismiss="modal" aria-label="Close">Submit</button>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>

    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 {/* {product.reviews && product.reviews.length > 0 && (
    //                     <ListReviews reviews={product.reviews} />
    //                 )} */}

    //             </Fragment>
    //         {/* )} */}
    //     </Fragment>


//     <Fragment>
//         <Fragment>
//             <div className="row d-flex justify-content-around">
//                 <div className="col-12 col-lg-5 img-fluid" id="product_image">
//                     Product images
//                 </div>

//                 <div className="col-12 col-lg-5 mt-5">
//                     <h3>product name</h3>
//                     <p id="product_id">Product # </p>
//                     <hr />

//                     <div className="rating-outer">
//                         <div className="rating-inner" ></div>
//                     </div>

//                     <p id="product_price">price</p>
//                     <div className="stockCounter d-inline">
//                         <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

//                         <input type="number" className="form-control col-xs-2" value={quantity} readOnly />

//                         <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
//                     </div>

//                     <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>

//                     <hr />

//                     <p>Status: <span id="stock_status" >stock</span></p>
//                     <hr />

//                     <h4 className="mt-2">Description:</h4>
//                     <p>product description</p>
//                     <hr />

//                     <p id="product_seller mb-3">Sold by: <strong>product seller</strong></p>

//                     <button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">
//                         Submit Your Review
//                     </button>
                    

//                     <div className="row mt-2 mb-5">
//                         <div className="rating w-50">

//                             <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog" aria-labelledby="ratingModalLabel" aria-hidden="true">
//                                 <div className="modal-dialog" role="document">
//                                     <div className="modal-content">
//                                         <div className="modal-header">
//                                             <h5 className="modal-title" id="ratingModalLabel">Submit Review</h5>
//                                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                                 <span aria-hidden="true">&times;</span>
//                                             </button>
//                                         </div>
//                                         <div className="modal-body">

//                                             <ul className="stars" >
//                                                 <li className="star"><i className="fa fa-star"></i></li>
//                                                 <li className="star"><i className="fa fa-star"></i></li>
//                                                 <li className="star"><i className="fa fa-star"></i></li>
//                                                 <li className="star"><i className="fa fa-star"></i></li>
//                                                 <li className="star"><i className="fa fa-star"></i></li>
//                                             </ul>

//                                             <textarea
//                                                 name="review"
//                                                 id="review" className="form-control mt-3"
//                                             >

//                                             </textarea>
//                                             <button className="btn my-3 float-right review-btn px-4 text-white"  data-dismiss="modal" aria-label="Close">Submit</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Fragment>
// </Fragment>

<div>
<div className="product-detail-container">
  <div>
    <div className="image-container">
      {/* <img src={urlFor(image && image[index])} className="product-detail-image" /> */}
      <img  className="product-detail-image" />
    </div>
    <div className="small-images-container">
      {/* {image?.map((item, i) => ( */}
        <img 
        //   key={i}
        //   src={urlFor(item)}
        //   className={i === index ? 'small-image selected-image' : 'small-image'}
        //   onMouseEnter={() => setIndex(i)}
        />
      {/* ))} */}
    </div>
  </div>

  <div className="product-detail-desc">
    {/* <h1>{name}</h1> */}
    <h1>Name</h1>
    <div className="reviews">
      <div>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </div>
      <p>
        (20)
      </p>
    </div>
    <h4>Details: </h4>
    {/* <p>{details}</p> */}
    <p>details</p>
    {/* <p className="price">${price}</p> */}
    <p className="price">price</p>
    <div className="quantity">
      <h3>Quantity:</h3>
      <p className="quantity-desc">
        <span className="minus" onClick={decreaseQty}><AiOutlineMinus /></span>
        <span className="num">{quantity}</span>
        <span className="plus" onClick={increaseQty}><AiOutlinePlus /></span>
      </p>
    </div>
    <div className="buttons">
      {/* <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
      <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button> */}
      <button type="button" className="add-to-cart" >Add to Cart</button>
      <button type="button" className="buy-now" >Buy Now</button>
    </div>
  </div>
</div>

<div className="maylike-products-wrapper">
    <h2>You may also like</h2>
    <div className="marquee">
      <div className="maylike-products-container track">
        {/* {products.map((item) => (
          <Product key={item._id} product={item} />
        ))} */}
      </div>
    </div>
</div>
</div>


    )
}
