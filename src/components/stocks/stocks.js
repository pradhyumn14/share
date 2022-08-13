import React, { useState } from 'react'
import '../shares.css'
import Data from '../data';
import Data1 from '../data/data1';
import ShareModal1 from '../modal/shareModal1';
import ShareDetails1 from '../shareDetails/shareDetails1';

const Stocks = () => {
    
    const [stock] = useState(Data);
    const [stock1] = useState(Data1);
    const [openModal, setOpenModal] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);
    console.log(stock);

  return (
    <>
    <div className='curveArea2'>
    <div className='nav'>
        <p>Company Name</p>
            <div className='bar'>
                <p>Date</p>
                <p>Symbol</p>
                <p>Low</p>
                <p>High</p>
                <p>Close</p>
                <p>Buy</p>
            </div>
    </div>

    {stock1.map((Info, index) => {
    return (
    <>
    <div className='nav1' key={Info.id}>
        <p>{Info.name}</p>
        <div className='bar'>
            <p>{new Date().toLocaleString()}</p>
            <p>{Info.symbol}</p>
            <p>${Info.low}</p>
            <p>${Info.high}</p>
            <p>${Info.close}</p>
            {/* <button className='btn1' onClick={() => {
            setOpenModal(true);
        }}>Buy</button> */}
        <button className='btn2' onClick={() => {
            setOpenDetails(true);
        }}>Buy</button>
        {openDetails && <ShareDetails1/>}
        {openModal && <ShareModal1 closeModal={setOpenModal}/>}
        </div>
    </div>
    </>
        )
    })}
       
    {/* <ShareDetails1 stock1={stock1}/> */}
    </div>

    </>
  )
}

export default Stocks