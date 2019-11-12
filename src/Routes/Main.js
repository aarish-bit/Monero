import React from 'react'
import {Route, Switch } from 'react-router-dom'
import './../styles/main_content.css'
import Home from './../home/Homepage/Home'
import Products from './../home/Products/Products'
import About from './../about/About'
import Tshirt from '../home/Tshirt/Tshirt'
import SignUp from '../common-Components/Login/SignUp/SignUp';
import AdminLogin from '../common-Components/Login/Admin/AdminLogin';
import UserList from '../User/UserList';
import EditUser from '../common-Components/Login/Admin/EditUser';

const Main = props => {
  let mainClasses = 'main'
     if (props.show) {
       mainClasses = 'main open'
     }
    return(
      <div>
        <main className={mainClasses}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Tshirt" component={Tshirt} />
            <Route exact path="/Admin" component={AdminLogin} />
            <Route exact path="/userlist" component={UserList} />
            <Route exact path="/edituser:id" component={EditUser} />
            <Route exact path="/SignUp" component={SignUp} />
          </Switch>
        </main>
        </div>
    )
}

export default Main