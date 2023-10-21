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
import CareerGrowth from "./pages/career-growth/CareerGrowth";
import TechDashboard from "./components/techdash/TechDashboard";


const router = createBrowserRouter([
    {
        path:"/careergrowth",
        element :<CareerGrowth/>

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
    },
    {
        path:"/tech",
        element:<TechDashboard/>
    }




    ])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

