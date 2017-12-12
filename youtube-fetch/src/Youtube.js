import React, { Component } from 'react';
import Keys from './Keys'

const YOUTUBE_API_KEY = Keys.youtube_api;
const channelID = Keys.youtube_channel;


export default class Youtube extends Component {
  render() {
    return (
      <div>
        <button>Get YouTube Videos</button>
        <div className="youtube">

          <iframe width="560" height="315" src="https://www.youtube.com/embed/85VCxpO7E2A"
            frameBorder="0" gesture="media" allow="encrypted-media"
            allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}
