import React from 'react'

import { FaInstagram,FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="container text-center">
        <p className="icons">
            <button className='btn btn-outline-dark btn-floating m-1'href="#!">
                <FaInstagram/>
            </button>
            <button className='btn btn-outline-dark btn-floating m-1'href="#!">
                <FaFacebookF/>
            </button>
            <button className='btn btn-outline-dark btn-floating m-1'href="#!">
                <FaWhatsapp/>
            </button>
            <button className='btn btn-outline-dark btn-floating m-1'href="#!">
                <FaTiktok/>
            </button>
        </p>
        <p>© Copyright 2022: Bulukutu Tea</p>
        </div>
    )
}
