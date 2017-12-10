import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


export default class Header extends Component {

  onLogin(){
    this.props.onLogin();
  }

  constructor(props){
    super(props);

    this.state = {

    }

    this.onLogin = this.onLogin.bind(this)
  }


  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            GitHub Searcher
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <NavItem onClick={this.onLogin} href="#">
            Login
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
