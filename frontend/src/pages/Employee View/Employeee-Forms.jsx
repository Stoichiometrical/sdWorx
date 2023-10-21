import React from 'react';
import './empforms.scss';

function EmployeeForms() {
    return (
        <div className="container">
            <div className="sidebar">
                <h1>/\sdworx</h1>
                <button>View tasks</button>
                <button>View reports</button>
                <button>Engage Opus AI</button>
                <button>Collaborate</button>
            </div>

            <div className="main-content">
                <div className="top-bar">
                    <select>
                        <option>Select team</option>
                    </select>
                    <select>
                        <option>Select task</option>
                    </select>
                    <div className="user">Hi, Ruth</div>
                </div>

                <div className="task">
                    <h2>Examine the current codebase...</h2>
                </div>

                <div className="ai-chat">
                    <h3>Opus AI</h3>

                </div>
            </div>
        </div>
    );
}

export default EmployeeForms;
