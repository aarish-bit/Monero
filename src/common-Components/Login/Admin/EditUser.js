import React, { Component } from 'react'
import './EditUser.scss'
// import axios from 'axios';

class EditUser extends Component {
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
    this.onSave = this.onSave.bind(this);
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

  componentDidMount() {
    console.log(this.props.location.state.user[0], 'match')
    let user = this.props.location.state.user[0]
    this.setState({
      firstname:user.Signup_firstname,
      date: user.Signup_date,
      Username:user.Signup_Username,
      email:user.Signup_email,
      password:user.Signup_password,
      role:user.Signup_role
    })
    // axios.get('http://localhost:4000/Signup/'+this.props.match.params)
    // .then(res => {
    //   this.setState({
    //     firstname:this.props.location.state.user.Signup_firstname,
    //     date:res.data.date,
    //     Username: res.data.Username,
    //     email:res.data.email,
    //     password: res.data.password,
    //     role:res.data.role
    //   })
    // })
  }


  onSave(e) {
    e.preventDefault();
    console.log(`Form submitted:`);
    console.log(`firstname: ${this.state.firstname}`);
    console.log(`date: ${this.state.date}`);
    console.log(`Username: ${this.state.Username}`);
    console.log(`email: ${this.state.email}`);
    console.log(`password: ${this.state.password}`);
    console.log(`role: ${this.state.role}`);

  //   axios.post('http://localhost:4000/update/'+this.props.match.params.id)
  //  .then(res => console.log(res.data));
  //  this.props.history.push('/')

  }

  render() {
    const {firstname, date, Username, email, password} = this.state
    var newDate = new Date(date);
    var year = newDate.getFullYear()
    var month = newDate.getMonth() + 1
    var day = newDate.getDate()
    var newmonth;
    if(month < 10) {
      newmonth = "0"+month;
    } else {
      newmonth = month;
    }
    return (
      <div className="edituser">
        <h3>Edit user</h3>
        <form className="edituser-form">
              <span>
                <input
                  type="text"
                  required
                  placeholder={firstname}
                  value={this.state.firstname}
                  onChange={this.onChangeFirstname}
                  // className="signup-field"
                />
              </span>
             <span>
              <input
                  type="date"
                  required
                  placeholder={date}
                  // value="2019-8-26"
                  value={year+"-"+newmonth+"-"+day}
                  onChange={this.onChangeDate}
                  // className="signup-field"
                />
            </span>
              <span>
                <input
                  type="text"
                  placeholder={Username}
                  value={this.state.Username}
                  onChange={this.onChangeUsername}
                  // className="signup-field"
                />
              </span>
              <span>
                <input
                  type="email"
                  placeholder={email}
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  // className="signup-field"
                />
              </span>
              <span>
                <input
                  type="password"
                  placeholder={password}
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
                onClick={this.onSave}
              >
                SAVE
              </button>
            </form>
      </div>
    )
  }
}

export default EditUser
