import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import Home from './Home';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        confirmPassword: ''
    }

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

    onChangeFirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    onChangeLastName(event) {
        this.setState({
            lastName: event.target.value
        })
    }

    onChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    onChangeUserName(event) {
        this.setState({
            userName: event.target.value
        })
    }

    onChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onChangeConfirmPassword(event) {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            userName: this.state.userName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }

        console.log(user)

        axios.post('http://localhost:8000/user/register', user)
            .then (res => console.log(res.data))
            .then (req => window.location = '/Home')

        
    }

  render() {
    return (
          
        <div className="register-container">

            <h2><u>Register</u></h2>

            <form onSubmit={this.onSubmit}>

                <label>First Name:</label>
                <input type="text" required value={this.firstName} onChange={this.onChangeFirstName}/>

                <label>Last Name:</label>
                <input type="text" required value={this.lastName} onChange={this.onChangeLastName}/>

                <label>Email:</label>
                <input type="text" required value={this.email} onChange={this.onChangeEmail}/>

                <label>Username:</label>
                <input type="text" required value={this.userName} onChange={this.onChangeUserName}/>

                <label>Password:</label>
                <input type="password" required value={this.password} onChange={this.onChangePassword}/>

                <label>Confirm Password:</label>
                <input type="password" required value={this.confirmPassword} onChange={this.onChangeConfirmPassword}/>

                <button type="submit">Register</button>
            </form>
            
        </div>
          

    )
  }
}

export default Register;