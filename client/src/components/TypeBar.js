import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import "../styles/TypeBar.css";
import { Context } from "../index";

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  const handleClick = (type) => {
    if (type.id === device.selectedType?.id) {
      device.setSelectedType({});
    } else {
      device.setSelectedType(type);
    }
  };

  return (
    <ul className="type-list">
      {device.types.map((type) => (
        <li
          className={`list-item ${
            type.id === device.selectedType?.id ? "active" : ""
          }`}
          onClick={() => handleClick(type)}
          key={type.id}
        >
          {type.name}
        </li>
      ))}
    </ul>
  );
});

export default TypeBar;
