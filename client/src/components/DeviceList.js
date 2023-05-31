import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import DeviceItem from "./DeviceItem";
import "../styles/DeviceList.css";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <div className="device-list">
      {device.devices.map((device) => (
        <DeviceItem className="device" key={device.id} device={device} />
      ))}
    </div>
  );
});

export default DeviceList;
