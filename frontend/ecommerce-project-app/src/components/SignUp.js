import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm} from "../actions/signUpForm"
import {signup} from '../actions/currentUser'

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }
  
  return (
    <form onSubmit={handleSubmit}>
    <label>Email</label>
    <input name="email" value={signupFormData.email} onChange={handleInputChange} type="text" />
    <br />
    <label>Password</label>
    <input name="password" value={signupFormData.password} onChange={handleInputChange} type="password" />
    <br />
    <button type="submit">Sign Up</button>
</form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignUpForm, signup } )(Signup)