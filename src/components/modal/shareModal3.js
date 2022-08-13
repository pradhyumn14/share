import React, {useState} from "react";
import "./shareModal.css";
import Data3 from "../data/data3";

const ShareModal = ({ closeModal }) =>{

const [ stock3 ] = useState(Data3);
    
  return (
    <div className="modalBackground1">
      <div className="modalContainer1">
        <div className="titleCloseBtn1">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
          <>
            {stock3.map((Info) => {
                const { name, symbol, low, high, close } = Info;
                return (
                <div className='logout1'>
                <h1>Name: <span className='username'>{name}</span></h1>
                <h2>Symbol: <span className='username'>{symbol}</span></h2>
                <h2>Low .|. : <span className='username'>{low}</span></h2>
                <h2>High '|' : <span className='username'>{high}</span></h2>
                <h2>Close % : <span className='username'>{close}</span></h2>
                <div>
                <a href="./ShareDetails3" className="btn2">Buy</a>
                </div>
                </div>
                );
            })}
            </>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;