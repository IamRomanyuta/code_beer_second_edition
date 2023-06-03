import React, { useContext, useEffect, useState } from "react";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import "../styles/Shop.css";
import "../styles/DeviceList.css";
import "../styles/DeviceItem.css";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchDevices, fetchTypes } from "../http/deviceAPI";
import { Spinner } from "react-bootstrap";

const Shop = observer(() => {
  const { device } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchDevices()
      .then((data) => device.setDevices(data.rows))
      .finally(setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

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
});

export default Shop;
