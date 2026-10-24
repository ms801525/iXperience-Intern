import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ImagePage from './components/ImagePage';
import AddImage from './components/addImage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/image' element={<ImagePage/>}></Route>
        <Route path='' element={<AddImage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
