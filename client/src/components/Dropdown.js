import React, { useState } from "react";
import "../styles/Dropdown.css";

const Dropdown = ({ buttonString, array }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {buttonString}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {array.map((element) => (
            <li className="element" key={element.id}>
              {element.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
