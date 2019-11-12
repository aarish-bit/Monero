import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
// import SignUp from './Login/SignUp/SignUp';
import Toolbar from './common-Components/header/Toolbar';
import Contents from './common-Components/main-content/Contents';
import Footer from './common-Components/footer/Footer';
import Main from './Routes/Main';

class App extends Component {
  state = {
    //  mainMove: false,
    //  cartdraweropen: false,
  };

  // drawerToggleClickHandler = (prevState) => {
  //   //console.log(prevState)
  //   this.setState((prevState) =>{
  //     return{
  //          CartDrawerOpen: !prevState.CartDrawerOpen,
  //          mainMove: !prevState.mainMove,
  //         }

  //   })
  // }

  // backdropClickHandler = () => {
  //   this.setState({CartDrawerOpen: false})
  // }

  render() {
    // let backdrop;

    // if (this.state.sideDrawerOpen) {
    //   backdrop = <Backdrop click={this.backdropClickHandler}/>
    // }

    return (
      <Router>
        <Toolbar />
        <Contents />

        <hr />

        <div className="container">
          <div className="row">
            <Main className="col-md-12 col-sm-8 col-xs-10" />
          </div>
        </div>

        <hr />

        <Footer />
      </Router>
    );
  }
}

export default App;
