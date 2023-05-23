import React from "react";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import "../styles/Shop.css";
import "../styles/DeviceList.css";
import "../styles/DeviceItem.css";

const Shop = () => {
  return (
    <div className="shop-main-window">
      <div className="left-side-menu">
        <TypeBar />
      </div>
      <div className="beer-showcase">
        <DeviceList className="device-list" />
      </div>
    </div>
  );
};

export default Shop;
