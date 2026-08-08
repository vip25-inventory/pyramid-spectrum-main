import React from 'react';
import { Link } from 'react-router-dom';
import './StudyMaterialsPage.css';
import './JEEMaterialsPage.css';
import Breadcrumbs from '../common/Breadcrumbs';

const JEEMaterialsPage: React.FC = () => {
  return (
    <div className="jee-study-materials-page">
      <div className="container">
        <Breadcrumbs 
          customPaths={[
            { path: '/study-materials', label: 'Study Materials' },
            { path: '/study-materials/jee', label: 'JEE' }
          ]} 
        />
        <div className="page-header">
          <h1>JEE Study Materials</h1>
          <p>Comprehensive study resources designed for JEE Main & Advanced preparation</p>
        </div>
        
        <div className="section jee-overview">
          <h2>Prepare for JEE with SPECTRUM</h2>
          <p>
            Our meticulously crafted JEE study materials are designed by top educators and JEE experts to help
            you master concepts, practice effectively, and excel in your JEE Main and Advanced examinations.
          </p>
          
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="info-card">
                <h3>JEE Main Materials</h3>
                <ul className="feature-list">
                  <li>Comprehensive topic-wise notes</li>
                  <li>Previous 10 years' JEE Main papers with solutions</li>
                  <li>Chapter-wise MCQ practice sets</li>
                  <li>Full-length mock tests simulating JEE Main pattern</li>
                  <li>Important formulae sheets</li>
                </ul>
                <Link to="/study-materials/jee/main" className="btn btn-primary mt-3">Explore JEE Main Materials</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-card">
                <h3>JEE Advanced Materials</h3>
                <ul className="feature-list">
                  <li>In-depth conceptual notes for advanced topics</li>
                  <li>Previous 10 years' JEE Advanced papers with detailed solutions</li>
                  <li>Advanced problem-solving techniques</li>
                  <li>Subject-wise challenging problem sets</li>
                  <li>Multi-concept application questions</li>
                </ul>
                <Link to="/study-materials/jee/advanced" className="btn btn-primary mt-3">Explore JEE Advanced Materials</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section subject-materials">
          <h2>Subject-wise JEE Materials</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="subject-card physics">
                <div className="subject-icon">
                  <i className="fas fa-atom"></i>
                </div>
                <h3>Physics</h3>
                <ul className="subject-topics">
                  <li>Mechanics</li>
                  <li>Thermodynamics</li>
                  <li>Electrodynamics</li>
                  <li>Optics</li>
                  <li>Modern Physics</li>
                </ul>
                <Link to="/study-materials/jee/physics" className="btn btn-outline-primary">Physics Materials</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="subject-card chemistry">
                <div className="subject-icon">
                  <i className="fas fa-flask"></i>
                </div>
                <h3>Chemistry</h3>
                <ul className="subject-topics">
                  <li>Physical Chemistry</li>
                  <li>Organic Chemistry</li>
                  <li>Inorganic Chemistry</li>
                  <li>Analytical Chemistry</li>
                  <li>Environmental Chemistry</li>
                </ul>
                <Link to="/study-materials/jee/chemistry" className="btn btn-outline-primary">Chemistry Materials</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="subject-card mathematics">
                <div className="subject-icon">
                  <i className="fas fa-square-root-alt"></i>
                </div>
                <h3>Mathematics</h3>
                <ul className="subject-topics">
                  <li>Algebra</li>
                  <li>Calculus</li>
                  <li>Coordinate Geometry</li>
                  <li>Trigonometry</li>
                  <li>Probability & Statistics</li>
                </ul>
                <Link to="/study-materials/jee/mathematics" className="btn btn-outline-primary">Mathematics Materials</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section study-resources">
          <h2>Essential JEE Study Resources</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="resource-card">
                <div className="resource-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Digital Study Modules</h3>
                <p>Interactive e-learning modules with animations and concept visualizations</p>
                <Link to="/study-materials/jee/digital-modules" className="btn btn-sm btn-outline-secondary">View Details</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="resource-card">
                <div className="resource-icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <h3>Daily Practice Problems</h3>
                <p>Curated daily practice sets to build consistency and problem-solving speed</p>
                <Link to="/study-materials/jee/daily-practice" className="btn btn-sm btn-outline-secondary">View Details</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="resource-card">
                <div className="resource-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Video Lectures</h3>
                <p>Concept explanation videos by experienced JEE mentors and top educators</p>
                <Link to="/study-materials/jee/video-lectures" className="btn btn-sm btn-outline-secondary">View Details</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="resource-card">
                <div className="resource-icon">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h3>Test Series</h3>
                <p>Chapter tests, subject tests, and full-length mock tests with detailed analysis</p>
                <Link to="/test-series" className="btn btn-sm btn-outline-secondary">View Details</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section preparation-strategy">
          <h2>JEE Preparation Strategy</h2>
          <div className="strategy-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h3>Build Strong Fundamentals</h3>
                <p>Start with NCERT textbooks and SPECTRUM's basic modules to strengthen your foundation</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Concept Mastery</h3>
                <p>Use our comprehensive notes and video lectures to master each concept thoroughly</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Regular Problem Solving</h3>
                <p>Practice with our curated problem sets to improve your problem-solving abilities</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>Test & Analysis</h3>
                <p>Take regular mock tests and analyze your performance to identify weak areas</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">5</div>
              <div className="timeline-content">
                <h3>Revision & Fine-tuning</h3>
                <p>Use our revision modules and quick reference materials to consolidate your learning</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section testimonials">
          <h2>Success Stories</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src="/assets/images/testimonials/student1.jpg" alt="JEE Topper" />
                </div>
                <h3>Aditya Sharma</h3>
                <p className="rank">JEE Advanced AIR 45</p>
                <p className="quote">"SPECTRUM's JEE materials were crucial in my preparation. The subject-wise approach and practice sets helped me master complex topics efficiently."</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src="/assets/images/testimonials/student2.jpg" alt="JEE Main Topper" />
                </div>
                <h3>Priya Patel</h3>
                <p className="rank">JEE Main 99.8 Percentile</p>
                <p className="quote">"The digital modules and mock tests from SPECTRUM were game-changers for my preparation. I could identify my weak areas and work on them systematically."</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src="/assets/images/testimonials/student3.jpg" alt="JEE Success Story" />
                </div>
                <h3>Rahul Mehta</h3>
                <p className="rank">IIT Bombay - Computer Science</p>
                <p className="quote">"SPECTRUM's advanced problem sets challenged me and prepared me for the toughest questions in JEE Advanced. Their materials cover every possible type of question."</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section cta-section">
          <div className="cta-content">
            <h2>Ready to Excel in JEE?</h2>
            <p>Join SPECTRUM's comprehensive JEE preparation program and get access to all study materials, test series, and expert guidance.</p>
            <div className="cta-buttons">
              <Link to="/courses/jee" className="btn btn-primary mr-3">Explore JEE Courses</Link>
              <Link to="/contact" className="btn btn-outline-primary">Talk to an Expert</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JEEMaterialsPage; 