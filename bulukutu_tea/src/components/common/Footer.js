import React from 'react'
import Bfooter from './Button-footer';


export default function Footer() {
    return (
        <div className="text-center p-3" style = {{backgroundColor : '#FFFFFF'}}>
            <h2 className="mb-4 mt-3">Company Menu</h2>
            <div style = {{backgroundColor : '#FFFFFF'}}>
                <Bfooter
                    width={'w-50'}
                    size={'btn-sm'}
                    page="/about-us">
                    About us
                </Bfooter>
            
                <Bfooter
                    width={'w-50'}
                    size={'btn-sm'}
                    page="/privacy">
                    Privacy Policy
                </Bfooter>
           
                <Bfooter
                    width={'w-50'}
                    size={'btn-sm'}
                    page="/Returnpol">
                    Refunds & Return policy
                </Bfooter>
           
                <Bfooter
                    width={'w-50'}
                    size={'btn-sm'}
                    page="/terms">
                    Terms & Conditions
                </Bfooter>
            
                <Bfooter
                    width={'w-50'}
                    size={'btn-sm'}
                    page="/contact">
                    Contact Us
                </Bfooter>
            </div>
        <div className="p-2">
            <p>© Copyright 2022: Bulukutu Tea</p>
            <p>All rights reserved.</p>
        </div>
        </div>
    )
}
