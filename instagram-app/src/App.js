import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: dummyData
    };
  }
  
  render() {
    console.log(this.state.profile);
    return (
      <div className="App">
        <SearchBar />
        <PostContainer profile={this.state.profile}/>
      </div>
    );
  }
}

export default App;
