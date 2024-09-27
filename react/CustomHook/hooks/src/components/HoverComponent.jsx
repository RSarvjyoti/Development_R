import React, { useRef } from 'react';
import useHover from '../customHooks/useHover';


const HoverComponent = () => {
  const ref = useRef(null); 
  const isHovered = useHover(ref); 

  return (
    <button
      ref={ref}
      style={{
        padding: '20px',
        backgroundColor: isHovered ? 'lightblue' : 'lightgray',
        textAlign: 'center',
        borderRadius: '5px',
        border : 'none'
      }}
    >
      {isHovered ? 'Hovering!' : 'Hover over me!'}
    </button>
  );
};

export default HoverComponent;
