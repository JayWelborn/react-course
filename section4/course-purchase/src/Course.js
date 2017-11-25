import React, { Component } from 'react';


export default class Course extends Component {

  clicker(){
    let active = !this.state.active;
    this.setState({active: active})
    this.props.sumPrice(active ? this.props.price : -this.props.price)
  }

  constructor(props){
    super(props);

    this.state = {
      active: false
    }
    this.clicker = this.clicker.bind(this)
  }
  render() {
    return (
      <div>
        <p className={this.state.active ? 'active' : ''} onClick={this.clicker}>{this.props.name} <strong>${this.props.price}</strong></p>
      </div>
    );
  }
}
