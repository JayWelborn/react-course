import React, { Component } from 'react';

var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyBgikz9onMpbOo3RcjxWPM5hRkN_yEAp4Y",
  authDomain: "ulogin-d1c8c.firebaseapp.com",
  databaseURL: "https://ulogin-d1c8c.firebaseio.com",
  projectId: "ulogin-d1c8c",
  storageBucket: "ulogin-d1c8c.appspot.com",
  messagingSenderId: "8171981320"
};
firebase.initializeApp(config);


export default class Authentication extends Component {

  login(event){
    const email = this.refs.email.value
    const password = this.refs.password.value
    console.log(email, password)

    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => {
      var error = e.message;
      this.setState({error: error})
    })
  }

  constructor(props){
    super(props);

    this.state = {
      error: ''
    };

    this.login = this.login.bind(this);
  }

  render() {
    return (
      <div>
        <input id="email" ref="email" type="email" placeholder="Enter your email"/>
        <br/>
        <input id="password" ref="password" type="password" placeholder="Enter your password"/>
        <br/>
        <Error error={this.state.error}/>
        <button onClick={this.login}>Log In</button>
        <button>Sign Up</button>
        <button>Log Out</button>
      </div>
    );
  }
}


class Error extends Component {
  render(){
    if (this.props.error){
      return(
        <p className="error">
          {this.props.error}
        </p>
      );
    } else {
      return(<br/>)
    }
  }
}
