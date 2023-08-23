import { useState, useEffect } from 'react';

const useAnimationLogic = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const lastVisitTimestamp = localStorage.getItem('lastVisitTimestamp');
    const currentTime = Date.now();
    const timeDifference = currentTime - parseInt(lastVisitTimestamp);

    if (!lastVisitTimestamp || timeDifference > 24 * 60 * 60 * 1000) {
      // If the user hasn't visited in the last 24 hours, animate again
      setHasAnimated(false);
      localStorage.setItem('lastVisitTimestamp', currentTime.toString());
    }
  }, []);

  const handleAnimationComplete = () => {
    setHasAnimated(true);
  };

  return {
    hasAnimated,
    handleAnimationComplete,
  };
};

export default useAnimationLogic;