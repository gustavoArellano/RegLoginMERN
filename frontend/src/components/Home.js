import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>I am Home.</h1>
            </div>
        )
    }
}

export default Home;