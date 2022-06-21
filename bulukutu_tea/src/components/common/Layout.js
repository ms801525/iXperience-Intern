import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
    return (
        <div className="layout">
            <header>
                <Navbar />
            </header>
            <main className="container">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}