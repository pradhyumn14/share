import React from "react";
import "./buyModal.css";

const BuyModal = ({ closeModal }) => {
    
  return (
    <div className="modalBackground2">
      <div className="modalContainer2">
        <div className="titleCloseBtn2">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <h2 className="heading">Share Bought Successfully</h2>
      </div>
    </div>
  );
}

export default BuyModal;