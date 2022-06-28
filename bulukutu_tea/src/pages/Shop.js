import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from '../components/common/Button';




export default function Shop() {


  return (
    <div>
        <div className="container p-0">
        <img
          className="image"
          src={require("../images/tea-3.png")}
          alt="Bulukutu Tea"
        ></img>
        <br/>
        </div>
        <div className="p-4 border border-light">
            <p>
            “If you are cold, tea will warm you;
            if you are too heated, it will cool you;
            If you are depressed, it will cheer you;
            If you are excited, it will calm you.”
            </p>

        </div>
        <br/>
        <div className="p-4 border border-light">
            <p><b>
                Two Options allow to differentiate the type of purchase you are making
            </b></p>
            <p><b>
                - Buying for me allows for smaller individual purchases 
            </b></p>
            <p><b>
                - Buying for business allow purchases under your company name
            </b></p>

        </div>
        <br/>
        <div className="container text-center">
            <div className="row">
                <div className="col-6 p-1">
                    <Button
                                
                        width={'w-100'}
                        size={'btn-lg'}
                        page="/products">
                        Buying For me
                
                    </Button>
                </div>
                <div className="col-6 p-1">
                    <div className="d-grid gap-2">
                        <Button
                                    
                            width={'w-100'}
                            size={'btn-lg'}
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
