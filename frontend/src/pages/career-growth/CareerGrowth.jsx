import React from 'react';
import './cg.scss';
import Card from "../../components/career-card/CareerPathCard"; // Import the SCSS file for styling


const CareerGrowth = () => {
    return (
        <div className="career-growth-container">
            <h1 className="career-growth-title">Career Growth Portal</h1>
            <div className="card-row">
                <Card
                    image="https://images.pexels.com/photos/18650066/pexels-photo-18650066/free-photo-of-people-working-on-macbooks-sitting-by-the-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    department="Tech Department"
                    link = ""
                />

                <Card
                    image="https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    department="Marketing Department"
                />
            </div>

            <div className="card-row">
                <Card
                    image="https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    department="HR Department"
                />
            </div>

            <button className="performance-button">See Performance Statistics</button>
        </div>
    );
};

export default CareerGrowth;
