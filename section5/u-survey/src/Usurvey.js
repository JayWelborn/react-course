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
    var answers = this.state.answers;
    if(event.target.name === 'answer1'){
      answers.answer1 = event.target.value
    } else if(event.target.name === 'answer2'){
      answers.answer2 = event.target.value
    } else if(event.target.name === 'answer3'){
      answers.answer3 = event.target.value
    } else if(event.target.name === 'answer4'){
      answers.answer4 = event.target.value
    } else if(event.target.name === 'answer5'){
      answers.answer5 = event.target.value
    }
    this.setState(answers: answers)
  }

  questionSubmit(event){
    firebase.database().ref('uSurvey/'+this.state.uid).set({
      studentName: this.state.studentName,
      answers: this.state.answers
    });
    this.setState({isSubmitted: true})
  }

  constructor(props){
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: '',
      answers: {
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: ''
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
          <div className="card">
            <label>What is your favorite color? </label>
            <br/>
            <input type="radio" name="answer4" value="Blue" onChange={this.answerSelected}/>Blue
            <input type="radio" name="answer4" value="Red" onChange={this.answerSelected}/>Red
            <input type="radio" name="answer4" value="Yellow" onChange={this.answerSelected}/>Yellow
          </div>
          <div className="card">
            <label>What is your favorite continent? </label>
            <br/>
            <input type="radio" name="answer5" value="Europe" onChange={this.answerSelected}/>Europe
            <input type="radio" name="answer5" value="Asia" onChange={this.answerSelected}/>Asia
            <input type="radio" name="answer5" value="Africa" onChange={this.answerSelected}/>Africa
            <input type="radio" name="answer5" value="North America" onChange={this.answerSelected}/>North America
            <input type="radio" name="answer5" value="South America" onChange={this.answerSelected}/>South America
            <input type="radio" name="answer5" value="Australia" onChange={this.answerSelected}/>Australia
            <input type="radio" name="answer5" value="Antarctica" onChange={this.answerSelected}/>Antarctica
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
