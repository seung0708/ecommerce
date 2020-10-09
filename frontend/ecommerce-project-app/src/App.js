import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './containers/Home'
import About from './About'
import Navbar from './Navbar';
import ProductListContainer from './containers/ProductListContainer'
import Cart from './components/Cart'
class App extends React.Component{


  render(){
    return (
      <div className="container">
        <Router>
          <header>
            <Navbar/>
          </header>
          <Switch>
         
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/products' component={ProductListContainer}/>
            <Route exact path='/cart' component={Cart} />
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App