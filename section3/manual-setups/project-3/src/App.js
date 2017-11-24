import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export class App extends Component {
  render() {
    return (
      <div>
        <h2>Third Cool React App from scratch-ish!</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
