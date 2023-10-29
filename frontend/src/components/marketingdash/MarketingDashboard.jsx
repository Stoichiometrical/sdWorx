import React from 'react';
import './MarketingDashboard.scss'; // Import the SCSS file for styling
import Card from '../career-card/CareerPathCard';

const MarketingDashboard = () => {
    const marketingCourses = [
        {
            image: 'https://images.pexels.com/photos/2182981/pexels-photo-2182981.jpeg?auto=compress&cs=tinysrgb&w=600',
            department: 'Digital Marketing Fundamentals',
            link : 'https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce'
        },
        {
            image: 'https://images.pexels.com/photos/3153199/pexels-photo-3153199.jpeg?auto=compress&cs=tinysrgb&w=600',
            department: 'Social Media Marketing',
            link : 'https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce'
        },
        {
            image: 'https://images.pexels.com/photos/6930556/pexels-photo-6930556.jpeg?auto=compress&cs=tinysrgb&w=600',
            department: 'Content Marketing Strategies',
            link : 'https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce'
        },
    ];

    return (
        <div className="marketing-dashboard-container">
            <h2 className="dashboard-title">Marketing Department Dashboard</h2>

            {/* Core Competencies */}
            <div className="competencies-section">
                <h3>Core Competencies</h3>
                <p>
                    As a member of the Marketing Department, it's essential to master
                    several core competencies. These include understanding market trends,
                    creating compelling content, and effectively using digital marketing
                    tools.
                </p>
            </div>

            {/* Resources */}
            <div className="resources-section">
                <h3>Resources</h3>
                <p>
                    We provide a variety of resources to help you excel in your marketing
                    career. These resources include training courses, expert guides, and
                    access to marketing tools and platforms.
                </p>
            </div>

            {/* Marketing Courses as Cards */}
            <div className="course-cards">
                {marketingCourses.map((course, index) => (
                    <Card key={index} image={course.image} department={course.department} link={course.link} />
                ))}
            </div>

            {/* Take Assessment Button */}
            <button className="assessment-button">Take Assessment</button>
        </div>
    );
};

export default MarketingDashboard;
