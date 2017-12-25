import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import App from './components/App';

const routes = (
  <Router>
    <Route path="/" component={App} />
  </Router>
);

module.exports = routes;
