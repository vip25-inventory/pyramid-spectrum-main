import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './NavbarAnimation.css';
import { useAppContext } from '../../context/AppContext';

const Header: React.FC = () => {
  const { isMobile } = useAppContext();
  const [showCourses, setShowCourses] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSubmenuItems, setActiveSubmenuItems] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to add glassy effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset all menus when mobile menu is toggled
  useEffect(() => {
    if (!showMobileMenu) {
      setShowCourses(false);
      setActiveSubmenuItems({});
    }
  }, [showMobileMenu]);

  // Helper function to close all main menus except the one being toggled
  const closeOtherMainMenus = (currentMenu: string) => {
    if (currentMenu !== 'courses') setShowCourses(false);
  };

  const handleSubmenuToggle = (menuState: boolean, setMenuState: React.Dispatch<React.SetStateAction<boolean>>, menuName: string) => {
    // On mobile, toggle the menu
    if (isMobile) {
      // If opening a menu, close other menus first
      if (!menuState) {
        closeOtherMainMenus(menuName);
      }
      
      setMenuState(!menuState);
      
      // Reset active submenu items when closing a main menu
      if (menuState) {
        setActiveSubmenuItems({});
      }
    }
  };

  const handleSubItemToggle = (id: string) => {
    if (isMobile) {
      // Instead of closing all other submenu items, we'll maintain the parent menus
      const newActiveItems = { ...activeSubmenuItems };
      
      // Check if we're opening or closing this item
      const isOpening = !newActiveItems[id];
      
      if (isOpening) {
        // Identify parent-child relationships
        const isPyramidSubmenu = id === 'pyramid-courses';
        const isSpokenEnglishSubmenu = id === 'spoken-english-courses';
        const isSpectrumSubmenu = id === 'spectrum-courses';
        
        // Preserve parent menu states while closing unrelated menus
        Object.keys(newActiveItems).forEach(key => {
          // Don't close 'pyramid-courses' when opening 'spoken-english-courses'
          if (isSpokenEnglishSubmenu && key === 'pyramid-courses') {
            // Keep pyramid-courses open if opening spoken-english-courses
            newActiveItems[key] = true;
          } 
          // For other cases, close unrelated menus
          else if (
            (isSpokenEnglishSubmenu && key !== 'pyramid-courses') ||
            (isPyramidSubmenu && key !== 'spoken-english-courses') ||
            (isSpectrumSubmenu)
          ) {
            newActiveItems[key] = false;
          }
        });
        
        // Then open the clicked one
        newActiveItems[id] = true;
      } else {
        // Just close this one if we're closing
        newActiveItems[id] = false;
      }
      
      setActiveSubmenuItems(newActiveItems);
    }
  };

  const handleMenuMouseEvents = (enter: boolean, setMenuState: React.Dispatch<React.SetStateAction<boolean>>) => {
    // Only use hover events on desktop
    if (!isMobile) {
      setMenuState(enter);
    }
  };

  // Function to handle link clicks in mobile menu
  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) {
      // Close the mobile menu
      setShowMobileMenu(false);
      // Reset all dropdown states
      setShowCourses(false);
      setActiveSubmenuItems({});
      
      // Scroll to top of the page
      window.scrollTo(0, 0);
    }
  };

  // Close the mobile menu when clicking outside on mobile
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (isMobile && showMobileMenu) {
      const navigation = document.querySelector('.main-navigation');
      const mobileToggle = document.querySelector('.mobile-menu-toggle');
      
      if (navigation && mobileToggle && 
          !navigation.contains(event.target as Node) && 
          !mobileToggle.contains(event.target as Node)) {
        setShowMobileMenu(false);
      }
    }
  }, [isMobile, showMobileMenu]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <Link to="/">
              <img 
                src="/images/spectrum_new_logo.png" 
                alt="SPECTRUM Academy" 
                height="60" 
              />
              {/* <div className="logo-text-container">
                <span className="logo-text">SPECTRUM</span> */}
                {/* <span className="logo-subtitle">by Pyramid Academy</span> */}
                {/* <span className="logo-year">( since 2006 )</span> */}
              {/* </div> */}
            </Link>
          </div>

          <div className={`mobile-menu-toggle ${showMobileMenu ? 'active' : ''}`}
               onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`main-navigation ${showMobileMenu ? 'show' : ''}`}>
            <ul className="nav-menu">
              <li className="menu-item">
                <Link to="/spectrum/about" onClick={handleMobileLinkClick}>About</Link>
              </li>
               <li className="menu-item">
                <Link to="/spectrum/SpectrumCoursesPage" onClick={handleMobileLinkClick}>Courses</Link>
              </li>
              
              {/* <li className="menu-item">
                <a 
                  href="https://careerpoint.ac.in/center/vellore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleMobileLinkClick}
                >
                  NEET | JEE
                </a>
              </li> */}

              {/* <li className="menu-item">
                <Link to="/spectrum/test-series" onClick={handleMobileLinkClick}>Test Series</Link>
              </li>

              <li className="menu-item">
                <Link to="/spectrum/results" onClick={handleMobileLinkClick}>Results</Link>
              </li> */}

              <li className="menu-item">
                <Link to="/spectrum/study-materials" onClick={handleMobileLinkClick}>Study Materials</Link>
              </li>

              {/* <li className="menu-item">
                <Link to="/contact" onClick={handleMobileLinkClick}>Contact</Link>
              </li> */}
            </ul>
            
            {/* Mobile-only header actions */}
            {isMobile && (
              <div className="header-actions mobile-header-actions">
                <Link to="/spectrum/course-registration" className="btn-callback" title="Register" aria-label="Register" onClick={handleMobileLinkClick}>
                  <img src="/form-6.png" alt="Register" style={{ width: "16px", height: "16px" }} />
                  <span>Register</span>
                </Link>
                <Link to="/spectrum/contact" className="btn-callback" title="Request a call back" aria-label="Request a call back" onClick={handleMobileLinkClick}>
                  <i className="fas fa-phone"></i>
                  <span>Contact</span>
                </Link>
                {/* <Link to="/login" className="btn-login" onClick={handleMobileLinkClick}>Login</Link> */}
              </div>
            )}
          </nav>

          {/* Desktop-only header actions */}
          {!isMobile && (
            <div className="header-actions">
              <Link to="/course-registration" className="btn-callback" title="Register" aria-label="Register">
                <img src="/form-6.png" alt="Register" style={{ width: "18px", height: "18px" }} />
              </Link>
              <Link to="/contact" className="btn-callback" title="Request a call back" aria-label="Request a call back">
                <i className="fas fa-phone"></i>
              </Link>
              {/* <Link to="/login" className="btn-login">Login</Link> */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 