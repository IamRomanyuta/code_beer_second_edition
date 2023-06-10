import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "../../index";
import "../../styles/Modal.css";
import Dropdown from "../Dropdown";
import { fetchBrands } from "../../http/deviceAPI";

const AddBrand = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchBrands().then((data) => device.setBrands(data));
  });
  return (
    <div>
      <Dropdown buttonString="Brands" array={device.brands}></Dropdown>
    </div>
  );
});

export default AddBrand;
