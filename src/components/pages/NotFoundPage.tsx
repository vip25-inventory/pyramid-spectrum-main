import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import './NotFoundPage.css';
import Breadcrumbs from '../common/Breadcrumbs';
import AnimatedButton from '../common/AnimatedButton';
import { getCanonicalUrl } from '../../utils/seoUtils';

const NotFoundPage: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log('NotFoundPage mounted. Current path:', location.pathname);
  }, [location.pathname]);
  
  return (
    <div className="not-found-page">
      <Helmet>
        <title>Page Not Found | 404 Error | SPECTRUM Education</title>
        <meta name="description" content="The page you're looking for doesn't exist or has been moved. Please navigate to our homepage or use the suggested links." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={getCanonicalUrl("/404")} />
      </Helmet>
      
      <div className="container">
        <Breadcrumbs 
          items={[
            { label: 'Home', path: '/' },
            { label: '404', path: '/404' }
          ]} 
        />
        
        <div className="not-found-content">
          <h1>Page Not Found</h1>
          <p className="not-found-message">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="illustration-container">
            <div className="person">
              <img src="/images/astronaut.svg" alt="Person searching" className="person-image" />
            </div>
            <div className="map">
              <img src="/images/planet.svg" alt="Map" className="map-image" />
            </div>
          </div>
          
          <div className="action-buttons">
            <AnimatedButton 
              text="Back to Home"
              href="/"
              className="home-button"
            />
          </div>
          
          <div className="helpful-links">
            <h3>You might be looking for:</h3>
            <div className="links-grid">
              <Link to="/courses" className="helpful-link">
                <i className="fas fa-graduation-cap"></i>
                <span>Courses</span>
              </Link>
              <Link to="/test-series" className="helpful-link">
                <i className="fas fa-tasks"></i>
                <span>Test Series</span>
              </Link>
              <Link to="/study-materials" className="helpful-link">
                <i className="fas fa-book"></i>
                <span>Study Materials</span>
              </Link>
              <Link to="/contact" className="helpful-link">
                <i className="fas fa-envelope"></i>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 