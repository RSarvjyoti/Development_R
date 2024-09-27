import React, { useRef, useState } from 'react';
import useOnClickOutside from '../customHooks/useOnClickOutside';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOnClickOutside(dropdownRef, handleClickOutside);

  return (
    <div ref={dropdownRef}>
      <button onClick={toggleDropdown}>Toggle Dropdown</button>
      {isOpen && (
        <div className="dropdown-menu">
          <p>Dropdown Item 1</p>
          <p>Dropdown Item 2</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
