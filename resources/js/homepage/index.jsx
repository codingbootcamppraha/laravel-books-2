import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from './Header/Header.jsx';
import BooksListShort from './BooksListShort/BooksListShort.jsx';
import BookOfTheWeek from './BookOfTheWeek/BookOfTheWeek.jsx';
import Login from './Login/Login.jsx';

import './index.scss';

function App() {

    return (
        <Router>
            <>
                <Header />

                <main>

                    <Switch>

                        <Route exact path="/home">
                            <BooksListShort />
                            <BookOfTheWeek />
                        </Route>

                        <Route exact path="/home/login">
                            <Login />
                        </Route>

                    </Switch>

                </main>
            </>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
