import React from 'react';
import './Loader.css';

interface LoaderProps {
  text?: string;
  fullPage?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ text = 'Loading...', fullPage = false }) => {
  return (
    <div className={`loader-container ${fullPage ? 'fullpage' : ''}`}>
      <div className="loader-spinner"></div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );
};

export default Loader; 