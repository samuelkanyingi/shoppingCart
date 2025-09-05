import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({})

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + value)
    }))
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))
  }, []);

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 0;
    if (quantity > 0) {
      // Check if item already exists
      const existingIndex = cart.findIndex(item => item.id === product.id);
      
      if (existingIndex !== -1) {
        // Update existing item
        const updatedCart = [...cart];
        updatedCart[existingIndex].quantity += quantity;
        setCart(updatedCart);
      } else {
        // Add new item with ALL needed data
        setCart([...cart, { 
          id: product.id,
          productName: product.title, 
          quantity,
          price: product.price 
        }]);
      }
      
      // Reset quantity after adding
      setQuantities(prev => ({...prev, [product.id]: 0}));
    }
  }

  return (
    <div>
      <nav>
        <ul className="uls">
          
          <li><Link to="/cart" state={cart}>Cart( {cart.length} )</Link></li>
          <li><Link to={"/"}>Home</Link></li>
        </ul>
      </nav> 

      <div className='product-grid'>
          {products.map((product) => (
        <div key={product.id} className='card'>
          <img src={product.image} alt={product.title} />
          <div>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <div className="btn">
              <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
              <input
                type="number"
                value={quantities[product.id] || 0}
                readOnly
              />
              <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
            </div>
            <button
              className="cartBtn"
              onClick={() => addToCart(product)}
              disabled={!quantities[product.id]}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}</div>  
    
    </div>
  )
}

export default Shop;