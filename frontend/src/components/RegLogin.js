import React, { Component } from 'react';
import Login from './Login';
import Register from './Register'


class RegLogin extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(
        
            <div>

                <h1 className="app-title">Welcome to Login & Registration on MERN!</h1>

                <Login />

                <Register />  
            </div>
        )
    }
}

export default RegLogin