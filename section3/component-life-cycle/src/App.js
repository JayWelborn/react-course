import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Components Life Cycle</h1>
        </header>
        <Body />
      </div>
    );
  }
}


export class Body extends Component {
  constructor(props){
    super(props);

    this.state={
      randomNumber: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this)
  }

  getRandomNumber(){
    //console.log("random number called")
    this.setState({randomNumber: Math.floor(Math.random() * 11)})
  }

  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={ this.getRandomNumber }>
          Random Number
        </button>
        <Numbers myNumber={this.state.randomNumber} />
      </div>
    );
  }
}


export class Numbers extends Component {
  render() {
    return (
      <div>
        <br/>
        {this.props.myNumber}
      </div>
    );
  }
}


export default App;
