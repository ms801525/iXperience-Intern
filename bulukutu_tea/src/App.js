import React from "react";
// imports for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUsPage from "./pages/AboutUsPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import Layout from "./components/common/Layout";
import Homepage from "./pages/homepage";

export default function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about-us" element={<AboutUsPage />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
