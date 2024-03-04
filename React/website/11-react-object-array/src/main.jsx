import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CarForm from './CarForm.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>

  },
  {
    path: '/car',
    element: <CarForm/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
