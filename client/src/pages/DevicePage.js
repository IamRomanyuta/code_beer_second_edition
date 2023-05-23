import { observer } from "mobx-react-lite";
import React from "react";
import "../styles/DevicePage.css";

const DevicePage = observer(() => {
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
