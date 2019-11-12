import React, { Component } from 'react'
import './Admin.scss'
// import axios from 'axios';
import {Redirect} from 'react-router-dom'
// import $ from 'jquery';


class AdminLogin extends Component {
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
    if(this.state.Username==='admin' && this.state.password==='admin'){
       this.setState({redirect:true})
    } else {
      alert('invalid username or password')
    }

    this.setState({
      Username: '',
      password: '',
    });
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/userlist'} />)
    }
    return (
      <div className="admin">
       <form className="admin-form">
         <span>
           <label>User-name:</label>
           <input
             type="text"
             value={this.state.Username}
             onChange={this.onChangeUsername}
             className="admin-field"
           />
         </span>
         <br />
         <span className="password">
           <label>Password:</label>
           <input
             type="password"
             value={this.state.Password}
             onChange={this.onChangePassword}
             className="admin-field"
           />
         </span>
         <br />
         <button className="btn btn-danger admin-btn" onClick={this.onLogin}>Login</button>
       </form>
      </div>
    )
  }
}

export default AdminLogin
