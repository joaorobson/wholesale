import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './login';
import Categories from './categories';

function Routes() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Login} />
      <Route path="/categories" component={Categories} />
    </div>
    </Router>
  );
}

export default Routes;
