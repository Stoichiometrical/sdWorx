import React from 'react';
import './employee-dash.scss';

const TaskBox = ({taskname}) => {
    return (
        <div className="task-box">
            <div className="task-title">{taskname}</div>
        </div>
    );
};


export default TaskBox;
