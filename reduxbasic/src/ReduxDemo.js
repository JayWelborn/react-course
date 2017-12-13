import React, { Component } from 'react';
import {createStore} from 'redux';


export default class ReduxDemo extends Component {
  render() {

    const reducer = function(state, action){
      if(action.type === "ATTACK"){
        return action.payload
      } else if (action.type === "GREEN ATTACK"){
        return action.payload
      }
      return state;
    };

    const store = createStore(reducer, "Peace");

    store.subscribe(() => {
      console.log("Store is now", store.getState());
    })

    store.dispatch({
      type: "ATTACK",
      payload: "Iron Man"
    })

    store.dispatch({
      type: "GREEN ATTACK",
      payload: "Hulk",
    })

    return (
      <div>
        test from redux demo
      </div>
    );
  }
}
