import React from 'react';
import './App.css';
import { Navbar,Nav,NavItem, NavDropdown } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentAlt,faLightbulb,} from '@fortawesome/free-regular-svg-icons';
import {faHome,faBookOpen} from '@fortawesome/free-solid-svg-icons'; 
/*import { isPipelinePrimaryTopicReference } from '@babel/types';*/
import logo from './Logo.svg';


const tabs = [{
  route: "/home",
  icon:faHome,
  label: "Home"
},
{
  route: "/matchmaker",
  icon: faBookmark,
  label: "Matcher"
},
{
  route: "/collab",
  icon: faLightbulb,
  label: "Collaboration"
},{
  route: "/chat",
  icon: faCommentAlt,
  label: "Chat"
},{
  route: "/resourcehub",
  icon: faBookOpen,
  label: "Resources"
}]

const Navigation = (props) => {

  return (
    <div className="Navbar">
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand href="/home">
  <img src={logo} style={{width:200, height:50}} alt=""/>
</Navbar.Brand>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="blackFonts" href="/Home">About Us</Nav.Link>
      <NavDropdown className="alignFonts" id="collapsible-nav-dropdown"  title="Resource Hub">
        <NavDropdown.Item href="Action1">Collaboration</NavDropdown.Item>
        <NavDropdown.Item href="Action2">Special information</NavDropdown.Item>
        <NavDropdown.Item href="Action3">Inspiration</NavDropdown.Item>
        <NavDropdown.Item href="Action4">Purpose</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/login">
      <Button className="Button1" variant="outline-primary" size="lg" >
      Log in
      </Button>{' '}
      </Nav.Link>
      <Nav.Link eventKey={2} href="/sign-up">
      <Button className="Button1" variant="primary" size="lg" >
      Join us
      </Button>{' '}
      </Nav.Link>

    </Nav>
  </Navbar.Collapse>

</Navbar>
    <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon}/>
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
        </div>
      </Nav>
    </nav>
    </div>
  )
};

export default Navigation;