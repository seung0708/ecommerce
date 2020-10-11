import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from "../actions/userActions"

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
            type="text"
          />
          <br />
          <label>Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange}
            type="password"
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { login })(Login);