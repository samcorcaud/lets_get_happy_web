import React, { Component } from 'react';
import './App.css';

export class Login extends Component {

    render() {

        return (
            <div className="login-page">
            <div className="form">
            <form className="login-form">
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>login</button>
            <p className="message">Not registered? <button onClick={this.props.showSignIn}>Create an account</button></p>
        </form>
        </div>
        </div>
    );
    }
}