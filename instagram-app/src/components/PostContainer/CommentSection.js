import React from 'react';
import './CommentSection.css';

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
        <input defaultValue="add comment"
        />
        <button className="add-comment" >Add Comment</button>
      </form>
    </div>
    );

}

export default CommentSection;