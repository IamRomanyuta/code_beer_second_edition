import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import "../styles/TypeBar.css";
import { Context } from "../index";

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <ul className="type-list">
      {device._types.map((type) => (
        <li
          className="list-item"
          active={type.id === device.selectedType.id}
          onClick={() => {
            device.setSelectedType(type.id);
          }}
          key={type.id}
        >
          {type.name}
        </li>
      ))}
    </ul>
  );
});

export default TypeBar;
