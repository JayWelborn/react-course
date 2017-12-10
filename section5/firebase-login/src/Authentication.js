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

    promise.then(user => {
      let logout = document.getElementById('logout')
      logout.classList.remove('hide');
      this.setState({success: 'Successfully Logged In'})
    });

    promise.catch(e => {
      let error = e.message;
      this.setState({error: error})
    });
  }

  signup(event){
    const email = this.refs.email.value
    const password = this.refs.password.value
    console.log(email, password)

    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password)

    // Upon success, create new account
    promise.then(user => {
      console.log(user);
      var success = "Welcome " + user.email;
      firebase.database().ref('/users/' + user.uid).set({
        email: user.email
      });

      this.setState({success: success})
    });

    // Upon error, show error in message section
    promise.catch(e => {
      let error = e.message
      console.log(error)
      this.setState({error: error})
    });
  }

  logout(event) {
    firebase.auth().signOut();
    let logout = document.getElementById('logout')
    logout.classList.add('hide');

    this.setState({success: 'Successfully Logged Out'})
  }

  google(event) {
    console.log("I am in google method")

    let provider = new firebase.auth.GoogleAuthProvider();
    let promise = firebase.auth().signInWithPopup(provider);

    promise.then(result => {
      let user = result.user
      console.log(user)
      firebase.database().ref('users/' + user.uid).set({
        email: user.email,
        name: user.displayName
      })

      let success = 'Welcome ' + user.displayName

      let logout = document.getElementById('logout')
      logout.classList.remove('hide');
      this.setState({success: success})
    });

    promise.catch(e => {
      let error = e.message;
      console.log(error)
      this.setState({error: error})
    });
  }

  constructor(props){
    super(props);

    this.state = {
      error: '',
      success: ''
    };

    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.google = this.google.bind(this);
  }

  render() {
    return (
      <div>
        <input id="email" ref="email" type="email" placeholder="Enter your email"/>
        <br/>
        <input id="password" ref="password" type="password" placeholder="Enter your password"/>
        <br/>
        <Message error={this.state.error} success={this.state.success}/>
        <button onClick={this.login}>Log In</button>
        <button onClick={this.signup}>Sign Up</button>
        <button onClick={this.logout} id="logout" className="hide">Log Out</button>
        <br/>
        <button onClick={this.google} id="google" >Sign In With Google</button>
      </div>
    );
  }
}


class Message extends Component {
  render(){
    if (this.props.error){
      return(
        <p className="error">
          {this.props.error}
        </p>
      );
    } else if (this.props.success) {
      return(
        <p className="success">
          {this.props.success}
        </p>
      );
    } else{
      return(
        <br/>
      );
    }
  }
}
