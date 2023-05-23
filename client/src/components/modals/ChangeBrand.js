import React from "react";

const ChangeBrand = ({ show, onHide }) => {
  return (
    <div
      className={show ? "main-modal active" : "main-modal"}
      onClick={() => onHide(false)}
    >
      <div
        className={show ? "content-part active" : "content-part"}
        onClick={(e) => e.stopPropagation()}
      >
        jeronimo5
      </div>
    </div>
  );
};

export default ChangeBrand;
