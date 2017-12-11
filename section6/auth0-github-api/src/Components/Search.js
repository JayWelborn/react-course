import React, { Component } from 'react';


export default class Search extends Component {

  submit(event){
    event.preventDefault();
    let username = this.refs.username.value
    this.props.searchProfile(username);
    this.refs.username.value = '';
  }

  render() {
    return (
      <div className="search-box">
      <form onSubmit={this.submit.bind(this)}>
        <label htmlFor="">
          <input type="search" ref="username" placeholder="Search Github User"/>
        </label>
      </form>
      </div>
    );
  }
}
