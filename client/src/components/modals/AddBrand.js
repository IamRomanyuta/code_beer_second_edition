import React from "react";
import PropTypes from "prop-types";
import "../../styles/Modal.css";

const AddBrand = ({ show, onHide }) => {
  const handleModalClick = () => {
    onHide(false);
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const handleCloseClick = () => {
    onHide(false);
  };

  return (
    <div
      className={`main-modal ${show ? "active" : ""}`}
      onClick={handleModalClick}
    >
      <div
        className={`content-part ${show ? "active" : ""}`}
        onClick={handleContentClick}
      >
        <button className="close-button" onClick={handleCloseClick}>
          X
        </button>
        jeronimo1
      </div>
    </div>
  );
};

AddBrand.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default AddBrand;
