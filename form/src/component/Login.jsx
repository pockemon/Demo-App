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

  <div class="container py-5">
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6 mx-auto">

                    <div class="card rounded-0">
                        <div class="card-header">
                            <h3 class="mb-0">Login</h3>
                        </div>
                        <div class="card-body">
                            <form class="form" onSubmit = {this.onSubmit1}>
                            <div>
                                <label class="custom-control custom-checkbox">
                                  {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                                </label>

                                <label class="custom-control custom-checkbox">
                                  {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                                </label>
                            </div>

                                <div class="form-group">
                                    <label for="uname1">Username</label>
                                    <input type="text" class="form-control form-control-lg rounded-0" name="username" value={username} onChange={this.onChange1} id="username" required />
                                    <div class="invalid-feedback">Oops, you missed this one.</div>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control form-control-lg rounded-0" name="password" value={password} onChange={this.onChange1} id="password" required/>
                                    <div class="invalid-feedback">Enter your password too!</div>
                                </div>

                                <div>
                                    <label class="custom-control custom-checkbox">
                                       <h3 style={{color:'red'}}> {this.state.error2} </h3>
                                    </label>
                                </div>

                                <button type="submit" class="btn btn-success btn-lg float-right" id="btnLogin">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>

    )
 }
}

export default Login;
