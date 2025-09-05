import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div>
      
      <nav>
        <ul className="uls">
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          
        </ul>
      </nav> 
      <p>Welcome to home component</p>     
    </div>
  )
}

export default home
