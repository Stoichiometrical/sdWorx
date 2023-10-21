import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import EmployeeView from "./pages/EmployeeView";
import ManagerView from "./pages/ManagerView";


const router = createBrowserRouter([
    {
        path:"/dashboard",
        element :""

    },
    {
        path:"/tasks",
        element:""
    },
    {
        path:"edashboard",
        element:<EmployeeView/>
    },
    {
        path:"mdashboard",
        element:<ManagerView/>
    }




    ])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

