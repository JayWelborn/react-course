import React, { Component } from 'react';
import ajax from 'superagent';


// https://www.reddit.com/r/space.json

export default class Apicall extends Component {

  componentWillMount() {
    this.getReddit();
  }

  getReddit(){
    ajax.get(`https://www.reddit.com/r/${this.state.subreddit}.json`)
    .then(res => {

      // get array of child posts from reddit's json response
      const posts = res.body.data.children.map(obj => obj.data);
      this.setState({posts});
    });
  }

  constructor(props){
      super(props);

      this.state = {
        posts: [],
        subreddit: 'space'
      };
      this.getReddit = this.getReddit.bind(this)
  };


  render() {
    return (
      <div>
        <h1>{`/r/${this.state.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}
