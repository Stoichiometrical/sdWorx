import React, { useState } from 'react';
import './tasks.scss'; // Import the SCSS file for styling

const Tasks = () => {
    const [overview, setOverview] = useState('');
    const [recipients, setRecipients] = useState('');
    const [timeline, setTimeline] = useState('');
    const [resources, setResources] = useState('');

    const handlePreviewClick = () => {
        // Handle the preview action items logic here
    };

    return (
        <div className="form-container">
            <h2>Use this form to give your employee an overview of the tasks they need to complete.</h2>

            <div className="form-field">
                <label htmlFor="overview">Overview:</label>
                <textarea
                    id="overview"
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                    placeholder="Provide an overview of the tasks..."
                    rows="4"
                ></textarea>
            </div>

            <div className="form-field">
                <label htmlFor="recipients">Select Recipients:</label>
                <input
                    type="text"
                    id="recipients"
                    value={recipients}
                    onChange={(e) => setRecipients(e.target.value)}
                    placeholder="Enter recipient names or emails..."
                />
            </div>

            <div className="form-field">
                <label htmlFor="timeline">Add Timeline:</label>
                <input
                    type="text"
                    id="timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    placeholder="Enter a timeline or deadline..."
                />
            </div>

            <div className="form-field">
                <label htmlFor="resources">Recommend Resources:</label>
                <textarea
                    id="resources"
                    value={resources}
                    onChange={(e) => setResources(e.target.value)}
                    placeholder="Provide recommendations for additional resources..."
                    rows="4"
                ></textarea>
            </div>

            <button className="preview-button" onClick={handlePreviewClick}>
                Preview Action Items
            </button>
        </div>
    );
};

export default Tasks;
