import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm} from "../actions/signUpForm"
import {signup} from '../actions/currentUser'


const Signup = ({ signupForm, updateSignupForm, signup}) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupForm,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupForm)
  }
  
  return (
    <div>
    
    <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" value={signupForm.email} onChange={handleInputChange} type="text" />
        <br />
        <label>Password</label>
        <input name="password" value={signupForm.password} onChange={handleInputChange} type="password" />
        <br />
        <button type="submit">Login</button>
    </form>
  </div>
  )
    

}

const mapStateToProps = state => {
  return {
    signupForm: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignUpForm, signup } )(Signup)