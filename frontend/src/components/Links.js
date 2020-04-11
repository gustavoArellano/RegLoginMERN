import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';

const UserFirstLastName = props => (
    <div className="user-row">
        <p className="user-data">
            <a href="#">{ props.user.firstName  + " " + props.user.lastName } </a>
        </p>

    </div>
)

class Links extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/user/users')
        .then( response => {
            this.setState({ users: response.data})
        })
        .catch( (error) => {
            console.log(error)
        })
    }

    usersFirstLastNameList() {
        return this.state.users.map(user => { 
            return <UserFirstLastName user={ user } key={ user._id } />
        })
    }

    render() {
        return(

            <div>

                <NavBar />
                
                <h1>Display By Links</h1>

                <h4>Click on a user to show data!</h4>

                <p>{ this.usersFirstLastNameList() }</p>

            </div>

            )
    }
}

export default Links;