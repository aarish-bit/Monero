import React from 'react'
import { NavLink } from 'react-router-dom' 
import './Content.scss'


const Contents = props => {
    return (
      <div className="Contents">
        <ul>
          <li>
            <div className="product-icon">  
              <NavLink to="/Products">
                <i className="fab fa-product-hunt"></i>
                <label>Products</label>
              </NavLink>
            </div> 
          </li>
          <li>
            <div className="user-icon">
              <NavLink to="/Tshirt">
                <i className="fas fa-tshirt"></i>
                <label>T-shirt</label>
              </NavLink> 
            </div>
          </li>
        </ul>
      </div>
    );
  };

  export default Contents