import React, { Component } from 'react';
import NavBar from './NavBar';


class Links extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(

            <div>
                <NavBar />
                I will display links!
            </div>

            )
    }
}

export default Links;