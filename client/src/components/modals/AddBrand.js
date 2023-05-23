import React from "react";
import "../../styles/Modal.css";

const AddBrand = ({ show, onHide }) => {
  return (
    <div
      className={show ? "main-modal active" : "main-modal"}
      onClick={() => onHide(false)}
    >
      <div
        className={show ? "content-part active" : "content-part"}
        onClick={(e) => e.stopPropagation()}
      >
        jeronimo1
      </div>
    </div>
  );
};

export default AddBrand;
