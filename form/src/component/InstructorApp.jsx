import React, { Component } from 'react';
import ListCoursesComponent from '../component/ListCoursesComponent';
import dash from '../component/dash';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../component/Login';

class InstructorApp extends Component {

  constructor(props)
  {
   super(props);
    this.state = {
      message: false,
    };
  }

  handler() {
    this.setState({
      message: true,
    })
  }

  render() {
    return (
        <div className="app-routes">
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} render={props =>{this.state.handler}/>
            { this.state.message &&
            <Route path="/home" component={ListCoursesComponent} />
            }
            { this.state.message &&
            <Route path="/dash" component={dash} />
            }
          </Switch>
         </BrowserRouter>
        </div>
      )
  }
}


export default InstructorApp;
