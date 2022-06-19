import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Navbar(props) {
  return (
    <nav className="navbar" style={{backgroundColor: "#E6CBBF"}}>
        <form className="container-fluid">
            <div className='container-fluid'>
                <div className='row align-items-center'>
                    <div className='col-8'>
                        <div className='card m-1 text-center border-dark'
                            style={{backgroundColor : '#B2755E',
                            height: '50px',
                            width:'75%'}}>
                            Bulukutu Tea
                        </div>
                    </div>
                    <div className='col'>
                        <div className='m-1 text-center rounded-circle'
                            style={{backgroundColor : '#B2755E',
                            height: '30px',
                            width:'70px',
                            fontSize: "10px"}}>
                            Welcome Username
                        </div>
                    </div>
                    <div className='col'>
                        <Button
                            size={'btn-sm'}>
                            <i class="bi bi-cart3"></i>
                        </Button>
                    </div>
                </div>
                <div className='row'>      
                    <div className='col'>
                        <Button
                            width={'w-100'}
                            size={'btn-sm'}>
                            Home
                        </Button>
                    </div>
                    <div className='col'>
                        <Button
                            width={'w-100'}
                            size={'btn-sm'}>
                            Shop
                        </Button>
                    </div>   
                    <div className='col'>
                        <Button
                            width={'w-100'}
                            size={'btn-sm'}>
                            Our Story
                        </Button>
                    </div>   
                    <div className='col'>
                        <Button
                            width={'w-100'}
                            size={'btn-sm'}>
                            Contact
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    </nav>
  )
}
