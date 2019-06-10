import React from 'react';
import './CommentSection.css';

function CommentSection(props) {
  console.log(props);
  return (
    <div className="comments">
      {
        props.comments.map(profile => (
          <div key={profile.id}>
            <p><strong>{profile.username}</strong></p><p>{profile.text}</p>
          </div>
        ))
      }
    </div>
    );

}

export default CommentSection;