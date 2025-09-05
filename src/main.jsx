import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from './Components/Shop.jsx';
import Cart from './Components/Cart.jsx';
import Home from './Components/Home.jsx'; 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />
  },
  {
    path: "cart",
    element: <Cart />
  },
  {
    path: "home",
    element: <Home />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
