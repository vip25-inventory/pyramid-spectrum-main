import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './AdPopup.css';

interface AdPopupProps {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  registerLink: string;
  onClose: () => void;
}

const AdPopup: React.FC<AdPopupProps> = ({ 
  imageUrl, 
  altText, 
  title,
  description,
  registerLink, 
  onClose 
}) => {
  return (
    <div className="ad-popup-overlay">
      <div className="ad-popup-container">
        <button className="ad-popup-close" onClick={onClose}>×</button>
        <div className="ad-popup-content">
          <img 
            src={imageUrl} 
            alt={altText} 
            className="ad-popup-image" 
          />
          <div className="ad-popup-content-inner">
            <h3 className="ad-popup-title">{title}</h3>
            <p className="ad-popup-description">{description}</p>
            <Link to={registerLink} className="ad-popup-register-btn" onClick={onClose}>
            Register Now
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define an interface for popup configuration including timing
interface PopupConfig extends AdPopupProps {
  timing: number; // Time in milliseconds when this popup should appear
  id: string;     // Unique identifier for sessionStorage
}

// This is a wrapper component that handles the timing and visibility logic for multiple popups
const AdPopupWrapper: React.FC = () => {
  const [currentPopup, setCurrentPopup] = useState<PopupConfig | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Define a ref for the handlePopupClose function to break circular dependency
  const handlePopupCloseRef = useRef<(index: number) => void>((index: number) => {
    // This function will be properly assigned later
  });

  // Define popup configurations with memoization to prevent recreation on each render
  const popupConfigs = useMemo<PopupConfig[]>(() => {
    const configs: PopupConfig[] = [
      {
        id: 'Limited-seats',
        imageUrl: "/images/ad-1.webp",
        altText: "Limited Seats - Enroll for Free",
        title: "✨ Limited Seats Available! ✨",
        description: "Enroll Now for FREE — New Batches Starting Soon!",
        registerLink: "/course-registration",
        timing: 10000, // 10 seconds
        onClose: () => handlePopupCloseRef.current(0)
      },
      {
          id: 'english-popup',
          imageUrl: "/images/ad-2.webp",
          altText: "Spoken English - Free Enrollment",
          title: "Speak English with Confidence!",
          description: "New Batches Starting Soon – Speak Fluently, Communicate Fearlessly!",
          registerLink: "/course-registration",
          timing: 20000, // 20 seconds
          onClose: () => handlePopupCloseRef.current(1)
        }
    ];
    return configs;
  }, []);

  // Function to start a timer for a specific popup
  const startPopupTimer = useCallback((index: number): void => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    const config = popupConfigs[index];
    const hasSeenThisPopup = sessionStorage.getItem(`hasSeenAdPopup-${config.id}`);
    
    if (!hasSeenThisPopup) {
      timerRef.current = setTimeout(() => {
        setCurrentPopup(config);
      }, config.timing);
    } else if (index + 1 < popupConfigs.length) {
      // If this popup has been seen, move to the next one
      startPopupTimer(index + 1);
    }
  }, [popupConfigs]);

  // Function to handle popup close and start the next popup timer
  const handlePopupClose = useCallback((index: number): void => {
    // Close current popup
    setCurrentPopup(null);
    
    // Mark current popup as seen
    sessionStorage.setItem(`hasSeenAdPopup-${popupConfigs[index].id}`, 'true');
    
    // Move to next popup
    const nextIndex = index + 1;
    if (nextIndex < popupConfigs.length) {
      // Schedule the next popup
      startPopupTimer(nextIndex);
    }
  }, [popupConfigs, startPopupTimer]);

  // Assign the handlePopupClose function to the ref
  useEffect(() => {
    handlePopupCloseRef.current = handlePopupClose;
  }, [handlePopupClose]);
  
  useEffect(() => {
    // Start the first popup timer
    startPopupTimer(0);
    
    // Clear timer on unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [startPopupTimer]);
  
  if (!currentPopup) return null;
  
  return (
    <AdPopup 
      imageUrl={currentPopup.imageUrl}
      altText={currentPopup.altText}
      title={currentPopup.title}
      description={currentPopup.description}
      registerLink={currentPopup.registerLink}
      onClose={currentPopup.onClose}
    />
  );
};

export default AdPopupWrapper; 