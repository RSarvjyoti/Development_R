import { useEffect, useRef } from 'react';

const useTimeout = (callback, delay) => {
  const timeoutRef = useRef(null);

  const set = () => {
    timeoutRef.current = setTimeout(callback, delay);
  };

  const clear = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    if (delay !== null) {
      set();
    }

    return clear; 
  }, [callback, delay]); 

  return clear; 
};

export default useTimeout;
