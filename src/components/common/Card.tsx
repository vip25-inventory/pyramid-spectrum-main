import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  image?: {
    src: string;
    alt: string;
  };
  content?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  content,
  footer,
  className = '',
  onClick
}) => {
  return (
    <div 
      className={`card ${className}`} 
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : undefined}
    >
      {image && (
        <div className="card-img-top-wrapper">
          <img src={image.src} className="card-img-top" alt={image.alt} />
        </div>
      )}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {subtitle && <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>}
        {content && <div className="card-content">{content}</div>}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card; 