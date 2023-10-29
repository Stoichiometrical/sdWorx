import React from 'react';
import './task.scss';

const Task = ({ name }) => {
    return (
        <div className="task">
            <div className="task-name">{name}</div>
            <div className="task-actions">
                <span className="action-icon view" title="View Task">
                    <i className="fas fa-eye"></i>
                </span>
                <span className="action-icon collaborate" title="Collaborate">
                    <i className="fas fa-users"></i>
                </span>
                <span className="action-icon status" title="Status">
                    <i className="fas fa-tasks"></i>
                </span>
                <span className="action-icon delete" title="Delete Task">
                    <i className="fas fa-trash"></i>
                </span>
            </div>
        </div>
    );
};

export default Task;
