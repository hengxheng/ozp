import '../css/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './routes';

import configureStore from './store';
import App from './containers/app';

const store = configureStore();

ReactDOM.render((
    <Provider store={ store }>
        <BrowserRouter>
            { renderRoutes(routes) }
        </BrowserRouter>
    </Provider>
), document.getElementById('root')); 