import React, { Component } from 'react';


export default class Profile extends Component {

  render() {

    let userData = this.props.userData;

    let followers = `${userData.homeURL}/followers`;
    let following = `${userData.homeURL}/following`;
    let repos = `${userData.homeURL}/repositories`;

    if(userData.notFound === 'Not Found'){
      return (
        <div className="notfound">
          <h2>Unfortunately...</h2>
          <p>Are you sure that is a github user?</p>
        </div>
      );
    }


    else {
      return(
        <section className="github-profile">
          <div className="github-profile-info">
            <a href={userData.homeURL} title={userData.name || userData.username} target="_blank">
              <img src={userData.avatar} alt={userData.name}/>
            </a>
            <h2><a href={userData.homeURL} title={userData.username}>{userData.name || userData.username}</a></h2>
            <h3>{userData.location}</h3>
          </div>
          <div className="github-profile-state">
            <ul>
              <li>
                Followers: <a href={followers} target="_blank" title="Number of Followers">{userData.followers}</a>
              </li>
              <li>
                Repositories: <a href={repos} target="_blank" title="Number of Repositories">{userData.repos}</a>
              </li>
              <li>
                Following: <a href={following} target="_blank" title="Number Following">{userData.following}</a>
              </li>
            </ul>
          </div>
        </section>
      )
    }
  }
}
