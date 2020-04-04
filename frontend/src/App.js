import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Router>

        <div className="App">

          <h1 className="app-title">Welcome to Login & Registration on MERN!</h1>

          <Login />

          <Register />    
          
          <Router path="/" exact component = {App} />
          <Route path="/Home" exact component = {Home} />

        </div>

      </Router>
    )
  }
}

export default App;
