import React from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

// renders the default layout of the website
export default function Layout(props) {
    return (
        <div>
            <NavBar user={props.user}/>
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}