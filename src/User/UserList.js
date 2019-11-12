import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './UserList.scss'

class UserList extends Component {
  constructor(props) {
    super(props)

    this.state = {
       userlist:[],
       userdata:[]
    }
    this.DeleteUser = this.DeleteUser.bind(this)
    this.UserData = this.UserData.bind(this)
  }

  componentDidMount = () => {
    console.log("called")
    fetch('http://localhost:4000/Signup')
    .then(res=> res.json())
    .then(data => this.setState({userlist:data}))
    .catch(function (err) {
      console.log(err, 'error')
    })
  }

  UserData(user) {
    // let {userlist}= this.state
    // console.log(userlist, 'u')
   var udata = this.state.userdata;
   udata.push(user)
   this.setState({ userdata: udata })
   console.log('userdata', udata)
  }

  DeleteUser(e, clicked) {
    var userdata = this.state.userlist;
    if(clicked) {
      console.log(clicked, 'click')
      return (
        userdata.slice()
      )
    }
  }

  render() {
   const {userlist}= this.state;
    console.log('users', userlist)
    return (
      <div className="userlist">
       <h3>User List</h3>
        <table className="table table-striped" >
         <thead>
          <tr>
            <th>First Name</th>
            <th>Date</th>
            <th>Email</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Role</th>
          </tr>
         </thead>
         <tbody>
           {userlist.map((ulist, i)=> {
             return (
              <tr key={i}>
              <td>{ulist.Signup_firstname}</td>
              <td>{ulist.Signup_date}</td>
              <td>{ulist.Signup_email}</td>
              <td>{ulist.Signup_Username}</td>
              <td>{ulist.Signup_password}</td>
              <td>{ulist.Signup_role}</td>
              <td><Link to={{ pathname:`/edituser:${ulist._id}`, state:{user:this.state.userdata}} }><span onClick={() => this.UserData(ulist)}>edit</span></Link> </td>
              <td><button onClick={this.DeleteUser}>delete</button></td>
             </tr>
             )

           })}
         </tbody>
        </table>
      </div>
    )
  }
}

export default UserList
