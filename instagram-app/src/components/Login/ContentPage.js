import React from 'react';

const LoginPage = (props) => {
  return (
    <div className="page content">
      <div className="placeholder-img">Content</div>
      <div className="placeholder-img">Content</div>
      <button onClick={props.logout}>Log Out</button>
    </div>
  );
}

export default LoginPage;