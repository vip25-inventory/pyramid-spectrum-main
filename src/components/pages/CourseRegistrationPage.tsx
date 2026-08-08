import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './CourseRegistrationPage.css';
import Breadcrumbs from '../common/Breadcrumbs';
import Loader from '../common/Loader';
import { getCanonicalUrl } from '../../utils/seoUtils';

const CourseRegistrationPage: React.FC = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Ensure the iframe loads properly and adjust content as needed
  useEffect(() => {
    // Set page title
    document.title = 'Course Registration | Spectrum';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <div className="course-registration-page">
      <Helmet>
        <title>Course Registration | Enroll in SPECTRUM Courses</title>
        <meta name="description" content="Register for SPECTRUM Education's courses. Fill out our simple form to enroll in NEET, IIT-JEE, Spoken English, and other programs." />
        <meta name="keywords" content="course registration, enroll, SPECTRUM courses, admission form, course enrollment" />
        <link rel="canonical" href={getCanonicalUrl("/course-registration")} />
      </Helmet>
      
      <div className="container">
        <Breadcrumbs 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Course Registration', path: '/course-registration' }
          ]} 
        />
        
        <div className="page-header text-center">
          <h1>Course Registration</h1>
          <p>Complete the form below to register for our courses</p>
        </div>
        
        <div className="section">
          <div className="google-form-wrapper">
            {!iframeLoaded && <Loader text="Loading registration form..." />}
            <iframe 
              ref={iframeRef}
              src="https://docs.google.com/forms/d/e/1FAIpQLSf5SPALm32HA8oXYE7UOBxjupRYa4vehBnMsBXozuuX1Hdhww/viewform?embedded=true" 
              width="100%" 
              height="2073" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="Course Registration Form"
              onLoad={handleIframeLoad}
              className={iframeLoaded ? 'loaded' : ''}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRegistrationPage; 