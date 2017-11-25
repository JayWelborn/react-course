import React, { Component } from 'react';
import PostPreviews from './PostPreview'


var postOne = {
  title: "Man must explore, and this is exploration at its greatest",
  subtitle: "Problems look mighty small from 150 miles up",
  date: "September 24, 2017"
}

var postTwo = {
  title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
  date: "September 18, 2017"
}

var postThree = {
  title: "Science has not yet mastered prophecy",
  subtitle: "We predict too much for the next year and yet far too little for the next ten.",
  date: "August 24, 2017"
}

var postFour = {
  title: "Failure is not an option",
  subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
  date: "July 8, 2017"
}

var posts = [postOne, postTwo, postThree, postFour]


export default class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <PostPreviews posts={posts} />
            <div className="clearfix">
              <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
