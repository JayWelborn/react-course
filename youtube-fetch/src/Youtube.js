import React, { Component } from 'react';
import Keys from './Keys'

const YOUTUBE_API_KEY = Keys.youtube_api;
const channelId = Keys.youtube_channel;


export default class Youtube extends Component {

  constructor(props){
    super(props);

    this.state = {
      result: [],
      maxResults: 10
    };

    this.getVideos = this.getVideos.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  getVideos(results = this.state.maxResults){
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${results}`)
    .then(response => response.json())
    .then(responseJson => {
      let result = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
      this.setState({result})
    })
    .catch(error => {
      console.error(error);
    });
  }

  handleChange(event){
    this.setState({maxResults: event.target.value})
    this.getVideos(event.target.value)
  }

  componentDidMount() {
    this.getVideos()
  }

  render() {
    console.log(this.state.result)
    return (
      <div>

        <input type="number" value={this.state.maxResults} onChange={this.handleChange} min="1" max="20" step="1"/>

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
