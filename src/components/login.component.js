import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from './UserPool'

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    const user = new CognitoUser({
      Username:email,
      Pool:UserPool
    }) 

    const authDetails = new AuthenticationDetails({
      Username:email, 
      Password:password
    });
    user.authenticateUser(authDetails,{
      onSuccess:data=>{
        console.log('onSuccess:',data);
      },

      onFailure:err=>{
        console.error('onFailure:',err);
      },

      newPasswordRequired:data=>{
        console.log('newPasswordRequired:',data);
      }
    });
  };

      
  return (
            <form onSubmit={onSubmit}>
                <h3>Log in</h3>

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

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/forgotPassword">password?</a>
                </p>
            </form>
        );
        }
    