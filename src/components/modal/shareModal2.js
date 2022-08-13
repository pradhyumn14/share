import React, {useState} from "react";
import "./shareModal.css";
import Data2 from "../data/data2";

const ShareModal2 = ({ closeModal }) =>{

const [ stock2 ] = useState(Data2);
    
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
            {stock2.map((Info) => {
                const { name, symbol, low, high, close } = Info;
                return (
                <div className='logout1'>
                <h1>Name: <span className='username'>{name}</span></h1>
                <h2>Symbol: <span className='username'>{symbol}</span></h2>
                <h2>Low .|. : <span className='username'>{low}</span></h2>
                <h2>High '|' : <span className='username'>{high}</span></h2>
                <h2>Close % : <span className='username'>{close}</span></h2>
                <div>
                <a href="./ShareDetails2" className="btn2">Buy</a>
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

export default ShareModal2;