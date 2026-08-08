import React from 'react';
import './CollisionButton.css';

interface CollisionButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  color?: string;
}

const CollisionButton: React.FC<CollisionButtonProps> = ({ 
  text, 
  href = '#', 
  onClick,
  className = '',
  color
}) => {
  const buttonStyle = color ? { 
    '--btn-color': color 
  } as React.CSSProperties : {};

  return (
    <a 
      className={`btn-collision ${className}`} 
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      style={buttonStyle}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <span>{text}</span>
    </a>
  );
};

export default CollisionButton; 