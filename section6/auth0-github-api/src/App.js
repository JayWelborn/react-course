import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Components/Header'
import Github from './Github'
import Auth0Lock from 'auth0-lock'


class App extends Component {

  constructor(props){
      super(props);

      this.state = {
        idToken: '',
        profile: {}
      };
  }



  static defaultProps = {
    clientID: '1H3pe13ArFtLR56kXTECdL1j5va2gy3f',
    domain: 'jaywelborn.auth0.com'
  }

  // handle Auth0Lock to allow users to log into app
  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

    // Authenticate user
    this.lock.on('authenticated', (authResult) => {
      // console.log(authResult)

      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if(error){
          console.log(error);
          return;
        }
        // console.log(profile);

        this.setProfile(authResult.idToken, profile);

      });
    });

    // Get profile if user is already authenticated
    this.getProfile();
  }

  // set auth0 profile info in local storage upon successful login
  setProfile(idToken, profile){
    localStorage.setItem('idToken', idToken)
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  // get Profile info from Local Storage if it's there
  getProfile(){
    if(localStorage.getItem('idToken') != null){
      this.setState({
        idToken: localStorage.getItem('idToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        console.log(this.state)
      });
    }
  }

  showLock(){
    this.lock.show();
  }

  logout(){
    this.setState({
      idToken: '',
      profile: ''
    }, () => {
      localStorage.removeItem('idToken')
      localStorage.removeItem('profile')
    });
  }

  render() {

    let page;

    if (this.state.idToken){
      page = <Github />
    } else {
      page = 'Click on Login to view GitHub Viewer'
    }

    return (
      <div className="App">
        <Header
          lock={this.lock}
          idToken={this.state.idToken}
          profile={this.state.profile}
          onLogin={this.showLock.bind(this)}
          onLogout={this.logout.bind(this)}
        />
        {page}
      </div>
    );
  }
}

export default App;
