import React, { Component } from 'react';
import Home from './components/Home'
import Navbar from './components/NavBar'
import Cart from './containers/Cart'
import PageNotFound from './components/PageNotFound'
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import {getCurrentUser} from './actions/userActions'
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }  

  render() {
    //const {loggedIn} = this.props
    return(
         <div>
          <Navbar/>
          <Switch>
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/signup' component={Signup}/>var
            <Route exact path='/login' component={Login}/>
            <Route exact path='/not-found' component={PageNotFound} />
            <Route exact path='/' component={Home} /> 
            <Redirect to='/not-found' />
          </Switch>
          </div>
          
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  }
}



export default  connect(mapStateToProps, {getCurrentUser})(App)
