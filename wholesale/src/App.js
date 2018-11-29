import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './login'
import Categories from './components/CategoriesPage'
import Product from './components/NewProduct'
import Register from './components/Register'
import RegisterSuccess from './components/RegisterSuccess'

function Routes() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/categories" component={Categories} />
        <Route path="/product_1" component={Product} />
        <Route path="/register" component={Register} />
        <Route path="/registerSuccess" component={RegisterSuccess} />
      </div>
    </Router>
  );
}

export default Routes;
