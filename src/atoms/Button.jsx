import React from 'react';

const Button = ({ label, onClick, variant = "primary" }) => (
  <button className={`btn btn-${variant} rounded-0`} onClick={onClick}>
    {label}
  </button>
);

export default Button;
