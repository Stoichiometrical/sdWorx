import React from 'react';
import "./nav.scss"

const SideNav = ({ activeMenuItem, handleMenuItemClick, isSideMenuExtended, toggleSideMenu }) => {
    return (
        <div className={`side-nav ${isSideMenuExtended ? 'extended' : 'retracted'}`}>
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
                    className={`menu-item ${activeMenuItem === 'settings' ? 'active' : ''}`}
                    onClick={() => handleMenuItemClick('/tasks')}
                >
                    View Tasks
                </li>

                <li
                    className={`menu-item ${activeMenuItem === 'profile' ? 'active' : ''}`}
                    onClick={() => handleMenuItemClick('/careergrowth')}
                >
                    Career Upskilling
                </li>

            </ul>
        </div>
    );
};

export default SideNav;
