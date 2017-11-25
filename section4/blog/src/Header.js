import React, { Component } from 'react';



var mastheadStyle = {
  backgroundImage: "url('img/home-bg.jpg')"
}


export default class Header extends Component {
  render() {
    return (
      <header className="masthead" style={mastheadStyle}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading">A Blog Theme by Start Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
