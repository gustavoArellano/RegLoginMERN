import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="App">

        <h1 className="app-title">Welcome to Login & Registration on MERN!</h1>

        <div className="login-container">

          <h2><u>Login</u></h2> 
          
          <form>

            <label>Username:</label>
            <input className="form-control" type="text" required />

            <label>Password:</label>
            <input className="form-control" type="text" required />

          </form>


        </div>
        
        <div className="register-container">

          <h2><u>Register</u></h2>

          <form>

            <label>First Name:</label>
            <input className="form-control" type="text" required />

            <label>Last Name:</label>
            <input className="form-control" type="text" required />

            <label>Email:</label>
            <input className="form-control" type="text" required />

            <label>Username:</label>
            <input className="form-control" type="text" required />

            <label>Password:</label>
            <input className="form-control" type="text" required />

            <label>Confirm Password:</label>
            <input className="form-control" type="text" required />

          </form>

        </div>


      </div>
    )
  }
}

export default App;
