import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Image } from '../models/image';

import FileService from '../services/file.service';
import ImageService from '../services/image.service';
import ImageSelector from '../components/imageSelector';

export default function AddImage() {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const downloadUrl = await uploadFile();

      await ImageService.createImage(new Image({
        id: null,
        name: name,
        downloadUrl: downloadUrl,
      }));

      navigate('/image');
    } catch (err) {
        console.log(err);
    }
  }

  async function uploadFile() {
    return FileService.uploadImage(file, (progress) => {
      console.log(progress);
    });
  }



  return (
    <div className='container my-4'>
      <div className='d-flex justify-content-end mb-3'>
        <Link to='/image'>Image List</Link>
      </div>

      <div className='card card-body'>

        <h1>Add Image</h1>

        <form onSubmit={onFormSubmit}>

          <ImageSelector
            onFileChange={(file) => setFile(file)}
            title="Image Image"
          />

          <div className="mb-3">
            <label className="form-label">
              Image Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>

          <div className='text-center'>
            <button type='submit' className='btn btn-primary px-5'>
              Add Image
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}