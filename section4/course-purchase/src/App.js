import React, { Component } from 'react';
import logo from './logo.svg';
import Coursesales from './Coursesales'
import './App.css';

class App extends Component {
  render() {
    var courses = [
      {name: 'Complete iOS10 dev course', price: 199},
      {name: 'Complete pentesting course', price: 299},
      {name: 'Complete front end dev course', price: 180},
      {name: 'Complete But Bounty and web app pentesting', price: 190},
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Welcome to Course Purchase Page</h2>
        </header>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
