import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api-football-v1.p.rapidapi.com/v3/players', {
      params: { search: term }, 
      headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '0f2fba8377msh8b3ae4d192f719fp1f7a3djsn189ee6ead54a'
      }
    }) 
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;