import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Another Cool React App!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
