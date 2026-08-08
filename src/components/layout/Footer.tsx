import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/course-registration">Register for Courses</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Courses</h4>
            <ul>
              <li><Link to="/courses/english">Spoken English</Link></li>
              <li><Link to="/courses/neet">NEET</Link></li>
              <li><Link to="/courses/iit-jee">IIT-JEE</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Spoken English</h4>
            <ul>
              <li><Link to="/courses/english/basic">Basic</Link></li>
              <li><Link to="/courses/english/advanced">Advanced</Link></li>
              <li><Link to="/courses/english/practical">Practical</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/test-series">Test Series</Link></li>
              <li><Link to="/study-materials">Study Materials</Link></li>
              <li><Link to="/results">Results</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/people/Spectrum-By-Pyramid-Academy/61574901208336/" aria-label="Facebook" className="social-icon" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/spectrum_vellore/?hl=en" aria-label="Instagram" className="social-icon" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/" aria-label="YouTube" className="social-icon" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="social-icon" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>© 2025 SPECTRUM by Pyramid Academy. All rights reserved | Crafted by <a href="https://scorpioninfotechsolutions.in" target="_blank" rel="noreferrer" style={{ color: '#2a50a2', textDecoration: 'none', fontWeight: 'bold' }}>Scorpion Infotech Solutions</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 