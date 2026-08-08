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
import AdPopupWrapper from './components/common/AdPopup';

// Page Components
import LandingPage from './components/pages/LandingPage'
import Home from './components/pages/Home';
import CoursesPage from './components/pages/CoursesPage';
import TestSeriesPage from './components/pages/TestSeriesPage';
import ResultsPage from './components/pages/ResultsPage';
import StudyMaterialsPage from './components/pages/StudyMaterialsPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import Login from './components/pages/Login';
import CourseRegistrationPage from './components/pages/CourseRegistrationPage';
import NotFoundPage from './components/pages/NotFoundPage';

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
           <Route path="/spectrun" element={<Home />} /> 
          <Route path="/courses/*" element={<CoursesPage />} />
          <Route path="/test-series/*" element={<TestSeriesPage />} />
          <Route path="/results/*" element={<ResultsPage />} />
          <Route path="/study-materials/*" element={<StudyMaterialsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/:company/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/course-registration" element={<CourseRegistrationPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isLoginPage && !isNotFoundPage && <Footer />}
      <WhatsAppButton phoneNumber="917200655336" />
      <AdPopupWrapper />
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
