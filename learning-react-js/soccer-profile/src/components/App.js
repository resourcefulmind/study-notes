import React from 'react';
import rapidapi from '../api/rapidapi';
import ProfileList from './ProfileList';
import SearchBar from './SearchBar';


class App extends React.Component {
  state = { profiles: [] }

  onSearchSubmit = async (term) => {
    const response = await rapidapi.get('/v3/coachs', {
      params: { search: term }
    });
    // .then(response => {
    //   console.log(response.data.response);
    // }); this is the .then() method
    this.setState({ profiles: response.data.response });
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ProfileList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
