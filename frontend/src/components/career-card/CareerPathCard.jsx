import React from 'react';
import PropTypes from 'prop-types';
import './ccard.scss';

const Card = ({ image, department }) => {
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
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
};

export default Card;
