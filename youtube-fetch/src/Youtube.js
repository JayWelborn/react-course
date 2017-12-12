import React, { Component } from 'react';
import Keys from './Keys'

const YOUTUBE_API_KEY = Keys.youtube_api;
const channelId = Keys.youtube_channel;
const result = 10;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`

export default class Youtube extends Component {

  constructor(props){
    super(props);

    this.state = {
      result: [],
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked(){
    fetch(finalURL)
    .then(response => response.json())
    .then(responseJson => {
      let result = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
      this.setState({result})
    })
    .catch(error => {
      console.error(error);
    });
  }

  render() {
    console.log(this.state.result)
    return (
      <div>
        <button onClick={this.clicked}>Get YouTube Videos</button>
        {
          this.state.result.map((link, i) => {
            console.log(link)
            var frame =
              <div key={i} className="youtube">
                <iframe key={i} width="560" height="315" src={link} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
              </div>
            return frame
          })
        }
        {this.frame}
      </div>
    );
  }
}
