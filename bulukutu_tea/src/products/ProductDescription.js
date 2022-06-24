import React, {Fragment,useState} from 'react'
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
