import React, { Component } from 'react'
import './App.css';
import Search from './components/search/Search';
import Artist from './components/artist/Artist';
import Tracks from './components/tracks/Tracks'

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';
class App extends Component {
  state = { artist: null, tracks: [] };

  componentDidMount()
  {
    this.searchArtist('pentatonix');
  }
  searchArtist = artistQuery =>
  { 
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
    .then(response => response.json())
    .then(json =>
      {
        if(json.artists.total>0)
        {
          const artist = json.artists.items[0];
          this.setState({artist});
          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
          .then(response => response.json())
          .then(json => this.setState({ tracks: json.tracks}))
          .catch(error => alert(error.message));
        }
      } )
      .catch(error => alert(error.message));
  }
    render()
    {
        return(
             <div className="app">
               <h1>Music Master</h1>
               <Search searchArtist={this.searchArtist} />
               <Artist artist={this.state.artist} />
               <Tracks tracks={this.state.tracks} />
            </div>
    )
  }
}

export default App;
