import React, { useState, useEffect } from 'react';
import './chatbot.scss'; // Import the SCSS stylesheet
import Confetti from 'react-confetti'; // Import the confetti component

const Chatbot2 = () => {
    const tasks = [
        {
            title: 'Task 1: Examine HTML Structure',
            instructions: [
                '1. Open your browser\'s developer tools (F12 or right-click and inspect element).',
                '2. Use the Elements tab to inspect the HTML structure of the page.',
                '3. Check for any HTML errors or missing tags.',
                '4. Review the hierarchy and nesting of HTML elements.',
                '5. Ensure proper indentation for readability.',
            ],
        },
        {
            title: 'Task 2: Review CSS Files',
            instructions: [
                '1. Open and review the CSS files in the project.',
                '2. Check for any CSS errors or issues.',
                '3. Ensure consistent styling across the project.',
            ],
        },
        {
            title: 'Task 3: Consistency Check',
            instructions: [
                '1. Review the project to ensure consistent use of design elements.',
                '2. Verify that fonts, colors, and spacing are consistent.',
                '3. Check for any inconsistencies in layout and styling.',
            ],
        },
        {
            title: 'Task 4: Responsive Design',
            instructions: [
                '1. Test the project on various screen sizes and devices.',
                '2. Ensure that the layout adapts appropriately to different screens.',
                '3. Fix any responsive design issues that you encounter.',
            ],
        },
        {
            title: 'Task 5: Browser Compatibility',
            instructions: [
                '1. Test the project on different web browsers (e.g., Chrome, Firefox, Safari, Edge).',
                '2. Verify that the project functions correctly on each browser.',
                '3. Address any compatibility issues found during testing.',
            ],
        },
    ];

    const [currentTask, setCurrentTask] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const handleCompleteTask = () => {
        if (currentTask < tasks.length - 1) {
            setCurrentTask(currentTask + 1);
        } else {
            setIsCompleted(true);
            setShowConfetti(true);
            showCompletionAlert();

            // Automatically stop the confetti animation after 5 seconds
            setTimeout(() => {
                setShowConfetti(false);
            }, 5000);
        }
    };

    const showCompletionAlert = () => {
        alert('We did it, Joe!');
    };

    const onConfettiComplete = () => {
        // Callback when the confetti animation is complete
        showCompletionAlert();
    };

    return (
        <div className="chatbot-container">
            <div className="chat-messages">
                <div className={`chat-message task-titles`}>
                    {tasks[currentTask].title}
                </div>
                {tasks[currentTask].instructions.map((instruction, index) => (
                    <div key={index} className={`chat-message instruction`}>
                        {instruction}
                    </div>
                ))}
            </div>
            {!isCompleted && (
                <div className="user-input">
                    <button onClick={handleCompleteTask}>Complete Task</button>
                </div>
            )}
            {isCompleted && (
                <div className="user-input">
                    <div className="completion-message">Congratulations! You've completed all tasks for this objective.</div>
                </div>
            )}
            {showConfetti && (
                <div className="celebration">
                    <Confetti
                        numberOfPieces={100}
                        onConfettiComplete={onConfettiComplete}
                    />
                </div>
            )}
        </div>
    );
};

export default Chatbot2;
