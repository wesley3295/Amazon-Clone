import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import Login from './components/Login'
import {useEffect} from 'react'
import {db,auth} from './firebase'
import {useStateValue} from "./StateProvider"
function App() {
  const[{},dispatch]=useStateValue();
  useEffect(()=>{
auth.onAuthStateChanged(authUser=>{
  console.log('THE USER IS >>>',authUser)

  if(authUser){
    dispatch({
      type:'SET_USER',
      user:authUser
    })
  }else{
dispatch({
  type:'SET_USER',
  user:null
})
  }
})
  },[])
  return (
    <Router>
      {/* //BEM convention */}
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
          <Header />
            <Checkout/>
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
