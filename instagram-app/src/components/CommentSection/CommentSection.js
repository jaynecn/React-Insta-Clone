import React from 'react';
import './CommentSection.css';

function CommentSection(props) {
  return (
    <div>
      {
        props.profile.map(profile => (
          <div key={profile.id}>
            <div>
              <p><strong>{profile.comments[0].username}</strong></p>
              <p>{profile.comments[0].text}</p>
            </div>
            <form>
              test
            </form>
          </div>
        ))
      }
    </div>
    );

}

export default CommentSection;