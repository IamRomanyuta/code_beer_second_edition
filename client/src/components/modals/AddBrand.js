import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { createBrand } from "../../http/deviceAPI";
import "../../styles/modalContent/AddBrand.css";


const AddBrand = observer(() => {
  const [name, setName] = useState("");
  const [confirmString, setConfirmString] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const addBrand = () => {
    const formData = new FormData();
    formData.append("name", name);
    createBrand(formData).then(() => {
      setConfirmString(name + " brand added");
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
      <button className="confirm-button" type="button" onClick={addBrand}>
        Добавить Бренд
      </button>
      <p className="confirm-string">{confirmString}</p>
    </div>
  );
});

export default AddBrand;
