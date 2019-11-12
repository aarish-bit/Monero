import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Toolbar.scss';
import $ from 'jquery';

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    console.log('in logout');
    $('#login-text').text('hello, SignIn');
  }

  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <span className="toolbar__logo">
            <img src="main-logo/monero.jpeg" alt="manutd" />
            <NavLink to="/">
              <b>MONERO</b>
            </NavLink>
          </span>
          <span className="space" />
          <span className="toolbar_navigation-items">
            <ul>
              <li>
                <NavLink to="/">
                  <b>Home</b>
                </NavLink>
              </li>
              <li>
                <NavLink to="/About">
                  <b>About</b>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Admin">
                  <b>Admin</b>
                </NavLink>
              </li>
              <li>
                <div className="dropdown">
                  <span
                    className="dropdownbtn"
                    data-toggle="dropdown"
                    id="login-text"
                  >
                    <b>hello, Sign in</b>
                    <span className="caret"></span>
                  </span>
                  <span className="dropdown-content">
                    <span>
                      <NavLink
                        to="/SignUp"
                        id="sign-in"
                        style={{ display: 'block' }}
                      >
                        Sign in
                      </NavLink>
                      <NavLink
                        to="/SignUp"
                        id="edit-profile"
                        style={{ display: 'none' }}
                      >
                        Edit profile
                      </NavLink>
                    </span>
                    <span>
                      <NavLink
                        onClick={this.onLogout}
                        to="/SignUp"
                        id="logout"
                        style={{ display: 'none' }}
                      >
                        Log Out
                      </NavLink>
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </span>
        </nav>
      </header>
    );
  }
}

export default Toolbar;
