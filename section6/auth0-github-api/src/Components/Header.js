import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


export default class Header extends Component {

  onLogin(){
    this.props.onLogin();
  }

  onLogout(){
    this.props.onLogout();
  }

  constructor(props){
    super(props);

    this.onLogin = this.onLogin.bind(this)
    this.onLogout = this.onLogout.bind(this)
  }


  render() {

    let button;

    if(this.props.idToken){
      button =
        <NavItem onClick={this.onLogout} href="#">
          Logout
        </NavItem>
    } else {
      button =
        <NavItem onClick={this.onLogin} href="#">
          Login
        </NavItem>
    }

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            GitHub Searcher
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          {button}
        </Nav>
      </Navbar>
    );
  }
}
