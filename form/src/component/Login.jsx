import React, { Component } from 'react';
import '../App.css'
import axios from 'axios'
// import store from 'store';
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
// import CourseDataService from '../service/CourseDataService'
// import ListCoursesComponent from '../component/ListCoursesComponent';

class Login extends Component {


constructor(props)
{
 super(props);
  this.state = {
      username: '',
      password: '',
      error1: "false",
      error2: '',
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

    // const history = useHistory();

    this.setState({ error1: "false" });

    axios.post('http://localhost:8081/users/login',this.state)
        .then(response => {
          console.log(response.data);

          if(response.data)
          {
            this.setState({
              error1: "true"
            })
            console.log("you're logged in. yay!");
            // store.set('loggedIn', true);
            // history.push("/home");
            this.props.history.push('/home');
            this.setState({
              error2: ""
            })
          }

          else
          {
            this.setState({
              error1: "false"
            })
            console.log("not logged in");
            this.setState({
              error2: "Please enter correct credentials"
            })
          }

        })
        .catch(error => {
          console.log(error)
        })

        // console.log("hi")
        // if(this.state.error1 === "true")
        //  {
        //    console.log("login")
        //    //this.props.history.push('/dash');
        //    this.setState({
        //      error2: ""
        //    })
        //
        //  }
        // else
        //  {
        //    console.log("not login")
        //    this.setState({
        //      error2: "Please enter correct credentials"
        //    })
        //  }

        this.setState({
          error1: "false"
        })
  }

  // onError= e => {
  //
  //       //pro = this.state.error;
  //       //console.log( this.state.error1);
  //       console.log("hi")
  //       if(this.state.error1 === "true")
  //        {
  //          console.log("login")
  //          this.props.history.push('/dash');
  //          this.setState({
  //            error2: ""
  //          })
  //
  //        }
  //       else
  //        {
  //          console.log("not login")
  //          this.setState({
  //            error2: "Please enter correct credentials"
  //          })
  //        }
  // }

  // onClick(event) {
  //     this.onSubmit1();
  //     this.onError();
  //  }

  render() {

    const { username, password } = this.state;

    return (

           <div>
           <form onSubmit = {this.onSubmit1}>

                 <p>
                    <label> Username: </label> <input type="text" name="username" value={username} onChange={this.onChange1} />
                 </p>

                 <p>
                    <label> Password: </label> <input type="text" name="password" value={password} onChange={this.onChange1}/>
                 </p>

                 <button type="submit" > Submit </button>

                 <p> {this.state.error2} </p>

            </form>


           </div>

    )
 }
}

// export default withRouter(Login);
export default Login;
