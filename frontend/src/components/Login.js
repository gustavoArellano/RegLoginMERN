import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: ''
    }

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }


    onChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    onChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password,
        }

        console.log(user)

        axios.post('http://localhost:8000/user/login', user)
            .then (res => console.log(res.data))
            .then (req => window.location = '/Home')
    }

  render() {
    return (

        <div className="login-container">

            <h2><u>Login</u></h2> 
        
            <form onSubmit={this.onSubmit}>

                <label>Email:</label>
                <input type="text" required value={this.email} onChange={this.onChangeEmail}/>

                <label>Password:</label>
                <input type="password" required value={this.password} onChange={this.onChangePassword}/>

                <button type="submit">Register</button>
                
            </form>

        </div>
          

    )
  }
}

export default Login;