import { Link } from "react-router-dom"
import  "./assets/styles.css"
function App() {

  return (
    <>
      
      <nav>
        <ul className="uls">
          <li><Link to="shop">Shop</Link></li>
          <li><Link to="cart">Cart</Link></li>
        </ul>
      </nav>
      <p>Welcome Home sammy</p>      
    </>
  )
}

export default App
