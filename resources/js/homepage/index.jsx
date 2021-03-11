import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

import Header from './Header/Header.jsx';
import BooksListShort from './BooksListShort/BooksListShort.jsx';
import BookOfTheWeek from './BookOfTheWeek/BookOfTheWeek.jsx';
import Login from './Login/Login.jsx';

import './index.scss';


export const UserContext = React.createContext(null);
export const ColorSchemeContext = React.createContext(null);

function App() {
    const [api_token, setApiToken] = useState(localStorage.getItem('api_token'));
    const [user, setUser] = useState(null);

    const setToken = (token) => {

        setApiToken(token);

        localStorage.setItem('api_token', token);
    }
    const loadCurrentUser = async () => {
        console.log('Loading current user information');

        const response = await fetch('/api/user', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${api_token}`
            }
        });

        const data = await response.json();

        setUser(data.user);

        console.log('user data', data.user);
    }
    useEffect(() => {
        if (api_token) {
            loadCurrentUser();
        }
    }, [api_token]);

    const [colorScheme, setColorScheme] = useState('light');

    return (
        <Router>

            <UserContext.Provider value={user}>
                <ColorSchemeContext.Provider value={{
                    colorScheme: colorScheme,
                    setColorScheme: setColorScheme
                }}>

                    <p>You current color scheme: {colorScheme}</p>
                    <Header/>

                    <main>
                        <Switch>

                            <Route exact path="/home">
                                <BooksListShort/>
                                <BookOfTheWeek/>
                            </Route>

                            <Route exact path="/home/login">
                                <Login setToken={setToken}/>
                            </Route>

                        </Switch>
                    </main>
                </ColorSchemeContext.Provider>
            </UserContext.Provider>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
