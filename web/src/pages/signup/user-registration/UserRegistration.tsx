import React from 'react';
import  { Link } from 'react-router-dom';

export default class UserRegistration extends React.Component {
    render() {
        return <div>
            Sign up or <Link to="/">Login</Link>
            </div>
    }
}