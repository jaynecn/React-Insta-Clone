import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

function CommentSection(props) {
  console.log(props);
  return (
    <div className="comments">
      {/* <div>
        <img src="https://bit.ly/2I8lPKU"/>
        <img src="https://bit.ly/2R7F5LO"/>
        <p><strong>{profile.likes} likes</strong></p>
      </div> */}
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
      <div className="comment-form">
        <form className="form">
        <input defaultValue="comment"
        />
        <button className="add-comment" >Enter</button>
        </form>
      </div>
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