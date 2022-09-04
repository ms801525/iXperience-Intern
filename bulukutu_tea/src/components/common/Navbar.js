import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import {  signOut } from 'firebase/auth'
import { auth } from '../../firebase/Firebase'
// import { Order } from "../../models/order";

// import for nav buttons
import Button from "./Button";
import Button2 from './Button2'

// import for nav bar stylesheet
import "../../styles/navBarStyles.css";

// renders the navbar
export default function Navbar({user}) {

  const navigate = useNavigate();
  const [logo, setLogo] = useState(true)

  function showLogo() {
    if (window.innerWidth <= 960) {
      setLogo(true)
    } else {
      setLogo(false)
    }
  }

  useEffect(() => {
    showLogo();
  }, [])

  window.addEventListener('resize', showLogo)

  async function onLogoutClicked() {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className="container-fluid navbar-panel">

      {logo && <Link to="/">
                    <img
                      className="main-logo"
                      src={require("../../images/Logo2.png")}
                      alt="Background"
                    ></img>
                </Link>}


      {/* <div className="container center-title">
        <div className="p-3"> */}
          {/* <Link to="/">
          <img
            className="main-logo"
            src={require("../../images/Logo2.png")}
            alt="Background"
          ></img></Link> */}
          {/* <div className="text-center cart-position">
            <Button size={"btn-sm"} page="/coming-soon"> */}
              {/* <i className="bi bi-cart3 cart-icon"></i> */}
              {/* <span className="cart-item-qty">{order.name.length}</span> */}
            {/* </Button> */}
            {/* <div>
              <div className="m-1 text-center">Welcome</div>
              {
                props.user ?
                <p>{props.user.email}</p>
                :
                <p>Guest</p>
              }
            </div> */}
            
          {/* </div> */}
        {/* </div>
      </div> */}

      <nav className="navbar navbar-light navbar-expand-lg p-2">
        <form className="container-fluid">
          <div className="container-fluid d-flex flex-column justify-content-center">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav me-auto my-2 mb-lg-0 col d-flex justify-content-center align-items-center">
                {/* <li className="col nav-item mx-1">
                  <Button width={"w-100"} size={"btn-sm"} page="/">
                    Home
                  </Button>
                </li> */}
                <li className="col nav-item mx-3">
                  <Button width={"w-100"} size={"btn-sm"} page="/shop">
                    Shop
                  </Button>
                </li>
                <li className="col nav-item mx-3">
                  <Button width={"w-100"} size={"btn-sm"} page="/about-us">
                    About Bulukutu Tea
                  </Button>
                </li>
                <li className="col nav-item mx-3">
                  <Button width={"w-100"} size={"btn-sm"} page="/recipe">
                    Tea Recipes
                  </Button>
                </li>
                {!logo && <li className="col nav-item mx-3">
                    <Link to="/">
                      <img
                        className="main-logo"
                        src={require("../../images/Logo2.png")}
                        alt="Background"
                      ></img></Link>
                  </li>
                }
                <li className="col nav-item mx-3">
                  <Button width={"w-100"} size={"btn-sm"} page="/contact-us">
                    Contact
                  </Button>
                </li>
                  {
                    user ?
                      <>
                        <li className="col nav-item mx-3">
                          <Button2 variant='outline' onClick={onLogoutClicked}>
                            Logout
                          </Button2>
                        </li>
                        <li className='col nav-item mx-3'>
                          <div className="text-center cart-position">
                            <Button size={"btn-sm"} page="/cart">
                              <i className="bi bi-cart3 cart-icon"></i>
                              {/* <span className="cart-item-qty">{order.name.length}</span> */}
                            </Button>
                          </div>
                        </li>
                      </>
                      :
                      <>
                        <li className="col nav-item mx-3">
                          <Button width={"w-100"} size={"btn-sm"} page="/login">
                            Login
                          </Button>
                        </li>
                        <li className="col nav-item mx-3">
                          <Button width={"w-100"} size={"btn-sm"} page="/register">
                            Register
                          </Button> 
                        </li>
                      </>
                  }
                
                  
              </ul>
              {/* <div className="text-center cart-position">
                <Button size={"btn-sm"} page="/coming-soon">
                  <i className="bi bi-cart3 cart-icon"></i>
                  <span className="cart-item-qty">{order.name.length}</span>
                </Button>
              </div> */}
            </div>
          </div>
        </form>
      </nav>
    </div>
  );
}