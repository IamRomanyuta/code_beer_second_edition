import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import "../styles/DevicePage.css";

const DevicePage = observer(() => {
  const { device } = useContext(Context);

  return (
    <div className="device-main-window">
      <div className="upper-side">
        <div className="left-side">1</div>
        <div className="middle-side">2</div>
        <div className="right-side">3</div>
      </div>
      <div className="lower-side"></div>
    </div>
  );
});

export default DevicePage;
