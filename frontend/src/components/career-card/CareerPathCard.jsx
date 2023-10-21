import React from 'react';
import PropTypes from 'prop-types';
import './ccard.scss';
import {Link} from "react-router-dom";

const Card = ({ image, department,link }) => {
    return (
        <div className="card">
            <img
                src={image}
                alt={department}
                className="card-image"
            />
            <div className="card-content">
                <h2>{department}</h2>
            </div>
            <Link to={link}/>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
};

export default Card;
