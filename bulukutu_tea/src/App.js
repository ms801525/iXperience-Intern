import React from "react";
// imports for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/common/Layout";
import Homepage from "./pages/homepage";
import ProductDescription from "./products/ProductDescription";
import AboutUsPage from "./pages/AboutUsPage";
import Shop from "./pages/shop";
import Retail from "./pages/retail";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

export default function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about-us" element={<AboutUsPage />}></Route>
            <Route path = "/product-description" element = { <ProductDescription/> } />
            <Route path = "/shop" element = {<Shop/>}></Route>
            <Route path = "/retail" element = {<Retail/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}