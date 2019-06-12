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
            <div className="likes">
              <div>
                <div className="heart"
                onClick={(event) => props.clicktoincrease(event, profile.id)}><img src="https://bit.ly/2I8lPKU" alt="heart"/></div>
                <div><img src="https://bit.ly/2R7F5LO" alt="comment"/></div>
                </div>
              <div>
              <p><strong>{profile.likes} likes</strong></p>
              </div>
            </div>
            <div className="comment-section">
              <CommentSection
              comment={profile.comments.text}
              comments={profile.comments}
              addcomment={profile.addComment}
              changehandler={profile.changeHandler}
              clicktoincrease={profile.clickToIncrease}/>
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
      id: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired
    })
  )
}


export default PostContainer;
