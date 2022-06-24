
import React from 'react'

export default function AddProducts() {
  return (
    <div className='container'>
            <br></br>
            <br></br>
            <h1>Add Products</h1>
            <hr></hr>        
            <form autoComplete="off" className='form-group' >
                <label>Product Title</label>
                <input type="text" className='form-control' required></input>
                <br></br>
                <label>Product Description</label>
                <input type="text" className='form-control' required></input>
                <br></br>
                <label>Product Price</label>
                <input type="number" className='form-control' required></input>
                <br></br>
                <label>Upload Product Image</label>
                <input type="file" id="file" className='form-control' multiple required></input>
                <br></br>           
                <div style={{display:'flex', justifyContent:'center'}}>
                    <button type="submit" className='btn btn-success btn-md mb-3'>
                        SUBMIT
                    </button>
                </div>
            </form>
                
    
            </div>
  )
}
