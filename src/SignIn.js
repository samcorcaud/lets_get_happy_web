import React, { Component } from 'react';
import './App.css';

export class SignIn extends Component {
    render() {
        return (
            <div className="login-page">
            <div className="form">
            <form className="register-form">
            <input type="text" placeholder="Name"/>
            <input type="password" placeholder="Password"/>
            <input type="text" placeholder="Email address"/>
            <button>create</button>
            <p className="message">Already registered? <button onClick={this.props.showLogin}>Login</button></p>
        </form>
        </div>
        </div>
    );
    }
}