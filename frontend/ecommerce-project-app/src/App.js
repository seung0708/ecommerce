import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Navbar from './Navbar';
import CartContainer from './containers/CartContainer'
import ProductListContainer from './containers/ProductListContainer'
//import { allProducts } from './actions/productsAction'

class App extends React.Component{

  componentDidMount() {
    //this.props.allProducts()
  }
  render(){
    return (
      <div className="container">
        <Router>
          <Switch>
            <Navbar>  </Navbar>
            <Route exact path='/' component={Home} ></Route>
            <Route exact path='/about' component={About} ></Route>
            <Route exact path='/cart' component={CartContainer} ></Route>
            <Route exact path='/products' component={ProductListContainer} ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App 