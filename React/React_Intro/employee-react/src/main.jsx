import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Button, colors } from '@mui/material'
import EmployeeTables from './components/EmployeeTables'
import MainLayout from './components/MainLayout'
import ErrorPage from './ErrorPage'
import { getAllEmployees as allEmployees, getElementById as getEmployees} from './dao/EmployeeDao'
import EmployeeDetail from './components/EmployeeDetail'

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
   
    children: [{
      path: 'employees',
      element:<EmployeeTables></EmployeeTables>,
      errorElement: <ErrorPage></ErrorPage>,
      loader: allEmployees
    },
    {
      path: 'employees/:employeeId',
      element: <EmployeeDetail></EmployeeDetail>,
      errorElement: <ErrorPage></ErrorPage>,
      loader: getEmployees
    }
  ]
    
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
