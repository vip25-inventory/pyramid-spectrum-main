import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, Navigate } from 'react-router-dom';
import './StudyMaterialsPage.css';
import Breadcrumbs from '../common/Breadcrumbs';
import AnimatedButton from '../common/AnimatedButton';
import CollisionButton from '../common/CollisionButton';
import { getCanonicalUrl } from '../../utils/seoUtils';

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
        
        <div className="section spoken-english">
          <h2>Language Development Materials</h2>
          <p className="section-intro">Available for all ages - No age limit</p>
          
          <div className="row g-4 mb-4">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="level-box h-100 d-flex flex-column">
                <div className="level-icon mb-3">
                  <i className="fas fa-book-open text-primary"></i>
                </div>
                <h3>Basic English</h3>
                <p className="mb-0">Grammar worksheets and vocabulary builders</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="level-box h-100 d-flex flex-column">
                <div className="level-icon mb-3">
                  <i className="fas fa-comments text-primary"></i>
                </div>
                <h3>Advanced English</h3>
                <p className="mb-0">Writing exercises and speech preparation materials</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="level-box h-100 d-flex flex-column">
                <div className="level-icon mb-3">
                  <i className="fas fa-users text-primary"></i>
                </div>
                <h3>Practical English</h3>
                <p className="mb-0">Debate materials and public speaking guides</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4 mt-2">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="feature-list h-100 d-flex flex-column">
                <h3 className="mb-3">Material Features</h3>
                <ul className="mb-0">
                  <li>Created using "Speech Production Methodology"</li>
                  <li>Available in both digital and print formats</li>
                  <li>Regular updates with new content</li>
                  <li>Supplemented with audio resources</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="feature-cta h-100 d-flex flex-column align-items-center justify-content-center">
                <AnimatedButton 
                  text="Enroll Now for English Materials"
                  href="/course-registration"
                  className="english-materials-btn"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="section handwriting-calligraphy">
          <h2>Handwriting & Calligraphy Materials</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="course-card">
                <div className="course-img">
                  <img src="/images/handwriting-materials.jpg" alt="Handwriting Materials" />
                </div>
                <div className="course-content">
                  <h3>Handwriting Practice Sheets</h3>
                  <p>Worksheets for improving neatness, speed, and letter formation</p>
                  <div className="course-details">
                    <p><strong>Types:</strong> Cursive, Print, Calligraphy</p>
                    <p><strong>Languages:</strong> Hindi, English, Tamil</p>
                  </div>
                  <CollisionButton 
                    text="Enroll Now"
                    href="/course-registration"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="course-card">
                <div className="course-img">
                  <img src="/images/calligraphy-resources.jpg
                  " alt="Calligraphy Materials" />
                </div>
                <div className="course-content">
                  <h3>Calligraphy Resources</h3>
                  <p>Stroke guides, practice templates, and design layouts</p>
                  <div className="course-details">
                    <p><strong>Tools:</strong> Dip pens, brushes, markers</p>
                    <p><strong>Levels:</strong> Beginner to Professional</p>
                  </div>
                  <CollisionButton 
                    text="Enroll Now"
                    href="/course-registration"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section personality-development">
          <h2>Personality Development Resources</h2>
          <div className="row g-4">
            <div className="col-lg-6 col-md-12">
              <div className="modules-list h-100">
                <h3 className="mb-3">Resources Include</h3>
                <div className="row g-0">
                  <div className="col-md-6 col-sm-12">
                    <ul className="mb-md-0 mb-3">
                      <li>Communication Workbooks</li>
                      <li>Group Discussion Guides</li>
                      <li>Presentation Templates</li>
                      <li>Interview Preparation</li>
                      <li>Body Language Guides</li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <ul className="mb-0">
                      <li>Public Speaking Scripts</li>
                      <li>Professional Etiquette</li>
                      <li>Accent Training Audio</li>
                      <li>Language Lab Resources</li>
                      <li>Pronunciation Guides</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="audience-box h-100 d-flex flex-column">
                <h3 className="mb-3">Who Can Benefit</h3>
                <div className="audience-tags mb-4">
                  <span className="audience-tag">Students</span>
                  <span className="audience-tag">Job Seekers</span>
                  <span className="audience-tag">Employees</span>
                  <span className="audience-tag">Professionals</span>
                  <span className="audience-tag">Business Owners</span>
                  <span className="audience-tag">Homemakers</span>
                </div>
                <div className="mt-auto text-center text-md-start">
                  <AnimatedButton 
                    text="Enroll Now for Personality Development Materials"
                    href="/course-registration"
                    className="personality-development-materials-btn"
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

const StudyMaterialsPage: React.FC = () => {
  return (
    <div className="study-materials-page">
      <Routes>
        <Route path="/" element={<StudyMaterialsHome />} />
        <Route path="*" element={<Navigate to="/study-materials" replace />} />
      </Routes>
    </div>
  );
};

export default StudyMaterialsPage; 