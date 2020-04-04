import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: ''
    }
  }

  render() {
    return (

        <div className="login-container">

        <h2><u>Login</u></h2> 
        
        <form >

            <label>Username:</label>
            <input type="text" required value={this.email} onChange={this.onChangeEmail}/>

            <label>Password:</label>
            <input type="text" required value={this.password} onChange={this.onChangePassword}/>

            <button type="submit">Submit</button>

        </form>

        </div>
          

    )
  }
}

export default Login;