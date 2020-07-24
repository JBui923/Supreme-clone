import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import { fetchProducts } from "./actions/productActions";
import { fetchSizes } from "./actions/sizeActions";
import { loadCart } from "./actions/cartActions";

import MainPage from './components/MainPage';
import Shop from './components/Shop';
import ViewAll from './components/ViewAll';
import Login from './components/Login';
import Signup from './components/Signup';
import News from './components/News';
import About from './components/About';
import Stores from './components/Stores';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Faq from './components/Faq';
import Checkout from './components/Checkout';
import Profile from './components/Profile';


const App = props => {
  // useEffect(() => {
  //     props.loadToken();
  // });

  useEffect(() => {
      props.loadCart();
  });

  useEffect(() => {
      (async () => {
          await props.fetchProducts();
      })();
  });

  useEffect(() => {
    (async () => {
        await props.fetchSizes();
    })();
  });

  // useEffect(() => {
  //     window.scrollTo(0, 0)
  // }, [])

  return (
      <BrowserRouter>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={MainPage} />
          <Route path="/shop" component={Shop} />
          <Route path="/all" component={ViewAll} />
          <Route path="/signup" component={Signup} />
          <Route path="/news" component={News} />
          <Route path="/about" component={About} />
          <Route path="/stores" component={Stores} />
          <Route path="/product/:productId" component={ProductPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/category/:categoryId" component={ProductList} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/faq" component={Faq} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/profile" component={Profile} />
      </BrowserRouter>
  );

}

const mapDispatchToProps = dispatch => {
  return {
      // loadToken: () => dispatch(loadToken()),
      loadCart: () => dispatch(loadCart()),
      fetchProducts: () => dispatch(fetchProducts()),
      fetchSizes: () => dispatch(fetchSizes())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(
  App
);

