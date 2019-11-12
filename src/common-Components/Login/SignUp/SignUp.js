import React, { Component } from 'react';
import './SignUp.scss';
import axios from 'axios';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';
import Login from '../Login/Login';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      date:'',
      Username: '',
      email:'',
      password: '',
      role:'Choose your Role'
    };
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // axios.defaults.baseURL = 'https://api.example.com';
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  onChangeFirstname(e) {
    e.preventDefault();
    this.setState({
      firstname: e.target.value,
    });
  }

  onChangeDate(e) {
    e.preventDefault();
    this.setState({
      date: e.target.value,
    });
  }

  onChangeUsername(e) {
    e.preventDefault();
    this.setState({
      Username: e.target.value,
    });
  }

  onChangeEmail(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  }

  onChangeRole(e) {
    e.preventDefault();
    this.setState({
      role: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`Form submitted:`);
    console.log(`firstname: ${this.state.firstname}`);
    console.log(`date: ${this.state.date}`);
    console.log(`Username: ${this.state.Username}`);
    console.log(`email: ${this.state.email}`);
    console.log(`password: ${this.state.password}`);
    console.log(`role: ${this.state.role}`);

    const newSignup = {
      Signup_firstname: this.state.firstname,
      Signup_date: this.state.date,
      Signup_Username: this.state.Username,
      Signup_email: this.state.email,
      Signup_password: this.state.password,
      Signup_role: this.state.role,
    };

    axios.post('http://localhost:4000/Signup/add', newSignup).then(res => {
      console.log('result:', res.data._doc.Signup_firstname);
      if (res.data.success) {
        console.log('signup success');
        console.log('result:', res.data._doc.Signup_firstname);
        $('#login-text').text('Hello, ' + res.data._doc.Signup_firstname);
        $('#logout').css('display', 'block');
        $('#edit-profile').css('display', 'block');
        $('#sign-in').css('display', 'none');
        this.setState({ redirect: true });
      } else {
        console.log('signup error');
      }
    });

    this.setState({
      firstname: '',
      Username: '',
      password: '',
    });
    alert('signup successfull');
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/'} />;
    }
    return (
      <div>
        <Login />
        <div className="signup-page">
          <div className="signup">
            <div>
              <h1>Create a new account</h1>
              <h3>it`s quick and easy</h3>
            </div>

            <form className="signup-form">
              <span>
                <input
                  type="text"
                  required
                  placeholder="First-name"
                  value={this.state.firstname}
                  onChange={this.onChangeFirstname}
                  // className="signup-field"
                />
              </span>
             <span>
              <input
                  type="date"
                  required
                  value={this.state.date}
                  onChange={this.onChangeDate}
                  // className="signup-field"
                />
            </span>
              <span>
                <input
                  type="text"
                  placeholder="User-name"
                  value={this.state.Username}
                  onChange={this.onChangeUsername}
                  // className="signup-field"
                />
              </span>
              <span>
                <input
                  type="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  // className="signup-field"
                />
              </span>
              <span>
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.Password}
                  onChange={this.onChangePassword}
                  // className="signup-field"
                />
              </span>
              <span>
                <select className="browser-default custom-select custom-select-md" value={this.state.role} onChange={this.onChangeRole}>
                  <option defaultValue="Choose your Role" disabled >
                    Choose your Role
                  </option>
                  <option value="student">student</option>
                  <option value="employee">employee</option>
                  <option value="intern">intern</option>
                </select>
              </span>
              <br />
              <button
                className="btn btn-danger signup-btn"
                onClick={this.onSubmit}
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
