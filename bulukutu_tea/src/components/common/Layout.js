import React from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

// renders the default layout of the website
export default function Layout(props) {
    return (
        <div className="layout">
            <header>
                <NavBar user={props.user}/>
            </header>
            <div>
            <main className="container">
                {props.children}
            </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}