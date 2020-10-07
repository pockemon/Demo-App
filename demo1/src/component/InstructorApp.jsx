import React, { Component } from 'react';
import ListCoursesComponent from '../component/ListCoursesComponent';
// import dash from '../component/dash';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../component/Login';
import AuthenticatedRoute from './AuthenticatedRoute';
import LogoutComponent from './LogoutComponent';
import MenuComponent from './MenuComponent';
import '../App.css'

class InstructorApp extends Component {

  constructor(props)
  {
   super(props);
    this.state = {
      message: false,
    };

    this.handler = this.handler.bind(this)
  }

  handler() {
    this.setState({
      message: true,
    })
  }

  render() {
        return (
            <>
                <Router>
                    <>
                        <MenuComponent />
                        <Switch>
                            <Route path="/" exact component={Login} />
                            <Route path="/login" component={Login} />
                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                            <AuthenticatedRoute path="/home" exact component={ListCoursesComponent} />
                        </Switch>
                    </>
                </Router>
            </>
        )
    }

}


export default InstructorApp;
