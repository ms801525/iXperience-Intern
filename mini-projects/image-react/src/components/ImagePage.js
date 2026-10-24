// import React, {useEffect, useState} from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import ImageService from "../services/image.service";
// import { Modal } from 'react-bootstrap';
// import FileService from '../services/file.service';

// export default function ImagePage() {

//     const navigate = useNavigate();

//     async function onFormSubmit(e){
//         e.preventDefault();

//         navigate('/');
//     }
//     const [images, setImages] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [imageToRemove,setImageToRemove] = useState(null);

//     useEffect(() => {

//     fetchImages();
//     },[]);

//     async function fetchImages() {
//       try{
//         const images = await ImageService.fetchImages();
//         setImages(images);
//       }
//       catch(err){

//       }
//     }
//     async function removeImage(){
//       try{
//         await FileService.deleteFile(imageToRemove.downloadUrl);
//         await ImageService.deleteImage(imageToRemove.id);


//         setImages(images.filter(image=>image.id !== imageToRemove.id));
//         closeModal();
//       }catch(err){

//       }
//     }

//     function closeModal(){

//       setShowModal(false);
//       setImageToRemove(null);
//     }

//     function onRemoveImageClicked(image){
//       setImageToRemove(image);
//       setShowModal(true);
//     }
//   return (

//     <div className='m-5 text-center'>
//        <Link to = '/'>Image page</Link>
//         <h1 className='m-5'>Picture has been uploaded Successfully!</h1>
//         <form onSubmit={onFormSubmit}>
//             <button className='btn btn-primary px-5 mb-3'>
//             Back 
//             </button>
//         </form>
//         {
//           images.map((image)=> <div key = {image.id}className='card'>

//         <img className="card-img-top" src={image.downloadUrl} alt="Card cap"></img>
//           <div className="card-body">
//             <h5 className="card-title">
//               {image.name}
//             </h5>
//             </div>

//             <button onClick={()=> onRemoveImageClicked(image)} 
//             className="btn btn secondary">
//               <i className='bi bi trash'></i>
//             </button>

//           </div>)
//         }
//         <Modal show={showModal} onHide={() => closeModal}>
//     <Modal.Header closeButton>
//       <Modal.Title>Remove Movie</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//         Are you sure you want to remove the movie and {imageToRemove?.name}
//     </Modal.Body>
//     <Modal.Footer>
//       <button className='btn btn-secondary' onClick={closeModal}>
//         Cancel
//       </button>
//       <button className='btn btn-danger' onClick={removeImage} >
//         Remove the Movie
//       </button>
//     </Modal.Footer>
//   </Modal>
    
//   </div>
//   )
// }

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import ImageService from '../services/image.service';
import FileService from '../services/file.service';

export default function ImageList() {

  const [images, setImages] = useState([]);
  const [movieToRemove, setImageToRemove] = useState(null);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchImages()
  }, []);

  async function fetchImages() {
    try {
      const images = await ImageService.fetchImages();
      setImages(images);
    } catch (err) {

    }
  }

  async function removeImage() {

    try {
      await ImageService.deleteImage(movieToRemove.id);
      await FileService.deleteFile(movieToRemove.downloadUrl);

      setImages(images.filter(movie => movie.id !== movieToRemove.id));
      hideModal();
    } catch (err) {

    }

  }

  function hideModal() {
    setImageToRemove(null);
    setShowModal(false);
  }

  return (
    <div className='container my-4'>
      <div className='d-flex justify-content-end'>
        <Link to='/'>Add Image</Link>
      </div>

      <div className='d-flex flex-wrap'>
        {
          images.map(movie =>
            <div key={movie.id} className="card" >
              <img src={movie.downloadUrl} className="card-img-top movie-img" alt="movie cover" />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
              </div>

              <div className='remove-button btn btn-secondary' onClick={() => {
                setImageToRemove(movie);
                setShowModal(true);
              }}>
                <i className='bi bi-trash'></i>
              </div>
            </div>
          )
        }
      </div>


      <Modal show={showModal} onHide={() => hideModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove the movie {movieToRemove?.name}
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={() => hideModal()}>
            Close
          </button>
          <button className='btn btn-danger' onClick={removeImage} >
            Remove
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
