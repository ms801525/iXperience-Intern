import React, { useEffect, useState } from "react";
// imports for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import for page layout
import Layout from "./components/common/Layout";

// imports for all pages
import Homepage from "./pages/HomePage";
import ProductDescription from "./products/ProductDescription";
import AboutUsPage from "./pages/AboutUsPage";
import Shop from "./pages/Shop";
import Retail from "./pages/Retail";
import Terms from"./pages/Terms";
import PolicyPage from "./pages/PolicyPage";
import NotFound from "./components/NotFound";
import DisplayProducts from "./products/DisplayProducts";
import ImageList from "./pages/ImageList";
import Recipe from "./pages/Recipe";
import AddProducts from "./products/AddProducts";
import Registerpage from "./pages/Registerpage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import OrdersService from './services/orders.service'
import ContactUsPage from "./pages/ContactUsPage";
import ComingSooon from "./components/ComingSoon";

// imports for bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// import for App StyleSheet
import "./App.css";

// imports for firebase
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/Firebase';

// renders the website
export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  async function onAddToCartClick(order) {
    order.userid = user.uid;
    OrdersService.createOrder(order);
  }

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Layout user={user}>
          <Routes>
            <Route path="/coming-soon" element={<ComingSooon></ComingSooon>}></Route>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about-us" element={<AboutUsPage />}></Route>
            <Route
              path="/product-description"
              element={<ProductDescription />}
            />
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/retail" element={<Retail />}></Route>
            <Route path="/policy-page" element={<PolicyPage />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
            {/* <Route path="/register" element={<Registerpage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route> */}
            <Route path='*' element={<NotFound/>}></Route>
            {/* <Route path='/products' element={<DisplayProducts onAddToCartClick={onAddToCartClick}/>}></Route> */}
            {/* <Route path='/products/:productId' element={<ProductDescription/>}></Route> */}
            {/* <Route path='/upload' element={<AddProducts/>}></Route> */}
            <Route path='/image-list' element={<ImageList/>}></Route>
            <Route path='/recipe' element={<Recipe/>}></Route>
            {/* <Route path='/cart' element={<CartPage user={user}/>}></Route> */}
            <Route path="/contact-us" element={<ContactUsPage/>}></Route>

          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}