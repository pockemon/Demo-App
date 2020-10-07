import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';

class MenuComponent extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>

            <nav className="navbar navbar-inverse">
               <div className="container-fluid">
                 <div className="navbar-header">
                   <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                   </button>
                   <a className="navbar-brand" href="#">WebSiteName</a>
                 </div>
                 <div className="collapse navbar-collapse" id="myNavbar">

                   <ul className="nav navbar-nav navbar-right">

                     {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                     {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}

                   </ul>
                 </div>
               </div>
             </nav>
              {/*
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                  <div className="container-fluid">
                    <div><a href="#" className="navbar-brand">Demo Website</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/home">Table</Link></li>
                    </ul>
                    <div>
                        <h3>{AuthenticationService.getLoggedInUserName}</h3>
                    </div>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                  </div>
                </nav>
                */}
            </header>
        )
    }
}

export default withRouter(MenuComponent)
