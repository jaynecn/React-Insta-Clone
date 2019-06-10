import React from 'react';
import './PostContainer.css';
// import CommentSection from './CommentSection';

function PostContainer(props) {
  console.log(props);
  return (
    <div className="post-container">
      {
        props.profile.map(profile => (
          <div key={profile.id}>
            <div class="header">
              <img src={profile.thumbnailUrl} alt={profile.name}/>
              <h3>{profile.username}</h3>
            </div>
            <div>
              <img src={profile.imageUrl} alt={profile.id}/>
            </div>
            {/* <CommentSection /> */}
          </div>
        ))
      }
    </div>
    );

}

export default PostContainer;
