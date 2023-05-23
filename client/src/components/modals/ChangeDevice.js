import React from "react";

const ChangeDevice = ({ show, onHide }) => {
  return (
    <div
      className={show ? "main-modal active" : "main-modal"}
      onClick={() => onHide(false)}
    >
      <div
        className={show ? "content-part active" : "content-part"}
        onClick={(e) => e.stopPropagation()}
      >
        jeronimo7
      </div>
    </div>
  );
};

export default ChangeDevice;
