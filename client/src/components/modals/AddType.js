import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { createType } from "../../http/deviceAPI";
import "../../styles/modalContent/AddType.css";

const AddType = observer(() => {
  const [name, setName] = useState("");
  const [confirmString, setConfirmString] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const addType = () => {
    const formData = new FormData();
    formData.append("name", name);
    createType(formData).then(() => {
      setConfirmString(name + " type added");
    });
  };
  return (
    <div className="main-content">
      <input
        placeholder="Введите название..."
        className="name-string"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <button className="confirm-button" type="button" onClick={addType}>
        Добавить тип
      </button>
      <p className="confirm-string">{confirmString}</p>
    </div>
  );
});

export default AddType;
