import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Context Provider
import { AppProvider } from './context/AppContext';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Common Components
import Notifications from './components/common/Notifications';
import LoadingSpinner from './components/common/LoadingSpinner';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';
// import AdPopupWrapper from './components/common/AdPopup';
// Page Components
import LandingPage from './components/pages/LandingPage'
import SpectrumHome from './components/pages/spectrum/SpectrumHome';
import PyramidHome from './components/pages/pyramid/PyramidHome';
import PyramidAbout from './components/pages/pyramid/PyramidAbout';
import SpectrumAbout from './components/pages/spectrum/SpectrumAbout';
import CoursesPage from './components/pages/CoursesPage';
import PyramidCourse from './components/pages/pyramid/PyramidCoursesPage';
import TestSeriesPage from './components/pages/TestSeriesPage';
import SpectrumTestSeries from './components/pages/spectrum/SpectrumTestSeries';
import PyramidTestSeries from './components/pages/pyramid/PyramidTestSeries';
import ResultsPage from './components/pages/ResultsPage';
import StudyMaterialsPage from './components/pages/StudyMaterialsPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import Login from './components/pages/Login';
import CourseRegistrationPage from './components/pages/CourseRegistrationPage';
import NotFoundPage from './components/pages/NotFoundPage';
import SpectrumCourse from './components/pages/spectrum/SpectrumCoursesPage';
import SpectrumResults from './components/pages/spectrum/SpectrumResults';
import SpectrumStudyPage from './components/pages/spectrum/SpectrumStudyPage';
import PyramidResults from './components/pages/pyramid/PyramidResults';
import PyramidStudyPage from './components/pages/pyramid/pyramidStudyPage';

import PyramidContact from './components/pages/pyramid/PyramidContact';
import SpectrumContact from './components/pages/spectrum/SpectrumContact';

// Context Consumer
import { useAppContext } from './context/AppContext';


// App wrapped component that uses context
const AppContent: React.FC = () => {
  const { isLoading } = useAppContext();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isNotFoundPage = location.pathname === '/404';

  return (
    <div className="App">
      <Header />
      <Notifications />
      {isLoading && <LoadingSpinner fullScreen />}
      <main>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
{/* /pyramid/about
<Route path="/spectrum" element={<Home />} /> */}
<Route path="/spectrum" element={<SpectrumHome />} />
<Route path="/pyramid" element={<PyramidHome />} />
<Route path="/pyramid/about" element={<PyramidAbout />} />
<Route path="/spectrum/about" element={<SpectrumAbout />} />

<Route
  path="/spectrum/SpectrumCoursesPage/*"
  element={<SpectrumCourse />}
/>
<Route
  path="/pyramid/PyramidCoursesPage/*"
  element={<PyramidCourse />}
/>
           {/* <Route path="/spectrun" element={<Home />} />  */}
          {/* <Route path="/courses/*" element={<CoursesPage />} /> */}
          <Route path="/spectrum/test-series/*" element={<SpectrumTestSeries />} />
          <Route path="/Pyramid/test-series/*" element={<PyramidTestSeries />} />
          
          <Route path="/Spectrum/results/*" element={<SpectrumResults />} />
          <Route path="/Pyramid/results/*" element={<PyramidResults />} />
          
          <Route path="/spectrum/study-materials/*" element={<SpectrumStudyPage />} />
          <Route path="/pyramid/study-materials/*" element={<PyramidStudyPage />} />

          <Route path="/pyramid/contact" element={<PyramidContact />} />
          <Route path="/spectrum/contact" element={<SpectrumContact />} />
          
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/course-registration" element={<CourseRegistrationPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isLoginPage && !isNotFoundPage && <Footer />}
      <WhatsAppButton phoneNumber="917200655336" />
      {/* <AdPopupWrapper /> */}
    </div>
  );
};

// Main App component that provides context
function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </AppProvider>
  );
}

export default App;
