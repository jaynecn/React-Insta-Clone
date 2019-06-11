import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: dummyData,
      comment: '',
    };
  }

  changeHandler= (info) => {
    this.setState({
      comment: info.target.value
    });
  }

  addComment = (event) => {
    event.preventDefault();

    const newComment = {
      id: Date.now(),
      username: "instaN00b",
      text: event.target.comment.value
    };

    this.setState({
      profile: 
      this.state.profile.concat(newComment),
      comment: '',
    });
  }
  
  render() {
    console.log(this.state.profile);
    return (
      <div className="App">
        <SearchBar />
        <PostContainer 
        profile={this.state.profile}
        addcomment={this.addComment}
        changehandler={this.changeHandler}/>
      </div>
    );
  }
}

export default App;
