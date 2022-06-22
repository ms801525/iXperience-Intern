import React from 'react'
import Bfooter from './Button-footer';

export default function Footer() {
    return (
        <div className="text-center" style = {{backgroundColor : '#FFFFFF'}}>
            <h1>Company Menu</h1>
            <div>
                <Bfooter
                    width={'w-50'}
                    size={'btn-sm'}
                    page="/retail">
                    About us
                </Bfooter>
            
                <Bfooter
                    width={'w-50'}
                    size={'btn-sm'}
                    page="/retail">
                    Privacy Policy
                </Bfooter>
           
                <Bfooter
                    width={'w-50'}
                    size={'btn-sm'}
                    page="/retail">
                    Refunds & Return policy
                </Bfooter>
           
                <Bfooter
                    width={'w-50'}
                    size={'btn-sm'}
                    page="/retail">
                    Terms & Conditions
                </Bfooter>
            
                <Bfooter
                    width={'w-50'}
                    size={'btn-sm'}
                    page="/retail">
                    Contact Us
                </Bfooter>
            </div>
        <div className="p-2">
            <h5>© Copyright 2022: Bulukutu Tea</h5>
            <h5>All rights reserved.</h5>
        </div>
        </div>
    )
}
