import React from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

// renders the default layout of the website
export default function Layout({children}) {
    return (
        <div className="layout">
            <header>
                <NavBar/>
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