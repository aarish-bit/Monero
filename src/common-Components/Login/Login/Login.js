import React, { Component } from 'react'
import './Login.scss'
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import $ from 'jquery';



// const LoggedIn= [{'value1':'edit profile', 'value2':'Logout'}]
// const Signin= [{'value1':'Sign In'}]

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: '',
      password: '',
      redirect:false
    };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onChangeUsername(e) {
    e.preventDefault();
    this.setState({
      Username: e.target.value,
    });
  }

  onChangePassword(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  }

  onLogin(e) {
    e.preventDefault();
    // console.log(`Username: ${this.state.Username}`);
    // console.log(`password: ${this.state.password}`);

    const Login = {
      Signup_Username:this.state.Username,
      Signup_password:this.state.password
    }

    axios.post('http://localhost:4000/login', Login)
    .then(res =>{
      console.log("result:",res.data.Signup_firstname)
      if (res.data.success) {
        // console.log('login success')
        $("#login-text").text('Hello, ' + res.data.Signup_firstname)
        $("#logout").css("display","block")
        $("#edit-profile").css("display","block");
        $("#sign-in").css("display","none")
        this.setState({redirect:true})
       } else {
        //  console.log('login error')
        alert('wrong user name or password')
       }
    })


    this.setState({
      Username: '',
      password: '',
    });
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/'} />)
    }
    return (
      <div className="login">
       <h3 className="login-head">Have an account? Sign in!</h3>
       <form className="login-form">
         <span>
           <label>User-name:</label>
           <input
             type="text"
             value={this.state.Username}
             onChange={this.onChangeUsername}
             className="login-field"
           />
         </span>
         <br />
         <span className="password">
           <label>Password:</label>
           <input
             type="password"
             value={this.state.Password}
             onChange={this.onChangePassword}
             className="login-field"
           />
         </span>
         <br />
         <button className="btn btn-danger login-btn" onClick={this.onLogin}>Login</button>
       </form>
      </div>
    )
  }
}

export default Login
