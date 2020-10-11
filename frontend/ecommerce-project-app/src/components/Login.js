import React from 'react';
import { connect } from 'react-redux'
import { login } from "../actions/currentUser"
import {Link} from 'react-router-dom'
import { updateLoginForm} from '../actions/loginForm'

const Login = ({loginFormData, updateLoginForm, login, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData, history)
  }
    return (
      <div>
        <p>Got anything nostalgic you would like to sell? Create an account and become a member! <Link to='/signup'>here</Link></p>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input name="email" value={loginFormData.email} onChange={handleInputChange} type="text" />
            <br />
            <label>Password</label>
            <input name="password" value={loginFormData.password} onChange={handleInputChange} type="password" />
            <br />
            <button type="submit">Login</button>
        </form>
      </div>
    );
  
}

const mapStateToProps = state => {
  return {
   loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);