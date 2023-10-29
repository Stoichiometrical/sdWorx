import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import EmployeeView from "./pages/Employee View/EmployeeView";
import CareerGrowth from "./pages/career-growth/CareerGrowth";
import TechDashboard from "./components/techdash/TechDashboard";
import MarketingDashboard from "./components/marketingdash/MarketingDashboard";
import ManagerView from "./pages/Manager View/ManagerView";
import Dashboard from "./pages/dash/Dashboard";


const router = createBrowserRouter([
    {
        path : "",
        element:<Dashboard/>
    },
    {
        path:"/edash",
        element:<ManagerView/>
    },
    {
        path:"/dashboard",
        element:<Dashboard/>
    },
    {
        path:"/careergrowth",
        element :<CareerGrowth/>
    },
    {
        path:"/mdashboard",
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
        element : <ManagerView/>
    },
    {
        path:"/tasks",
        element: <EmployeeView/>
    }




    ])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

