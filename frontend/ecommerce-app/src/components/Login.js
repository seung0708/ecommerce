import React from 'react';
import {connect} from 'react-redux';
import {updateLoginForm, login} from '../actions/userActions'

const Login = ({loginFormData, updateLoginForm, login}) => {
    const handleInputChange = event => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...loginFormData, 
            [name]: value
        }
        updateLoginForm(updatedFormInfo);
    }

    const handleSubmit = event => {
        event.preventDefault();

        login(loginFormData);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>UserName:</label>
            <input value={loginFormData.username.value} name="username" type="text" onChange={handleInputChange} />
            <label>Password:</label>
            <input value={loginFormData.password.value} name="password" type="password" onChange={handleInputChange}/>
            <input type="submit" value="Login"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login)