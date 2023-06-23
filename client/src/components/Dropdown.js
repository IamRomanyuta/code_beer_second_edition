import React, { useState, useEffect, useRef } from "react";
import "../styles/Dropdown.css";

const Dropdown = ({ buttonString, array, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [listName, setListName] = useState(buttonString);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (element) => {
    setListName(element.name);
    setIsOpen(false);
    onChange(element.id);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {listName}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {array.map((element) => (
            <li
              className="element"
              key={element.id}
              onClick={() => handleItemClick(element)}
            >
              {element.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
