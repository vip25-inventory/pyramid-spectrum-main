import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import '../CoursesPage.css';

import Breadcrumbs from '../../common/Breadcrumbs';
import AnimatedButton from '../../common/AnimatedButton';
import CollisionButton from '../../common/CollisionButton';

import { getCanonicalUrl } from '../../../utils/seoUtils';


// ============================================================
// COURSE HOME (general landing — lists course categories)
// ============================================================
const CourseHome = () => {
  return (
    <div className="courses-home">
      <Helmet>
        <title>Academic & Skill Development Courses | SPECTRUM Education</title>
        <meta name="description" content="Discover SPECTRUM's comprehensive education offerings including competitive exam coaching and skill development courses. Excellence in education since 2006." />
        <meta name="keywords" content="academic programs, NEET, IIT-JEE, spoken English, handwriting, calligraphy, personality development, SPECTRUM education" />
        <link rel="canonical" href={getCanonicalUrl("/spectrum/SpectrumCoursesPage")} />
      </Helmet>
      <main className="container">
        <Breadcrumbs
          customPaths={[
            { path: '/spectrum/SpectrumCoursesPage', label: 'Courses' }
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
              <div className="category-card spectrum-card d-flex flex-column h-100">
                <div className="category-header text-center mb-3">
                  <div className="category-icon">
                    <i className="fas fa-atom"></i>
                  </div>
                  <h3>Spectrum</h3>
                </div>
                <div className="category-content">
                  <p className="text-center">Specialized coaching for competitive examinations</p>
                  <div className="course-features">
                    <ul className="category-features">
                      <li>NEET Preparation</li>
                      <li>IIT-JEE Coaching</li>
                      <li>Expert Faculty</li>
                      <li>Comprehensive Study Materials</li>
                      <li>Regular Performance Assessment</li>
                    </ul>
                  </div>
                </div>
                <div className="category-footer text-center mt-auto">
                  <AnimatedButton
                    text="Explore Spectrum Courses"
                    href="/spectrum/SpectrumCoursesPage/spectrum"
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


// ============================================================
// SPECTRUM COURSE HOME (NEET / IIT-JEE category cards)
// ============================================================
const SpectrumPage: React.FC = () => {
  return (
    <div className="courses-home">

      <Helmet>
        <title>
          Spectrum Courses | NEET & IIT-JEE Coaching
        </title>

        <meta
          name="description"
          content="Explore SPECTRUM's academic coaching programs including NEET and IIT-JEE preparation with expert faculty, comprehensive study materials and regular assessments."
        />

        <meta
          name="keywords"
          content="Spectrum courses, NEET coaching, NEET preparation, IIT-JEE coaching, JEE preparation, Spectrum Education"
        />

        <link
          rel="canonical"
          href={getCanonicalUrl("/spectrum/SpectrumCoursesPage/spectrum")}
        />
      </Helmet>


      <main className="container">

        <Breadcrumbs
          customPaths={[
            {
              path: '/spectrum/SpectrumCoursesPage',
              label: 'Courses'
            },
            {
              path: '/spectrum/SpectrumCoursesPage/spectrum',
              label: 'Spectrum'
            }
          ]}
        />

 <header className="page-header">
          <h1>Spectrum Courses</h1>
          <p>Expert coaching for competitive examinations</p>
        </header>
        
        <section className="section academic-programs">
          <h2>Our <span className="text-black">Competitive</span> Programs</h2>
          
          <div className="row g-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="academic-program-card h-100 d-flex flex-column">
                <div className="text-center mb-3">
                  <div className="program-icon">
                    <i className="fas fa-heartbeat"></i>
                  </div>
                </div>
                <h3 className="text-center">NEET Preparation</h3>
                <p className="text-center">Comprehensive coaching for the National Eligibility cum Entrance Test for medical aspirants</p>
                <div className="course-features">
                  <ul className="program-features">
                    <li>Expert faculty from medical background</li>
                    <li>Subject-focused teaching approach</li>
                    <li>Regular mock tests and assessments</li>
                    <li>Special focus on NCERT alignments</li>
                    <li>Practical and application-based learning</li>
                  </ul>
                </div>
                <div className="mt-auto text-center">
                  <CollisionButton
                    text="Learn More"
                    href="/spectrum/SpectrumCoursesPage/spectrum/neet"
                    className="px-4"
                  />
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="academic-program-card h-100 d-flex flex-column">
                <div className="text-center mb-3">
                  <div className="program-icon">
                    <i className="fas fa-cogs"></i>
                  </div>
                </div>
                <h3 className="text-center">IIT-JEE Preparation</h3>
                <p className="text-center">Expert coaching for Joint Entrance Examination for engineering aspirants</p>
                <div className="course-features">
                  <ul className="program-features">
                    <li>Specialized faculty for Physics, Chemistry, and Mathematics</li>
                    <li>Problem-solving centric approach</li>
                    <li>Advanced study materials and question banks</li>
                    <li>Regular practice tests and performance tracking</li>
                    <li>Competitive environment for better preparation</li>
                  </ul>
                </div>
                <div className="mt-auto text-center">
                  <CollisionButton
                    text="Learn More"
                    href="/spectrum/SpectrumCoursesPage/spectrum/iit-jee"
                    className="px-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section why-choose-us">
          <h2>Why <span className="text-black">Choose Spectrum</span> Courses?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Expert Faculty</h3>
                <p>Learn from experienced educators with proven success in preparing students for competitive exams</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Comprehensive Materials</h3>
                <p>Access carefully crafted study materials, question banks, and practice papers</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Performance Tracking</h3>
                <p>Regular assessments and detailed analytics to monitor progress and identify improvement areas</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section cta-section">
          <div className="cta-content">
            <h2>Begin Your Journey to Success</h2>
            <p>Join Spectrum's premier coaching programs for NEET and IIT-JEE preparation</p>
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



// ============================================================
// NEET COURSE PAGE
// ============================================================

const NEETCoursePage: React.FC = () => {

  return (

    <div className="neet-courses">

      <Helmet>

        <title>
          NEET Preparation Courses | SPECTRUM Education
        </title>

        <meta
          name="description"
          content="Join SPECTRUM's comprehensive NEET coaching program with expert faculty, regular tests, and proven results."
        />

        <meta
          name="keywords"
          content="NEET preparation, NEET coaching, medical entrance exam, NEET online coaching, SPECTRUM education"
        />

        <link
          rel="canonical"
          href={getCanonicalUrl(
            "/spectrum/SpectrumCoursesPage/spectrum/neet"
          )}
        />

      </Helmet>


      <main className="container">


        {/* Breadcrumb */}

        <Breadcrumbs
          customPaths={[
            {
              path: '/spectrum/SpectrumCoursesPage',
              label: 'Courses'
            },
            {
              path: '/spectrum/SpectrumCoursesPage/spectrum',
              label: 'Spectrum'
            },
            {
              path: '/spectrum/SpectrumCoursesPage/spectrum/neet',
              label: 'NEET'
            }
          ]}
        />



        {/* Header */}

        <header className="page-header">

          <h1>
            NEET Courses
          </h1>

          <p>
            Comprehensive Medical Entrance Exam Preparation
          </p>

        </header>



        {/* ==================================================
            ONLINE COACHING
        ================================================== */}

        <section className="section online-coaching">

          <div className="row g-4 align-items-center">


            <div className="col-lg-6 col-md-12">

              <div className="online-coaching-content">

                <h2 className="text-center">

                  Online Coaching for{' '}

                  <span>
                    NEET
                  </span>

                </h2>


                <div className="d-flex align-items-start mb-3">

                  <div className="trophy-icon">

                    <i className="fas fa-trophy text-primary"></i>

                  </div>


                  <p>

                    NEET Online Coaching by SPECTRUM is
                    perfect for students focused on{' '}

                    <span className="fw-bold">
                      achieving their goals
                    </span>.

                  </p>

                </div>



                <div className="d-flex align-items-start mb-4">

                  <div className="award-icon">

                    <i className="fas fa-award text-primary"></i>

                  </div>


                  <p>

                    With{' '}

                    <span className="fw-bold">
                      SPECTRUM's expert faculty
                    </span>{' '}

                    and{' '}

                    <span className="fw-bold">
                      a result-oriented learning platform
                    </span>,

                    you're not just studying—you're
                    improving every single day.

                  </p>

                </div>



                <div className="d-flex justify-content-center mt-4">

                  <AnimatedButton
                    text="Enroll Now"
                    href="https://careerpoint.ac.in/center/vellore"
                    className="neet-contact-btn"
                  />

                </div>

              </div>

            </div>



            <div className="col-lg-6 col-md-12">

              <div className="online-coaching-image">

                <img
                  src="/images/banner/neet.webp"
                  alt="SPECTRUM's Expert NEET Online Coaching Program"
                  className="img-fluid"
                />

              </div>

            </div>

          </div>

        </section>



        {/* ==================================================
            TOPPERS + RESULTS
        ================================================== */}

        <section className="section neet-toppers-results">

          <div className="row g-4">


            {/* Toppers */}

            <div className="col-lg-5 col-md-12">

              <div className="toppers-container">

                <h2>

                  Toppers choose{' '}

                  <span className="text-success">
                    SPECTRUM
                  </span>

                </h2>


                <div className="toppers-gallery">


                  {/* Aditya */}

                  <div className="topper-profile side text-center side-lowered">

                    <div className="topper-image">

                      <img
                        src="/images/users/neet-1.jpg"
                        alt="NEET Topper Aditya S"
                        className="rounded-circle"
                      />

                    </div>

                    <h3 className="mt-2 mb-0">
                      Aditya S
                    </h3>

                  </div>



                  {/* Priya */}

                  <div className="topper-profile center text-center">

                    <div className="topper-image">

                      <img
                        src="/images/users/neet-2.png"
                        alt="NEET Topper Priya"
                        className="rounded-circle"
                      />

                    </div>

                    <h3 className="mt-2 mb-0">
                      Priya
                    </h3>

                  </div>



                  {/* Rahul */}

                  <div className="topper-profile side text-center side-lowered">

                    <div className="topper-image">

                      <img
                        src="/images/users/neet-3.png"
                        alt="NEET Topper Rahul V"
                        className="rounded-circle"
                      />

                    </div>

                    <h3 className="mt-2 mb-0">
                      Rahul V
                    </h3>

                  </div>


                </div>



                <div className="text-center mt-4">

                  <CollisionButton
                    text="Enquire Now"
                    href="https://careerpoint.ac.in/center/vellore"
                    className="px-4"
                  />

                </div>

              </div>

            </div>



            {/* Results */}

            <div className="col-lg-7 col-md-12">

              <div className="results-container">

                <h2>

                  Outstanding{' '}

                  <span className="text-primary">
                    NEET
                  </span>{' '}

                  <span className="text-success">
                    100% results
                  </span>{' '}

                  consistently

                </h2>


                <div className="row g-4 mt-3">


                  <div className="col-md-6">

                    <div className="result-stat-card border-success">

                      <h3 className="text-success fs-1 mb-0">
                        35,825
                      </h3>

                      <p className="mb-0">
                        Eligible in NEET mains
                      </p>

                    </div>

                  </div>



                  <div className="col-md-6">

                    <div className="result-stat-card border-primary">

                      <h3 className="text-primary fs-1 mb-0">
                        12,540
                      </h3>

                      <p className="mb-0">
                        Qualified for medical admissions
                      </p>

                    </div>

                  </div>



                  <div className="col-md-6">

                    <div className="result-stat-card border-primary">

                      <h3 className="text-primary fs-1 mb-0">
                        65
                      </h3>

                      <p className="mb-0">
                        Students in top 100
                      </p>

                    </div>

                  </div>



                  <div className="col-md-6">

                    <div className="result-stat-card border-success">

                      <h3 className="text-success fs-1 mb-0">
                        120
                      </h3>

                      <p className="mb-0">
                        Students in top 200
                      </p>

                    </div>

                  </div>


                </div>

              </div>

            </div>

          </div>

        </section>


      </main>

    </div>

  );
};



// ============================================================
// JEE COURSE PAGE
// ============================================================

const JEECoursePage: React.FC = () => {

  return (

    <div className="jee-courses">

      <Helmet>

        <title>
          IIT-JEE Preparation Courses | SPECTRUM Education
        </title>

        <meta
          name="description"
          content="Prepare for IIT-JEE with SPECTRUM's expert coaching programs focusing on conceptual clarity and proven preparation strategies."
        />

        <meta
          name="keywords"
          content="IIT-JEE preparation, JEE coaching, engineering entrance exam, JEE Main, JEE Advanced, SPECTRUM education"
        />

        <link
          rel="canonical"
          href={getCanonicalUrl(
            "/spectrum/SpectrumCoursesPage/spectrum/iit-jee"
          )}
        />

      </Helmet>



      <div className="container">


        {/* Breadcrumb */}

        <Breadcrumbs
          customPaths={[
            {
              path: '/spectrum/SpectrumCoursesPage',
              label: 'Courses'
            },
            {
              path: '/spectrum/SpectrumCoursesPage/spectrum',
              label: 'Spectrum'
            },
            {
              path: '/spectrum/SpectrumCoursesPage/spectrum/iit-jee',
              label: 'IIT-JEE'
            }
          ]}
        />



        {/* Header */}

        <div className="page-header">

          <h1>
            IIT-JEE Courses
          </h1>

          <p>
            Comprehensive Engineering Entrance Exam Preparation
          </p>

        </div>



        {/* ==================================================
            ONLINE COACHING
        ================================================== */}

        <div className="section online-coaching">

          <div className="row g-4 align-items-center">


            <div className="col-lg-6 col-md-12">

              <div className="online-coaching-content">

                <h2 className="text-center">

                  Online Coaching for{' '}

                  <span>
                    IIT-JEE
                  </span>

                </h2>


                <div className="d-flex align-items-start mb-3">

                  <div className="trophy-icon">

                    <i className="fas fa-trophy text-primary"></i>

                  </div>


                  <p>

                    IIT-JEE Online Coaching by SPECTRUM
                    is perfect for students focused on{' '}

                    <span className="fw-bold">
                      achieving their engineering dreams
                    </span>.

                  </p>

                </div>



                <div className="d-flex align-items-start mb-4">

                  <div className="award-icon">

                    <i className="fas fa-award text-primary"></i>

                  </div>


                  <p>

                    With{' '}

                    <span className="fw-bold">
                      SPECTRUM's expert faculty
                    </span>{' '}

                    and{' '}

                    <span className="fw-bold">
                      a result-oriented learning platform
                    </span>,

                    you're not just studying—you're improving
                    every single day.

                  </p>

                </div>



                <div className="d-flex mt-4">

                  <AnimatedButton
                    text="Enroll Now"
                    href="https://careerpoint.ac.in/center/vellore"
                    className="jee-callback-btn me-3"
                  />

                </div>

              </div>

            </div>



            <div className="col-lg-6 col-md-12">

              <div className="online-coaching-image">

                <img
                  src="/images/banner/iit-jee.jpg"
                  alt="SPECTRUM's IIT-JEE Online Coaching"
                  className="img-fluid"
                />

              </div>

            </div>

          </div>

        </div>



        {/* ==================================================
            TOPPERS + RESULTS
        ================================================== */}

        <div className="section jee-toppers-results">

          <div className="row g-4">


            {/* Toppers */}

            <div className="col-lg-5 col-md-12">

              <div className="toppers-container">

                <h2>

                  Toppers choose{' '}

                  <span className="text-success">
                    SPECTRUM
                  </span>

                </h2>


                <div className="toppers-gallery">


                  {/* Ankit */}

                  <div className="topper-profile side text-center side-lowered">

                    <div className="topper-image">

                      <img
                        src="/images/users/iit-1.png"
                        alt="JEE Topper Ankit K"
                        className="rounded-circle"
                      />

                    </div>

                    <h3 className="mt-2 mb-0">
                      Ankit K
                    </h3>

                  </div>



                  {/* Vikram */}

                  <div className="topper-profile center text-center">

                    <div className="topper-image">

                      <img
                        src="/images/users/iit-2.png"
                        alt="JEE Topper Vikram"
                        className="rounded-circle"
                      />

                    </div>

                    <h3 className="mt-2 mb-0">
                      Vikram
                    </h3>

                  </div>



                  {/* Nisha */}

                  <div className="topper-profile side text-center side-lowered">

                    <div className="topper-image">

                      <img
                        src="/images/users/iit-3.jpg"
                        alt="JEE Topper Nisha P"
                        className="rounded-circle"
                      />

                    </div>

                    <h3 className="mt-2 mb-0">
                      Nisha P
                    </h3>

                  </div>


                </div>



                <div className="text-center mt-4">

                  <CollisionButton
                    text="Enquire Now"
                    href="https://careerpoint.ac.in/center/vellore"
                    className="px-4"
                  />

                </div>

              </div>

            </div>



            {/* Results */}

            <div className="col-lg-7 col-md-12">

              <div className="results-container">

                <h2>

                  Outstanding{' '}

                  <span className="text-primary">
                    IIT-JEE
                  </span>{' '}

                  <span className="text-success">
                    100% results
                  </span>{' '}

                  consistently

                </h2>


                <div className="row g-4 mt-3">


                  <div className="col-md-6">

                    <div className="result-stat-card border-success">

                      <h3 className="text-success fs-1 mb-0">
                        42,750
                      </h3>

                      <p className="mb-0">
                        Eligible in JEE Main
                      </p>

                    </div>

                  </div>



                  <div className="col-md-6">

                    <div className="result-stat-card border-primary">

                      <h3 className="text-primary fs-1 mb-0">
                        15,280
                      </h3>

                      <p className="mb-0">
                        Qualified for JEE Advanced
                      </p>

                    </div>

                  </div>



                  <div className="col-md-6">

                    <div className="result-stat-card border-primary">

                      <h3 className="text-primary fs-1 mb-0">
                        45
                      </h3>

                      <p className="mb-0">
                        Students in top 100
                      </p>

                    </div>

                  </div>



                  <div className="col-md-6">

                    <div className="result-stat-card border-success">

                      <h3 className="text-success fs-1 mb-0">
                        95
                      </h3>

                      <p className="mb-0">
                        Students in top 200
                      </p>

                    </div>

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



// ============================================================
// SPECTRUM COURSES ROUTER
// ============================================================

const SpectrumCoursesPage: React.FC = () => {

  const courseSchemaData = {

    "@context": "https://schema.org",

    "@type": "ItemList",

    "itemListElement": [

      {
        "@type": "Course",

        "name": "NEET Preparation Course",

        "description":
          "Comprehensive coaching for medical entrance exam preparation",

        "provider": {
          "@type": "Organization",
          "name": "SPECTRUM Education"
        }
      },


      {
        "@type": "Course",

        "name": "IIT-JEE Preparation Course",

        "description":
          "Expert coaching for engineering entrance exam preparation",

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

        {/* ==================================================
            GENERAL COURSES LANDING
        ================================================== */}

        <Route
          path="/"
          element={<CourseHome />}
        />


        {/* ==================================================
            SPECTRUM CATEGORY HOME (NEET / IIT-JEE cards)
        ================================================== */}

        <Route
          path="spectrum"
          element={<SpectrumPage />}
        />


        {/* ==================================================
            NEET
        ================================================== */}

        <Route
          path="spectrum/neet"
          element={<NEETCoursePage />}
        />


        {/* ==================================================
            IIT-JEE
        ================================================== */}

        <Route
          path="spectrum/iit-jee"
          element={<JEECoursePage />}
        />


        {/* ==================================================
            INVALID ROUTE
        ================================================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/spectrum/SpectrumCoursesPage"
              replace
            />
          }
        />

      </Routes>

    </div>

  );
};


export default SpectrumCoursesPage;