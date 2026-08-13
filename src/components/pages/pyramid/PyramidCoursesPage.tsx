import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../CoursesPage';
import Breadcrumbs from '../../common/Breadcrumbs';
import AnimatedButton from '../../common/AnimatedButton';
import CollisionButton from '../../common/CollisionButton';
import { initializeAccordions } from '../../../utils/bootstrapHelpers';
import { getCanonicalUrl } from '../../../utils/seoUtils';

// Sub-components
const CourseHome = () => {
  return (
    <div className="courses-home">
      <Helmet>
        <title>Academic & Skill Development Courses | SPECTRUM Education</title>
        <meta name="description" content="Discover SPECTRUM's comprehensive education offerings including competitive exam coaching and skill development courses. Excellence in education since 2006." />
        <meta name="keywords" content="academic programs, NEET, IIT-JEE, spoken English, handwriting, calligraphy, personality development, SPECTRUM education" />
        <link rel="canonical" href={getCanonicalUrl("/pyramid/PyramidCoursesPage")} />
      </Helmet>
      <main className="container">
        <Breadcrumbs 
          customPaths={[
            { path: '/pyramid/PyramidCoursesPage', label: 'Courses' }
          ]} 
        />
        <header className="page-header">
          <h1>Our Courses</h1>
          <p>Specializing in academic excellence and creative development since 2006</p>
        </header>
        
        <section className="section course-categories">
          <h2>Explore <span className="text-black">Our Course</span> Categories</h2>
          
          <div className="row g-4 mt-4">
            <div className="col-md-12">
              <div className="category-card pyramid-card d-flex flex-column h-100">
                <div className="category-header text-center mb-3">
                  <div className="category-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h3>Pyramid</h3>
                </div>
                <div className="category-content">
                  <p className="text-center">Comprehensive academic and skill development programs</p>
                  <div className="course-features">
                    <ul className="category-features">
                      <li>Academic Foundation & Power Programs</li>
                      <li>Spoken English Courses</li>
                      <li>Handwriting & Calligraphy</li>
                      <li>Personality Development</li>
                      <li>Personalized Learning Experience</li>
                    </ul>
                  </div>
                </div>
                <div className="category-footer text-center mt-auto">
                  <AnimatedButton 
                    text="Explore Pyramid Courses"
                    href="/pyramid/PyramidCoursesPage/pyramid"
                    className="btn-category"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section why-choose-us">
          <h2><span className="text-black">Why</span> Choose Us?</h2>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-history"></i>
                </div>
                <h3>Established Legacy</h3>
                <p>Providing quality education since 2006 with proven results</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Expert Faculty</h3>
                <p>Learn from experienced educators passionate about student success</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Comprehensive Materials</h3>
                <p>Access to quality study materials and resources for effective learning</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Individual Attention</h3>
                <p>Focus on personalized learning with regular feedback and guidance</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Progress Tracking</h3>
                <p>Regular assessments and detailed analytics to monitor improvement</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-award"></i>
                </div>
                <h3>Proven Results</h3>
                <p>Consistently helping students achieve their academic and personal goals</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section smart-tuition">
          <h2 className="text-center">
            <span className="text-black">Smart</span> Tuition – Class 6 Onwards
          </h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Daily Classes with Concept Notes</h3>
                <p className="mb-0">Regular classes reinforced with comprehensive concept notes for better retention</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <h3>Homework Help & Exam Readiness</h3>
                <p className="mb-0">Support for assignments and thorough preparation for all examinations</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Join Early. Learn Smart. Lead Ahead.</h3>
                <p className="mb-0">Build a strong foundation early for greater academic success</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section cta-section">
          <div className="cta-content">
            <h2>Begin Your Learning Journey Today</h2>
            <p>Explore our diverse course offerings and take the first step toward academic and personal excellence</p>
            <div className="cta-buttons">
              <CollisionButton
                text="Contact Us"
                href="/contact"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// English course page component
const EnglishCoursePage = () => {
  return (
    <div className="english-courses spoken-english-page">
      <Helmet>
        <title>Spoken English Courses | SPECTRUM Education</title>
        <meta name="description" content="Enhance your communication skills with SPECTRUM's proven Spoken English courses. We offer Basic, Advanced, and Practical English programs designed for learners at all levels." />
        <meta name="keywords" content="spoken English, English courses, communication skills, language learning, English programs, SPECTRUM education" />
        <link rel="canonical" href={getCanonicalUrl("/pyramid/pyramid/PyramidCoursesPage/pyramid/english")} />
      </Helmet>
      <div className="container">
        <Breadcrumbs 
          customPaths={[
            { path: '/pyramid/PyramidCoursesPage', label: 'Courses' },
            { path: '/pyramid/PyramidCoursesPage/pyramid', label: 'Pyramid' },
            { path: '/pyramid/PyramidCoursesPage/pyramid/english', label: 'Spoken English' }
          ]} 
        />
        <div className="page-header">
          <h1>Spoken English Courses</h1>
          <p>Master English communication skills for all levels</p>
        </div>
        
        <div className="section english-skills" style={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <h2><span className="text-black">THE 4 SKILLS IN</span> <span className="text-blue">ENGLISH</span> <span className="text-black">- LSRW</span></h2>
          <p className="section-intro mb-5">Mastering a language requires developing four key skills. Our comprehensive approach ensures you build proficiency in all areas.</p>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="skill-card h-100 d-flex flex-column">
                <div className="skill-icon mb-3">
                  <i className="fas fa-headphones"></i>
                </div>
                <h3>LISTENING</h3>
                <p>The first step in learning any language. Helps you understand pronunciation, tone, and context.</p>
                <ul className="skill-highlights mt-3">
                  <li>Comprehension exercises</li>
                  <li>Listening to native speakers</li>
                  <li>Understanding different accents</li>
                  <li>Audio-based activities</li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="skill-card speaking-card h-100 d-flex flex-column">
                <div className="skill-icon mb-3">
                  <i className="fas fa-comments"></i>
                </div>
                <h3>SPEAKING</h3>
                <p>Essential for real-time communication. Builds fluency, confidence, and the ability to express thoughts clearly.</p>
                <ul className="skill-highlights mt-3">
                  <li>Conversation practice</li>
                  <li>Pronunciation drills</li>
                  <li>Public speaking opportunities</li>
                  <li>Role-play exercises</li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="skill-card h-100 d-flex flex-column">
                <div className="skill-icon mb-3">
                  <i className="fas fa-book-open"></i>
                </div>
                <h3>READING</h3>
                <p>Expands vocabulary, improves grammar, and strengthens comprehension. Exposes you to different writing styles and ideas.</p>
                <ul className="skill-highlights mt-3">
                  <li>Structured reading exercises</li>
                  <li>Comprehension techniques</li>
                  <li>Vocabulary building</li>
                  <li>Critical analysis skills</li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="skill-card writing-card h-100 d-flex flex-column">
                <div className="skill-icon mb-3">
                  <i className="fas fa-pen"></i>
                </div>
                <h3>WRITING</h3>
                <p>Sharpens grammar, structure, and clarity. Allows you to organize thoughts and communicate effectively in formal and informal settings.</p>
                <ul className="skill-highlights mt-3">
                  <li>Grammar practice</li>
                  <li>Essay writing</li>
                  <li>Business communication</li>
                  <li>Creative expression</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section english-overview" style={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <h2><span className="text-black">Our</span> <span className="text-blue">English</span> <span className="text-black">Programs</span></h2>
          <p className="section-intro mb-5">Our specialized English programs are designed to help learners of all ages and backgrounds develop strong communication skills in English. With a focus on practical application and confidence building, our courses create a supportive environment for language learning.</p>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="english-course-card h-100 d-flex flex-column">
                <div className="course-level-icon mb-3">
                  <i className="fas fa-book-open text-primary icon-color"></i>
                </div>
                <h3>Basic English</h3>
                <p>Our foundational program focuses on essential grammar rules, vocabulary building, and simple conversation skills. Perfect for beginners and those with limited exposure to English.</p>
                <div className="course-highlights mt-auto mb-3">
                  <ul className="mb-4">
                    <li>Fundamental grammar structures</li>
                    <li>Everyday vocabulary development</li>
                    <li>Basic reading and writing practice</li>
                    <li>Simple conversation exercises</li>
                    <li>Pronunciation training</li>
                  </ul>
                </div>
                <div className="text-center mt-auto">
                  <CollisionButton 
                    text="View Details"
                    href="/pyramid/PyramidCoursesPage/pyramid/english/basic"
                  />
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="english-course-card h-100 d-flex flex-column">
                <div className="course-level-icon mb-3">
                  <i className="fas fa-comments text-primary icon-color"></i>
                </div>
                <h3>Advanced English</h3>
                <p>Take your language skills to the next level with our advanced program focusing on fluency, complex grammar structures, and sophisticated vocabulary. Ideal for intermediate learners looking to improve significantly.</p>
                <div className="course-highlights mt-auto mb-3">
                  <ul className="mb-4">
                    <li>Advanced grammar concepts</li>
                    <li>Extensive vocabulary expansion</li>
                    <li>Fluent conversation practice</li>
                    <li>Public speaking techniques</li>
                    <li>Creative writing exercises</li>
                  </ul>
                </div>
                <div className="text-center mt-auto">
                  <CollisionButton 
                    text="View Details"
                    href="/pyramid/PyramidCoursesPage/pyramid/english/advanced"
                  />
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="english-course-card h-100 d-flex flex-column">
                <div className="course-level-icon mb-3">
                  <i className="fas fa-users text-primary icon-color"></i>
                </div>
                <h3>Practical English</h3>
                <p>Our application-oriented program focuses on real-world English usage through group discussions, debates, and role-playing. Perfect for those who want to gain confidence in professional and social settings.</p>
                <div className="course-highlights mt-auto mb-3">
                  <ul className="mb-4">
                    <li>Group discussion techniques</li>
                    <li>Debate and presentation skills</li>
                    <li>Interview preparation</li>
                    <li>Business communication</li>
                    <li>Social interaction confidence</li>
                  </ul>
                </div>
                <div className="text-center mt-auto">
                  <CollisionButton 
                    text="View Details"
                    href="/pyramid/PyramidCoursesPage/pyramid/english/practical"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Importance of Spoken English Section */}
        <div className="section importance-english" style={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <h2><span className="text-black">IMPORTANCE OF</span> <span className="text-blue">SPOKEN ENGLISH</span></h2>
          <p className="section-intro mb-5">Effective English communication is a vital skill in today's interconnected world, opening doors to numerous opportunities in various aspects of life.</p>
          
          <div className="row g-4">
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="importance-card d-flex align-items-center">
                <div className="importance-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="importance-content ms-3">
                  <h3>CAREER ADVANTAGE</h3>
                  <p>Opens up better job and promotion opportunities</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="importance-card d-flex align-items-center">
                <div className="importance-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="importance-content ms-3">
                  <h3>GLOBAL COMMUNICATION</h3>
                  <p>Helps you connect with people worldwide</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="importance-card d-flex align-items-center">
                <div className="importance-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                <div className="importance-content ms-3">
                  <h3>EDUCATION ACCESS</h3>
                  <p>Makes learning easier, especially in higher education</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="importance-card d-flex align-items-center">
                <div className="importance-icon">
                  <i className="fas fa-video"></i>
                </div>
                <div className="importance-content ms-3">
                  <h3>CONFIDENCE BOOST</h3>
                  <p>Improves public speaking and self-expression</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="importance-card d-flex align-items-center">
                <div className="importance-icon">
                  <i className="fas fa-plane"></i>
                </div>
                <div className="importance-content ms-3">
                  <h3>DIGITAL WORLD</h3>
                  <p>Unlocks access to online courses, videos, and information</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="importance-card d-flex align-items-center">
                <div className="importance-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="importance-content ms-3">
                  <h3>TRAVEL EASE</h3>
                  <p>Makes international travel smoother and more enjoyable</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="importance-card d-flex align-items-center">
                <div className="importance-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="importance-content ms-3">
                  <h3>PROFESSIONAL GROWTH</h3>
                  <p>Essential in meetings, presentations, and networking</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-12 mb-4 d-flex align-items-center justify-content-center">
              <div className="importance-contact-btn text-center">
                <h3 className="mb-3">Ready to improve your English skills?</h3>
                <CollisionButton 
                  text="Contact Us"
                  href="/contact"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="section program-features" style={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <h2><span className="text-black">Program</span> Features</h2>
          <div className="row g-4">
            <div className="col-lg-6 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-microphone-alt"></i>
                </div>
                <h3>Speech Production Methodology</h3>
                <p>Our unique teaching approach focuses on practical speech production rather than just theoretical knowledge. This helps learners develop natural speaking patterns and confidence in real-world situations.</p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Experienced Faculty</h3>
                <p>Learn from qualified trainers with extensive experience in teaching English as a second language. Our faculty members use modern teaching techniques and provide personalized attention to each student.</p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-users-cog"></i>
                </div>
                <h3>Small Batch Sizes</h3>
                <p>We maintain limited students per batch to ensure individual attention and maximum speaking practice for each participant. This creates an interactive learning environment where everyone gets ample opportunity to practice.</p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <h3>Modern Learning Environment</h3>
                <p>Study in air-conditioned classrooms equipped with audio-visual facilities that enhance the learning experience. Our language lab provides additional resources for pronunciation practice and listening skills.</p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3>Flexible Schedule Options</h3>
                <p>Choose from morning, afternoon, evening, or weekend batches to suit your availability. We offer both short-term intensive courses and long-term regular programs to accommodate different learning needs.</p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3>Performance Certification</h3>
                <p>Receive a course completion certificate that validates your language proficiency level. Regular assessments track your progress and identify areas for improvement throughout the course.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Basic English page component
const BasicEnglishPage = () => {
  useEffect(() => {
    // Initialize Bootstrap accordions
    initializeAccordions();
  }, []);

  return (
    <div className="english-courses spoken-english-page">
      <Helmet>
        <title>Basic English Course | SPECTRUM Education</title>
        <meta name="description" content="Build a strong foundation in English grammar, vocabulary, and simple conversation skills with SPECTRUM's Basic English course. Perfect for beginners looking to start their English learning journey." />
        <meta name="keywords" content="basic English, beginner English course, English grammar, vocabulary building, English for beginners, SPECTRUM education" />
        <link rel="canonical" href={getCanonicalUrl("/pyramid/pyramid/PyramidCoursesPage/pyramid/english/basic")} />
        <style type="text/css">{`
          .english-courses.spoken-english-page .course-benefits li::before {
            color: #f8931f !important;
          }
        `}</style>
      </Helmet>
      <div className="container">
        <Breadcrumbs 
          customPaths={[
            { path: '/pyramid/PyramidCoursesPage', label: 'Courses' },
            { path: '/pyramid/PyramidCoursesPage/pyramid', label: 'Pyramid' },
            { path: '/pyramid/PyramidCoursesPage/pyramid/english', label: 'Spoken English' },
            { path: '/pyramid/PyramidCoursesPage/pyramid/english/basic', label: 'Basic English' }
          ]} 
        />
        <div className="page-header">
          <h1>Basic English Course</h1>
          <p>Build a strong foundation in English grammar and communication</p>
        </div>
        
        <div className="section course-description">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7 col-md-12">
              <h2>About the <span className="text-primary">Basic English</span> Course</h2>
              <p className="mb-4">Our Basic English course is designed for beginners and those with limited exposure to the English language. This foundational program focuses on essential grammar structures, everyday vocabulary, and simple conversation skills to help you start communicating in English with confidence.</p>
              
              <p>This course is perfect for:</p>
              <ul className="course-benefits mb-4">
                <li>Complete beginners with little or no knowledge of English</li>
                <li>Those who understand basic English but struggle to speak</li>
                <li>Students who need to strengthen their fundamental grammar</li>
                <li>Professionals looking to improve basic communication skills</li>
                <li>Anyone who wants to build confidence in simple English conversations</li>
              </ul>
              
              <div className="text-center mt-4">
                <CollisionButton 
                  text="Register Now"
                  href="/course-registration"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="course-image">
                <img 
                  src="/images/banner/basic-english.jpg" 
                  alt="SPECTRUM's Basic English Course for Beginners" 
                  className="img-fluid rounded shadow"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https:/placehold.co/500x300/1565C0,FFFFFF/FFFFFF,1565C0/?text=Basic+English";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="section course-curriculum" style={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <h2>Course <span className="text-primary">Curriculum</span></h2>
          <div className="curriculum-accordion">
            <div className="accordion" id="basicEnglishAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Module 1: Grammar Foundations
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#basicEnglishAccordion">
                  <div className="accordion-body">
                    <ul className="module-topics">
                      <li>Parts of speech (nouns, verbs, adjectives, etc.)</li>
                      <li>Basic sentence structure</li>
                      <li>Present simple and continuous tenses</li>
                      <li>Past simple tense</li>
                      <li>Articles (a, an, the)</li>
                      <li>Subject-verb agreement</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Module 2: Vocabulary Development
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#basicEnglishAccordion">
                  <div className="accordion-body">
                    <ul className="module-topics">
                      <li>Everyday vocabulary (food, travel, shopping, etc.)</li>
                      <li>Numbers and quantities</li>
                      <li>Time expressions</li>
                      <li>Common phrases and expressions</li>
                      <li>Basic adjectives and adverbs</li>
                      <li>Word families and relationships</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Module 3: Speaking and Pronunciation
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#basicEnglishAccordion">
                  <div className="accordion-body">
                    <ul className="module-topics">
                      <li>Basic sounds in English</li>
                      <li>Stress and intonation patterns</li>
                      <li>Greetings and introductions</li>
                      <li>Asking and answering simple questions</li>
                      <li>Role-play exercises for everyday situations</li>
                      <li>Pronunciation practice through tongue twisters</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Module 4: Listening and Reading Skills
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#basicEnglishAccordion">
                  <div className="accordion-body">
                    <ul className="module-topics">
                      <li>Listening for specific information</li>
                      <li>Understanding simple instructions</li>
                      <li>Reading short texts and dialogues</li>
                      <li>Comprehension exercises</li>
                      <li>Basic note-taking skills</li>
                      <li>Summarizing simple passages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Advanced English page component
const AdvancedEnglishPage = () => {
  return (
    <div className="advanced-english spoken-english-page">
      <Helmet>
        <title>Advanced English Course | SPECTRUM Education</title>
        <meta name="description" content="Take your English to the next level with SPECTRUM's Advanced English course. Focus on complex grammar, extensive vocabulary, and sophisticated communication skills for professional settings." />
        <meta name="keywords" content="advanced English course, fluent English speaking, English mastery, professional English, English proficiency" />
        <link rel="canonical" href={getCanonicalUrl("/pyramid/pyramid/PyramidCoursesPage/pyramid/english/advanced")} />
        <style type="text/css">{`
          .advanced-english.spoken-english-page .course-benefits li::before {
            color: #f8931f !important;
          }
        `}</style>
      </Helmet>
      <div className="container">
        <Breadcrumbs 
          customPaths={[
            { path: '/pyramid/PyramidCoursesPage', label: 'Courses' },
            { path: '/pyramid/PyramidCoursesPage/pyramid', label: 'Pyramid' },
            { path: '/pyramid/PyramidCoursesPage/pyramid/english', label: 'Spoken English' },
            { path: '/pyramid/PyramidCoursesPage/pyramid/english/advanced', label: 'Advanced English' }
          ]} 
        />
        <div className="page-header">
          <h1>Advanced English Course</h1>
          <p>Elevate your language skills with advanced grammar, vocabulary and fluency</p>
        </div>
        
        <div className="section course-description">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7 col-md-12">
              <h2>About the <span className="text-primary">Advanced English</span> Course</h2>
              <p className="mb-4">Our Advanced English course is designed for intermediate learners who want to significantly improve their language proficiency. This comprehensive program focuses on complex grammar structures, extensive vocabulary development, and sophisticated communication skills to help you express yourself fluently in diverse situations.</p>
              
              <p>This course is perfect for:</p>
              <ul className="course-benefits mb-4">
                <li>Intermediate English speakers looking to enhance their fluency</li>
                <li>Professionals who need to use English extensively at work</li>
                <li>Students preparing for higher education in English</li>
                <li>Those who want to refine their grammar and vocabulary</li>
                <li>Individuals seeking to eliminate common errors in their English</li>
              </ul>
              
              <div className="text-center mt-4">
                <CollisionButton 
                  text="Register Now"
                  href="/course-registration"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="course-image">
                <img 
                  src="/images/banner/advanced-english.jpg" 
                  alt="SPECTRUM's Advanced English Course for Professional Communication" 
                  className="img-fluid rounded shadow"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https:/placehold.co/500x300/1565C0,FFFFFF/FFFFFF,1565C0/?text=Advanced+English";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="section course-curriculum" style={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <h2>Course <span className="text-primary">Curriculum</span></h2>
          <div className="curriculum-accordion">
            <div className="accordion" id="advancedEnglishAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#advCollapseOne" aria-expanded="true" aria-controls="advCollapseOne">
                    Module 1: Advanced Grammar Structures
                  </button>
                </h2>
                <div id="advCollapseOne" className="accordion-collapse collapse show" data-bs-parent="#advancedEnglishAccordion">
                  <div className="accordion-body">
                    <ul className="module-topics">
                      <li>Perfect tenses and their applications</li>
                      <li>Passive voice in various contexts</li>
                      <li>Conditional sentences (all types)</li>
                      <li>Modal verbs for advanced functions</li>
                      <li>Complex sentence structures and clauses</li>
                      <li>Reported speech and discourse</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#advCollapseTwo" aria-expanded="false" aria-controls="advCollapseTwo">
                    Module 2: Vocabulary Enhancement
                  </button>
                </h2>
                <div id="advCollapseTwo" className="accordion-collapse collapse" data-bs-parent="#advancedEnglishAccordion">
                  <div className="accordion-body">
                    <ul className="module-topics">
                      <li>Idiomatic expressions and phrasal verbs</li>
                      <li>Academic and professional vocabulary</li>
                      <li>Synonyms, antonyms, and homonyms</li>
                      <li>Collocations and word partnerships</li>
                      <li>Nuances in word meanings</li>
                      <li>Building vocabulary through context and themes</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#advCollapseThree" aria-expanded="false" aria-controls="advCollapseThree">
                    Module 3: Fluency and Pronunciation
                  </button>
                </h2>
                <div id="advCollapseThree" className="accordion-collapse collapse" data-bs-parent="#advancedEnglishAccordion">
                  <div className="accordion-body">
                    <ul className="module-topics">
                      <li>Connected speech and linking</li>
                      <li>Advanced stress patterns and intonation</li>
                      <li>Reduction of accent for clear pronunciation</li>
                      <li>Rhythm and timing in spoken English</li>
                      <li>Formal and informal speech patterns</li>
                      <li>Techniques for natural-sounding fluency</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#advCollapseFour" aria-expanded="false" aria-controls="advCollapseFour">
                    Module 4: Advanced Communication Skills
                  </button>
                </h2>
                <div id="advCollapseFour" className="accordion-collapse collapse" data-bs-parent="#advancedEnglishAccordion">
                  <div className="accordion-body">
                    <ul className="module-topics">
                      <li>Public speaking and presentation techniques</li>
                      <li>Persuasive language and argumentation</li>
                      <li>Descriptive and narrative communication</li>
                      <li>Critical discussion and debate skills</li>
                      <li>Business communication and professional emails</li>
                      <li>Creative writing and expression</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Practical English page component
const PracticalEnglishPage = () => {
  useEffect(() => {
    // Initialize Bootstrap accordions
    initializeAccordions();
  }, []);

  return (
    <div className="practical-english spoken-english-page">
      <Helmet>
        <title>Practical English Course | SPECTRUM Education</title>
        <meta name="description" content="Apply your English skills in real-world scenarios. Gain confidence through debates, group discussions, presentations, and interactive sessions with our Practical English program." />
        <meta name="keywords" content="practical English course, English speaking practice, conversation skills, public speaking, English confidence" />
        <link rel="canonical" href={getCanonicalUrl("/pyramid/pyramid/PyramidCoursesPage/pyramid/english/practical")} />
        <style type="text/css">{`
          .practical-english.spoken-english-page .course-benefits li::before {
            color: #f8931f !important;
          }
        `}</style>
      </Helmet>
      <div className="container">
        <Breadcrumbs 
          customPaths={[
            { path: '/pyramid/PyramidCoursesPage', label: 'Courses' },
            { path: '/pyramid/PyramidCoursesPage/pyramid', label: 'Pyramid' },
            { path: '/pyramid/PyramidCoursesPage/pyramid/english', label: 'Spoken English' },
            { path: '/pyramid/PyramidCoursesPage/pyramid/english/practical', label: 'Practical English' }
          ]} 
        />
        <div className="page-header">
          <h1>Practical English Course</h1>
          <p>Master real-world communication with confidence-building speaking practice</p>
        </div>
        
        <div className="section course-description">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7 col-md-12">
              <h2>About the <span className="text-primary">Practical English</span> Course</h2>
              <p className="mb-4">Our Practical English course is designed for those who want to gain confidence in real-world English usage. This application-oriented program focuses on interactive exercises, role-playing, group discussions, and debates to help you become comfortable and effective in various professional and social communication settings.</p>
              
              <p>This course is perfect for:</p>
              <ul className="course-benefits mb-4">
                <li>Professionals who need to participate in meetings and presentations</li>
                <li>Job seekers preparing for interviews and workplace communication</li>
                <li>Students who want to excel in group discussions and presentations</li>
                <li>Those who understand English but lack confidence in speaking</li>
                <li>Anyone looking to improve their social communication skills</li>
              </ul>
              
              <div className="text-center mt-4">
                <CollisionButton 
                  text="Register Now"
                  href="/course-registration"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="course-image">
                <img 
                  src="/images/banner/practical-english.jpg" 
                  alt="SPECTRUM's Practical English Course for Real-World Applications" 
                  className="img-fluid rounded shadow"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https:/placehold.co/500x300/1565C0,FFFFFF/FFFFFF,1565C0/?text=Practical+English";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="section course-curriculum" style={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <h2>Course <span className="text-primary">Curriculum</span></h2>
          <div className="curriculum-accordion">
            <div className="accordion" id="practicalEnglishAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#pracCollapseOne" aria-expanded="true" aria-controls="pracCollapseOne">
                    Module 1: Professional Communication
                  </button>
                </h2>
                <div id="pracCollapseOne" className="accordion-collapse collapse show" data-bs-parent="#practicalEnglishAccordion">
                  <div className="accordion-body">
                    <ul className="module-topics">
                      <li>Business introductions and networking</li>
                      <li>Effective emails and correspondence</li>
                      <li>Meeting participation techniques</li>
                      <li>Telephone conversations in a professional context</li>
                      <li>Handling objections and diplomatic disagreement</li>
                      <li>Problem-solving and negotiation language</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pracCollapseTwo" aria-expanded="false" aria-controls="pracCollapseTwo">
                    Module 2: Presentation and Public Speaking
                  </button>
                </h2>
                <div id="pracCollapseTwo" className="accordion-collapse collapse" data-bs-parent="#practicalEnglishAccordion">
                  <div className="accordion-body">
                    <ul className="module-topics">
                      <li>Structuring an effective presentation</li>
                      <li>Visual aids and supporting materials</li>
                      <li>Delivery techniques and body language</li>
                      <li>Handling questions and audience interaction</li>
                      <li>Impromptu speaking and thinking on your feet</li>
                      <li>Persuasive speech techniques</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pracCollapseThree" aria-expanded="false" aria-controls="pracCollapseThree">
                    Module 3: Group Discussions and Debates
                  </button>
                </h2>
                <div id="pracCollapseThree" className="accordion-collapse collapse" data-bs-parent="#practicalEnglishAccordion">
                  <div className="accordion-body">
                    <ul className="module-topics">
                      <li>Group discussion strategies and techniques</li>
                      <li>Expressing and supporting opinions</li>
                      <li>Active listening and responsive speaking</li>
                      <li>Debate structure and formal argumentation</li>
                      <li>Evidence-based discussion</li>
                      <li>Constructive criticism and feedback</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pracCollapseFour" aria-expanded="false" aria-controls="pracCollapseFour">
                    Module 4: Interview Skills and Social Communication
                  </button>
                </h2>
                <div id="pracCollapseFour" className="accordion-collapse collapse" data-bs-parent="#practicalEnglishAccordion">
                  <div className="accordion-body">
                    <ul className="module-topics">
                      <li>Job interview preparation and practice</li>
                      <li>Self-introduction and personal branding</li>
                      <li>Answering common and difficult questions</li>
                      <li>Small talk and social interactions</li>
                      <li>Cultural awareness in communication</li>
                      <li>Building rapport and making connections</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Foundation Program page component
const FoundationProgramPage = () => {
  useEffect(() => {
    // Initialize Bootstrap accordions
    initializeAccordions();
  }, []);

  return (
    <div className="foundation-program pyramid-page">
      <Helmet>
        <title>Foundation Program | SPECTRUM Education</title>
        <meta name="description" content="Build a strong academic foundation with SPECTRUM's Foundation Program. Comprehensive coaching for students in classes 6-12 covering Mathematics, Physics, Chemistry, and Biology." />
        <meta name="keywords" content="foundation program, school academics, maths coaching, science coaching, ICSE, CBSE, state board, SPECTRUM education" />
        <link rel="canonical" href={getCanonicalUrl("/pyramid/pyramid/PyramidCoursesPage/pyramid/foundation")} />
      </Helmet>
      <div className="container">
        <Breadcrumbs 
          customPaths={[
            { path: '/pyramid/PyramidCoursesPage', label: 'Courses' },
            { path: '/pyramid/PyramidCoursesPage/pyramid', label: 'Pyramid' },
            { path: '/pyramid/PyramidCoursesPage/pyramid/foundation', label: 'Foundation & Academics Program' }
          ]} 
        />
        <div className="page-header">
          <h1>Foundation & Academics Program</h1>
          <p>Comprehensive academic coaching for students in classes 6-12</p>
        </div>
        
        {/* Coverage summary section */}
        <div className="section" style={{ backgroundColor: "#ffffff" }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="course-image shadow">
                <img src="/images/banner/academics.png" alt="Foundation & Academics" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <h2>About the <span className="text-primary">Academics Program</span></h2>
              <p className="mb-3">We comprehensively cover all subjects from Classes 6 to 12 across ICSE, CBSE, and State Board curricula, ensuring strong conceptual clarity and exam readiness.</p>
              <ul className="course-benefits mb-3">
                <li>Mathematics, Physics, Chemistry, Biology and Core Languages</li>
                <li>Board-specific teaching plans aligned to ICSE, CBSE, and State Board</li>
                <li>Foundational skill-building: problem solving, reasoning, and application</li>
                <li>Regular assessments, doubt-clearing, and personalized feedback</li>
                <li>Bridge modules for transitioning between classes and boards</li>
              </ul>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge rounded-pill bg-light text-dark border">Class 6–12</span>
                <span className="badge rounded-pill bg-light text-dark border">ICSE</span>
                <span className="badge rounded-pill bg-light text-dark border">CBSE</span>
                <span className="badge rounded-pill bg-light text-dark border">State Board</span>
              </div>
            </div>
        <div className="mt-3" style={{ backgroundColor: "#fff7e6", border: "1px solid #ffd591", padding: "14px 16px", borderRadius: 8 }}>
          <strong style={{ color: "#d48806" }}>Special Training for Board Exams:</strong> Intensive, exam-focused preparation for <strong>Class 10</strong> and <strong>Class 12</strong> Board Examinations (CBSE / ICSE / State Board) with targeted revision plans, previous year papers, time-management strategies, and high-scoring answer writing techniques.
        </div>
          </div>
        </div>
        
        <div className="section course-description">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7 col-md-12">
              <h2>About the <span className="text-primary">Foundation Program</span></h2>
              <p className="mb-4">Our Foundation Program is designed to build a strong academic base for students in classes 6-12. This comprehensive program focuses on core subjects including Mathematics, Physics, Chemistry, and Biology, tailored to ICSE, CBSE, and State Board curricula, helping students excel in their school academics and preparing them for competitive exams.</p>
              
              <p>This program is perfect for:</p>
              <ul className="course-benefits mb-4">
                <li>Students who want to excel in school academics</li>
                <li>Those preparing for future competitive examinations</li>
                <li>Students who need to strengthen their fundamentals in Math and Science</li>
                <li>Learners looking for personalized attention and guidance</li>
                <li>Students aiming to build a strong conceptual foundation</li>
              </ul>
              
              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge rounded-pill bg-light text-dark border">Class 6-12</span>
                <span className="badge rounded-pill bg-light text-dark border">ICSE</span>
                <span className="badge rounded-pill bg-light text-dark border">CBSE</span>
                <span className="badge rounded-pill bg-light text-dark border">State Board</span>
                <span className="badge rounded-pill bg-light text-dark border">Mathematics</span>
                <span className="badge rounded-pill bg-light text-dark border">Physics</span>
                <span className="badge rounded-pill bg-light text-dark border">Chemistry</span>
                <span className="badge rounded-pill bg-light text-dark border">Biology</span>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="course-image shadow">
                <img src="/images/banner/foundation.jpg" alt="Foundation Program" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="section curriculum" style={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <h2>Program <span className="text-primary">Curriculum</span></h2>
          <p className="section-intro mb-4">Our curriculum is designed to align with school syllabi while providing additional depth and practice to master each concept.</p>
          
          <div className="curriculum-accordion accordion" id="foundationAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="mathematicsHeading">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#mathematicsCollapse" aria-expanded="true" aria-controls="mathematicsCollapse">
                  Mathematics
                </button>
              </h2>
              <div id="mathematicsCollapse" className="accordion-collapse collapse show" aria-labelledby="mathematicsHeading" data-bs-parent="#foundationAccordion">
                <div className="accordion-body">
                  <ul className="curriculum-list">
                    <li>Number Systems and Arithmetic Operations</li>
                    <li>Algebra - Linear and Quadratic Equations</li>
                    <li>Geometry and Mensuration</li>
                    <li>Trigonometry and Its Applications</li>
                    <li>Coordinate Geometry</li>
                    <li>Statistics and Probability</li>
                    <li>Mathematical Reasoning and Problem Solving</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header" id="physicsHeading">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#physicsCollapse" aria-expanded="false" aria-controls="physicsCollapse">
                  Physics
                </button>
              </h2>
              <div id="physicsCollapse" className="accordion-collapse collapse" aria-labelledby="physicsHeading" data-bs-parent="#foundationAccordion">
                <div className="accordion-body">
                  <ul className="curriculum-list">
                    <li>Mechanics - Motion, Force, and Energy</li>
                    <li>Heat and Thermodynamics</li>
                    <li>Waves and Sound</li>
                    <li>Light and Optics</li>
                    <li>Electricity and Magnetism</li>
                    <li>Modern Physics</li>
                    <li>Practical Applications and Problem Solving</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header" id="chemistryHeading">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chemistryCollapse" aria-expanded="false" aria-controls="chemistryCollapse">
                  Chemistry
                </button>
              </h2>
              <div id="chemistryCollapse" className="accordion-collapse collapse" aria-labelledby="chemistryHeading" data-bs-parent="#foundationAccordion">
                <div className="accordion-body">
                  <ul className="curriculum-list">
                    <li>Basic Concepts - Atoms, Molecules, and Chemical Bonding</li>
                    <li>Periodic Table and Properties of Elements</li>
                    <li>Chemical Reactions and Equations</li>
                    <li>Acids, Bases, and Salts</li>
                    <li>Organic Chemistry Fundamentals</li>
                    <li>Environmental Chemistry</li>
                    <li>Practical Chemistry and Problem Solving</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header" id="biologyHeading">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#biologyCollapse" aria-expanded="false" aria-controls="biologyCollapse">
                  Biology
                </button>
              </h2>
              <div id="biologyCollapse" className="accordion-collapse collapse" aria-labelledby="biologyHeading" data-bs-parent="#foundationAccordion">
                <div className="accordion-body">
                  <ul className="curriculum-list">
                    <li>Cell Structure and Function</li>
                    <li>Plant and Animal Physiology</li>
                    <li>Genetics and Evolution</li>
                    <li>Human Physiology</li>
                    <li>Ecology and Environment</li>
                    <li>Biodiversity and Conservation</li>
                    <li>Practical Biology and Critical Thinking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section features">
          <h2>Program <span className="text-primary">Features</span></h2>
          <div className="row g-4">
            <div className="col-lg-6 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Expert Faculty</h3>
                <p>Learn from experienced teachers who specialize in making complex concepts easy to understand and apply, with a focus on building strong foundations.</p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Comprehensive Study Materials</h3>
                <p>Receive well-structured study materials including concept notes, solved examples, practice problems, and revision sheets designed to reinforce learning.</p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h3>Regular Assessments</h3>
                <p>Track your progress through regular tests and assessments, with detailed performance analysis to help identify strengths and areas for improvement.</p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Small Batch Sizes</h3>
                <p>Benefit from personalized attention in small batch sizes, allowing teachers to address individual learning needs and provide targeted guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Power Program page component
const PowerProgramPage = () => {
  useEffect(() => {
    // Initialize Bootstrap accordions
    initializeAccordions();
  }, []);

  return (
    <div className="power-program pyramid-page">
      <Helmet>
        <title>Power Program | SPECTRUM Education</title>
        <meta name="description" content="Accelerate your academic growth with SPECTRUM's Power Program. Intensive coaching for students in classes 10-12 looking to excel in challenging competitive exams." />
        <meta name="keywords" content="power program, competitive exam preparation, advanced coaching, intensive training, SPECTRUM education" />
        <link rel="canonical" href={getCanonicalUrl("/pyramid/pyramid/PyramidCoursesPage/pyramid/power-program")} />
      </Helmet>
      <div className="container">
        <Breadcrumbs 
          customPaths={[
            { path: '/pyramid/PyramidCoursesPage', label: 'Courses' },
            { path: '/pyramid/PyramidCoursesPage/pyramid', label: 'Pyramid' },
            { path: '/pyramid/PyramidCoursesPage/pyramid/power-program', label: 'Power Program' }
          ]} 
        />
        <div className="page-header">
          <h1>Power Program</h1>
          <p>Intensive training to accelerate academic excellence and competitive exam preparation</p>
        </div>
        
        <div className="section course-description">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7 col-md-12">
              <h2>About the <span className="text-primary">Power Program</span></h2>
              <p className="mb-4">Our Power Program is an advanced, intensive course designed for students in classes 10-12 who aim to excel in challenging competitive exams. This rigorous program provides in-depth coverage of subjects at an accelerated pace, focusing on problem-solving skills, advanced concepts, and exam strategies that go beyond the regular school curriculum.</p>
              
              <p>This program is perfect for:</p>
              <ul className="course-benefits mb-4">
                <li>Students preparing for competitive examinations like Olympiads</li>
                <li>High achievers looking for advanced academic challenges</li>
                <li>Learners aiming to build exceptional problem-solving skills</li>
                <li>Students preparing for future entrance exams like NEET and JEE</li>
                <li>Those who want to develop analytical and critical thinking abilities</li>
              </ul>
              
              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge rounded-pill bg-light text-dark border">Class 10-12</span>
                <span className="badge rounded-pill bg-light text-dark border">Advanced Mathematics</span>
                <span className="badge rounded-pill bg-light text-dark border">Advanced Physics</span>
                <span className="badge rounded-pill bg-light text-dark border">Advanced Chemistry</span>
                <span className="badge rounded-pill bg-light text-dark border">Competitive Exams</span>
                <span className="badge rounded-pill bg-light text-dark border">Problem Solving</span>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="course-image shadow">
                <img src="/images/banner/power.webp" alt="Power Program" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="section curriculum" style={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <h2>Program <span className="text-primary">Curriculum</span></h2>
          <p className="section-intro mb-4">Our curriculum is designed to cover advanced topics that go beyond regular school syllabi, with a focus on developing higher-order thinking skills.</p>
          
          <div className="curriculum-accordion accordion" id="powerProgramAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="advMathematicsHeading">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#advMathematicsCollapse" aria-expanded="true" aria-controls="advMathematicsCollapse">
                  Advanced Mathematics
                </button>
              </h2>
              <div id="advMathematicsCollapse" className="accordion-collapse collapse show" aria-labelledby="advMathematicsHeading" data-bs-parent="#powerProgramAccordion">
                <div className="accordion-body">
                  <ul className="curriculum-list">
                    <li>Advanced Algebra and Functions</li>
                    <li>Calculus Fundamentals (Limits, Derivatives, Integration)</li>
                    <li>Complex Numbers and Their Applications</li>
                    <li>Vector Algebra and 3D Geometry</li>
                    <li>Permutation, Combination, and Probability</li>
                    <li>Advanced Problem Solving Techniques</li>
                    <li>Mathematical Modeling and Applications</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header" id="advPhysicsHeading">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#advPhysicsCollapse" aria-expanded="false" aria-controls="advPhysicsCollapse">
                  Advanced Physics
                </button>
              </h2>
              <div id="advPhysicsCollapse" className="accordion-collapse collapse" aria-labelledby="advPhysicsHeading" data-bs-parent="#powerProgramAccordion">
                <div className="accordion-body">
                  <ul className="curriculum-list">
                    <li>Mechanics - Rotational Motion and Gravitation</li>
                    <li>Thermodynamics - Laws and Applications</li>
                    <li>Electrostatics and Current Electricity</li>
                    <li>Magnetism and Electromagnetic Induction</li>
                    <li>Wave Optics and Ray Optics</li>
                    <li>Modern Physics - Quantum Theory and Nuclear Physics</li>
                    <li>Experimental Physics and Data Analysis</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header" id="advChemistryHeading">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#advChemistryCollapse" aria-expanded="false" aria-controls="advChemistryCollapse">
                  Advanced Chemistry
                </button>
              </h2>
              <div id="advChemistryCollapse" className="accordion-collapse collapse" aria-labelledby="advChemistryHeading" data-bs-parent="#powerProgramAccordion">
                <div className="accordion-body">
                  <ul className="curriculum-list">
                    <li>Chemical Bonding and Molecular Structure</li>
                    <li>Thermodynamics and Chemical Equilibrium</li>
                    <li>Electrochemistry and Redox Reactions</li>
                    <li>Organic Chemistry - Reaction Mechanisms</li>
                    <li>Coordination Compounds</li>
                    <li>Chemical Kinetics and Surface Chemistry</li>
                    <li>Analytical Techniques and Problem Solving</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header" id="competitivePreparationHeading">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#competitivePreparationCollapse" aria-expanded="false" aria-controls="competitivePreparationCollapse">
                  Competitive Exam Preparation
                </button>
              </h2>
              <div id="competitivePreparationCollapse" className="accordion-collapse collapse" aria-labelledby="competitivePreparationHeading" data-bs-parent="#powerProgramAccordion">
                <div className="accordion-body">
                  <ul className="curriculum-list">
                    <li>Olympiad-level Problem Solving</li>
                    <li>Speed and Accuracy Techniques</li>
                    <li>Pattern Recognition in Complex Problems</li>
                    <li>Time Management Strategies</li>
                    <li>Elimination Techniques for MCQs</li>
                    <li>Competitive Exam Simulation and Analysis</li>
                    <li>Mental Math and Shortcuts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section features">
          <h2>Program <span className="text-primary">Features</span></h2>
          <div className="row g-4">
            <div className="col-lg-6 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h3>Advanced Learning Methodology</h3>
                <p>Experience our unique teaching approach that emphasizes conceptual understanding, analytical thinking, and application of knowledge in complex situations.</p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h3>Competitive Edge</h3>
                <p>Gain the skills and knowledge needed to excel in school examinations as well as competitive exams through rigorous training and challenging practice.</p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Performance Analytics</h3>
                <p>Benefit from detailed analysis of your performance in tests and assessments, with personalized feedback and targeted improvement strategies.</p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="fas fa-puzzle-piece"></i>
                </div>
                <h3>Problem Solving Skills</h3>
                <p>Develop advanced problem solving abilities through challenging exercises, puzzles, and real-world applications that foster critical thinking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// Add new Pyramid page component
const PyramidPage = () => {
  useEffect(() => {
    // Initialize accordions if any
    initializeAccordions();
  }, []);

  return (
    <div className="pyramid-page">
      <Helmet>
        <title>Pyramid Courses - Academic Excellence & Skill Development | SPECTRUM Education</title>
        <meta name="description" content="Pyramid's comprehensive academic programs, spoken English courses, handwriting classes, calligraphy training, and personality development courses. Excellence in education since 2006." />
        <meta name="keywords" content="academic programs, spoken English, handwriting classes, calligraphy, personality development, SPECTRUM education" />
        <link rel="canonical" href={getCanonicalUrl("/pyramid/pyramid/PyramidCoursesPage/pyramid")} />
      </Helmet>
      <main className="container">
        <Breadcrumbs 
          customPaths={[
            { path: '/pyramid/PyramidCoursesPage', label: 'Courses' },
            { path: '/pyramid/PyramidCoursesPage/pyramid', label: 'Pyramid' }
          ]} 
        />
        
        <header className="page-header">
          <h1>Pyramid Courses</h1>
          <p>Specializing in academic excellence and creative development since 2006</p>
        </header>
        
        <section className="section academic-programs">
          <h2>Our <span className="text-black">Academic</span> Programs</h2>
          
          <div className="row g-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="academic-program-card h-100 d-flex flex-column">
                <div className="text-center mb-3">
                  <div className="program-icon">
                    <i className="fas fa-book"></i>
                  </div>
                </div>
                <h3 className="text-center">Foundation Program (Class 6–12)</h3>
                <p className="text-center">Comprehensive foundation programs in Maths, Physics, Chemistry, and Biology for ICSE, CBSE and State Board students</p>
                <div className="course-features">
                  <ul className="program-features">
                    <li>Live Lectures</li>
                    <li>Doubt Solving Sessions</li>
                    <li>Detailed Study Materials</li>
                    <li>Regular Test Series</li>
                    <li>Self Efficacy Programs</li>
                  </ul>
                </div>
                <div className="mt-auto text-center">
                  <CollisionButton
                    text="Learn More"
                    href="/pyramid/PyramidCoursesPage/pyramid/foundation"
                    className="px-4"
                  />
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="academic-program-card h-100 d-flex flex-column">
                <div className="text-center mb-3">
                  <div className="program-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                </div>
                <h3 className="text-center">Power Program (Class 10–12)</h3>
                <p className="text-center">Advanced exam preparation programs for Matric, CBSE, and ICSE boards with focus on conceptual clarity</p>
                <div className="course-features">
                  <ul className="program-features">
                    <li>Intensive Coaching</li>
                    <li>Advanced Concept Training</li>
                    <li>Exam-Oriented Preparation</li>
                    <li>Performance Tracking</li>
                    <li>Mock Tests</li>
                  </ul>
                </div>
              
                
                <div className="mt-auto text-center">
                  <CollisionButton
                    text="Learn More"
                    href="/pyramid/PyramidCoursesPage/pyramid/power-program"
                    className="px-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section spoken-english">
          <h2>Spoken English <span className="text-black">Programs</span></h2>
          <p className="section-intro">Available for all ages - No age limit</p>
          
          <div className="row g-4 mb-4">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="level-box h-100 d-flex flex-column">
                <div className="level-icon mb-3">
                  <i className="fas fa-book-open text-primary"></i>
                </div>
                <h3>Basic English</h3>
                <p className="mb-0">Grammar foundations and simple communication skills</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="level-box h-100 d-flex flex-column">
                <div className="level-icon mb-3">
                  <i className="fas fa-comments text-primary"></i>
                </div>
                <h3>Advanced English</h3>
                <p className="mb-0">Structured fluency, writing & speech clarity</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="level-box h-100 d-flex flex-column">
                <div className="level-icon mb-3">
                  <i className="fas fa-users text-primary"></i>
                </div>
                <h3>Practical English</h3>
                <p className="mb-0">Group discussions, debates, confidence-building</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4 mt-2">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="feature-list h-100 d-flex flex-column">
                <h3 className="mb-3">Program Features</h3>
                <ul className="mb-0">
                  <li>Based on "Speech Production Methodology"</li>
                  <li>Air-conditioned classrooms</li>
                  <li>Short & Long-Term Courses available</li>
                  <li>Individual attention and feedback</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="feature-cta h-100 d-flex flex-column align-items-center justify-content-center">
                <AnimatedButton 
                  text="Explore the Course Details"
                  href="/pyramid/PyramidCoursesPage/pyramid/english"
                  className="english-programs-btn"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="section handwriting-calligraphy" style={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <h2>Calligraphy <span className="text-black">&amp;</span> Handwriting <span className="text-black">Courses</span></h2>
          <div className="row">
            <div className="col-md-6">
              <div className="course-card mb-0">
                <div className="course-content">
                  <h3 className='text-center py-2'>Handwriting Classes</h3>
                  <p>Focused on improving neatness, speed, and letter formation</p>
                  <div className="course-details">
                    <p><strong>Styles:</strong> Cursive, Print, Calligraphy</p>
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
              <div className="course-card mb-0">
                <div className="course-content">
                  <h3 className='text-center py-2'>Calligraphy Classes</h3>
                  <p>Learn strokes, ink control, and layout design</p>
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
        </section>
        
        <section id="personality" className="section personality-development">
          <h2>Personality Development <span className="text-black">Courses</span></h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="pd-course-card h-100 d-flex flex-column text-center">
                <div className="icon-wrapper">
                  <div className="course-icon">
                    <i className="fas fa-microphone"></i>
                  </div>
                </div>
                <h3>Public Speaking</h3>
                <p>Master the art of effective communication and overcome stage fear</p>
                <div className="mt-auto">
                  <CollisionButton
                    text="Enroll Now"
                    href="/course-registration"
                    className="btn-sm"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="pd-course-card h-100 d-flex flex-column text-center">
                <div className="icon-wrapper">
                  <div className="course-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                </div>
                <h3>Interview Skills</h3>
                <p>Prepare for academic and job interviews with confidence</p>
                <div className="mt-auto">
                  <CollisionButton
                    text="Enroll Now"
                    href="/course-registration"
                    className="btn-sm"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="pd-course-card h-100 d-flex flex-column text-center">
                <div className="icon-wrapper">
                  <div className="course-icon">
                    <i className="fas fa-brain"></i>
                  </div>
                </div>
                <h3>Soft Skills</h3>
                <p>Develop essential interpersonal and professional skills</p>
                <div className="mt-auto">
                  <CollisionButton
                    text="Enroll Now"
                    href="/course-registration"
                    className="btn-sm"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="pd-course-card h-100 d-flex flex-column text-center">
                <div className="icon-wrapper">
                  <div className="course-icon">
                    <i className="fas fa-user-tie"></i>
                  </div>
                </div>
                <h3>Grooming</h3>
                <p>Learn professional etiquette and personal presentation</p>
                <div className="mt-auto">
                  <CollisionButton
                    text="Enroll Now"
                    href="/course-registration"
                    className="btn-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const PyramidCoursesPage: React.FC = () => {
  // JSON-LD structured data for courses
  const courseSchemaData = {
    "@context": "https:/schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Course",
        "name": "IIT-JEE Preparation Course",
        "description": "Expert coaching for engineering entrance exam preparation",
        "provider": {
          "@type": "Organization",
          "name": "SPECTRUM Education"
        }
      }
    ]
  };

  return (
    <div className="courses-page">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(courseSchemaData)}
        </script>
      </Helmet>
      <Routes>
        <Route path="/" element={<CourseHome />} />
        <Route
          path="pyramid"
          element={<PyramidPage />}
        />
        <Route path="/pyramid/english" element={<EnglishCoursePage />} />
        <Route path="/pyramid/foundation" element={<FoundationProgramPage />} />
        <Route path="/pyramid/power-program" element={<PowerProgramPage />} />
        <Route path="/pyramid/english/basic" element={<BasicEnglishPage />} />
        <Route path="/pyramid/english/advanced" element={<AdvancedEnglishPage />} />
        <Route path="/pyramid/english/practical" element={<PracticalEnglishPage />} />

        {/* Legacy routes redirects to maintain backward compatibility */}
        <Route
          path="*"
          element={
            <Navigate
              to="/pyramid/PyramidCoursesPage"
              replace
            />
          }
        />
      </Routes>
    </div>
  );
};

export default PyramidCoursesPage;