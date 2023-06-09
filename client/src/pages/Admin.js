import React, { useState } from "react";
import ModalBase from "../components/modals/ModalBase";
import AddBrand from "../components/modals/AddBrand";
import AddCharecteristic from "../components/modals/AddCharecteristic";
import AddDevice from "../components/modals/AddDevice";
import AddType from "../components/modals/AddType";
import ChangeBrand from "../components/modals/ChangeBrand";
import ChangeCharecteristic from "../components/modals/ChangeCharecteristic";
import ChangeDevice from "../components/modals/ChangeDevice";
import ChangeType from "../components/modals/ChangeType";
import "../styles/Admin.css";

const Admin = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="admin-main-window">
      <div className="add-buttons">
        <button className="main-button" onClick={() => openModal(<AddBrand />)}>
          Add Brand
        </button>
        <button
          className="main-button"
          onClick={() => openModal(<AddCharecteristic />)}
        >
          Add Charecteristic
        </button>
        <button
          className="main-button"
          onClick={() => openModal(<AddDevice />)}
        >
          Add Device
        </button>
        <button className="main-button" onClick={() => openModal(<AddType />)}>
          Add Type
        </button>
      </div>
      <div className="change-buttons">
        <button
          className="main-button"
          onClick={() => openModal(<ChangeBrand />)}
        >
          Change Brand
        </button>
        <button
          className="main-button"
          onClick={() => openModal(<ChangeCharecteristic />)}
        >
          Change Charecteristic
        </button>
        <button
          className="main-button"
          onClick={() => openModal(<ChangeDevice />)}
        >
          Change Device
        </button>
        <button
          className="main-button"
          onClick={() => openModal(<ChangeType />)}
        >
          Change Type
        </button>
      </div>

      {modalVisible && (
        <ModalBase
          show={modalVisible}
          onHide={closeModal}
          content={modalContent}
        />
      )}
    </div>
  );
};

export default Admin;
