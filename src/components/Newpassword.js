import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Choose New Password</h3>

          

                <div className="form-group">
                    <label>New Password</label>
                    <input type="New password" className="form-control" placeholder="password1"/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="Confirm password" className="form-control" placeholder="password2" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Change Password</button>
                
            </form>
        );
    }
}