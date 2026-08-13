import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../StudyMaterialsPage.css'; // Reusing existing styles
import '../AboutPage.css'; // New CSS file for About page specific styles
import Breadcrumbs from '../../common/Breadcrumbs';
import AnimatedButton from '../../common/AnimatedButton';
import { getCanonicalUrl } from '../../../utils/seoUtils';

const PyramidAbout: React.FC = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>About PYRAMID Education | Our Story & Mission</title>
        <meta name="description" content="Learn about PYRAMID Education, part of Pyramid Academy. Established in 2006, we've trained over 10,000 students in academic and communication skills." />
        <meta name="keywords" content="Spoken English Institute in Vellore, Best Spoken English Classes, English Speaking Course, Communication Skills Training, Personality Development, Interview Skills, Public Speaking." />
        <link rel="canonical" href={getCanonicalUrl("/about")} />
      </Helmet>
      
      <div className="container py-4">
        <Breadcrumbs 
          customPaths={[
            { path: '/about', label: 'About' }
          ]} 
        />
        
        <div className="page-header">
          <h1>About Pyramid</h1>
          <p className="text-muted mb-0">
        Pyramid is a dedicated Spoken English institute committed to helping learners communicate with confidence. We believe that English is a skill that opens doors to better education, rewarding careers, and meaningful relationships. Our focus is on practical communication rather than memorising grammar rules, making learning simple, engaging, and effective.
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
               Pyramid was established with a simple vision—to empower students and professionals from Tier 2 cities with the confidence to speak English fluently. Many talented individuals miss opportunities because they hesitate to communicate in English. Pyramid bridges that gap through  <b style={{ color: '#2a50a2' }}>interactive learning, personal guidance</b> and <b  style={{ color: '#f8931f' }}>consistent practice.</b> 
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="vision-card">
                <h2 className="text-center mb-3">
                  <span style={{ color: '#000' }}>Our</span> <span>Vision</span>
                </h2>
                <p className="text-justify">
                  To become the most trusted Spoken English and communication skills institute by transforming learners into confident communicators who are ready for academic, professional, and personal success
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* =========================
    OUR MISSION
========================== */}

<div className="section our-mission">

  <h2 className="text-center">
    <span style={{ color: '#000' }}>Our</span>{' '}
    <span className="pyramid-text">Mission</span>
  </h2>

  <div className="row">

    <div className="col-md-6 col-lg-3 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-comments"></i>
        </div>
        <h3>Build Confidence</h3>
        <p className="mb-0">
          Build confidence through practical English speaking.
        </p>
      </div>
    </div>

    <div className="col-md-6 col-lg-3 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-globe"></i>
        </div>
        <h3>Accessible Education</h3>
        <p className="mb-0">
          Make quality language education accessible.
        </p>
      </div>
    </div>

    <div className="col-md-6 col-lg-3 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-users"></i>
        </div>
        <h3>Supportive Environment</h3>
        <p className="mb-0">
          Create a supportive learning environment.
        </p>
      </div>
    </div>

    <div className="col-md-6 col-lg-3 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-briefcase"></i>
        </div>
        <h3>Career Preparation</h3>
        <p className="mb-0">
          Prepare learners for interviews, higher education,
          and workplace communication.
        </p>
      </div>
    </div>

  </div>

</div>
{/* =========================
    WHAT MAKES PYRAMID DIFFERENT
========================== */}

<div className="section what-makes-pyramid-different">

  <h2 className="text-center">
    <span style={{ color: '#000' }}>What Makes</span>{' '}
    <span className="pyramid-text">Pyramid Different?</span>
  </h2>

  <div className="row">

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-comments"></i>
        </div>
        <h3>Real-Life Communication</h3>
        <p className="mb-0">
          Classes focus on practical communication for everyday situations.
        </p>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-user"></i>
        </div>
        <h3>Personal Attention</h3>
        <p className="mb-0">
          Small batches allow trainers to give individual attention
          to every learner.
        </p>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-theater-masks"></i>
        </div>
        <h3>Interactive Activities</h3>
        <p className="mb-0">
          Role plays, presentations, group discussions, and speaking
          activities make learning interactive.
        </p>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-volume-up"></i>
        </div>
        <h3>Pronunciation Practice</h3>
        <p className="mb-0">
          Regular pronunciation practice helps learners speak clearly
          and confidently.
        </p>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-comment-dots"></i>
        </div>
        <h3>Continuous Feedback</h3>
        <p className="mb-0">
          Trainers provide regular feedback to help learners improve.
        </p>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-book-open"></i>
        </div>
        <h3>Everyday English</h3>
        <p className="mb-0">
          Learners are encouraged to use English regularly instead
          of focusing only on theory.
        </p>
      </div>
    </div>

  </div>

