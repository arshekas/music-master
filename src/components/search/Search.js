import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Search.css'

class Search extends Component
{
    state = { artistQuery: ''};
    updateArtistQuery = event  => {
        this.setState ({ artistQuery: event.target.value});
      }
      handleKeyPress = event =>
      {
        if(event.key ==='Enter')
        {
          this.searchArtist();
        }
      }
    searchArtist = () => 
    {
        this.props.searchArtist(this.state.artistQuery);
    }
    render()
    {
        return(
            <div className='search'>
                <input onChange = {this.updateArtistQuery} onKeyPress= {this.handleKeyPress} placeholder='Search for an Artist' />
                <SearchIcon onClick={this.searchArtist}/>
            </div>
        )
    }
}
export default Search;