import React from 'react';
import './Cart.scss';

const DrawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
     <div>
      <i className='fas fa-shopping-cart'></i>
      
     </div>
    </button>

)

export default DrawerToggleButton;