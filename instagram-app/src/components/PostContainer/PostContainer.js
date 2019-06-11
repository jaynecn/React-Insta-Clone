import React from 'react';
import './PostContainer.css';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';


function PostContainer(props) {
  console.log(props);
  return (
    <div className="post-container">
      {
        props.profile.map(profile => (
          <div key={profile.id} className="post-box">
            <div className="header">
              <img src={profile.thumbnailUrl} alt={profile.username}/>
              <h3>{profile.username}</h3>
            </div>
            <div className="main-image">
              <img src={profile.imageUrl} alt={profile.id}/>
            </div>
            <div className="comment-section">
              <CommentSection
              comments={profile.comments} />
            </div>
          </div>
        ))
      }
    </div>
    );
}



PostContainer.propTypes = {
  profile: PropTypes.arrayOf (
    PropTypes.shape({
      thumbnailUrl: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
}

export default PostContainer;
