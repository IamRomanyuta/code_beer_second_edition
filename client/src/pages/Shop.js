import React from "react";
import TypeBar from "../components/TypeBar";
import "../styles/Shop.css";

const Shop = () => {
  return (
    <div className="shop-main-window">
      <div className="left-side-menu">
        <TypeBar className="type-bar" />
      </div>
      <div className="beer-showcase"></div>
    </div>
  );
};

export default Shop;
