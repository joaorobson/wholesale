import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './login'
import Categories from './components/CategoriesPage'
import Product from './components/Product'
import NewProduct from './components/NewProduct'
import Register from './components/Register'
import RegisterSuccess from './components/RegisterSuccess'
import Checkout from './components/Checkout';
import Buy from './components/SuccessBuy';

function Routes() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/categories" component={Categories} />
        <Route path="/product_1" component={Product} />
        <Route path="/new_product" component={NewProduct} />
        <Route path="/register" component={Register} />
        <Route path="/registerSuccess" component={RegisterSuccess} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/buy" component={Buy} />
      </div>
    </Router>
  );
}

export default Routes;
