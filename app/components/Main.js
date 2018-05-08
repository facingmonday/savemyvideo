import React, { Component } from 'react';
import Homepage from './Homepage';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
class Main extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Homepage} />
            </div>
        );
    }
}

export default Main;