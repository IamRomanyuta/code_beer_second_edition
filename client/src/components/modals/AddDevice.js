import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "../../index";
import "../../styles/Modal.css";
import "../../styles/modalContent/AddDevice.css";
import { fetchBrands, fetchTypes } from "../../http/deviceAPI";
import Dropdown from "../Dropdown";

const AddDevice = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  return (
    <div className="main-content">
      <Dropdown buttonString="Brands" array={device.brands}></Dropdown>
      <Dropdown buttonString="Types" array={device.types}></Dropdown>
    </div>
  );
});

export default AddDevice;
