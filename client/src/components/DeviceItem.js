import React from "react";
import "../styles/DeviceItem.css";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <div
      className="device"
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <div className="left-side-item">
        <img className="main-pic" src={device.img} alt="beer" />
      </div>
      <div className="middle-side-item">
        <h2>{device.name}</h2>
        <p>
          «Секрет Пивовара» - это 100% солодовое пиво в немецком стиле варится
          по классической немецкой технологии в соответствии с «Законом о
          чистоте пива», изданном в Баварии ещё в 1516 году.
        </p>
      </div>
      <div className="right-side-item">
        <div className="sort">Pilsner</div>
      </div>
    </div>
  );
};

export default DeviceItem;
