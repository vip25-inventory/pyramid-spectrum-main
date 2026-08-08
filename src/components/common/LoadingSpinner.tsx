import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  fullScreen = false,
  size = 'medium' 
}) => {
  if (fullScreen) {
    return (
      <div className="spinner-overlay">
        <div className={`spinner spinner-${size}`}></div>
      </div>
    );
  }
  
  return <div className={`spinner spinner-${size}`}></div>;
};

export default LoadingSpinner; 