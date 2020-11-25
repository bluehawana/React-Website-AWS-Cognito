import React, { Component} from "react";

export default class ForgetP extends Component {
    render() {
        return (
            <form>
                <h3>Recover Password</h3>

                <div className="form-group">
                    <label>Don't worry! It can happen to the best of us!</label>
                    <input type="email" className="form-control" placeholder="Your registered E-mail" />
                </div>

            
                <button type="submit" className="btn btn-primary btn-block" >
               
               
                E-mail Me A Recovery Link
               
               </button>
            
            </form>
        );
    }
}
