
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import ProductsService from './services/product.service'
import ImageService from './services/image.service'

import { Product } from '../products/models/products'

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
    
          console.log(downloadUrls);
    
          // save the movie to firebase
          await ProductsService.createProduct(new Product({
            id: null,
            title: title,
            description: description,
            price: price,
            downloadUrl: downloadUrls,
            
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
        // catch (err) {
        //   console.log(err);
        //   // setError(err.message);
        // }
      }
    
      function onFileSelected(e) {
        let selectedFiles = e.target.files;
        setImage(selectedFiles)
      }

      // function DisplayFile(e) {
      //   setImage(e.target.files[0]);
      // }
    

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
            {/* <form autoComplete="off" className='form-group' onSubmit={handleAddProducts} > */}
            <form autoComplete="off" className='form-group' onSubmit={onFormSubmit} >
                <label>Product Title</label>
                <input type="text" className='form-control' onChange= {(e)=> setTitle(e.target.value)} value = {title} required></input>
                <br></br>
                <label>Product Description</label>
                <input type="text" className='form-control' onChange= {(e)=> setDescription(e.target.value)} value = {description} required></input>
                <br></br>
                <label>Product Price</label>
                <input type="number" className='form-control' onChange= {(e)=> setPrice(e.target.value)} value = {price} required></input>
                <br></br>
                <label>Upload Product Image</label>
                <input type="file" id="file" className='form-control' 
                onChange={onFileSelected}
                multiple
                required></input>
                  
                {/* <Link to="/products"  style={{display:'flex', justifyContent:'center'}}>
                    <button type="submit" onSubmit={DisplayFile} className='btn btn-success btn-md mb-3'>
                        SUBMIT
                    </button>
                </Link> */}
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

