import React from 'react';
import Footer from './Footer';
import NewNavBar from './NewNavBar';

export default function Layout({children}) {
    return (
        <div className="layout">
            <header>
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