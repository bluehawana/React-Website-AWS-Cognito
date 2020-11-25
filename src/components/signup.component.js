import React, { useState } from 'react';
import UserPool from './UserPool'
  
export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const onSubmit = event => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      else console.log(data);
     alert('Your data has been submitted!')
    });
  };

  return (
            
            <form onSubmit={onSubmit}>
                <h3>Join Us</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input className="form-control" value={email}
                    onChange={event => setEmail(event.target.value)}
                  placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" value={password}
                    onChange={event => setPassword(event.target.value)}placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered 
                    <a href="/login">sign in?</a>
                </p>
            </form>
          
        );
    };