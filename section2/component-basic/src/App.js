import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.yourName = "Jay";
    this.state = {};
  }

  sayhello(name) {
    return "Hello " + name;
  }

  render() {
    const myName = "Jay"
    return (
      <div className="App">
        <h2>Just some sample data: {this.sayhello(this.yourName)}</h2>
      </div>
    );
  }
}

export default App;
