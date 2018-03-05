import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from 'redux-logger'
import HeaderReducer from './reducers/HeaderReducer';
import userReducer from "./reducers/userReducer";

export default () => {
    let store = null;
    let middleware = null;
    
    const myLogger = (state) => (next) => (action) => {
        console.log("Logged Action: ", action);
        next(action);
    };

    var createLogger = require('redux-logger').createLogger;
    const logger = createLogger();

    middleware = applyMiddleware(myLogger, logger);

    store = createStore(
        combineReducers({
            HeaderReducer,
            userReducer
        }),
        { },
        compose(
            middleware,
            window.devToolsExtension ? window.devToolsExtension() : f => f // connect to redux devtools
        )
        
    );

    return store;
}