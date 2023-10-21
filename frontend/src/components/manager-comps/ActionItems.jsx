import React, { useState } from 'react';
import './actionitems.scss'; // Import the SCSS file for styling

const AIActionItemsComponent = () => {
    const dummyActionItems = [
        'Complete the project proposal by the end of the week.',
        'Prepare a presentation for the upcoming meeting.',
        'Review the latest project documentation and provide feedback.',
    ];

    const dummyRecipients = ['Employee 1', 'Employee 2', 'Employee 3'];

    const [actionItemsFormatted, setActionItemsFormatted] = useState(dummyActionItems);

    // Handle sending action items to employees
    const sendActionItems = () => {
        // Implement your logic to send action items to employees here
        // You can use an API or any other method to deliver the action items
        // Upon successful delivery, you can display a confirmation message
        alert('Action items sent to employees.');
    };

    return (
        <div className="ai-action-items-container">
            <h2>AI Generated Action Items</h2>

            {/* List of Action Items */}
            <div className="action-items-list">
                <ul>
                    {actionItemsFormatted.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* List of Recipients */}
                <div className="recipients-list">
                    <h3>Recipients:</h3>
                    <ul>
                        {dummyRecipients.map((recipient, index) => (
                            <li key={index}>{recipient}</li>
                        ))}
                    </ul>
                </div>

            {/* Send Action Items Button */}
                <button className="send-action-items-button" onClick={sendActionItems}>
            Send Action Items to Employees
        </button>
</div>
);
};

    export default AIActionItemsComponent;
