import React from "react";

const ChangeType = ({ show, onHide }) => {
  return (
    <div
      className={show ? "main-modal active" : "main-modal"}
      onClick={() => onHide(false)}
    >
      <div
        className={show ? "content-part active" : "content-part"}
        onClick={(e) => e.stopPropagation()}
      >
        jeronimo8
      </div>
    </div>
  );
};

export default ChangeType;
