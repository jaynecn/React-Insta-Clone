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
      <div className="comment-form">
        <form onSubmit={(event) => props.addfunction(event, props.id)}>
          <input value={props.commenttext}
            onChange={props.changehandler}
            // onChange={(event) => props.changehandler(event)}
            type="text"
          />
        <button className="add-comment" onClick={props.addComment}>Enter</button>
        </form>
      </div>
    </div>
    );

};

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