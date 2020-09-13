import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Product from "./Product";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Slider from "./Slider";
import { Helmet } from "react-helmet";

const promise = loadStripe(
  "pk_test_51HPwIwKI8D1taRH0gbDgcVjPRKj4DoBe7QdgEu5dRXtP2t35AEbaNXeuESdzH6FSsSqbd2yN99aUuIvqvv2OQBwA00R0UahbTp"
);

function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The authentication changed is >>>> ", authUser);

      if (authUser) {
        //the user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Amazon Clone - Sanvil Apps</title>
        </Helmet>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Slider />

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
