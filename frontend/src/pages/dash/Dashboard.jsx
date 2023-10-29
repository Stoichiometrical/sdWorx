import React, { useState } from 'react';
import '../Manager View/emp.scss';
import { useNavigate } from 'react-router-dom';
import SideNav from '../../components/sidebar/Sidebar';
import "./dash.scss"
import im from '../01.png';

const PurposeCard = () => {
    return (
        <div className="card">
            <div className="card-content">
                <h2>Purpose of the Platform</h2>
                <p>
                    To help you as an employee be more involved in your growth and progress. You will be able to log your working hours and provide feedback for the different tasks you will receive. Your manager will then know how best to assist you and recommend resources.
                </p>
            </div>
            <div className="card-image">
                <img src="https://images.pexels.com/photos/3228684/pexels-photo-3228684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Purpose" />
            </div>
        </div>
    );
};

const FunctionsCard = () => {
    return (
        <div className="card">
            <div className="card-content">
                <h2>Other Functions</h2>
                <p>
                    You can also use OpusBot to guide you through the most effective ways to carry out your tasks. There is also the Career Growth portal where you can see all the departments in the company you might want to transition to and the relevant content to engage with to improve your skills, or even just your own department to upskill and qualify for promotion.
                </p>
            </div>
            <div className="card-image">
                <img src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Functions" />
            </div>
        </div>
    );
};

const Dashboard = () => {
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
                <img src={im} alt="Photo" />
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
                    <div className="formss-row">
                        <h1 style={{ marginLeft: '15%',color:"#E4003A" }}>Welcome To The Employee Tracker</h1>
                        <div className="cards-container">
                            <div className="cc"><PurposeCard /></div>
                            <div className="cc"><FunctionsCard /></div>
                        </div>
                    </div>
                </div>


            </div>
            <button style={{padding:"1%",margin:"3%",backgroundColor:"#F8AD07",width:"object-fit"}}><a href="https://drive.google.com/drive/folders/1LQQXVp6beKiEVH0n5HfsHJVnxy0fgTce?usp=sharing">Download Code For The Project</a></button>
        </div>
    );
};

export default Dashboard;
