import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

function CommentSection(props) {
  console.log(props);
  return (
    <div className="comments">
      {
        props.comments.map(profile => (
          <div key={profile.id}>
            <div className="comments-div">
              <p><strong>{profile.username}</strong></p>
              <p>{profile.text}</p>
            </div>
          </div>
        ))
      }
      <form className="comment-form">
        <input defaultValue="comment"
        />
        <button className="add-comment" >Add Comment</button>
      </form>
    </div>
    );

}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}

export default CommentSection;