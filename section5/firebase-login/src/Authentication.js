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
  render() {
    return (
      <div>
        <input id="email" ref="email" type="email" placeholder="Enter your email"/>
        <input id="password" ref="password" type="password" placeholder="Enter your password"/>
        <br/>
      </div>
    );
  }
}
