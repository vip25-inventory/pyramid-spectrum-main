import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../common/Breadcrumbs';
import CollisionButton from '../../common/CollisionButton';
import { getCanonicalUrl } from '../../../utils/seoUtils';

const SpectrumCourses: React.FC = () => {
  return (
    <div className="spectrum-page">

      <Helmet>
        <title>
          Spectrum Courses - NEET & IIT-JEE | SPECTRUM Education
        </title>

        <meta
          name="description"
          content="SPECTRUM's premier coaching for competitive exams NEET and IIT-JEE. Specialized curriculum and expert mentorship for medical and engineering aspirants."
        />

        <meta
          name="keywords"
          content="NEET coaching, IIT-JEE preparation, medical entrance, engineering entrance, SPECTRUM education"
        />

        <link
          rel="canonical"
          href={getCanonicalUrl("/spectrum/SpectrumCourses")}
        />

        <style type="text/css">{`
          .spectrum-page .academic-programs .program-icon {
            transition: all 0.3s ease;
          }

          .spectrum-page
          .academic-programs
          .academic-program-card:hover
          .program-icon {
            background-color: #2a50a2;
            color: white;
          }
        `}</style>
      </Helmet>

      <main className="container">

        {/* =========================
            BREADCRUMBS
        ========================== */}

        <Breadcrumbs
          customPaths={[
            {
              path: '/spectrum/SpectrumCourses',
              label: 'Spectrum'
            }
          ]}
        />

        {/* =========================
            PAGE HEADER
        ========================== */}

        <header className="page-header">
          <h1>Spectrum Courses</h1>

          <p>
            Expert coaching for competitive examinations
          </p>
        </header>

        {/* =========================
            COMPETITIVE PROGRAMS
        ========================== */}

        <section className="section academic-programs">

          <h2>
            Our <span className="text-black">Competitive</span> Programs
          </h2>

          <div className="row g-4">

            {/* =========================
                NEET
            ========================== */}

            <div className="col-lg-6 col-md-6 col-sm-12">

              <div className="academic-program-card h-100 d-flex flex-column">

                <div className="text-center mb-3">

                  <div className="program-icon">
                    <i className="fas fa-heartbeat"></i>
                  </div>

                </div>

                <h3 className="text-center">
                  NEET Preparation
                </h3>

                <p className="text-center">
                  Comprehensive coaching for the National Eligibility
                  cum Entrance Test for medical aspirants
                </p>

                <div className="course-features">

                  <ul className="program-features">

                    <li>
                      Expert faculty from medical background
                    </li>

                    <li>
                      Subject-focused teaching approach
                    </li>

                    <li>
                      Regular mock tests and assessments
                    </li>

                    <li>
                      Special focus on NCERT alignments
                    </li>

                    <li>
                      Practical and application-based learning
                    </li>

                  </ul>

                </div>

                <div className="mt-auto text-center">

                  <CollisionButton
                    text="Learn More"
                    href="/spectrum/neet"
                    className="px-4"
                  />

                </div>

              </div>

            </div>

            {/* =========================
                IIT-JEE
            ========================== */}

            <div className="col-lg-6 col-md-6 col-sm-12">

              <div className="academic-program-card h-100 d-flex flex-column">

                <div className="text-center mb-3">

                  <div className="program-icon">
                    <i className="fas fa-cogs"></i>
                  </div>

                </div>

                <h3 className="text-center">
                  IIT-JEE Preparation
                </h3>

                <p className="text-center">
                  Expert coaching for Joint Entrance Examination
                  for engineering aspirants
                </p>

                <div className="course-features">

                  <ul className="program-features">

                    <li>
                      Specialized faculty for Physics, Chemistry,
                      and Mathematics
                    </li>

                    <li>
                      Problem-solving centric approach
                    </li>

                    <li>
                      Advanced study materials and question banks
                    </li>

                    <li>
                      Regular practice tests and performance tracking
                    </li>

                    <li>
                      Competitive environment for better preparation
                    </li>

                  </ul>

                </div>

                <div className="mt-auto text-center">

                  <CollisionButton
                    text="Learn More"
                    href="/spectrum/iit-jee"
                    className="px-4"
                  />

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =========================
            WHY CHOOSE SPECTRUM
        ========================== */}

        <section className="section why-choose-us">

          <h2>
            Why <span className="text-black">Choose Spectrum</span> Courses?
          </h2>

          <div className="row g-4">

            {/* Expert Faculty */}

            <div className="col-md-4">

              <div className="feature-box">

                <div className="feature-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>

                <h3>
                  Expert Faculty
                </h3>

                <p>
                  Learn from experienced educators with proven
                  success in preparing students for competitive exams
                </p>

              </div>

            </div>

            {/* Comprehensive Materials */}

            <div className="col-md-4">

              <div className="feature-box">

                <div className="feature-icon">
                  <i className="fas fa-book"></i>
                </div>

                <h3>
                  Comprehensive Materials
                </h3>

                <p>
                  Access carefully crafted study materials,
                  question banks, and practice papers
                </p>

              </div>

            </div>

            {/* Performance Tracking */}

            <div className="col-md-4">

              <div className="feature-box">

                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>

                <h3>
                  Performance Tracking
                </h3>

                <p>
                  Regular assessments and detailed analytics
                  to monitor progress and identify improvement areas
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =========================
            CALL TO ACTION
        ========================== */}

        <section className="section cta-section">

          <div className="cta-content">

            <h2>
              Begin Your Journey to Success
            </h2>

            <p>
              Join Spectrum's premier coaching programs for
              NEET and IIT-JEE preparation
            </p>

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

export default SpectrumCourses;