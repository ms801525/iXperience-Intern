import React from "react";
// imports for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUsPage from "./pages/AboutUsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-us" element={<AboutUsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
