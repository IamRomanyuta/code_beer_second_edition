import React, { useState } from "react";
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
  const [addBrandVisible, setAddBrandVisible] = useState(false);
  const [addCharecteristicVisible, setAddCharecteristicVisible] =
    useState(false);
  const [addDeviceVisible, setAddDeviceVisible] = useState(false);
  const [addTypeVisible, setAddTypeVisible] = useState(false);

  const [changeBrandVisible, setChangeBrandVisible] = useState(false);
  const [changeCharecteristicVisible, setChangeCharecteristicVisible] =
    useState(false);
  const [changeDeviceVisible, setChangeDeviceVisible] = useState(false);
  const [changeTypeVisible, setChangeTypeVisible] = useState(false);

  return (
    <div className="admin-main-window">
      <div className="add-buttons">
        <button
          className="main-button"
          onClick={() => setAddBrandVisible(true)}
        >
          Add Brand
        </button>

        <button
          className="main-button"
          onClick={() => setAddCharecteristicVisible(true)}
        >
          Add Charecteristic
        </button>

        <button
          className="main-button"
          onClick={() => setAddDeviceVisible(true)}
        >
          Add Device
        </button>

        <button className="main-button" onClick={() => setAddTypeVisible(true)}>
          Add Type
        </button>
      </div>
      <div className="change-buttons">
        <button
          className="main-button"
          onClick={() => setChangeBrandVisible(true)}
        >
          Change Brand
        </button>

        <button
          className="main-button"
          onClick={() => setChangeCharecteristicVisible(true)}
        >
          Change Charecteristic
        </button>
        <button
          className="main-button"
          onClick={() => setChangeDeviceVisible(true)}
        >
          Change Device
        </button>

        <button
          className="main-button"
          onClick={() => setChangeTypeVisible(true)}
        >
          Change Type
        </button>
      </div>

      <AddBrand
        show={addBrandVisible}
        onHide={() => setAddBrandVisible(false)}
      />
      <AddCharecteristic
        show={addCharecteristicVisible}
        onHide={() => setAddCharecteristicVisible(false)}
      />
      <AddDevice
        show={addDeviceVisible}
        onHide={() => setAddDeviceVisible(false)}
      />
      <AddType show={addTypeVisible} onHide={() => setAddTypeVisible(false)} />

      <ChangeBrand
        show={changeBrandVisible}
        onHide={() => setChangeBrandVisible(false)}
      />
      <ChangeCharecteristic
        show={changeCharecteristicVisible}
        onHide={() => setChangeCharecteristicVisible(false)}
      />
      <ChangeDevice
        show={changeDeviceVisible}
        onHide={() => setChangeDeviceVisible(false)}
      />
      <ChangeType
        show={changeTypeVisible}
        onHide={() => setChangeTypeVisible(false)}
      />
    </div>
  );
};

export default Admin;
