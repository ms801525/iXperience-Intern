//THIS IS THE UPLOAD PRODUCTS PAGE FROM WHICH YOU CAN HAVE THE ADMIN UPLOAD THE RESPECTIVE PRODUCT (with the title,description,price and images)
//for now it's commented but feel free to un-comment and play around with it
//TO DO 
  // - Guard this page so that only the admin can upload products..
        //since the "add products" button is seen on the page where products are displayed it should be hidden and only be accessible to the admin to prevent anyone else form accessing it
  // - re-uplolad the products
      //I have currently uploaded the 2 products as requested by the manager but feel free to upload and re-upload to text the functionality
//FEEL FREE TO MODIFY IT AS PER MANAGER'S INSTRUCTIONS!! :)

import React, {useState} from 'react'
import { Link } from 'react-router-dom'

// services imports
import ProductsService from './services/product.service'
import ImageService from './services/image.service'

// product model import
import { Product } from '../products/models/products'

// renders the products page / handles products
export default function AddProducts() {

    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [images, setImage] = useState(null)

    const [successMsg, setSuccessMsg]=useState('');
    const [uploadError, setUploadError]=useState('');

    async function onFormSubmit(e) {
        e.preventDefault();
    
        try {
          // upload the file
          const uploads = [];

          for (const image of images) {
            uploads.push(ImageService.uploadImage(image));
          }

          const downloadUrls = await Promise.all(uploads);
    
          // save the movie to firebase
          await ProductsService.createProduct(new Product({
            id: null,
            title: title,
            description: description,
            price: price,
            downloadUrls: downloadUrls,
            
          })).then(() => {
              setSuccessMsg('Product added successfully')
              setTitle('')
              setDescription('')
              setPrice('')
              document.getElementById('file').value=''
              setUploadError('')
              setSuccessMsg('')
          });
    
        } catch(err) {setUploadError(err.message)}
      }
    
      function onFileSelected(e) {
        let selectedFiles = e.target.files;
        setImage(selectedFiles)
      }
    

  return (
    <>
      <div className='container'>
            <br></br>
            <br></br>
            <h1>Add Products</h1>
            <div className='d-flex justify-content-end'>
              <Link to='/products'>Products list</Link>
            </div>
            <hr></hr>
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}         
            <form autoComplete="off" className='form-group' onSubmit={onFormSubmit} >
                <label>Product Title</label>
                <input type="text" className='form-control' onChange= {(e)=> setTitle(e.target.value)} value = {title} required></input>
                <br></br>
                <label>Product Description</label>
                <input type="text" rows={5} className='form-control' onChange= {(e)=> setDescription(e.target.value)} value = {description} required></input>
                <br></br>
                <label>Product Price</label>
                <input type="number" className='form-control' onChange= {(e)=> setPrice(e.target.value)} value = {price} required></input>
                <br></br>
                <label>Upload Product Image</label>
                <input type="file" id="file" className='form-control' 
                onChange={onFileSelected}
                multiple
                required></input>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <button type="submit" onSubmit={onFileSelected} className='btn btn-success btn-md mb-3'>
                        SUBMIT
                    </button>
                </div>
            </form>
            {uploadError&&<>
                    <br></br>
                    <div className='alert alert-danger'>{uploadError}</div>
                </>}
            </div>
        </>
  )
}

