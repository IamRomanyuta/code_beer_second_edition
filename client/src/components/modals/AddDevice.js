import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import "../../styles/Modal.css";
import "../../styles/modalContent/AddDevice.css";
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";
import Dropdown from "../Dropdown";

const AddDevice = observer(() => {
  const { device } = useContext(Context);
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTypeId, setSelectedTypeId] = useState(null);
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const [confirmString, setConfirmString] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTypeChange = (selectedId) => {
    setSelectedTypeId(selectedId);
  };

  const handleBrandChange = (selectedId) => {
    setSelectedBrandId(selectedId);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("img", selectedFile);
    formData.append("brandId", selectedBrandId);
    formData.append("typeId", selectedTypeId);
    formData.append("description", description);
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then(() => {
      setConfirmString(name + " device added");
    });
  };

  const handleUpload = () => {
    // Обработка загрузки фото
    if (selectedFile) {
      addDevice();
    }
  };

  return (
    <div className="main-content">
      <Dropdown
        buttonString="Brands"
        array={device.brands}
        onChange={handleTypeChange}
      ></Dropdown>
      <Dropdown
        buttonString="Types"
        array={device.types}
        onChange={handleBrandChange}
      ></Dropdown>

      <input
        placeholder="Введите название..."
        className="name-string"
        type="text"
        value={name}
        onChange={handleNameChange}
      />

      <input
        placeholder="Введите описание..."
        className="name-string"
        type="text"
        value={description}
        onChange={handleDescriptionChange}
      />

      <form>
        <input
          className="file-upload-button"
          type="file"
          onChange={handleFileChange}
        />
      </form>

      <button className="confirm-button" onClick={addInfo}>
        Добавить свойство
      </button>

      {info.map((i) => (
        <div className="info" key={i.number}>
          <div>
            <input
              className="name-string"
              value={i.title}
              onChange={(e) => changeInfo("title", e.target.value, i.number)}
              placeholder="Название..."
            />
          </div>
          <div>
            <input
              className="name-string"
              value={i.description}
              onChange={(e) =>
                changeInfo("description", e.target.value, i.number)
              }
              placeholder="Описание характеристики..."
            />
          </div>
          <div>
            <button
              className="delete-info-button"
              onClick={() => removeInfo(i.number)}
            >
              Удалить
            </button>
          </div>
        </div>
      ))}

      <button className="confirm-button" type="button" onClick={handleUpload}>
        Добавить Пиво
      </button>
      <p className="confirm-string">{confirmString}</p>
    </div>
  );
});

export default AddDevice;
