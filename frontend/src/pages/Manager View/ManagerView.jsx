import React, { useState } from 'react';
import './emp.scss';
import Tasks from '../../components/manager-comps/Tasks';
import AIActionItemsComponent from '../../components/manager-comps/ActionItems';
import { useNavigate } from 'react-router-dom';
import SideNav from "../../components/sidebar/Sidebar";

const ManagerView = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
    const [isSideMenuExtended, setIsSideMenuExtended] = useState(true);
    const career = useNavigate();

    const handleMenuItemClick = (item) => {
        setActiveMenuItem(item);
        career(item);
    };

    const toggleSideMenu = () => {
        setIsSideMenuExtended(!isSideMenuExtended);
    };

    return (
        <div className={`dashboard-container ${isSideMenuExtended ? 'extended' : 'retracted'}`}>
            <div className="top-nav">
                <div className="user-info">
                    <img
                        src="https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="User Avatar"
                    />
                    <span>Hi Ruth</span>
                </div>
                <h1>Dashboard</h1>
            </div>

            <div className="main-content">
                {/* Include the SideNav component here */}
                <SideNav
                    activeMenuItem={activeMenuItem}
                    handleMenuItemClick={handleMenuItemClick}
                    isSideMenuExtended={isSideMenuExtended}
                    toggleSideMenu={toggleSideMenu}
                />

                <div className="content">
                    <div className="forms-row">
                        <Tasks />
                        <AIActionItemsComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerView;
