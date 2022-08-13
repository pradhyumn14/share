import React from "react";
import "./buyModal.css";

const SellModal = ({ close }) => {
    
  return (
    <div className="modalBackground2">
      <div className="modalContainer2">
        <div className="titleCloseBtn2">
          <button
            onClick={() => {
              close(false);
            }}
          >
            X
          </button>
        </div>
        <h2 className="heading">Share Sold Successfully</h2>
      </div>
    </div>
  );
}

export default SellModal;