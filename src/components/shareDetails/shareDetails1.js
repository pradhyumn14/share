import React, { useState } from 'react'
import "./shareDetails.css";
import Data1 from '../data/data1'
import BuyModal from '../modal/buyModal';
import SellModal from '../modal/sellModal';
//import PortFolio1 from '../portfolio/portFolio1';

const ShareDetails1 = () => {

    const [ stock1, setStock1 ] = useState(Data1);
    const [ multiple, setMultiple ] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [open, setOpen] = useState(false);

    function calc(e) {
    setMultiple(e.target.value);
    }

    // function refreshPage() {
    //     window.location.reload(false);
    // }

    const deleteItem = (index) => {
        const updatedItems = stock1.filter((Info) => {
            return Info.id !== index;
        })
        setStock1(updatedItems);
    }

        return (
            <>
            {stock1.map((Info, id) => {
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
                <button className='btn3' onClick={() => deleteItem(Info.id)}>Sell</button>
                {open && <SellModal close={setOpen}/>}
                </div>
                </div>
                );
            })}
            </>
        )


}
export default ShareDetails1;

