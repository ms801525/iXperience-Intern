import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
    return (
        <div className="layout" style={{backgroundColor : '#DBE3C7'}}>
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