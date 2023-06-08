import React from "react";
import PropTypes from "prop-types";
import "../../styles/Modal.css";

const ModalBase = ({ show, onHide, content }) => {
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
        {content}
      </div>
    </div>
  );
};

ModalBase.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default ModalBase;
