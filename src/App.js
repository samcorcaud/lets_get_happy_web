import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './Login';
import {SignIn} from './SignIn';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {currentPage: "Login"}; // et

        this.showLogin = this.showLogin.bind(this);
        this.showSignIn = this.showSignIn.bind(this);
    }
    showLogin(){
        this.setState({
            currentPage: "Login"
        })
    }

    showSignIn(){
        this.setState({
            currentPage: "Sign In"
        })
    }

    render() {
        console.log(this.state)
        if(this.state.currentPage === "Login") {
            return (
                <div className="App">
                <Login showSignIn={this.showSignIn}/>
            </div>
        );
        }
        else if(this.state.currentPage === "Sign In"){
            return (
                <div className="App">
                <SignIn showLogin={this.showLogin}/>
            </div>
        );
        }
    }
}

export default App;
