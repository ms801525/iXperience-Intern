import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
    return (
        <div className="layout" style={{backgroundColor : '#E6CBBF'}}>
            <header>
                <Navbar />
            </header>
            <div>
            <main className="container">
                {children}
            </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}