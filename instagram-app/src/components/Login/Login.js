import React from 'react';

const Login = (props) => {
  return (
    <div className="page login">
      <input className="username-input" defaultText="username" />
      <input className="password-input" defaultText="password" />
      <button onClick={props.login}>Log In</button>
    </div>
  );
}

export default Login;