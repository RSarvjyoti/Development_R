import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        ...options, 
        root: options.root || null, 
        rootMargin: options.rootMargin || '0px',
        threshold: options.threshold || 0, 
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current); 
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); 
      }
    };
  }, [elementRef, options]);

  return [isVisible, elementRef];
};

export default useIntersectionObserver;
