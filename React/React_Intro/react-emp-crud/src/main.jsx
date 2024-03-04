import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Root} from "./components/Root.jsx";
import {ErroPage} from "./components/ErroPage.jsx";
import {EmployeeListComponent} from "./components/EmployeeListComponent.jsx";
import {EmployeeFormComponent} from "./components/EmployeeFormComponent.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        errorElement: <ErroPage/>,
        children: [
            {
                path: "employees",
                element:<EmployeeListComponent/>
            },
            {
                path: "employee-form",
                element: <EmployeeFormComponent/>
            },
            {
                path: "update-employee/:id",
                element: <EmployeeFormComponent/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
