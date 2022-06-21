import React from "react";
// imports for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/common/Layout';
import Homepage from './components/homepage';
import ProductDescription from "./products/ProductDescription";
import AboutUsPage from "./pages/AboutUsPage";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
// import Navbar from "./components/common/Navbar";
// import Footer from "./components/common/Footer";


export default function App() {
  return (
        <BrowserRouter>
        {/* <Navbar/> */}
          <Routes>
              <Route path="/" element= {<Layout/>}>
                <Route path = "/" element = { <Homepage/> } />
                <Route path = "/product-description" element = { <ProductDescription/> } />
                <Route path="/about-us" element={<AboutUsPage />} />
              </Route>
          </Routes>
          {/* <Footer/> */}
        </BrowserRouter>
  );
  }
