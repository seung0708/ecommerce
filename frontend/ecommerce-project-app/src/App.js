import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Navbar from './Navbar';

class App extends React.Component{
  render(){
    return (
      <div className="container">
        <Router>
          <Switch>
            <Navbar>  </Navbar>
            <Route exact path='/' component={Home} ></Route>
            <Route exact path='/about' component={About} ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App