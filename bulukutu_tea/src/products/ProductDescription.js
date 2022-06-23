import React from 'react'

export default function ProductDescription() {
  return (
    <div className='small-container isngle-product'>
        <div className='row'>
            <div className='col-2'>
                <img src='teasample-3.jpg' width={"100%"} id = "product-img" alt='' style={{borderColor:"red", borderWidth:"5px"}} ></img>

                <div className='small-img-row'>
                    <div className='small-img-col'>
                        <img src='teasample-5.jpg' width={"100%"} id = "small-img" alt='' style={{borderColor:"red", borderWidth:"5px"}} />
                    </div>
                    <div className='small-img-col'>
                        <img src='teasample-3.jpg' width={"100%"} id = "small-img" alt=''/>
                    </div>
                    <div className='small-img-col'>
                        <img src='teasample-3.jpg' width={"100%"} id = "small-img" alt=''/>
                    </div>
                    <div className='small-img-col'>
                        <img src='teasample-5.jpg' width={"100%"} id = "small-img" alt=''/>
                    </div>
                </div>
            </div>
            <div className='col-2'>
                <p>NAME</p>
                <h1>BYLINE</h1>
                <h4>PRICE</h4>
                <select>
                    <option>Select Size</option>
                    <option>Select Size</option>
                    <option>Select Size</option>
                    <option>Select Size</option>
                    <option>Select Size</option>
                </select>
                <input type="number" value = "1">
                    {/* <a href= "#" className='btn'>ADD TO CART</a>
                    <a href= "#" className='btn'>BUY NOW</a> */}
                </input>
            </div>
        </div>
    </div>
  )
}
