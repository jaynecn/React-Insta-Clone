import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
import Login from './components/Login/Login';
import withAuthentication from './components/Authentication/withAuthentication';
// import ContentPage from './components/ContentPage';


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

  changeHandler = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  addComment = (event, id) => {
    event.preventDefault();

    const newComment = {
      id: Date.now(),
      username: "instaN00b",
      text: this.state.comment
    };

    const currentProfile = this.state.profile
      .map((profile) => {
       if(profile.id === id) {
         console.log(profile.id);
        profile.comments.push(newComment);
        return profile;
       }
       return profile
      })

    this.setState({profile: currentProfile, comment: ''})
  }
  
  render() {
    console.log(this.state.profile);
    return (
      <div className="App">
        <Login />
        <SearchBar />
        <PostContainer 
        profile={this.state.profile}
        comments={this.state.profile.comments}
        commenttext={this.state.comment}
        addfunction={this.addComment}
        addComment={this.addComment}
        changehandler={this.changeHandler}
        clicktoincrease={this.clickToIncrease}/>
        {/* <ContentPage /> */}
      </div>
    );
  }
}



export default withAuthentication(App);
