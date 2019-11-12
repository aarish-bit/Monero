import React, { Component } from 'react'

class Wishlist extends Component {
  render() {
    console.log(this.props.wishlist)
    return (
      <div className="cart">
        <h6><i className="fas fa-heart"></i>My Wishlist</h6>
        
        {this.props.wishlist.map((prod) => {
         return <h6>{prod.title}</h6>
        })}
      </div>
    )
  }
}

export default Wishlist
