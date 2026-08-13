import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import '../ResultsPage.css';
import '../../common/CarouselControls.css';
import Breadcrumbs from '../../common/Breadcrumbs';
import { Carousel } from 'react-bootstrap';
import AnimatedButton from '../../common/AnimatedButton';
import CollisionButton from '../../common/CollisionButton';
import { getCanonicalUrl } from '../../../utils/seoUtils';

// Success stories data
const successStories = [
  {
    id: 1,
    text: "The Spectrum by Pyramid Academy team provided me with the right guidance and support to achieve my goals. Their teaching methods and study material were exceptional.",
    name: "PRIYA SUBRAMANIAN",
    credential: "NEET Qualifier, 2023",
    image: "/images/users/success-4.png"
  },
  {
    id: 2,
    text: "The English communication program transformed my confidence level and helped me secure a job at a multinational company. The personalized attention was key to my progress.",
    name: "RAHU",
    credential: "Spoken English Program Graduate",
    image: "/images/users/success-1.png"
  },
  {
    id: 3,
    text: "I joined SPECTRUM's JEE preparation program and found their study material and mock tests extremely helpful. The faculty's guidance helped me secure a great rank in JEE Advanced.",
    name: "ARJUN RAGHAVAN",
    credential: "JEE Advanced 2023, AIR 156",
    image: "/images/users/success-2.png"
  },
  {
    id: 4,
    text: "The structured approach to learning at SPECTRUM helped me tackle complex NEET topics with ease. Their faculty's support during tough times was instrumental in my success.",
    name: "SNEHA IYER",
    credential: "NEET-UG 2023, Score 687/720",
    image: "/images/users/success-3.png"
  },
  {
    id: 5,
    text: "Thanks to SPECTRUM, I was able to crack the CUET with confidence. The mentors were always available and made sure we were exam-ready with their regular assessments.",
    name: "VIGNESH",
    credential: "CUET Topper, Humanities Stream",
    image: "/images/users/success-5.png"
  },
  {
    id: 6,
    text: "I was nervous about public speaking, but the spoken English classes gave me the push I needed. I'm now presenting in front of large audiences with ease!",
    name: "MEGHANA",
    credential: "Spoken English Program Graduate, 2024",
    image: "/images/users/success-6.png"
  }
];


