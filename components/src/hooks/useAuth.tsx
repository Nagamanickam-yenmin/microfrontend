import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('access_token'));

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem('access_token');
      setIsLoggedIn(!!token); // Updates the state whenever the token changes
    };

    // Listen to the 'storage' event to detect changes in localStorage
    window.addEventListener('storage', handleStorageChange);

    // Handle potential changes in the same tab
    const intervalId = setInterval(handleStorageChange, 500);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId); // Cleanup interval
    };
  }, []);

  return isLoggedIn;
};

export default useAuth;
