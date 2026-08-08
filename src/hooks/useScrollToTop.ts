import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Custom hook that provides navigation functionality with automatic scroll to top
 */
const useScrollToTop = () => {
  const navigate = useNavigate();

  const navigateWithScroll = useCallback((path: string, options?: any) => {
    // First scroll to top
    window.scrollTo(0, 0);
    // Then navigate
    navigate(path, options);
  }, [navigate]);

  return navigateWithScroll;
};

export default useScrollToTop; 