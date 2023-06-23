import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import DeviceItem from "./DeviceItem";
import "../styles/DeviceList.css";
import { Spinner } from "react-bootstrap";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  if (device.devices === undefined) {
    // Данные еще не загружены
    return <Spinner animation="grow" />;
  }

  if (device.devices === null) {
    // Данные еще не загружены
    return <Spinner animation="grow" />;
  }

  if (device.devices.length === 0) {
    // Данные загружены, но список пуст
    return <div>No devices found.</div>;
  }
  return (
    <div className="device-list">
      {device.devices.map((device) => (
        <DeviceItem className="device" key={device.id} device={device} />
      ))}
    </div>
  );
});

export default DeviceList;
