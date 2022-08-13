import React, { useState } from 'react'
import "./shareDetails.css";
import Data4 from '../data/data4'
import BuyModal from '../modal/buyModal';
import SellModal from '../modal/sellModal';

const ShareDetails4 = () => {

    const [ stock4 ] = useState(Data4);
    const [ multiple, setMultiple ] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [open, setOpen] = useState(false);

    function calc(e) {
    setMultiple(e.target.value);
    }

    function refreshPage() {
        window.location.reload(false);
    }
        return (
            <>
            {stock4.map((Info) => {
                const { close, number } = Info;
                return (
                <div className='logout'>
                <h2>Number : <span className='user__name' value ={number} onChange={calc}>{number*multiple}</span></h2>
                <h2>Shares : <span className='username'>
                <input type="number"
                       placeholder=" No. of Shares" value={multiple} onChange={calc}/>
                       * {close} = {multiple*close}
                       </span></h2>
                       <div>
                <button className='btn4'  onClick={() => {
                    setOpenModal(true);
                }}>Buy</button>
                {openModal && <BuyModal closeModal={setOpenModal}/>}
                <button className='btn3' onClick={() => {
                    refreshPage(false);
                }}>Sell</button>
                {open && <SellModal close={setOpen}/>}
                </div>
                </div>
                );
            })}
            </>
        )


}
export default ShareDetails4;

