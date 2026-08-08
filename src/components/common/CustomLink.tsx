import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
}

/**
 * Custom Link component that scrolls to top of the page when clicked
 */
const CustomLink: React.FC<CustomLinkProps> = ({ children, ...props }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link {...props} onClick={(e) => {
      handleClick();
      // Call the original onClick if it exists
      if (props.onClick) {
        props.onClick(e as React.MouseEvent<HTMLAnchorElement>);
      }
    }}>
      {children}
    </Link>
  );
};

export default CustomLink; 