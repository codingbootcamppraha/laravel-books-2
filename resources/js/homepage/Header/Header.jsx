import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import {ColorSchemeContext, UserContext} from '../index';

function User(props){
    const user = useContext(UserContext);

    console.log('user data in User component', user);

    if(user) return (
        <div className="user-info">
            Logged in as { user.name }
        </div>
    )

    return (
        <Link to="/home/login">Login</Link>
    )
}


export default function Header() {
    const colorScheme = useContext(ColorSchemeContext);

    return (
        <header>

            <h1>The<br />Book<br />Database</h1>

            <nav>

                <button
                    onClick={() => colorScheme.setColorScheme('light')}
                >
                    Switch to Light
                </button>

                <button
                    onClick={() => colorScheme.setColorScheme('dark')}
                >
                    Switch to Dark
                </button>

                <a href="/">Home</a>

                <a href="/books">List of books</a>

                <a href="/book-of-the-week">Book of the week</a>

                <User/>

            </nav>

        </header>
    );
}
