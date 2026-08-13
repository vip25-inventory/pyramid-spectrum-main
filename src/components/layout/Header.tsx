import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import SpectrumNav from './SpectrumNavbar';
import PyramidNav from './PyramidNavbar';

import './Header.css';
import './NavbarAnimation.css';

const Header: React.FC = () => {

  const location = useLocation();

  const isSpectrum = location.pathname.startsWith('/spectrum');
  const isPyramid = location.pathname.startsWith('/pyramid');

  // All pages that belong to the original website
  const isOriginalPage =
    location.pathname === '/' ||
    location.pathname.startsWith('/test-series') ||
    location.pathname.startsWith('/results') ||
    location.pathname.startsWith('/study-materials') ||
    location.pathname === '/about' ||
    location.pathname === '/contact' ||
    location.pathname === '/course-registration' ||
    location.pathname === '/login';

  // ==========================================
  // ORIGINAL WEBSITE
  // ==========================================

  if (isOriginalPage) {
    return <OriginalLandingHeader />;
  }

  // ==========================================
  // SPECTRUM
  // ==========================================

  if (isSpectrum) {
    return <SpectrumNav />;
  }

  // ==========================================
  // PYRAMID
  // ==========================================

  if (isPyramid) {
    return <PyramidNav />;
  }

  return null;
};


// ==========================================
// ORIGINAL LANDING HEADER
// ==========================================

const OriginalLandingHeader: React.FC = () => {

  return (
    <header className="site-header">

      <div className="container">

        <div className="header-inner">

          {/* ORIGINAL LOGO */}
          <div className="logo">
                      <Link to="/">
                        <img 
                          src="/images/pyramid_new_logo.png" 
                          alt="Pyramid Academy" 
                          height="80" 
                        />
                        <div className="logo-divider"></div>
                        <img 
                          src="/images/spectrum_new_logo.png" 
                          alt="Spectrum Academy" 
                          height="60" 
                        />
                        {/* <div className="logo-text-container">
                          <span className="logo-text">SPECTRUM</span> */}
                          {/* <span className="logo-subtitle">by Pyramid Academy</span> */}
                          {/* <span className="logo-year">( since 2006 )</span> */}
                        {/* </div> */}
                      </Link>
                    </div>

          {/* ORIGINAL ACTION BUTTONS */}

          <div className="header-actions">

            <a
              href="/course-registration"
              className="btn-callback"
              title="Register"
            >

              <img
                src="/form-6.png"
                alt="Register"
              />

            </a>


            <a
              href="/contact"
              className="btn-callback"
              title="Contact"
            >

              <i className="fas fa-phone"></i>

            </a>


            {/* <a
              href="/login"
              className="btn-login"
            >
              Login
            </a> */}

          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;