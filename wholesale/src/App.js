import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './login'
import Categories from './categories'
import Product from './new_product'

function Routes() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Login} />
      <Route path="/categories" component={Categories} />
      <Route path="/product_1" component={Product} />
    </div>
    </Router>
  );
}

export default Routes;
