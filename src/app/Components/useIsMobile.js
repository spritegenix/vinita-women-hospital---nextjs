import { useState, useEffect } from 'react';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Ensure this code runs only in the browser
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };

      // Set initial state
      handleResize();

      // Add event listener
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [breakpoint]);

  return isMobile;
}

export default useIsMobile;
