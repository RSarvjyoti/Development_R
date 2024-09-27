import React from 'react';
import useIntersectionObserver from '../customHooks/useIntersectionObserver';

const MyComponent = () => {
  const [isVisible, elementRef] = useIntersectionObserver({
    threshold: 0.1, 
  });

  return (
    <div>
      <div ref={elementRef} style={{ height: '200px', background: 'lightblue' }}>
        {isVisible ? 'I am visible!' : 'I am not visible.'}
      </div>
      <div style={{ height: '1000px' }} />
    </div>
  );
};

export default MyComponent;
