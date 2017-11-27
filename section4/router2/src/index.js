import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  Router,
  Route,
  browserHistory
} from 'react-router'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route exact path="/" component={App}/>
    <Route path="/one" component={One}></Route>
    <Route path="/two" component={Two}></Route>
    <Route path="/Three" component={Three}></Route>
    <Route path="/Four" component={Four}></Route>
  </Router>

  , document.getElementById('root'));
registerServiceWorker();
