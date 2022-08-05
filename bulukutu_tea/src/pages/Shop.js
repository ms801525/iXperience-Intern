//HAVE THE BUYING BUTTONS NAVIGATE TO THE PRODUCTS PAGE AND NOT COMING SOON

import React from 'react'
//import Button component
import Button from '../components/common/Button';

// renders shop page
export default function Shop() {
  return (
    <div>
        <div className="container p-0">
        <img
          className="image info-panel p-3"
          style={{ borderRadius: "5px" }}
          src={require("../images/tea-3.png")}
          alt="Bulukutu Tea"
        ></img>
        <br/>
        </div>
        <div className="p-4 border border-light bulukutu-text-color">
            <p>
            “If you are cold, tea will warm you;
            if you are too heated, it will cool you;
            If you are depressed, it will cheer you;
            If you are excited, it will calm you.”
            </p>

        </div>
        <br/>
        <div className="p-4 border border-light bulukutu-text-color">
            <p><b>
                There are two options to differentiate your purchase:
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
                        page="/coming-soon">
                        Buying For Me
                
                    </Button>
                </div>
                <div className="col-6 p-1">
                    <div className="d-grid gap-2">
                        <Button
                                    
                            width={'w-100'}
                            size={'btn-lg'}
                            // page="/products"
                            page="/coming-soon">
                            Buying For Business
                
                        </Button>
                        </div>
                            
                </div>
            </div>

        </div>










    </div>
  )
}
