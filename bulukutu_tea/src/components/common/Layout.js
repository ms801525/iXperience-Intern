import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='container-fluid'>
            <div className='layout'>
            <header>
                <Navbar />
            </header>
            <main className="container">
                <Outlet/>
            </main>
            <footer>
                <Footer />
            </footer>
            </div>
        </div>
    )
}
