import React, { useContext, useEffect, useState } from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import "../styles/Shop.css";
import "../styles/DeviceList.css";
import "../styles/DeviceItem.css";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchDevices, fetchTypes, fetchBrands } from "../http/deviceAPI";
import { Spinner } from "react-bootstrap";
import Pages from "../components/Pages";

const Shop = observer(() => {
  const { device } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices(null, null, 1, device.deviceLimit)
      .then((data) => {
        device.setDevices(data.devices.rows);
        device.setTotalCount(data.devices.count);
      })
      .finally(setLoading(false));
  }, []);

  useEffect(() => {
    fetchDevices(
      device.selectedType.id,
      device.selectedBrand.id,
      device.page,
      device.deviceLimit
    ).then((data) => {
      device.setDevices(data.devices.rows);
      device.setTotalCount(data.devices.count);
    });
  }, [device.page, device.selectedType, device.selectedBrand, device]);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }
  return (
    <div className="shop-main-window">
      <div className="left-side-menu">
        <TypeBar />
      </div>
      <div className="beer-showcase">
        <BrandBar />
        {device.devices ? (
          <DeviceList className="device-list" />
        ) : (
          <p>No devices found.</p>
        )}
        <Pages />
      </div>
    </div>
  );
});

export default Shop;
