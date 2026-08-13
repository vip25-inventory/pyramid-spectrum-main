import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, Navigate } from 'react-router-dom';
import '../StudyMaterialsPage.css';
import Breadcrumbs from '../../common/Breadcrumbs';
import AnimatedButton from '../../common/AnimatedButton';
import CollisionButton from '../../common/CollisionButton';
import { getCanonicalUrl } from '../../../utils/seoUtils';

// Sub-components
const StudyMaterialsHome = () => {
  return (
    <div className="study-materials-home">
      <Helmet>
        <title>Study Materials | Academic & Exam Resources | SPECTRUM Education</title>
        <meta name="description" content="Access high-quality study materials from SPECTRUM Education for NEET, IIT-JEE, and board exams. Comprehensive resources for all subjects and language development." />
        <meta name="keywords" content="study materials, academic resources, exam preparation, learning packages, NEET resources, JEE materials" />
        <link rel="canonical" href={getCanonicalUrl("/study-materials")} />
      </Helmet>
      
      <div className="container">
        <Breadcrumbs 
          customPaths={[
            { path: '/study-materials', label: 'Study Materials' }
          ]} 
        />
        <div className="page-header">
          <h1>Study Materials</h1>
          <p>Tailored learning packages for academic and competitive exam preparation since 2006</p>
        </div>
        
        <div className="section materials-overview">
          <h2>Our Academic Resources</h2>
          <div className="row g-4">
            <div className="col-lg-6 col-md-12">
              <div className="course-category-card d-flex flex-column h-100">
                <div className="course-category-icon mb-3">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Subject-Specific Materials (Class 6–12)</h3>
                <p>Comprehensive study materials in Maths, Physics, Chemistry, and Biology for ICSE, CBSE and State Board students</p>
                <div className="course-features mt-auto mb-3">
                  <ul className="mb-4">
                    <li>Detailed Study Notes</li>
                    <li>Topic-wise Question Banks</li>
                    <li>Solved Examples</li>
                    <li>Practice Exercises</li>
                    <li>Self-Assessment Tests</li>
                  </ul>
                </div>
                <div className="text-center mt-auto">
                  <CollisionButton 
                    text="Enroll Now"
                    href="/course-registration"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="course-category-card d-flex flex-column h-100">
                <div className="course-category-icon mb-3">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h3>Exam-Focused Materials (Class 10–12)</h3>
                <p>Specialized worksheets and mock tests for competitive exams including NEET, JEE, and board examinations</p>
                <div className="course-features mt-auto mb-3">
                  <ul className="mb-4">
                    <li>Previous Year Papers</li>
                    <li>Mock Test Series</li>
                    <li>Important Questions</li>
                    <li>Quick Revision Notes</li>
                    <li>Formula Sheets</li>
                  </ul>
                </div>
                <div className="text-center mt-auto">
                  <CollisionButton 
                    text="Enroll Now"
                    href="/course-registration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section features">
          <h2>Why Choose Our Study Materials</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Expert Created</h3>
                <p>Materials developed by experienced educators with proven track records</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                <h3>Comprehensive Coverage</h3>
                <p>Well-structured content that covers every aspect of the syllabus</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <h3>Practice-Oriented</h3>
                <p>Abundant exercises and examples for effective learning and retention</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-user-cog"></i>
                </div>
                <h3>Customizable Packages</h3>
                <p>Materials available in modular format to suit individual learning needs</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section cta-section">
          <div className="cta-content">
            <h2>Enhance Your Learning Journey Today</h2>
            <p>Get access to premium study materials tailored to your academic needs</p>
            <AnimatedButton 
              text="Contact Us"
              href="/contact"
              className="study-materials-enquire-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SpectrumStudyPage: React.FC = () => {
  return (
    <div className="study-materials-page">
      <Routes>
        <Route path="/" element={<StudyMaterialsHome />} />
        <Route path="*" element={<Navigate to="/study-materials" replace />} />
      </Routes>
    </div>
  );
};

export default SpectrumStudyPage; 