import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import ContactUs from './Pages/ContactUS/ContactUs.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import Login from './Pages/Login/Login.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Collections from './Pages/Collections/Collections.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/all-products",
    element: <Collections headLine = 'All Products' category = 'all'/>
  },
  {
    path: "/Mens",
    element: <Collections headLine = 'Mens Products' category = 'men'/>
  },
  {
    path: "/Womens",
    element: <Collections headLine = 'Womens Products' category = 'women'/>
  },
  {
    path: "/contact-us",
    element: <ContactUs/>
  },
  {
    path: "/SignUp",
    element: <SignUp/>
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Cart",
    element: <Cart />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
