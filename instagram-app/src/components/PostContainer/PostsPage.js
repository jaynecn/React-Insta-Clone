import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer.js';

function PostsPage (props) {
  return (
    <div className="App">
      <SearchBar />
      <PostContainer 
        profile={props.profile}
        comments={props.profile.comments}
        addcomment={props.addComment}
        changehandler={props.changeHandler}
        clicktoincrease={props.clickToIncrease}/>
      </div>
    )
  }

export default PostsPage;