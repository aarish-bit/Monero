import React from 'react'
import './Cart.scss'

const Cart = props => {
  let mainClasses = 'Cart-drawer'
  if (props.show) {
    mainClasses = 'Cart-drawer open'
  }
  
  //console.log(props.cart)


  return (

    <div className={mainClasses}>
      <span>
        <button className="closebtn" onClick={props.backdropClickHandler}><i className="fas fa-times"></i></button>
        <h6 className="carttitle">
          Cart
        <i className="fas fa-shopping-cart">
            <span className="badge">{props.count}</span>
          </i>
        </h6>
      </span>

      <hr className="line" />

      <span>
        {props.cart.length > 0 ?
          props.cart.map((prod) => {
            console.log(prod.quantity, 'quan')
            return (
              <div key={prod.id}>
                <img src="user-images/user1.jpg" alt='user' className="cartimg" />
                <p className="cartcontent">
                  {prod.title}
                  <br />
                  {prod.style}
                  <br />
                  Quantity:{prod.quantity > 1 ? <span>{prod.quantity}</span> : '1'}
                </p>
                <p className="p-price">${prod.price}</p>
              </div>)
          }) : <img src='Cart/cart-empty.jpg' alt="empty-cart" className="emptycart" />
        }
      </span>

      <hr className="line" />

      <span className="product-out">
       <p><b><label>TOTAL: </label><span className="final-price">${props.total}</span></b></p>
       <br />
       <button className="btn custom-btn checkout">CHECKOUT</button>
      </span>

    </div>
  );
};

export default Cart