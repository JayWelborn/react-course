import React, { Component } from 'react';
import Course from './Course'


export default class Coursesales extends Component {

  sumPrice(price){
    this.setState({total: this.state.total + price});
  }

  constructor(props){
    super(props);

    this.state = {
      total: 0
    }
    this.sumPrice = this.sumPrice.bind(this);
  }

  render() {
    var courses = this.props.items.map((item, i) => {
      return <Course name={item.name} price={item.price}
        key={i} sumPrice={this.sumPrice} active={item.active}
      />
    });
    return (
      <div>
        <h3>You can buy courses:</h3>
        <div id="courses">
          {courses}
        </div>
        <p id="total">Total: <strong>${this.state.total}</strong></p>
      </div>
    )
  }
}

