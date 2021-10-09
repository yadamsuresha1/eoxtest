import React from 'react';
import './Loader.css';

const Loader = ({title="Application"}) => {
    return (
        <div className="loader-container">
            <h3 className="title">{title}</h3>
            <h5>Loading</h5>
        </div>
    );
};

export default Loader;