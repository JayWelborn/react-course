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

  answerSelected(event){
    console.log(event.target.value)
  }

  questionSubmit(event){
    console.log("submitted")
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
    this.answerSelected = this.answerSelected.bind(this)
    this.questionSubmit = this.questionSubmit.bind(this)
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
    } else if(this.state.studentName !== '' && this.state.isSubmitted === false){
      studentName = <h1>Welcome to U-Survey {this.state.studentName}</h1>;

      questions = <div>
        <h2>Here are some questions:</h2>
        <form onSubmit={this.questionSubmit}>
          <div className="card">
            <label>What kind of courses do you like?</label>
            <br/>
            <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected}/>Technology
            <input type="radio" name="answer1" value="Design" onChange={this.answerSelected}/>Design
            <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected}/>Marketing
          </div>
          <div className="card">
            <label>You are a: </label>
            <br/>
            <input type="radio" name="answer2" value="Student" onChange={this.answerSelected}/>Student
            <input type="radio" name="answer2" value="in-job" onChange={this.answerSelected}/>in-job
            <input type="radio" name="answer2" value="looking-job" onChange={this.answerSelected}/>looking-job
          </div>
          <div className="card">
            <label>Is online learning helpful? </label>
            <br/>
            <input type="radio" name="answer3" value="yes" onChange={this.answerSelected}/>yes
            <input type="radio" name="answer3" value="no" onChange={this.answerSelected}/>no
            <input type="radio" name="answer3" value="maybe" onChange={this.answerSelected}/>maybe
          </div>
          <input className="feedback-button" type="submit" value="Submit"/>
        </form>
      </div>
    } else if(this.state.studentname !== '' && this.state.isSubmitted === true){
      studentName = <h1>Thanks, {this.state.studentName}</h1>
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
