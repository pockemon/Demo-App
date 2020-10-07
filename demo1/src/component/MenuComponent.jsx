import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';
import '../App.css'

class MenuComponent extends Component {

    render() {

      const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
          <nav class="navbar navbar-custom">
            <div class="container-fluid">
              <div class="navbar-header">
                <button id="nav-toggle-button" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span class="icon-bar" id="nav-icon"></span>
                  <span class="icon-bar" id="nav-icon"></span>
                  <span class="icon-bar" id="nav-icon"></span>
                </button>
                <div> <img src="logo1.jpg" id="image"/> </div>
              </div>
              <div class="collapse navbar-collapse" id="myNavbar">

                <ul class="nav navbar-nav navbar-right">
                {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}                </ul>
              </div>
            </div>
          </nav>
        )
    }
}

export default MenuComponent;
