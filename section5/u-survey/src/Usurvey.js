import React, { Component } from 'react';


var firebase = require('firebase');
var uuid = require('uuid');
var config = {
  apiKey: "AIzaSyCVCNfO0XcHRWXxkklDSjhhzu4f1xEZjiQ",
  authDomain: "usurvey-9859e.firebaseapp.com",
  databaseURL: "https://usurvey-9859e.firebaseio.com",
  projectId: "usurvey-9859e",
  storageBucket: "usurvey-9859e.appspot.com",
  messagingSenderId: "283216759068"
};
firebase.initializeApp(config);

export default class Usurvey extends Component {

  nameSubmit(event){
    var studentName = this.refs.name.value
    this.setState({studentName: studentName}, function(){
      console.log(this.state)
    })
  }

  constructor(props){
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: 'killerMan',
      answers: {
        answer1: '',
        answer2: '',
        answer3: ''
      },
      isSubmitted: false
    };
    this.nameSubmit = this.nameSubmit.bind(this)
  }

  render() {
    var studentName;
    var questions;

    if(this.state.studentName === '' && this.state.isSubmitted === false){
      studentName = <div>
        <h1>Hey Student, please tell us your name.</h1>
        <form onSubmit={this.nameSubmit}>
          <input className="namy" type="text" placeholder="Enter your name" ref="name"/>
        </form>
      </div>;

      questions = ''
    } else if(this.state.studentName != '' && this.state.isSubmitted === false){
      studentName = <h1>Welcome to U-Survey {this.state.studentName}</h1>;

      questions = <p>
        This is a question
      </p>
    }
    return (
      <div>
        {studentName}
        --------------------------------------------------
        {questions}
      </div>
    );
  }
}
