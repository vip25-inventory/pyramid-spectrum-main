import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

interface BreadcrumbItem {
  path: string;
  label: string;
}

interface BreadcrumbsProps {
  customPaths?: BreadcrumbItem[];
  items?: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customPaths, items }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Map of route paths to human-readable names
  const routeNameMap: Record<string, string> = {
    'courses': 'Courses',
    'test-series': 'Test Series',
    'results': 'Results',
    'study-materials': 'Study Materials',
    'books': 'Books',
    'about': 'About',
    'contact': 'Contact',
    'spectrum': 'Spectrum',
    'pyramid': 'Pyramid',
    'iit-jee': 'IIT-JEE',
    'neet': 'NEET',
    'english': 'Spoken English',
    'foundation': 'Foundation | Academics',
    'power-program': 'Power Program',
    'online': 'Online',
    'offline': 'Offline',
    'class-11': 'Class 11',
    'class-12': 'Class 12',
    'class-12-plus': 'Class 12+',
    'class-6': 'Class 6',
    'class-7': 'Class 7',
    'class-8': 'Class 8',
    'class-9': 'Class 9',
    'class-10': 'Class 10',
    'basic': 'Basic English',
    'advanced': 'Advanced English',
    'practical': 'Practical English',
  };

  // Use items if provided, then customPaths, otherwise generate from URL
  const breadcrumbs = items || customPaths || pathnames.map((value, index) => {
    const url = `/${pathnames.slice(0, index + 1).join('/')}`;
    const label = routeNameMap[value] || value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');
    return { path: url, label };
  });

  return (
    <nav aria-label="breadcrumb" className="breadcrumbs-container">
      <div className="container">
        <ol className="breadcrumb">
          {!items && (
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
          )}
          {breadcrumbs.map((breadcrumb, index) => (
            <li 
              key={breadcrumb.path} 
              className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
              aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
            >
              {index === breadcrumbs.length - 1 ? (
                breadcrumb.label
              ) : (
                <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs; 