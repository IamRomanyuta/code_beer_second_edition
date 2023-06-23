import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import "../styles/BrandBar.css";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  const handleClick = (brand) => {
    if (brand.id === device.selectedBrand?.id) {
      device.setSelectedBrand({});
    } else {
      device.setSelectedBrand(brand);
    }
  };

  return (
    <ul className="brand-list">
      {device.brands.map((brand) => (
        <li
          className={`list-item ${
            brand.id === device.selectedBrand?.id ? "active" : ""
          }`}
          onClick={() => handleClick(brand)}
          key={brand.id}
        >
          {brand.name}
        </li>
      ))}
    </ul>
  );
});

export default BrandBar;
