import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import { Redirect,Switch, Route } from 'react-router-dom';
import Product from './component/Product';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Signup from './component/Signup';
import { useEffect, useState } from "react";

function App() {
  const [loginActive, setLoginActive] = useState(true);
  const [signupActive, setSignActive] = useState(true);
  return (
    <div className="wrapper">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Login active ={loginActive} setActive ={setLoginActive}/>
        <Signup active ={signupActive} setActive ={setSignActive}/>
        <Redirect to="/" />
      </Switch>
      
    </div>
  );
}

export default App;
