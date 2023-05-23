import React from "react";

const AddCharecteristic = ({ show, onHide }) => {
  return (
    <div
      className={show ? "main-modal active" : "main-modal"}
      onClick={() => onHide(false)}
    >
      <div
        className={show ? "content-part active" : "content-part"}
        onClick={(e) => e.stopPropagation()}
      >
        jeronimo2
      </div>
    </div>
  );
};

export default AddCharecteristic;
