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
import MarketingDashboard from "./components/marketingdash/MarketingDashboard";
import EmpView from "./pages/Employee View/EmpView";


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
    },
    {
        path:"mdash",
        element:<MarketingDashboard/>
    },
    {
        path:"dash",
        element : <EmpView/>
    }




    ])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

