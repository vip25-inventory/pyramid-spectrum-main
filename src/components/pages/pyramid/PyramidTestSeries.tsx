import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import '../TestSeriesPage.css';
import Breadcrumbs from '../../common/Breadcrumbs';
import AnimatedButton from '../../common/AnimatedButton';
import CollisionButton from '../../common/CollisionButton';
import { getCanonicalUrl } from '../../../utils/seoUtils';

// Sub-components
const PyramidTestSeries = () => {
  return (
    <div className="test-series-home">
      <Helmet>
        <title>Test Series | NEET, IIT-JEE & Board Exams | SPECTRUM Education</title>
        <meta name="description" content="Prepare effectively with SPECTRUM's comprehensive test series for NEET, IIT-JEE and Board exams. Regular assessments, performance tracking, and detailed feedback." />
        <meta name="keywords" content="test series, NEET test series, IIT-JEE practice tests, board exam preparation, mock tests, exam practice" />
        <link rel="canonical" href={getCanonicalUrl("/test-series")} />
      </Helmet>
      
      <div className="container">
        <Breadcrumbs 
          customPaths={[
            { path: '/test-series', label: 'Test Series' }
          ]} 
        />
        <div className="page-header">
          <h1>Test Series</h1>
          <p>Support for NEET, IIT-JEE, and Board Exams with regular assessments and discussions</p>
        </div>
        
        <div className="section test-series-overview">
          <h2><span className="text-black">Comprehensive</span> Exam Preparation</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="course-category-card d-flex flex-column h-100">
                <div className="course-category-icon mb-3">
                  <i className="fas fa-flask"></i>
                </div>
                <h3>NEET Test Series</h3>
                <p>Specialized test series to prepare for the National Eligibility cum Entrance Test for medical admissions</p>
                <div className="text-center mt-auto">
                  <CollisionButton 
                    text="Enquire Now"
                    href="https://careerpoint.ac.in/center/vellore"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="course-category-card d-flex flex-column h-100">
                <div className="course-category-icon mb-3">
                  <i className="fas fa-calculator"></i>
                </div>
                <h3>IIT-JEE Test Series</h3>
                <p>Focused test series for the Joint Entrance Examination for engineering admissions</p>
                <div className="text-center mt-auto">
                  <CollisionButton 
                    text="Enquire Now"
                    href="https://careerpoint.ac.in/center/vellore"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="course-category-card d-flex flex-column h-100">
                <div className="course-category-icon mb-3">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Board Exam Tests</h3>
                <p>Comprehensive test series for ICSE, CBSE, and State Board exam preparation</p>
                <div className="text-center mt-auto">
                  <CollisionButton 
                    text="Enquire Now"
                    href="/course-registration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section features">
          <h2><span className="text-black">Features of</span> Our Test Series</h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="feature-item d-flex flex-column h-100">
                <div className="feature-icon mb-3">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>Regular Tests</h3>
                <p>Consistent test scheduling to help maintain study momentum and track progress</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item d-flex flex-column h-100">
                <div className="feature-icon mb-3">
                  <i className="fas fa-comments"></i>
                </div>
                <h3>Assignments & Discussions</h3>
                <p>Interactive sessions to resolve doubts and deepen understanding of concepts</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item d-flex flex-column h-100">
                <div className="feature-icon mb-3">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Performance Assessment</h3>
                <p>Detailed analysis of strengths and areas needing improvement to guide your study plan</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item d-flex flex-column h-100">
                <div className="feature-icon mb-3">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Flexible Timings</h3>
                <p>Multiple test schedules to accommodate your personal study routine and commitments</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section concept-clarity bg-transparent">
          <div className="row g-4">
            <div className="col-12">
              <div className="clarity-content text-center">
                <h2><span className="text-black">Achieve</span> Concept Clarity</h2>
                <p className="section-intro">Our test series is designed to provide more than just practice - it's built to enhance your conceptual understanding and problem-solving abilities.</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="feature-item h-100">
                <div className="feature-icon mb-3">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <h3>Regular Testing</h3>
                <p>Consistent test scheduling that helps maintain your study momentum and builds exam temperament</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-item h-100">
                <div className="feature-icon mb-3">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Interactive Learning</h3>
                <p>Assignments and discussions that deepen your understanding of core concepts and solve doubts</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-item h-100">
                <div className="feature-icon mb-3">
                  <i className="fas fa-analytics"></i>
                </div>
                <h3>Performance Insights</h3>
                <p>Detailed analysis of your strengths and improvement areas to optimize your study plan</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <AnimatedButton 
              text="Join Our Test Series"
              href="/course-registration"
              className="test-series-enroll-btn"
            />
          </div>
        </div>
        
        <div className="section subject-focus">
          <h2>Subject-Focused <span className="text-black">Testing</span></h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="level-box h-100 d-flex flex-column">
                <div className="level-icon mb-3">
                  <i className="fas fa-square-root-alt subject-icon"></i>
                </div>
                <h3>Mathematics</h3>
                <p className="mb-0">Specialized tests for algebra, calculus, geometry, and more</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="level-box h-100 d-flex flex-column">
                <div className="level-icon mb-3">
                  <i className="fas fa-atom subject-icon"></i>
                </div>
                <h3>Physics</h3>
                <p className="mb-0">Practice tests covering mechanics, electromagnetism, and modern physics</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="level-box h-100 d-flex flex-column">
                <div className="level-icon mb-3">
                  <i className="fas fa-flask subject-icon"></i>
                </div>
                <h3>Chemistry</h3>
                <p className="mb-0">Comprehensive tests for organic, inorganic, and physical chemistry</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="level-box h-100 d-flex flex-column">
                <div className="level-icon mb-3">
                  <i className="fas fa-dna subject-icon"></i>
                </div>
                <h3>Biology</h3>
                <p className="mb-0">In-depth testing for botany, zoology, human physiology, and genetics</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section cta-section">
          <div className="cta-content">
            <h2>Ready to Test Your Knowledge?</h2>
            <p>Join our comprehensive test series program to enhance your exam preparation</p>
            <div className="cta-buttons">
              <AnimatedButton 
                text="Contact Us"
                href="/contact"
                className="test-series-enroll-btn"
              />
              <CollisionButton 
                text="Explore Courses"
                href="/courses"
                className="explore-courses-btn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestSeriesPage: React.FC = () => {
  return (
    <div className="test-series-page">
      <Routes>
        <Route path="/" element={<PyramidTestSeries />} />
        <Route path="*" element={<PyramidTestSeries />} />
      </Routes>
    </div>
  );
};

export default PyramidTestSeries; 