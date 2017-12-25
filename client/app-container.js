// import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './store/configure-store';
import {browserHistory, Router} from "react-router";
import routes from "./routes";
// require('./assets/scss/_color.scss');
// require('./assets/scss/_font.scss');
require('./assets/scss/style.scss');

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
      <Router routes={routes}
                history={browserHistory}/>
    </Provider>,
    document.getElementById('root')
);