</div>
{/* =========================
    OUR TRAINING APPROACH
========================== */}

<div className="section our-training-approach">

  <h2 className="text-center">
    <span style={{ color: '#000' }}>Our</span>{' '}
    <span className="pyramid-text">Training Approach</span>
  </h2>

  <div className="row">

    <div className="col-md-6 col-lg-3 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-headphones"></i>
        </div>
        <h3>Listening</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-3 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-microphone"></i>
        </div>
        <h3>Speaking</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-3 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-book-reader"></i>
        </div>
        <h3>Reading</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-3 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-pen"></i>
        </div>
        <h3>Writing</h3>
      </div>
    </div>

  </div>

  <div className="row mt-3">

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <h3>Fluency Development</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <h3>Vocabulary Building</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <h3>Confidence Building</h3>
      </div>
    </div>

  </div>

</div>
{/* =========================
    WHO WE SERVE
========================== */}

<div className="section who-we-serve">

  <h2 className="text-center">
    <span style={{ color: '#000' }}>Who We</span>{' '}
    <span className="pyramid-text">Serve</span>
  </h2>

  <div className="row">

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-school"></i>
        </div>
        <h3>School Students</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <h3>College Students</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-user-tie"></i>
        </div>
        <h3>Job Seekers</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-briefcase"></i>
        </div>
        <h3>Working Professionals</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-home"></i>
        </div>
        <h3>Homemakers</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-lightbulb"></i>
        </div>
        <h3>Entrepreneurs</h3>
      </div>
    </div>

  </div>

</div>
{/* =========================
    OUR CORE VALUES
========================== */}

<div className="section our-core-values">

  <h2 className="text-center">
    <span style={{ color: '#000' }}>Our Core</span>{' '}
    <span className="pyramid-text">Values</span>
  </h2>

  <div className="row">

    <div className="col-md-6 col-lg-3 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-user"></i>
        </div>
        <h3>Student First</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-3 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-book-open"></i>
        </div>
        <h3>Practical Learning</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-3 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-chart-line"></i>
        </div>
        <h3>Continuous Improvement</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-3 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-award"></i>
        </div>
        <h3>Integrity & Excellence</h3>
      </div>
    </div>

  </div>

</div>
{/* =========================
    WHY CHOOSE PYRAMID
========================== */}

<div className="section why-choose-pyramid">

  <h2 className="text-center">
    <span style={{ color: '#000' }}>Why Choose</span>{' '}
    <span className="pyramid-text">Pyramid?</span>
  </h2>

  <div className="row">

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-chalkboard-teacher"></i>
        </div>
        <h3>Experienced Trainers</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-tasks"></i>
        </div>
        <h3>Activity-Based Learning</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-clock"></i>
        </div>
        <h3>Flexible Batches</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-wallet"></i>
        </div>
        <h3>Affordable Fees</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-comments"></i>
        </div>
        <h3>Practical Communication</h3>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-3">
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-chart-bar"></i>
        </div>
        <h3>Regular Assessments</h3>
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
              <div className="arch-card">
                <div className="stat-value">2006</div>
                <div className="stat-label">Year Established</div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="arch-card">
                <div className="stat-value">12+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="arch-card">
                <div className="stat-value">10,000+</div>
                <div className="stat-label">Students Trained</div>
              </div>
            </div>
          </div>
        </div>
        
        
        {/* =========================
    JOIN OUR COMMUNITY
========================== */}

<div className="section join-our-community">

  <h2 className="text-center">
    <span style={{ color: '#000' }}>Join Our</span>{' '}
    <span className="pyramid-text">Community</span>
  </h2>

  <div className="row justify-content-center">

    <div className="col-md-10 col-lg-8 text-center">

      <p>
        Whether you want to speak confidently in interviews, excel in your
        workplace, or simply communicate better in everyday life, Pyramid
        is here to guide you every step of the way. Start your journey
        towards confident communication today.
      </p>

       <AnimatedButton 
              text="Contact Us Today" 
              href="/contact"
              className="contact-us-about-btn"
            />

    </div>

  </div>

</div>
      </div>
    </div>
  );
};

export default PyramidAbout; 