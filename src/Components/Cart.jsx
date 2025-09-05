import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const cartItems = location.state || []; // This IS the array
  const [localCart, setLocalCart] = useState(cartItems);
  
  // Update when location changes
  useEffect(() => {
    setLocalCart(cartItems);
  }, [cartItems]);

  const updateQuantity = (itemId, change) => {
    setLocalCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId 
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (itemId) => {
    setLocalCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };
  
  return (
    <div>
      <nav>
        <ul className="uls">
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <p>Welcome to cart component</p>      
      
      {localCart.length > 0 ? (
        <div>
          {localCart.map((item) => (
            <div key={item.id} className='cart'>
              <p>{item.productName} x {item.quantity}</p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <button 
                className='AddBtn' 
                onClick={() => updateQuantity(item.id, 1)}
              >+</button>
              <button 
                className='SubBtn' 
                onClick={() => updateQuantity(item.id, -1)}
              >-</button>
              <button 
                className='DeleteBtn' 
                onClick={() => removeItem(item.id)}
              >X</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}

      {localCart.length > 0 && (
  <div className="total">
    <h3>
      Total: $
      {localCart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
    </h3>
  </div>
)}

    </div>
  )
}

export default Cart