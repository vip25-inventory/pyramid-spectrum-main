import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const SpectrumFooter: React.FC = () => {
  return (
    <footer className="site-footer">

      <div className="container">

        <div className="footer-content">

          <div className="footer-column">
            <h4>About Spectrum</h4>

            <ul>
              <li>
                <Link to="/spectrum/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/spectrum/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                              <Link to="/spectrum/course-registration">
                                Register For Course
                              </Link>
                            </li>
            </ul>
          </div>


          <div className="footer-column">
            <h4>Courses</h4>

            <ul>
              <li>
                <Link to="/spectrum/SpectrumCoursesPage/spectrum/neet">
                  NEET
                </Link>
              </li>

              <li>
                <Link to="/spectrum/SpectrumCoursesPage/spectrum/iit-jee">
                  IIT-JEE
                </Link>
              </li>
            </ul>
          </div>


          <div className="footer-column">
            <h4>Resources</h4>

            <ul>
              <li>
                <Link to="/spectrum/test-series">
                  Test Series
                </Link>
              </li>

              <li>
                <Link to="/spectrum/study-materials">
                  Study Materials
                </Link>
              </li>

              <li>
                <Link to="/spectrum/results">
                  Results
                </Link>
              </li>
            </ul>
          </div>


          <div className="footer-column">
            <h4>Connect With Us</h4>

            <div className="social-icons">

              <a
                href="https://www.facebook.com/people/Spectrum-By-Pyramid-Academy/61574901208336/"
                aria-label="Facebook"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://www.instagram.com/spectrum_vellore/?hl=en"
                aria-label="Instagram"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://www.youtube.com/"
                aria-label="YouTube"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>

              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

            </div>
          </div>

        </div>


        <div className="footer-bottom">

          <div className="copyright">

            <p>
              © 2025 Spectrum by Pyramid Academy. All rights reserved |
              {' '}Crafted by{' '}

              <a
                href="https://scorpioninfotechsolutions.in"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#2a50a2',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Scorpion Infotech Solutions
              </a>

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default SpectrumFooter;