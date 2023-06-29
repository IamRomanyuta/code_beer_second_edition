import React, { useEffect, useState } from "react";
import "../styles/DeviceItem.css";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import { fetchDescription, fetchDeviceInfo } from "../http/deviceAPI";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  const [description, setDescription] = useState([]);
  const [deviceInfo, setDeviceInfo] = useState([]);

  useEffect(() => {
    fetchDescription(device.id)
      .then((data) => setDescription(data.description))
      .catch((error) => {
        console.log(error);
        setDescription(""); // Установить пустую строку в случае ошибки
      });
  }, []);

  useEffect(() => {
    fetchDeviceInfo(device.id)
      .then((data) => setDeviceInfo(data))
      .catch((error) => {
        console.log(error);
        setDeviceInfo([]);
      });
  }, []);

  return (
    <div
      className="device"
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <div className="left-side-item">
        <img
          className="main-pic"
          src={process.env.REACT_APP_API_URL + device.img}
          alt="beer"
        />
      </div>
      <div className="middle-side-item">
        <h2>{device.name}</h2>
        <p>{description}</p>
      </div>
      <div className="right-side-item">
        <div className="charecteristics">Характеристики</div>
        {deviceInfo.map((info, index) => (
          <div className="info" key={index}>
            <div className="title">{info.title}:</div>
            <div className="description">{info.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceItem;
