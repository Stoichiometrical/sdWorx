import React, { useState } from 'react';
import '../Manager View/emp.scss';
import './employee.scss';
import TaskBox from './Taskbox';
import EmployeeForms from './Employeee-Forms';
import { useNavigate } from 'react-router-dom';
import SideNav from '../../components/sidebar/Sidebar';
import Task from '../../components/task/Task';
import Chatbot2 from "../../components/opusbot/Chatbot";


const EmployeeView = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
    const [isSideMenuExtended, setIsSideMenuExtended] = useState(true);
    const [selectedTask, setSelectedTask] = useState('Select Task'); // State to track selected task
    const [isChatVisible, setIsChatVisible] = useState(false); // State to control chat visibility
    const career = useNavigate();

    const tasks = [
        'Examine HTML Structure',
        'Review CSS Files',
        'Consistency Check',
        'Responsive Design',
        'Browser Compatibility',
    ];

    const objectives = [
        'Examine the existing code base and correct any styling errors',
        'Create a Database Schema for Project',
        'Implement Responsive Web Design',
        'Design and Implement a RESTful API',
        'Optimize Website Performance and Load Times',
    ];

    const handleMenuItemClick = (item) => {
        setActiveMenuItem(item);
        career(item);
    };

    const toggleSideMenu = () => {
        setIsSideMenuExtended(!isSideMenuExtended);
    };

    // Function to handle dropdown change and update selected task
    const handleTaskChange = (event) => {
        setSelectedTask(event.target.value);
    };

    const handleStartTask = () => {
        setIsChatVisible(true); // Show the chat when the "Start Task" button is clicked
    };

    return (
        <div className={`dashboard-container ${isSideMenuExtended ? 'extended' : 'retracted'}`}>
            <div className="top-nav">
                <div className="user-info">
                    <img
                        src="https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="User Avatar"
                    />
                    <span>Hi James</span>
                </div>
                <h1>Dashboard</h1>
                <div className="drop-downs">
                    <select>
                        <option>Select Team</option>
                        <option>Team A</option>
                        <option>Team B</option>
                    </select>
                    <select onChange={handleTaskChange} value={selectedTask}>
                        <option>Select Task</option>
                        {objectives.map((task, index) => (
                            <option key={index} value={task}>
                                {task}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="main-content">
                {/* Include the SideNav component here */}
                <SideNav
                    activeMenuItem={activeMenuItem}
                    handleMenuItemClick={handleMenuItemClick}
                    isSideMenuExtended={isSideMenuExtended}
                    toggleSideMenu={toggleSideMenu}
                />

                <div className="contents">

                    <div className="forms-row">
                        <TaskBox taskname={selectedTask} /> {/* Pass selectedTask as a prop */}
                        <div className="task-section">
                            <h2>Bot Recommended Task Breakdown</h2>

                            {/* Conditionally render the task list */}
                            {selectedTask !== 'Select Task' ? (
                                <div className="task-list">
                                    {tasks.map((task, index) => (
                                        <Task key={index} name={task} />
                                    ))}

                                    <button className="start-task-button" onClick={handleStartTask}>
                                        Start Task
                                    </button>
                                </div>
                            ) : (
                                <div className="task-list-placeholder" style={{display: "flex", flexDirection: "column"}}>
                                    Select a task to view the breakdown.
                                    <img
                                        src="https://png.pngtree.com/png-vector/20190628/ourlarge/pngtree-empty-box-icon-for-your-project-png-image_1521417.jpg"
                                        alt="Placeholder"
                                        style={{ height: '40%', width: "40%" }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {isChatVisible && (
                        <div className="chat-sect">
                            <h2>OpusBot</h2>
                            <div style={{margin:"2%"}}>
                                Opus Bot will give you basic guide lines on how to navigate your tasks and execute them more effectively
                            </div>
                            <Chatbot2/>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default EmployeeView;
