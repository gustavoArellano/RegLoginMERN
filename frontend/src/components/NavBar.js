import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(
            <div className="NavBar">

                <ul>
                    <Link to="/Home"><li>Display All User Data</li></Link>
                    <Link to="/Links"><li>Display By Links</li></Link>
                    <Link><li>Logout</li></Link>
                </ul>

            </div>
        )
    }
}

export default NavBar;