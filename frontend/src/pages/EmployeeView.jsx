import React, { useState } from 'react';
import './Manager View/emp.scss';

import TaskBox from "./Employee View/Taskbox";
import EmployeeForms from "./Employee View/Employeee-Forms";

const EmployeeView = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
    const [isSideMenuExtended, setIsSideMenuExtended] = useState(true);

    const handleMenuItemClick = (item) => {
        setActiveMenuItem(item);
    };

    const toggleSideMenu = () => {
        setIsSideMenuExtended(!isSideMenuExtended);
    };

    return (
        <div className={`dashboard-container ${isSideMenuExtended ? 'extended' : 'retracted'}`}>
            <div className="top-nav">
                <div className="user-info">
                    <img src="https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
                    <span>Hi Ruth</span>
                </div>
                <h1>Dashboard</h1>
            </div>

            <div className="main-content">
                <div className="side-nav">
                    <div className="menu-toggle" onClick={toggleSideMenu}>
                        <i className={`fas ${isSideMenuExtended ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
                    </div>
                    <ul>
                        <li
                            className={`menu-item ${activeMenuItem === 'dashboard' ? 'active' : ''}`}
                            onClick={() => handleMenuItemClick('dashboard')}
                        >
                            Dashboard
                        </li>
                        <li
                            className={`menu-item ${activeMenuItem === 'profile' ? 'active' : ''}`}
                            onClick={() => handleMenuItemClick('profile')}
                        >
                            Career Upskilling
                        </li>
                        <li
                            className={`menu-item ${activeMenuItem === 'settings' ? 'active' : ''}`}
                            onClick={() => handleMenuItemClick('settings')}
                        >
                            Settings
                        </li>

                    </ul>
                </div>

                <div className="content">
                    <div className="forms-row">
                        <TaskBox />
                        <EmployeeForms/>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeView;
