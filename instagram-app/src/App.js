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

  clickToIncrease = (event, id) => {
    const currentProfile = this.state.profile
      .map((profile) => {
       if(profile.id === id) {
        profile.likes = profile.likes + 1
        return profile;
       }
       return profile
      })

    this.setState({profile: currentProfile})
  }

  changeHandler = (info) => {
    this.setState({
      comment: info.target.value
    });
  }

  addComment = (event) => {
    event.preventDefault();

    const newComment = {
      id: Date.now(),
      username: "instaN00b",
      text: this.state.comment
    };

    this.setState({
      profile: 
      this.state.profile.comments.concat(newComment),
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
        comments={this.state.profile.comments}
        addcomment={this.addComment}
        changehandler={this.changeHandler}
        clicktoincrease={this.clickToIncrease}/>
      </div>
    );
  }
}



export default App;