// Sub-components
const ResultsHome = () => {
  const [successStoriesIndex, setSuccessStoriesIndex] = useState(0);
  const [successHighlightsIndex, setSuccessHighlightsIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  // Add refs for the success stories carousel
  const successStoriesRef = useRef<HTMLDivElement>(null);
  const successHighlightsRef = useRef<HTMLDivElement>(null);

  // Success highlights data
  const successHighlights = [
    {
      id: 1,
      image: "/images/award/award-1.webp",
      title: "Academic Excellence Award",
      description: "Our annual celebration recognizing outstanding academic achievements.",
      alt: "Achievement Celebration"
    },
    {
      id: 2,
      image: "/images/award/award-2.jpg",
      title: "Spoken English Award",
      description: "Students showcasing their communication skills after completion.",
      alt: "Spoken English Batch"
    },
    {
      id: 3,
      image: "/images/award/award-3.jpg",
      title: "Calligraphy Contest Winners",
      description: "Students displaying their artistic talents in our competition.",
      alt: "Calligraphy Contest"
    },
    {
      id: 4,
      image: "/images/award/award-4.jpg",
      title: "JEE Advanced Toppers",
      description: "Our students celebrating their success in JEE Advanced 2023.",
      alt: "JEE Toppers"
    },
    {
      id: 5,
      image: "/images/award/award-5.jpg",
      title: "NEET-UG Achievers",
      description: "Record-breaking results in the recent NEET examinations.",
      alt: "NEET Achievers"
    },
    {
      id: 6,
      image: "/images/award/award-6.jpg",
      title: "Student Recognition Day",
      description: "Celebrating all-round excellence in academics and extracurriculars.",
      alt: "Student Recognition"
    }
  ];

  const handleSuccessStoriesSelect = (selectedIndex: number) => {
    setSuccessStoriesIndex(selectedIndex);
  };

  const handleSuccessHighlightsSelect = (selectedIndex: number) => {
    setSuccessHighlightsIndex(selectedIndex);
  };
  
  // Add an effect to check screen size and normalize card heights
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    const normalizeCardHeights = () => {
      // Success Stories section
      if (successStoriesRef.current) {
        // Get all testimonial cards
        const cards = successStoriesRef.current.querySelectorAll('.testimonial-card');
        
        // Reset heights to auto first to get their natural height
        cards.forEach(card => {
          (card as HTMLElement).style.height = 'auto';
        });
        
        // Find the tallest card
        let maxHeight = 0;
        cards.forEach(card => {
          const cardHeight = (card as HTMLElement).offsetHeight;
          maxHeight = Math.max(maxHeight, cardHeight);
        });
        
        // Set all cards to the height of the tallest card
        if (maxHeight > 0) {
          cards.forEach(card => {
            (card as HTMLElement).style.height = `${maxHeight}px`;
          });
        }
      }
      
      // Success Highlights section (keep original implementation)
      if (successHighlightsRef.current) {
        const carouselItems = successHighlightsRef.current.querySelectorAll('.carousel-item');
        
        carouselItems.forEach(carouselItem => {
          const cards = carouselItem.querySelectorAll('.testimonial-card');
          
          cards.forEach(card => {
            (card as HTMLElement).style.height = 'auto';
          });
          
          let maxHeight = 0;
          cards.forEach(card => {
            const cardHeight = (card as HTMLElement).offsetHeight;
            maxHeight = Math.max(maxHeight, cardHeight);
          });
          
          if (maxHeight > 0) {
            cards.forEach(card => {
              (card as HTMLElement).style.height = `${maxHeight}px`;
            });
          }
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
  }, [successStoriesIndex, successHighlightsIndex]);

  // Add auto-scroll effect for success stories
  useEffect(() => {
    // Set up auto-scrolling timer
    const autoScrollTimer = setInterval(() => {
      // Calculate next index with wrapping
      const maxIndex = isSmallScreen ? successStories.length : Math.ceil(successStories.length / 2);
      const nextIndex = (successStoriesIndex + 1) % maxIndex;
      
      // Set next index directly for smooth transition
      setSuccessStoriesIndex(nextIndex);
    }, 3000);
    
    // Clean up timer on unmount
    return () => {
      clearInterval(autoScrollTimer);
    };
  }, [successStoriesIndex, isSmallScreen]);

  // Add auto-scroll effect for success highlights
  useEffect(() => {
    // Set up auto-scrolling timer
    const autoScrollTimer = setInterval(() => {
      // Calculate max index based on screen size and number of cards per slide
      const maxIndex = isSmallScreen ? successHighlights.length : Math.ceil(successHighlights.length / 3);
      const nextIndex = (successHighlightsIndex + 1) % maxIndex;
      
      // Set next index directly for smooth transition
      setSuccessHighlightsIndex(nextIndex);
    }, 4000); // Slightly longer interval than success stories
    
    // Clean up timer on unmount
    return () => {
      clearInterval(autoScrollTimer);
    };
  }, [successHighlightsIndex, isSmallScreen, successHighlights.length]);

  // Function to render success stories slides based on screen size
  const renderSuccessStoriesSlides = () => {
    if (isSmallScreen) {
      // Single testimonial per slide for mobile
      return successStories.map((story) => (
        <Carousel.Item key={story.id}>
          <div className="row testimonial-row">
            <div className="col-12">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>"{story.text}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-img">
                    <img src={story.image} alt={story.name} />
                  </div>
                  <div className="author-info">
                    <h4>{story.name}</h4>
                    <p>{story.credential}</p>
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
      for (let i = 0; i < successStories.length; i += 2) {
        const firstStory = successStories[i];
        const secondStory = successStories[i + 1];
        
        if (secondStory) {
          slides.push(
            <Carousel.Item key={`slide-${i}`}>
              <div className="row testimonial-row">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <p>"{firstStory.text}"</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-img">
                        <img src={firstStory.image} alt={firstStory.name} />
                      </div>
                      <div className="author-info">
                        <h4>{firstStory.name}</h4>
                        <p>{firstStory.credential}</p>
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
                      <p>"{secondStory.text}"</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-img">
                        <img src={secondStory.image} alt={secondStory.name} />
                      </div>
                      <div className="author-info">
                        <h4>{secondStory.name}</h4>
                        <p>{secondStory.credential}</p>
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
                      <p>"{firstStory.text}"</p>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-img">
                        <img src={firstStory.image} alt={firstStory.name} />
                      </div>
                      <div className="author-info">
                        <h4>{firstStory.name}</h4>
                        <p>{firstStory.credential}</p>
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

  // Function to render success highlights slides based on screen size
  const renderSuccessHighlightsSlides = () => {
    if (isSmallScreen) {
      // Single highlight per slide for mobile
      return successHighlights.map((highlight) => (
        <Carousel.Item key={highlight.id}>
          <div className="row highlights-row">
            <div className="col-12">
              <div className="testimonial-card highlight-card">
                <div className="success-highlight-img">
                  <img src={highlight.image} alt={highlight.alt} />
                </div>
                <div className="testimonial-content highlight-caption">
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ));
    } else {
      // Three highlights per slide for desktop
      const slides = [];
      for (let i = 0; i < successHighlights.length; i += 3) {
        const firstHighlight = successHighlights[i];
        const secondHighlight = successHighlights[i + 1];
        const thirdHighlight = successHighlights[i + 2];
        
        slides.push(
          <Carousel.Item key={`highlight-slide-${i}`}>
            <div className="row highlights-row g-2">
              <div className="col-md-4 pe-md-1">
                {firstHighlight && (
                  <div className="testimonial-card highlight-card">
                    <div className="success-highlight-img">
                      <img src={firstHighlight.image} alt={firstHighlight.alt} />
                    </div>
                    <div className="testimonial-content highlight-caption">
                      <h4>{firstHighlight.title}</h4>
                      <p>{firstHighlight.description}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-md-4 px-md-1">
                {secondHighlight && (
                  <div className="testimonial-card highlight-card">
                    <div className="success-highlight-img">
                      <img src={secondHighlight.image} alt={secondHighlight.alt} />
                    </div>
                    <div className="testimonial-content highlight-caption">
                      <h4>{secondHighlight.title}</h4>
                      <p>{secondHighlight.description}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-md-4 ps-md-1">
                {thirdHighlight && (
                  <div className="testimonial-card highlight-card">
                    <div className="success-highlight-img">
                      <img src={thirdHighlight.image} alt={thirdHighlight.alt} />
                    </div>
                    <div className="testimonial-content highlight-caption">
                      <h4>{thirdHighlight.title}</h4>
                      <p>{thirdHighlight.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Carousel.Item>
        );
      }
      return slides;
    }
  };

  return (
    <div className="results-home">
      <Helmet>
        <title>Success Stories & Results | SPECTRUM Education</title>
        <meta name="description" content="Explore the success stories and achievements of SPECTRUM Education students in NEET, IIT-JEE, Spoken English and other courses. See how our students excel." />
        <meta name="keywords" content="success stories, student achievements, NEET results, JEE toppers, spoken English success, academic excellence" />
        <link rel="canonical" href={getCanonicalUrl("/results")} />
      </Helmet>
      
      <div className="container">
        <Breadcrumbs 
          customPaths={[
            { path: '/results', label: 'Results' }
          ]} 
        />
        <div className="page-header">
          <h1>Results</h1>
          <p>Over 10,000+ students successfully trained with demonstrated excellence</p>
        </div>
        
        <div className="section results-overview">
          <h2><span className="text-black">Our</span> Success Stories</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="result-category-card d-flex flex-column h-100">
                <div className="result-category-icon mb-3">
                  <i className="fas fa-flask"></i>
                </div>
                <h3>NEET Results</h3>
                <p>Our exceptional performance in the National Eligibility cum Entrance Test</p>
                <div className="text-center mt-auto">
                  <CollisionButton 
                    text="Register Now"
                    href="https://careerpoint.ac.in/center/vellore"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="result-category-card d-flex flex-column h-100">
                <div className="result-category-icon mb-3">
                  <i className="fas fa-calculator"></i>
                </div>
                <h3>JEE Results</h3>
                <p>Our extraordinary achievements in the Joint Entrance Examination</p>
                <div className="text-center mt-auto">
                  <CollisionButton 
                    text="Register Now"
                    href="https://careerpoint.ac.in/center/vellore"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="result-category-card d-flex flex-column h-100">
                <div className="result-category-icon mb-3">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Board Exam Results</h3>
                <p>Celebrating the accomplishments of our students in ICSE, CBSE, and State Board exams</p>
                <div className="text-center mt-auto">
                  <CollisionButton 
                    text="Register Now"
                    href="/course-registration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Redesigned Success Stories Section with Home.tsx implementation */}
        <section className="section testimonials">
          <h2 className="section-title">Success Stories</h2>
          <div className="testimonial-carousel" ref={successStoriesRef}>
            <Carousel 
              key="success-stories-carousel"
              activeIndex={successStoriesIndex} 
              onSelect={handleSuccessStoriesSelect} 
              indicators={true} 
              controls={false}
              className="testimonial-carousel smooth-carousel"
              pause="hover"
              wrap={true}
              slide={true}
            >
              {renderSuccessStoriesSlides()}
            </Carousel>
          </div>
        </section>
        
        <div className="section achievements-stats">
          <h2><span className="text-black">Our</span> Achievements</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="stat-card h-100">
                <div className="stat-value">10,000+</div>
                <div className="stat-label">Students Successfully Trained</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-card h-100">
                <div className="stat-value">High</div>
                <div className="stat-label">Success Rate in Competitive Exams</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-card h-100">
                <div className="stat-value">12+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section success-areas">
          <h2><span className="text-black">Areas of</span> Achievement</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="success-area-card h-100 d-flex flex-column">
                <div className="area-icon mb-3">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Academic Excellence</h3>
                <p>High success rate in competitive exams and academic boards</p>
                <ul className="achievement-list mb-0 mt-3">
                  <li>NEET qualifiers</li>
                  <li>JEE selections</li>
                  <li>Board exam toppers</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="success-area-card h-100 d-flex flex-column">
                <div className="area-icon mb-3">
                  <i className="fas fa-comments"></i>
                </div>
                <h3>Skill Development</h3>
                <p>Many learners report enhanced fluency, confidence, and performance</p>
                <ul className="achievement-list mb-0 mt-3">
                  <li>English communication fluency</li>
                  <li>Interview and presentation confidence</li>
                  <li>Handwriting and calligraphy improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Redesigned Success Highlights Section */}
        <section className="section testimonials">
          <h2 className="section-title">Success <span className="text-black">Highlights</span></h2>
          <div className="testimonials-carousel" ref={successHighlightsRef}>
            <Carousel 
              key="success-highlights-carousel"
              activeIndex={successHighlightsIndex} 
              onSelect={handleSuccessHighlightsSelect} 
              indicators={true} 
              controls={false}
              className="testimonial-carousel smooth-carousel"
              pause="hover"
              wrap={true}
              slide={true}
              interval={3000}
            >
              {renderSuccessHighlightsSlides()}
            </Carousel>
          </div>
        </section>
        
        <div className="section cta-section">
          <div className="cta-content">
            <h2><span className="text-primary">"Success Starts Here"</span> isn't just a tagline—it's an outcome!</h2>
            <p>Join us to become part of our growing success community</p>
            <div className="cta-buttons">
              <AnimatedButton 
                text="Contact Us"
                href="/contact"
                className="results-enroll-btn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpectrumResults: React.FC = () => {
  return (
    <div className="results-page">
      <Routes>
        <Route path="/" element={<ResultsHome />} />
        <Route path="*" element={<ResultsHome />} />
      </Routes>
    </div>
  );
};

export default SpectrumResults; 