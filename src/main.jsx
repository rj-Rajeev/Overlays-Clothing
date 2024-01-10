import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import ContactUs from './Pages/ContactUS/ContactUs.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import Login from './Pages/Login/Login.jsx'
import Collections from './Pages/Collections/Collections.jsx'
import { CartProvider } from './contexts/cartContext'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/all-products',
        element: <Collections headLine='All Products' category='all' />,
      },
      {
        path: '/Mens',
        element: <Collections headLine='Mens Products' category='men' />,
      },
      {
        path: '/Womens',
        element: <Collections headLine='Womens Products' category='women' />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/SignUp',
        element: <SignUp />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
