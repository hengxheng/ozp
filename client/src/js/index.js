import '../css/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import configureStore from './store';
import App from './containers/app';

const store = configureStore();

ReactDOM.render((
    <Provider store={ store }>
        <HashRouter>
            <App>
                <div>React is here</div>
            </App>
        </HashRouter>
    </Provider>
), document.getElementById('root')); 