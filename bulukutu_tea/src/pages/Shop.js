//HAVE THE BUYING BUTTONS NAVIGATE TO THE PRODUCTS PAGE AND NOT COMING SOON

import React from 'react'
//import Button component
import Button from '../components/common/Button';

import "../styles/shop.css"

// renders shop page
export default function Shop() {
  return (
    <div>
        <div className="container mt-5 text-center heading-color">
            <h1><b>SHOP BULUKUTU TEA</b></h1>
            <div className="bulukutu-text-center">
                </div>

        </div>
        <div className="container p-5">
        <img
          className="image info-panel p-2"
          style={{ borderRadius: "0px" }}
          src={require("../images/tea-3.png")}
          alt="Bulukutu Tea"
        ></img>
        <br/>
        </div>
        <div className="p-4 border border-light text-center">
            <p>
            “If you are cold, tea will warm you;
            if you are too heated, it will cool you;
            If you are depressed, it will cheer you;
            If you are excited, it will calm you.”
            </p>

        </div>
        <br/>
        <div className="p-4 border border-light text-center">
            <p><b>
                <h2 className="heading-color"><b>
                There are two options to differentiate your purchase:
                </b></h2>
            </b></p>
            <p><b>
                - <i>Buying for me</i> allows for smaller individual purchases 
            </b></p>
            <p><b>
                - <i>Buying for business</i> allows purchases under your company name
            </b></p>

        </div>
        <br/>
        <div className="container text-center">
            <div className="row">
                <div className="col-6 p-1">
                    <Button
                                
                        width={'w-100'}
                        size={'btn-lg'}
                        // page="/products"
                        page="/products">
                        Buying For Me
                
                    </Button>
                </div>
                <div className="col-6 p-1">
                    <div className="d-grid gap-2">
                        <Button
                                    
                            width={'w-100'}
                            size={'btn-lg'}
                            // page="/products"
                            page="/products">
                            Buying For Business
                
                        </Button>
                        </div>
                            
                </div>
            </div>

        </div>










    </div>
  )
}
