// src/Details.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Details.css';

const Details = () => {
  const location = useLocation();
  const { formData } = location.state || {};
  const navigate = useNavigate();

  const handleNewForm = () => {
    navigate('/');
  };

  if (!formData) {
    return <p>No form data available. Please fill out the form first.</p>;
  }

  return (
    <div className="details-container">
      <h2 className="details-title">Form Details</h2>
      <ul className="details-list">
        {Object.entries(formData).map(([key, value]) => (
          <li key={key} className="details-item">
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      <button onClick={handleNewForm} className="btn-new-form">Fill a New Form</button>
    </div>
  );
};

export default Details;
