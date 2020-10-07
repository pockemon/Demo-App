import React, { Component } from 'react';
import '../App.css'
// import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AuthenticationService from '../service/AuthenticationService';

class Login extends Component {


constructor(props)
{
 super(props);
  this.state = {
      username: '',
      password: '',
      error1: "false",
      error2: '',
      hasLoginFailed: false,
      showSuccessMessage: false
  };

 this.onChange1 = this.onChange1.bind(this);
 this.submit1 = this.onSubmit1.bind(this);
}


 onChange1 = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit1 = e => {
    e.preventDefault();
    console.log(this.state);

    if(this.state.username==='admin' && this.state.password==='admin'){
        AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        this.setState({showSuccessMessage:true})
        this.setState({hasLoginFailed:false})
        this.props.history.push(`/home`)
    }
    else {
         this.setState({showSuccessMessage:false})
         this.setState({hasLoginFailed:true})
    }

    // this.setState({ error1: "false" });
    //s
    // axios.post('http://localhost:8081/users/login',this.state)
    //     .then(response => {
    //       console.log(response.data);
    //
    //       if(response.data)
    //       {
    //         this.setState({
    //           error1: "true"
    //         })
    //         console.log("you're logged in. yay!");
    //         // this.props.handler1();
    //         // <Button onClick = {this.props.handler1}/ >
    //         this.props.history.push('/home');
    //         this.setState({
    //           error2: ""
    //         })
    //       }
    //
    //       else
    //       {
    //         this.setState({
    //           error1: "false"
    //         })
    //         console.log("not logged in");
    //         this.setState({
    //           error2: "Please enter correct credentials"
    //         })
    //       }
    //
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    //
    //     this.setState({
    //       error1: "false"
    //     })
  }

  render() {

    const { username, password } = this.state;

    return (

      <div id="login" class="d-flex justify-content-center">

        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post" onSubmit = {this.onSubmit1}>
                            <h3 class="text-center text-info">Login</h3>
                            <div>
                                <label class="custom-control custom-checkbox">
                                  {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                                </label>

                                <label class="custom-control custom-checkbox">
                                  {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                                </label>
                            </div>

                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br/>
                                <input type="text" class="form-control rounded-0" name="username" id="username" value={username} onChange={this.onChange1} required />
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br/>
                                <input type="password" class="form-control rounded-0" name="password" value={password} onChange={this.onChange1} id="password" required/>
                            </div>

                            {/*
                            <div>
                                <label class="custom-control custom-checkbox">
                                   <h3 style={{color:'red'}}> {this.state.error2} </h3>
                                </label>
                            </div>
                            */}
                            <div class="form-group">
                                <button type="submit" class="btn btn-success btn-lg float-right" id="btnLogin">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
 }
}

export default Login;
