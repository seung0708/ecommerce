import React from 'react';
import { connect } from 'react-redux';
import {signup, updateSignupForm} from '../actions/userActions'

const Signup = ({signupFormData, updateSignupForm, signup}) => {

    const handleInputChange = event => {
        const {name, value} = event.target 
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault();
        signup(signupFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>UserName:</label><br />
            <input  id="email" value={signupFormData.username} name="username" type="text" onChange={handleInputChange} />
            <label>Email:</label><br />
            <input value={signupFormData.email} name="email" type="text" onChange={handleInputChange}/>
            <label>Password:</label><br />
            <input value={signupFormData.password} name="password" type="password" onChange={handleInputChange}/>
            <label>Password Confirmation:</label><br />
            <input value={signupFormData.password_confirmation} name="password" type="password" onChange={handleInputChange}/>
            <br />
            <input type="submit" value="Sign Up"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, {updateSignupForm, signup})(Signup)