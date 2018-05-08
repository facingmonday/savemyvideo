import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;