import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { Jumbotron } from 'reactstrap';
import './card.css';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decode = jwt_decode(token)
        this.setState({
            first_name: decode.first_name,
            last_name: decode.last_name,
            email: decode.email
        })
    }

    render() {
        return (
            <div>
                <Jumbotron className="profileJumbotron">

                    <div className="userCard">
                        <img src="https://via.placeholder.com/150" className="card-img-top" id="profileImage" alt="profile" />
                        <div className="card-body">
                            <h5 className="card-title">PROFILE</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Name:  {this.state.first_name} {this.state.last_name}</li>
                            <li className="list-group-item email">Email:  {this.state.email}</li>
                        </ul>
                    </div>

                </Jumbotron>
            </div>
        )
    }
}

export default Profile;