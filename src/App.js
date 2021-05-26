import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import Login from './components/Login'
import Payment from './components/Payment'
import Orders from './components/Orders'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from "./StateProvider"
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
const promise = loadStripe('pk_test_51IvSdlB1aSCLZnTVD79Ec89EaMSsstMGbZrAEFQhQ3hbcsJoUp9CkPSweSsBQTQaU57pl8R3JDYyfx4a1oJrtrZJ00yd2E1hHD')
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      {/* //BEM convention */}
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
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
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
