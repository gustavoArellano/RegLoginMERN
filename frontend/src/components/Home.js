import React, { Component } from 'react';
import axios from 'axios';

const User = props => (
    <div className="user-row">
        <p className="user-data">
            { props.user.firstName 
            + " | " + 
            props.user.lastName 
            + " | " + 
            props.user.email 
            + " | " + 
            props.user.userName } 
        </p>

    </div>
)
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
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

    usersList() {
        return this.state.users.map(user => { 
            return <User user={ user } key={ user._id } />
        })
    }

    render() {
        return (
            <div>
                <h1>I am Home.</h1>

                <h4>Users Signed up below: </h4>

                <div className="user-list">
                    { this.usersList() }
                </div>

            </div>
        )
    }
}

export default Home;