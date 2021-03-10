import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {

    return (
        <header>

            <h1>The<br />Book<br />Database</h1>

            <nav>

                <a href="/">Home</a>

                <a href="/books">List of books</a>

                <a href="/book-of-the-week">Book of the week</a>

                <Link to="/home/login">Login</Link>
            </nav>

        </header>
    );
}