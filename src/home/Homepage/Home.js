import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Home.scss'
import ControlledCarousel from './ControlledCarousel';
import { withRouter } from 'react-router-dom';



const items1 = [
  {
    id:'1',
    src: './home-images/gal1.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id:'2',
    src: './home-images/gal2.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id:'3',
    src: './home-images/gal3.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    id:'4',
    src: './home-images/gal4.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  }
]

const items2 = [
  {
    id:'1',
    src: './home-images/degea.jpeg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id:'2',
    src: './home-images/cris.jpeg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    id:'3',
    src: './home-images/rooney.jpeg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id:'4',
    src: './home-images/james.jpeg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }

];


class Home extends Component {
  render() {
    return (
      <div className="home  col-md-12 col-sm-12 col-xs-12 ">
        <ControlledCarousel className=" col-md-12 col-sm-12 col-xs-12" />

        <div>

        <hr />
        <NavLink to="/About" className="content"><h1>INTRODUCTION</h1></NavLink>
        <hr />
        <p>Monero is cash for a connected world. It’s fast, private, and secure.
            With Monero, you are your own bank. You can spend safely,
            knowing that others cannot see your balances or track your activity.
            <br />
            Monero is a decentralized cryptocurrency,
            meaning it is secure digital cash operated by a network of users.
            Transactions are confirmed by distributed consensus and then immutably recorded on the blockchain.
            Third-parties do not need to be trusted to keep your Monero safe.
        </p>
        </div>

        <hr />
        <NavLink to="/Products" className="content"><h1>Products</h1></NavLink>
        <hr />

        <div className="row">
          {items1.map(item => (
            <figure className="col-md-3 col-sm-6 col-xs-12" key={item.id}>
              <img src={item.src} alt={item.alt} className="img" />
            </figure>
            ))}
        </div>

        <hr />
        <NavLink to="/Tshirt" className="content"><h1>T-shirt</h1></NavLink>
        <hr />

        <div className="row">
         {items2.map(item => (
            <figure className= "col-md-3 col-sm-6 col-xs-12" key={item.id}>
             <img src={item.src} alt="glasses" className="img1" />
            </figure>
         ))}
        </div>

      </div>
    )
  }
}

export default withRouter(Home);
