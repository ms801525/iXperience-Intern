import React from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

// renders the default layout of the website
export default function Layout(props) {
    return (
        <div>
            <NavBar user={props.user}/>
            <main className="container-fluid p-0 mx-0 my-0">
                {props.children}
            </main>
            <Footer />
        </div>
    )
}