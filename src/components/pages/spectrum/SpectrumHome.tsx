import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import '../Home.css';
import '../../common/CarouselControls.css';
import { Carousel } from 'react-bootstrap';
import AnimatedButton from '../../common/AnimatedButton';
import CollisionButton from '../../common/CollisionButton';
import { useNavigate } from 'react-router-dom';
import { getCanonicalUrl } from '../../../utils/seoUtils';

// Import testimonials data
import { testimonials } from '../../../data/testimonials';

const SpectrumHome: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('online');
  const [scholarshipTab, setScholarshipTab] = useState('online');
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [scholarshipIndex, setScholarshipIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [tabDirection, setTabDirection] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0); // First FAQ is expanded by default
  const [faqAnimating, setFaqAnimating] = useState(false); // Track animation state

  // Add state to track course card visibility
  const [initialCardsSet, setInitialCardsSet] = useState(false);
  
  // Add refs for course carousel containers
  const onlineCarouselRef = useRef<HTMLDivElement>(null);
  const offlineCarouselRef = useRef<HTMLDivElement>(null);
  
  // Add state to track hover state for auto-scrolling pause
  const [onlineCarouselHovered, setOnlineCarouselHovered] = useState(false);
  const [offlineCarouselHovered, setOfflineCarouselHovered] = useState(false);

  const handleTestimonialSelect = (selectedIndex: number) => {
    setTestimonialIndex(selectedIndex);
  };
  
  const handleScholarshipSelect = (selectedIndex: number) => {
    setScholarshipIndex(selectedIndex);
  };

  const handleFaqToggle = (index: number) => {
    if (faqAnimating) return; // Prevent toggle during animation

    setFaqAnimating(true);
    
    if (expandedFaq === index) {
      // First start animation for closing
      setExpandedFaq(null);
    } else {
      // Opening: Update immediately for smooth animation
      setExpandedFaq(index);
    }
    
    // Reset animation flag after animation completes
    setTimeout(() => {
      setFaqAnimating(false);
    }, 450); // Match with animation duration in CSS
  };
  
  // FAQ data
  const faqItems = [
    {
      question: "What courses does SPECTRUM offer?",
      answer: "SPECTRUM offers a comprehensive range of courses including IIT-JEE preparation, NEET coaching, Academic courses for classes 6-12, English language programs, and personality development courses. Our courses are available in both online and offline formats to suit different learning preferences."
    },
    {
      question: "How do I enroll in a SPECTRUM course?",
      answer: "Enrolling in a SPECTRUM course is easy. You can browse our courses on the website, select the one that fits your needs, and complete the registration process online. Alternatively, you can visit our centers in person or contact our academic counselors for personalized guidance on choosing the right course."
    },
    {
      question: "Are scholarships available for SPECTRUM courses?",
      answer: "Yes, SPECTRUM offers scholarships of up to 90% based on merit and performance in our scholarship tests. These tests are conducted regularly and are free to register for. The scholarship amount varies depending on your performance in these tests."
    },
    {
      question: "What is SPECTRUM's teaching methodology?",
      answer: "SPECTRUM's teaching methodology is based on 35+ years of experience and focuses on conceptual clarity, problem-solving skills, and regular assessment. Our expert faculty use a blend of traditional teaching methods and modern technology to ensure effective learning. We provide comprehensive study materials, doubt resolution services, and regular mentorship to help students excel."
    },
    {
      question: "How can I contact SPECTRUM for more information?",
      answer: "You can contact SPECTRUM through our website by filling out the contact form, calling our helpline numbers listed on the Contact page, or by visiting any of our centers in person. Our team of academic counselors is available to address all your queries regarding courses, admissions, and more."
    }
  ];
  
  // Add an effect to check screen size and normalize card heights
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    const normalizeCardHeights = () => {
      // Calculate max height across all testimonial cards
      let maxHeight = 0;
      
      // First, reset all cards to auto height and find the tallest one
      document.querySelectorAll('.testimonial-card').forEach(card => {
        (card as HTMLElement).style.height = 'auto';
        const cardHeight = (card as HTMLElement).offsetHeight;
        maxHeight = Math.max(maxHeight, cardHeight);
      });
      
      // Then set all cards to the same height
      if (maxHeight > 0) {
        document.querySelectorAll('.testimonial-card').forEach(card => {
          (card as HTMLElement).style.height = `${maxHeight}px`;
        });
      }
    };

    // Initial check
    checkScreenSize();
    
    // Run once after render and when carousel index changes
    setTimeout(normalizeCardHeights, 300);
    
    // Add event listeners
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('resize', normalizeCardHeights);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('resize', normalizeCardHeights);
    };
  }, [testimonialIndex]);

  // Add a new useEffect for handling initial course card visibility
  useEffect(() => {
    if (!initialCardsSet) {
      const isSmall = window.innerWidth < 768;
      
      // Set visibility for online cards
      const onlineItems = document.querySelectorAll('[data-tab="online"].course-option');
      onlineItems.forEach((item, idx) => {
        const element = item as HTMLElement;
        if ((isSmall && idx >= 1) || (!isSmall && idx >= 2)) {
          element.classList.add('d-none');
        } else {
          element.classList.remove('d-none');
        }
      });
      
      // Set visibility for offline cards
      const offlineItems = document.querySelectorAll('[data-tab="offline"].course-option');
      offlineItems.forEach((item, idx) => {
        const element = item as HTMLElement;
        if ((isSmall && idx >= 1) || (!isSmall && idx >= 2)) {
          element.classList.add('d-none');
        } else {
          element.classList.remove('d-none');
        }
      });
      
      setInitialCardsSet(true);
    }
    
    // Also handle resize to ensure correct card visibility
    const handleResize = () => {
      const isSmall = window.innerWidth < 768;
      
      // Adjust visibility for both tabs based on screen size
      ['online', 'offline'].forEach(tab => {
        const items = document.querySelectorAll(`[data-tab="${tab}"].course-option`);
        const visibleItems = Array.from(items).filter(item => !item.classList.contains('d-none'));
        
        if (visibleItems.length > 0) {
          const firstVisibleIdx = parseInt(visibleItems[0].getAttribute('data-course-index') || '0');
          
          items.forEach((item, idx) => {
            const element = item as HTMLElement;
            if (isSmall) {
              // Show only 1 card on small screens
              element.classList.toggle('d-none', idx !== firstVisibleIdx);
            } else {
              // Show 2 cards on larger screens
              element.classList.toggle('d-none', idx < firstVisibleIdx || idx > firstVisibleIdx + 1);
            }
          });
        }
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initialCardsSet]);

  // Add auto-scroll effect for testimonials
  useEffect(() => {
    // Set up auto-scrolling timer
    const autoScrollTimer = setInterval(() => {
      // Calculate next index with wrapping
      const maxIndex = isSmallScreen ? testimonials.length : Math.ceil(testimonials.length / 2);
      const nextIndex = (testimonialIndex + 1) % maxIndex;
      
      // Set next index directly for smooth transition
      setTestimonialIndex(nextIndex);
    }, 3000);
    
    // Clean up timer on unmount
    return () => {
      clearInterval(autoScrollTimer);
    };
  }, [testimonialIndex, isSmallScreen]);

  // Add effect to reset the tab direction after animation completes
  useEffect(() => {
    if (tabDirection) {
      const timer = setTimeout(() => {
        setTabDirection('');
      }, 600); // Slightly longer than the animation duration
      
      return () => clearTimeout(timer);
    }
  }, [tabDirection]);

  // Function to generate testimonial slides based on screen size
  const renderTestimonialSlides = () => {
    if (isSmallScreen) {
      // Single testimonial per slide for mobile
      return testimonials.map((testimonial) => (
        <Carousel.Item key={testimonial.id}>
          <div className="row testimonial-row">
            <div className="col-12">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>"{testimonial.text}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-img">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.credential}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ));
    } else {
      // Two testimonials per slide for desktop
      const slides = [];
      for (let i = 0; i < testimonials.length; i += 2) {
        const firstTestimonial = testimonials[i];
        const secondTestimonial = testimonials[i + 1];
        
        if (secondTestimonial) {
          slides.push(
            <Carousel.Item key={`slide-${i}`}>
              <div className="row testimonial-row">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <p>"{firstTestimonial.text}"</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-img">
                        <img src={firstTestimonial.image} alt={firstTestimonial.name} />
                      </div>
                      <div className="author-info">
                        <h4>{firstTestimonial.name}</h4>
                        <p>{firstTestimonial.credential}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <p>"{secondTestimonial.text}"</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-img">
                        <img src={secondTestimonial.image} alt={secondTestimonial.name} />
                      </div>
                      <div className="author-info">
                        <h4>{secondTestimonial.name}</h4>
                        <p>{secondTestimonial.credential}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        } else {
          // Handle odd number of testimonials
          slides.push(
            <Carousel.Item key={`slide-${i}`}>
              <div className="row testimonial-row">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <p>"{firstTestimonial.text}"</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-img">
                        <img src={firstTestimonial.image} alt={firstTestimonial.name} />
                      </div>
                      <div className="author-info">
                        <h4>{firstTestimonial.name}</h4>
                        <p>{firstTestimonial.credential}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        }
      }
      return slides;
    }
  };

  // Updated handler for scholarship section
  const handleScholarshipTabClick = (tab: string) => {
    setScholarshipTab(tab);
    navigate('/course-registration');
  };

  // Add modified handleTabChange function to navigate to registration page
  const handleTabChange = (tab: string) => {
    // Determine the direction of the transition
    if ((activeTab === 'online' && tab === 'offline') || 
        (activeTab === 'offline' && tab === 'online')) {
      setTabDirection(activeTab === 'online' ? 'slide-left' : 'slide-right');
      
      // Set the active tab after a small delay to allow the animation to start
      setTimeout(() => {
        setActiveTab(tab);
      }, 50);
    } else {
      setActiveTab(tab);
    }
  };

  // Function to navigate to next course card for online tab
  const navigateToNextOnlineCourse = useCallback(() => {
    if (onlineCarouselHovered) return; // Skip if hovered
    
    const items = document.querySelectorAll('[data-tab="online"].course-option');
    const totalItems = items.length;
    const visibleItems = Array.from(items).filter(item => !item.classList.contains('d-none'));
    const lastVisibleIndex = parseInt(visibleItems[visibleItems.length - 1].getAttribute('data-course-index') || '0');
    
    if (lastVisibleIndex < totalItems - 1) {
      // Not at the end, go to next items
      items.forEach((item, idx) => {
        const element = item as HTMLElement;
        if (window.innerWidth >= 768) {
          // On larger screens, we show 2 cards
          if (idx > lastVisibleIndex && idx <= lastVisibleIndex + 2) {
            element.classList.remove('d-none');
          } else {
            element.classList.add('d-none');
          }
        } else {
          // On smaller screens, we show 1 card
          if (idx === lastVisibleIndex + 1) {
            element.classList.remove('d-none');
          } else {
            element.classList.add('d-none');
          }
        }
      });
    } else {
      // At the end, loop to the beginning
      items.forEach((item, idx) => {
        const element = item as HTMLElement;
        if (window.innerWidth >= 768) {
          // On larger screens, show first 2 cards
          if (idx < 2) {
            element.classList.remove('d-none');
          } else {
            element.classList.add('d-none');
          }
        } else {
          // On smaller screens, show first card
          if (idx === 0) {
            element.classList.remove('d-none');
          } else {
            element.classList.add('d-none');
          }
        }
      });
    }
  }, [onlineCarouselHovered]);

  // Function to navigate to next course card for offline tab
  const navigateToNextOfflineCourse = useCallback(() => {
    if (offlineCarouselHovered) return; // Skip if hovered
    
    const items = document.querySelectorAll('[data-tab="offline"].course-option');
    const totalItems = items.length;
    const visibleItems = Array.from(items).filter(item => !item.classList.contains('d-none'));
    const lastVisibleIndex = parseInt(visibleItems[visibleItems.length - 1].getAttribute('data-course-index') || '0');
    
    if (lastVisibleIndex < totalItems - 1) {
      // Not at the end, go to next items
      items.forEach((item, idx) => {
        const element = item as HTMLElement;
        if (window.innerWidth >= 768) {
          // On larger screens, we show 2 cards
          if (idx > lastVisibleIndex && idx <= lastVisibleIndex + 2) {
            element.classList.remove('d-none');
          } else {
            element.classList.add('d-none');
          }
        } else {
          // On smaller screens, we show 1 card
          if (idx === lastVisibleIndex + 1) {
            element.classList.remove('d-none');
          } else {
            element.classList.add('d-none');
          }
        }
      });
    } else {
      // At the end, loop to the beginning
      items.forEach((item, idx) => {
        const element = item as HTMLElement;
        if (window.innerWidth >= 768) {
          // On larger screens, show first 2 cards
          if (idx < 2) {
            element.classList.remove('d-none');
          } else {
            element.classList.add('d-none');
          }
        } else {
          // On smaller screens, show first card
          if (idx === 0) {
            element.classList.remove('d-none');
          } else {
            element.classList.add('d-none');
          }
        }
      });
    }
  }, [offlineCarouselHovered]);

  // Add useEffect for auto-scrolling course carousels
  useEffect(() => {
    // Set up auto-scrolling timer for online courses
    const onlineScrollTimer = setInterval(() => {
      if (activeTab === 'online' && !onlineCarouselHovered) {
        navigateToNextOnlineCourse();
      }
    }, 2000);
    
    // Set up auto-scrolling timer for offline courses
    const offlineScrollTimer = setInterval(() => {
      if (activeTab === 'offline' && !offlineCarouselHovered) {
        navigateToNextOfflineCourse();
      }
    }, 2000);
    
    // Clean up timers on unmount
    return () => {
      clearInterval(onlineScrollTimer);
      clearInterval(offlineScrollTimer);
    };
  }, [activeTab, onlineCarouselHovered, offlineCarouselHovered, navigateToNextOnlineCourse, navigateToNextOfflineCourse]);

  return (
    <div className="home-page">
      <Helmet>
        <title>SPECTRUM Education - Excellence in Academic & Skill Development Since 2006</title>
        <meta name="description" content="SPECTRUM Education provides expert coaching for NEET, IIT-JEE, Olympiads with expert faculty. Also offering Spoken English, Handwriting, Calligraphy, and Personality Development courses." />
        <meta name="keywords" content="NEET coaching, IIT-JEE preparation, Spoken English courses, handwriting classes, calligraphy, personality development, online education, SPECTRUM education" />
        <link rel="canonical" href={getCanonicalUrl("/")} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "SPECTRUM Education",
            "url": "https://www.spectrum-education.com",
            "logo": "https://www.spectrum-education.com/images/logo.png",
            "sameAs": [
              "https://www.facebook.com/spectrumeducation",
              "https://www.instagram.com/spectrum_education",
              "https://www.youtube.com/c/spectrumeducation"
            ],
            "description": "SPECTRUM Education provides expert coaching for NEET, IIT-JEE, and school academics alongside language and personality development programs since 2006.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Education Street",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "600001",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7200655336",
              "contactType": "customer service"
            },
            "offers": {
              "@type": "Offer",
              "category": "Education Programs"
            }
          })}
        </script>
      </Helmet>
      
      {/* Scholarship Banner */}
      <div className="scholarship-banner" style={{ cursor: 'pointer' }}
      onClick={() => {
        setScholarshipTab('online');
        navigate('/course-registration');
      }}>
        <div className="container">
          <div className="banner-content">
            <img src="/images/alarm-clock-1.png" alt="Scholarship icon" className="banner-icon" />
            <span>Limited Seats Available!  ✨</span>
            <span className="banner-highlight">Enroll Now for FREE — New Batches Starting Soon!</span>
          </div>
        </div>
      </div>
      
      <div className="container py-4">
        {/* Scholarship Hero Section */}
        <section className="scholarship-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
              <h1 className="scholarship-title text-center">
              <span className="highlight-spectrum fw-bolder">Shape Your Child's Future with Board-Specific Learning.</span> 
              </h1>
              <div className="scholarship-tabs-container">
                <p className="hero-subtitle text-center">
                 Spectrum is a dedicated tuition centre in Vellore offering personalized coaching for CBSE, ICSE, and State Board (Matriculation) students. With expert faculty and individual attention, we help students strengthen concepts, improve confidence, and achieve outstanding academic results.
                </p>
                  <div className="scholarship-tabs">
                    <AnimatedButton 
                      text="Online Courses"
                      className={`scholarship-animated-btn scholarship-animated-btn-online ${scholarshipTab === 'online' ? 'active' : ''}`}
                      onClick={() => handleScholarshipTabClick('online')}
                    />
                    <AnimatedButton 
                      text="Offline Courses"
                      className={`scholarship-animated-btn ${scholarshipTab === 'offline' ? 'active' : ''}`}
                      onClick={() => handleScholarshipTabClick('offline')}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="scholarship-carousel">
                  <Carousel 
                    activeIndex={scholarshipIndex} 
                    onSelect={handleScholarshipSelect} 
                    interval={2000} 
                    indicators={false} 
                    controls={false}
                  >
                    <Carousel.Item>
                      <div className="scholarship-slide">
                        <img 
                          src="/images/banner/banner-4.jpg" 
                          alt="Spoken English" 
                          className="scholarship-slide-img" 
                        />
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="scholarship-slide">
                        <img 
                          src="/images/banner/banner-1.jpg" 
                          alt="Foundation Program" 
                          className="scholarship-slide-img" 
                        />
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="scholarship-slide">
                        <img 
                          src="/images/banner/banner-3.jpg" 
                          alt="Calligraphy" 
                          className="scholarship-slide-img" 
                        />
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className="scholarship-carousel-indicators">
                  <ul>
                    <li 
                      className={scholarshipIndex === 0 ? 'active' : ''} 
                      onClick={() => setScholarshipIndex(0)}
                    ></li>
                    <li 
                      className={scholarshipIndex === 1 ? 'active' : ''} 
                      onClick={() => setScholarshipIndex(1)}
                    ></li>
                    <li 
                      className={scholarshipIndex === 2 ? 'active' : ''} 
                      onClick={() => setScholarshipIndex(2)}
                    ></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Original Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1>Need assistance with <span className="highlight-text">admissions</span> or <span className="highlight-text">course details</span>?</h1>
                <p className="hero-subtitle">
                  Explore our courses or contact our academic counselors for personalized guidance
                </p>
                <AnimatedButton 
                  text="Contact Us" 
                  href="/contact#message-form"
                  className="contact-us-animated-btn"
                />
              </div>
              <div className="col-lg-6">
                <div className="hero-tabs">
                  <div className="tabs-header">
                    <button 
                      className={`tab-btn ${activeTab === 'online' ? 'active' : ''}`}
                      onClick={() => handleTabChange('online')}
                    >
                      Online Courses
                    </button>
                    <button 
                      className={`tab-btn ${activeTab === 'offline' ? 'active' : ''}`}
                      onClick={() => handleTabChange('offline')}
                    >
                      Offline Courses
                    </button>
                  </div>
                  <div className="tabs-content">
                    <div className={`tab-content ${activeTab === 'online' ? 'active' : ''} ${tabDirection}`}>
                      <h3>Discover the perfect online course</h3>
                      
                      <div 
                        className="course-carousel position-relative" 
                        ref={onlineCarouselRef}
                        onMouseEnter={() => setOnlineCarouselHovered(true)}
                        onMouseLeave={() => setOnlineCarouselHovered(false)}
                      >
                        <div className="course-options">
                          {/* We'll only show the first 2 visible cards at a time */}
                          {[
                            { name: 'NEET', href: '/courses/neet' },
                            { name: 'IIT-JEE', href: '/courses/iit-jee' },
                            { name: 'Spoken English', href: '/courses/english' },
                            { name: 'Foundation Program', href: '/courses/pyramid/foundation' },
                            { name: '10th & 12th Board', href: '/courses/pyramid/power-program' }
                          ].map((course, index) => (
                            <div 
                              key={`online-${index}`} 
                              className="course-option"
                              data-course-index={index}
                              data-tab="online"
                            >
                              <h4>{course.name}</h4>
                              <CollisionButton
                                text="View"
                                href={course.href}
                              />
                            </div>
                          ))}
                        </div>
                        <button 
                          className="carousel-control-prev course-control" 
                          type="button" 
                          onClick={() => {
                            const items = document.querySelectorAll('[data-tab="online"].course-option');
                            const currentVisible = Array.from(items).findIndex(item => !item.classList.contains('d-none'));
                            const totalItems = items.length;
                            
                            if (currentVisible > 0) {
                              // Not at the beginning, go to previous items
                              items.forEach((item, idx) => {
                                const element = item as HTMLElement;
                                if (window.innerWidth >= 768) {
                                  // On larger screens, we show 2 cards
                                  if (idx >= currentVisible - 2 && idx < currentVisible) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                } else {
                                  // On smaller screens, we show 1 card
                                  if (idx === currentVisible - 1) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                }
                              });
                            } else {
                              // At the beginning, loop to the end
                              items.forEach((item, idx) => {
                                const element = item as HTMLElement;
                                if (window.innerWidth >= 768) {
                                  // On larger screens, show last 2 cards
                                  if (idx >= totalItems - 2) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                } else {
                                  // On smaller screens, show last card
                                  if (idx === totalItems - 1) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                }
                              });
                            }
                          }}
                        >
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button 
                          className="carousel-control-next course-control" 
                          type="button"
                          onClick={() => {
                            const items = document.querySelectorAll('[data-tab="online"].course-option');
                            const totalItems = items.length;
                            const visibleItems = Array.from(items).filter(item => !item.classList.contains('d-none'));
                            const lastVisibleIndex = parseInt(visibleItems[visibleItems.length - 1].getAttribute('data-course-index') || '0');
                            
                            if (lastVisibleIndex < totalItems - 1) {
                              // Not at the end, go to next items
                              items.forEach((item, idx) => {
                                const element = item as HTMLElement;
                                if (window.innerWidth >= 768) {
                                  // On larger screens, we show 2 cards
                                  if (idx > lastVisibleIndex && idx <= lastVisibleIndex + 2) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                } else {
                                  // On smaller screens, we show 1 card
                                  if (idx === lastVisibleIndex + 1) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                }
                              });
                            } else {
                              // At the end, loop to the beginning
                              items.forEach((item, idx) => {
                                const element = item as HTMLElement;
                                if (window.innerWidth >= 768) {
                                  // On larger screens, show first 2 cards
                                  if (idx < 2) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                } else {
                                  // On smaller screens, show first card
                                  if (idx === 0) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                }
                              });
                            }
                          }}
                        >
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    <div className={`tab-content ${activeTab === 'offline' ? 'active' : ''} ${tabDirection}`}>
                      <h3>Explore our offline classroom programs</h3>
                      
                      <div 
                        className="course-carousel position-relative"
                        ref={offlineCarouselRef}
                        onMouseEnter={() => setOfflineCarouselHovered(true)}
                        onMouseLeave={() => setOfflineCarouselHovered(false)}
                      >
                        <div className="course-options">
                          {/* We'll only show the first 2 visible cards at a time */}
                          {[
                            { name: 'NEET', href: '/courses/neet' },
                            { name: 'IIT-JEE', href: '/courses/iit-jee' },
                            { name: 'Spoken English', href: '/courses/english' },
                            { name: 'Foundation Program', href: '/courses/pyramid/foundation' },
                            { name: '10th & 12th Board', href: '/courses/pyramid/power-program' }
                          ].map((course, index) => (
                            <div 
                              key={`offline-${index}`} 
                              className="course-option"
                              data-course-index={index}
                              data-tab="offline"
                            >
                              <h4>{course.name}</h4>
                              <CollisionButton
                                text="View"
                                href={course.href}
                              />
                            </div>
                          ))}
                        </div>
                        <button 
                          className="carousel-control-prev course-control" 
                          type="button" 
                          onClick={() => {
                            const items = document.querySelectorAll('[data-tab="offline"].course-option');
                            const currentVisible = Array.from(items).findIndex(item => !item.classList.contains('d-none'));
                            const totalItems = items.length;
                            
                            if (currentVisible > 0) {
                              // Not at the beginning, go to previous items
                              items.forEach((item, idx) => {
                                const element = item as HTMLElement;
                                if (window.innerWidth >= 768) {
                                  // On larger screens, we show 2 cards
                                  if (idx >= currentVisible - 2 && idx < currentVisible) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                } else {
                                  // On smaller screens, we show 1 card
                                  if (idx === currentVisible - 1) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                }
                              });
                            } else {
                              // At the beginning, loop to the end
                              items.forEach((item, idx) => {
                                const element = item as HTMLElement;
                                if (window.innerWidth >= 768) {
                                  // On larger screens, show last 2 cards
                                  if (idx >= totalItems - 2) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                } else {
                                  // On smaller screens, show last card
                                  if (idx === totalItems - 1) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                }
                              });
                            }
                          }}
                        >
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button 
                          className="carousel-control-next course-control" 
                          type="button"
                          onClick={() => {
                            const items = document.querySelectorAll('[data-tab="offline"].course-option');
                            const totalItems = items.length;
                            const visibleItems = Array.from(items).filter(item => !item.classList.contains('d-none'));
                            const lastVisibleIndex = parseInt(visibleItems[visibleItems.length - 1].getAttribute('data-course-index') || '0');
                            
                            if (lastVisibleIndex < totalItems - 1) {
                              // Not at the end, go to next items
                              items.forEach((item, idx) => {
                                const element = item as HTMLElement;
                                if (window.innerWidth >= 768) {
                                  // On larger screens, we show 2 cards
                                  if (idx > lastVisibleIndex && idx <= lastVisibleIndex + 2) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                } else {
                                  // On smaller screens, we show 1 card
                                  if (idx === lastVisibleIndex + 1) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                }
                              });
                            } else {
                              // At the end, loop to the beginning
                              items.forEach((item, idx) => {
                                const element = item as HTMLElement;
                                if (window.innerWidth >= 768) {
                                  // On larger screens, show first 2 cards
                                  if (idx < 2) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                } else {
                                  // On smaller screens, show first card
                                  if (idx === 0) {
                                    element.classList.remove('d-none');
                                  } else {
                                    element.classList.add('d-none');
                                  }
                                }
                              });
                            }
                          }}
                        >
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why SPECTRUM Section */}
        <section className="section why-spectrum">
          <div className="container">
            <h2 className="section-title"><span className="normal-text">Why</span> <span className="spectrum-text">SPECTRUM</span> <span className="normal-text">Online</span></h2>
            <div className="row">
              <div className="col-md-3">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <h3>Expert Faculty</h3>
                  <p>Expert faculty, top-notch study material and teaching methods perfected over 35+ years</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <h3>Proven Results</h3>
                  <p>Stellar results delivered through Online Courses across JEE, NEET, Olympiads and 10th Board Exams</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="fas fa-tools"></i>
                  </div>
                  <h3>Learning Tools</h3>
                  <p>24x7 doubt resolution and customized study material to test, and improve continuously</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3>Mentor Support</h3>
                  <p>Regular mentorship sessions with faculty, guidance on exam strategy and updates to parents</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <AnimatedButton 
                text="Explore Online Courses" 
                href="/courses"
                className="explore-courses-animated-btn"
              />
            </div>
          </div>
        </section>
{/* =========================
          WHY PARENTS CHOOSE SPECTRUM
      ========================== */}
      <section className="section admissions-section">
        <div className="container">

          <h2 className="section-title text-center">
            <span className="normal-text">Why Parents Choose </span>
            <span className="spectrum-text">Spectrum</span>
          </h2>

          <div className="row">

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-user"></i>
                </div>
                <h3>Personalized Attention</h3>
                <p>
                  Focused support based on every student's individual learning
                  requirements.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Small Batch Sizes</h3>
                <p>
                  Smaller groups allow teachers to provide better attention
                  and interaction.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Board-Specific Teaching</h3>
                <p>
                  Teaching is aligned with CBSE, ICSE, and State Board
                  curricula.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h3>Regular Tests & Performance Analysis</h3>
                <p>
                  Continuous assessments help track academic progress and
                  improvement.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h3>Experienced Subject Experts</h3>
                <p>
                  Expert faculty help students develop strong subject
                  understanding.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-question-circle"></i>
                </div>
                <h3>Doubt-Clearing Sessions</h3>
                <p>
                  Dedicated sessions help students clarify difficult concepts.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4 mx-auto">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-bell"></i>
                </div>
                <h3>Parent Progress Updates</h3>
                <p>
                  Parents receive updates about their child's academic
                  progress.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* =========================
          SUBJECTS WE SPECIALIZE IN
      ========================== */}
      <section className="section why-spectrum">
        <div className="container">

          <h2 className="section-title text-center">
            <span className="normal-text">Subjects We </span>
            <span className="spectrum-text">Specialize In</span>
          </h2>

          <p className="text-center mb-5">
            Mathematics, Physics, Chemistry, and Biology are taught with a
            strong focus on conceptual understanding, application, and
            examination techniques.
          </p>

          <div className="row justify-content-center">

            <div className="col-6 col-md-3 mb-4">
              <div className="feature-card text-center h-100">
                <div className="feature-icon">
                  <i className="fas fa-calculator"></i>
                </div>
                <h3>Mathematics</h3>
              </div>
            </div>

            <div className="col-6 col-md-3 mb-4">
              <div className="feature-card text-center h-100">
                <div className="feature-icon">
                  <i className="fas fa-atom"></i>
                </div>
                <h3>Physics</h3>
              </div>
            </div>

            <div className="col-6 col-md-3 mb-4">
              <div className="feature-card text-center h-100">
                <div className="feature-icon">
                  <i className="fas fa-flask"></i>
                </div>
                <h3>Chemistry</h3>
              </div>
            </div>

            <div className="col-6 col-md-3 mb-4">
              <div className="feature-card text-center h-100">
                <div className="feature-icon">
                  <i className="fas fa-dna"></i>
                </div>
                <h3>Biology</h3>
              </div>
            </div>

          </div>
        </div>
      </section>{/* =========================
          BOARDS WE COVER
      ========================== */}
      <section className="section admissions-section">
        <div className="container">

          <h2 className="section-title text-center">
            <span className="normal-text">Boards We </span>
            <span className="spectrum-text">Cover</span>
          </h2>

          <div className="row justify-content-center">

            <div className="col-md-4 mb-4">
              <div className="feature-card text-center h-100">
                <div className="feature-icon">
                  <i className="fas fa-school"></i>
                </div>
                <h3>CBSE</h3>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="feature-card text-center h-100">
                <div className="feature-icon">
                  <i className="fas fa-school"></i>
                </div>
                <h3>ICSE</h3>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="feature-card text-center h-100">
                <div className="feature-icon">
                  <i className="fas fa-school"></i>
                </div>
                <h3>State Board (Matriculation)</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          OUR TEACHING APPROACH
      ========================== */}
      <section className="section why-spectrum">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="text-center">
                <i
                  className="fas fa-chalkboard-teacher spectrum-text"
                  style={{ fontSize: '120px' }}
                ></i>
              </div>
            </div>

            <div className="col-lg-7">
              <h2 className="section-title">
                <span className="normal-text">Our Teaching </span>
                <span className="spectrum-text">Approach</span>
              </h2>

              <p>
                Every student learns differently. We identify strengths and
                improvement areas through continuous assessments and provide
                personalized guidance to help each learner perform their best.
              </p>

              <p>
                Our approach focuses on conceptual understanding, application,
                examination techniques, and continuous academic improvement.
              </p>
            </div>

          </div>
        </div>
      </section>
        {/* Admissions Open Section - Moved from AboutPage */}
        <section className="section admissions-section">
          <div className="container">
            <h2 className="section-title">
              <span className="normal-text">Admissions</span> <span className="spectrum-text">Open</span> <span className="normal-text">– Join Today!</span>
            </h2>
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="fas fa-book-reader"></i>
                  </div>
                  <h3>Personalized Learning Plans</h3>
                  <p>Custom study programs designed for your specific learning needs</p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="fas fa-wallet"></i>
                  </div>
                  <h3>Affordable Fees & Flexible Batches</h3>
                  <p>Reasonable pricing with convenient scheduling options</p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className="fas fa-user-check"></i>
                  </div>
                  <h3>Limited Seats Available</h3>
                  <p>Enroll now to secure your spot in our focused learning environment</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <AnimatedButton 
                text="Register Now" 
                href="/course-registration"
                className="explore-courses-animated-btn"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section testimonials">
          <div className="container">
            <h2 className="section-title"><span className="highlight-testimonials">Testimonials</span> from our students</h2>
            
            {/* Testimonial Carousel */}
            <div className="testimonial-carousel">
              <Carousel
                key="testimonial-carousel"
                activeIndex={testimonialIndex}
                onSelect={handleTestimonialSelect}
                indicators={true}
                controls={false}
                className="testimonial-carousel smooth-carousel"
                pause="hover"
                wrap={true}
                slide={true}
              >
                {renderTestimonialSlides()}
              </Carousel>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section faq">
          <div className="container">
            <h2 className="section-title text-center"><span className="faq-letter">F</span><span className="faq-text">requently </span><span className="faq-letter">A</span><span className="faq-text">sked </span><span className="faq-letter">Q</span><span className="faq-text">uestions</span></h2>
            
            <div className="faq-container">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${expandedFaq === index ? 'active' : ''}`}
                >
                  <div 
                    className="faq-question" 
                    onClick={() => handleFaqToggle(index)}
                    aria-expanded={expandedFaq === index}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleFaqToggle(index);
                        e.preventDefault();
                      }
                    }}
                  >
                    <h3>{item.question}</h3>
                    <span className="faq-toggle">
                      <i className={`fas ${expandedFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </span>
                  </div>
                  <div 
                    className={`faq-answer ${expandedFaq === index ? 'open' : ''}`}
                    aria-hidden={expandedFaq !== index}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* =========================
CALL TO ACTION
========================== */}

<section className="py-5">
  <div className="container text-center">

    <h2 className="section-title">
      <span className="pyramid-text"> Begin Your Learning Journey Today</span>
    </h2>

    <p className="lead">
     Give your child the academic advantage they deserve. Join Spectrum and experience board-specific coaching that builds confidence and delivers results.
    </p>

  </div>
</section>
      </div>
    </div>
  );
};

export default SpectrumHome;