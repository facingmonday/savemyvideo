import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './app.less';

// Import stylesheets
//import './assets/stylesheets/base.less';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));