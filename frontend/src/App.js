import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import RegLogin from './components/RegLogin';
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

            <Route path="/" exact component = {RegLogin} />

            <Route path="/Home" component = {Home} />

        </div>

      </Router>
    )
  }
}

export default App;
