import React from 'react';
import './TechDashboard.scss';
import Card from '../career-card/CareerPathCard';

const TechDashboard = () => {
    const courseRecommendations = [
        {
            image:
                'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
            department: 'JavaScript Fundamentals',
        },
        {
            image:
                'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
            department: 'React for Beginners',
        },
        {
            image:
                'https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=600',
            department: 'Advanced Data Structures and Algorithms',
        },
    ];

    return (
        <div className="tech-dashboard-container">
            <h2 className="dashboard-title">Tech Department Dashboard</h2>

            {/* Areas for improvement */}
            <div className="improvement-section">
                <h3>Areas for Improvement</h3>
                <div className="improvement-buttons">
                    <button className="improvement-button">Improve coding skills</button>
                    <button className="improvement-button">Enhance problem-solving abilities</button>
                    <button className="improvement-button">Strengthen teamwork and collaboration</button>
                </div>
            </div>

            {/* Log difficulties */}
            <div className="difficulties-section">
                <h3>Log Your Main Challenges Here and Your Manager Will Recommend Resources</h3>
                <textarea rows="4" cols="50" placeholder="Enter your difficulties here..."></textarea>
                <button className="submit-button">Submit</button>
            </div>

            {/* Course recommendations */}
            <div className="recommendations-section">
                <h3>Course Recommendations</h3>
                <div className="card-row">
                    {courseRecommendations.map((course, index) => (
                        <Card key={index} image={course.image} department={course.department} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechDashboard;
