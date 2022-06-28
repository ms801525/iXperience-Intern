import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import NewNavBar from './NewNavBar'

export default function Layout({children}) {
    return (
        <div className="layout">
            <header>
                {/* <Navbar /> */}
                <NewNavBar/>
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