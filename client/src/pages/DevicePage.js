import React, { useEffect, useState } from "react";
import "../styles/DeviceItem.css";
import { useParams } from "react-router-dom";
import {
  fetchDescription,
  fetchDeviceInfo,
  fetchOneDevice,
} from "../http/deviceAPI";
import QRCode from "react-qr-code";

const DevicePage = () => {
  const [device, setDevice] = useState({});
  const { id } = useParams();
  const [description, setDescription] = useState([]);
  const [deviceInfo, setDeviceInfo] = useState([]);

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  useEffect(() => {
    fetchDescription(id)
      .then((data) => setDescription(data.description))
      .catch((error) => {
        console.log(error);
        setDescription(""); // Установить пустую строку в случае ошибки
      });
  }, []);

  useEffect(() => {
    fetchDeviceInfo(id)
      .then((data) => setDeviceInfo(data))
      .catch((error) => {
        console.log(error);
        setDeviceInfo([]);
      });
  }, []);

  return (
    <div className="device">
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
        <QRCode value={`http://localhost:3000/device/${id}`} />
      </div>
    </div>
  );
};

export default DevicePage;
