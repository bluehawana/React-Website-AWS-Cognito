import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './index.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Collab from './pages/Collab';
import Home from "./pages/Home";
import Chat from './pages/Chat';
import ResourceHub from './pages/ResourceHub';
import Matchmaker from './pages/Matchmaker';
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import ForgotPw from './components/ForgotPw';
import ForgotAlert from './components/ForgotAlert';
import Action1 from './pages/Action3.1';
import Action2 from './pages/Action3.2';
import Action3 from './pages/Action3.3';
import Action4 from './pages/Action3.4';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <div className="auth-wrapper">
        <div className="auth-inner">
        <Switch>
        <Route path='/Action1' component={Action1} />    
        <Route path='/Action2' component={Action2} />
        <Route path='/Action3' component={Action3} />
        <Route path='/Action4' component={Action4} />
            <Route path='/forgotPassword' component={ForgotPw} />
            <Route path='/collab' component={Collab} />
            <Route path='/chat' component={Chat} />
            <Route path='/home' component={Home} /> 
            <Route path='/matchmaker' component={Matchmaker} /> 
            <Route path='/resourcehub' component={ResourceHub} />  
            <Route path='/login' component={Login} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/forgotAlert' component={ForgotAlert}/>
            <Route path='/' component={SignUp} />
           
        </Switch>
        </div>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;