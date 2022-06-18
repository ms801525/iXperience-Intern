import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Navbar(props) {
  return (
    <nav className="navbar" style={{backgroundColor: "#E6CBBF"}}>
        <form className="container-fluid">
            <div className='container-fluid'>
                <div className='row'>
                    <Button 
                        size={"btn-lg"}
                        width={'w-50'}>
                        Bulukutu Tea
                    </Button>
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
