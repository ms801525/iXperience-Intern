import React from 'react';
import Button from './Button';

export default function Navbar() {
    return (
        <nav className="navbar" style={{backgroundColor: "#E6CBBF"}}>
            <form className="container-fluid">
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                        <div className='col-8'>
                            <div className='card m-1 text-center border-dark'
                                style={{backgroundColor : '#B2755E',
                                height: '50px',
                                width:'75%',
                                fontSize:"xx-large"}}>
                                Bulukutu Tea
                            </div>
                        </div>
                        <div className='col'>
                            <div className='m-1 text-center'
                                style={{backgroundColor : '#B2755E',
                                height: '50px',
                                width:'70px',
                                borderRadius: "5px"}}>
                                Welcome Username
                            </div>
                        </div>
                        <div className='col'>
                            <Button
                                size={'btn-sm'}
                                page="/cart">
                                <i class="bi bi-cart3"></i>
                            </Button>
                        </div>
                    </div>
                    <div className='row'>      
                        <div className='col'>
                            <Button
                                width={'w-100'}
                                size={'btn-sm'}
                                page="/">
                                Home
                            </Button>
                        </div>
                        <div className='col'>
                            <Button
                                width={'w-100'}
                                size={'btn-sm'}
                                page="/shop">
                                Shop
                            </Button>
                        </div>   
                        <div className='col'>
                            <Button
                                width={'w-100'}
                                size={'btn-sm'}
                                page="/about-us">
                                Our Story
                            </Button>
                        </div>   
                        <div className='col'>
                            <Button
                                width={'w-100'}
                                size={'btn-sm'}
                                page="/contact">
                                Contact
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </nav>
    )
}
