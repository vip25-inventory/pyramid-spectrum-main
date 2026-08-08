import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './StudyMaterialsPage.css'; // Reusing existing styles
import './AboutPage.css'; // New CSS file for About page specific styles
import Breadcrumbs from '../common/Breadcrumbs';
import AnimatedButton from '../common/AnimatedButton';
import { getCanonicalUrl } from '../../utils/seoUtils';
import { companyContent } from '../../data/companyContent';

const AboutPage: React.FC = () => {
   const { company } = useParams<{ company: string }>();

const content = company ? companyContent[company] : undefined;

if (!content) {
  return <div>Company not found.</div>;
}
  return (
    <div className="about-page">
      <Helmet>
        <title>About SPECTRUM Education | Our Story & Mission</title>
        <meta name="description" content="Learn about SPECTRUM Education, part of Pyramid Academy. Established in 2006, we've trained over 10,000 students in academic and communication skills." />
        <meta name="keywords" content="SPECTRUM education, Pyramid Academy, about us, educational institute, coaching center vellore, english classes vellore" />
        <link rel="canonical" href={getCanonicalUrl("/about")} />
      </Helmet>
      
      <div className="container py-4">
        <Breadcrumbs 
          customPaths={[
            { path: '/about', label: 'About' }
          ]} 
        />
        
        <div className="page-header">
          <h1>{content.pageTitle}</h1>
          <p className="text-muted mb-0">
             {content.description}
          </p>
        </div>
        
        <div className="section about-overview mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="about-card">
                <h2 className="text-center mb-3">
                  <span style={{ color: '#000' }}>Our</span> <span>Story</span>
                </h2>
                <p className="text-justify">
               {content.story}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="vision-card">
                <h2 className="text-center mb-3">
                  <span style={{ color: '#000' }}>Our</span> <span>Vision</span>
                </h2>
                <p className="text-justify">
                 {content.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section why-pyramid-spectrum">
          <h2 className="text-center">
            <span style={{ color: '#000' }}>Why</span> Choose Pyramid Spectrum?
          </h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h3>You Dream. We Coach. You Achieve.</h3>
                <p className="mb-0">We're committed to turning your academic dreams into reality</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-user-friends"></i>
                </div>
                <h3>Personalized Attention</h3>
                <p className="mb-0">Individual focus that brings out your best academic performance</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Supportive Mentors</h3>
                <p className="mb-0">Our educators believe in your potential to succeed</p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-arrow-up"></i>
                </div>
                <h3>Failures Become Stepping Stones</h3>
                <p className="mb-0">We help turn challenges into opportunities for growth</p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h3>Confidence + Concept = Success</h3>
                <p className="mb-0">We build both knowledge and self-belief for lasting achievement</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="section why-spectrum">
          <h2 className="text-center">
            <span style={{ color: '#000' }}>Why</span> Choose Us?
          </h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Effective Training Methods</h3>
                <p className="mb-0">Customized training approaches tailored to individual learning needs</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h3>Expert Trainers</h3>
                <p className="mb-0">Learn from experienced and efficient educators passionate about student success</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h3>Hands-on Learning</h3>
                <p className="mb-0">Live classes, assessments, and interactive discussions to reinforce concepts</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-smile"></i>
                </div>
                <h3>Supportive Environment</h3>
                <p className="mb-0">Friendly and encouraging atmosphere that promotes learning and growth</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Flexible Scheduling</h3>
                <p className="mb-0">Convenient batch timings to accommodate various student needs and schedules</p>
              </div>
            </div>
          </div>
        </div> */}
        
        <div className="section parents-partner">
          <h2 className="text-center">
            <span style={{ color: '#000' }}>Parents'</span> Trusted Partner
          </h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h3>Real-time Progress Updates</h3>
                <p className="mb-0">Regular feedback on your child's academic development</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h3>Regular PTMs and Feedback</h3>
                <p className="mb-0">Consistent communication through parent-teacher meetings</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h3>Building Thinkers, Not Just Toppers</h3>
                <p className="mb-0">Focus on developing critical thinking and problem-solving abilities</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section success-journey">
          <h2 className="text-center">
            <span style={{ color: '#000' }}>Success</span> is a Journey
          </h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Smart Goals and Consistent Growth</h3>
                <p className="mb-0">Setting achievable targets and building steady progress</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-award"></i>
                </div>
                <h3>Celebrate Small Wins</h3>
                <p className="mb-0">Recognizing and rewarding every step forward in the learning journey</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Motivation and Mindset Training</h3>
                <p className="mb-0">Developing the right attitude for long-term academic success</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section our-locations">
          <h2 className="text-center">
            <span style={{ color: '#000' }}>Our</span> Locations
          </h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="location-card">
                <h3>Vellore</h3>
                <p className="mb-0">City Centre, Officer's Line (Opp. Voorhees School). Vellore - 632001</p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="location-card">
                <h3>Katpadi</h3>
                <p className="mb-0">Jagannathan Nagar, Gandhinagar (Near Auxilium College). Vellore - 632006</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section achievements">
          <h2 className="text-center">
            <span style={{ color: '#000' }}>Our</span> Achievements
          </h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="stat-card">
                <div className="stat-value">2006</div>
                <div className="stat-label">Year Established</div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="stat-card">
                <div className="stat-value">12+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="stat-card">
                <div className="stat-value">10,000+</div>
                <div className="stat-label">Students Trained</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section cta-section">
          <div className="cta-content text-center">
            <h2 style={{ color: 'black', fontSize: '1.3rem', fontWeight: 'bold' }}>Join the Spectrum by <b style={{ color: '#2a50a2' }}>Pyramid Academy</b> Family</h2>
            <p className="text-muted mb-4">Transform your academic journey with our expert guidance and proven success record</p>
            <AnimatedButton 
              text="Contact Us Today" 
              href="/contact"
              className="contact-us-about-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 