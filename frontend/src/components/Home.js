import React, { Component } from 'react';
import axios from 'axios';

const User = props => (
    <tr className="user-row">
        <td className="user-data">{ props.user.firstName }</td>
        <td className="user-data">{ props.user.lastName }</td>
        <td className="user-data">{ props.user.email }</td>
        <td className="user-data">{ props.user.userName }</td>
    </tr>
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
            return <User user={ user }/>
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