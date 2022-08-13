import React, { useState } from 'react'
import '../shares.css'
import Data3 from '../data/data3';
import ShareModal3 from '../modal/shareModal3';
import ShareDetails3 from '../shareDetails/shareDetails3';

const Stocks3 = () => {
    
    const [stock3] = useState(Data3);
    const [openModal, setOpenModal] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);

  return (
    <>
    <div className='curveArea2'>
    {stock3.map((Info, index) => {
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
        }}>Buy</button><br/> */}
        <button className='btn2' onClick={() => {
            setOpenDetails(true);
        }}>Buy</button>
        {openDetails && <ShareDetails3/>}
        {openModal && <ShareModal3 closeModal={setOpenModal}/>}
        </div>
    </div>
    </>
        )
    })}
       
    {/* <ShareDetails stock1={stock1}/> */}
    </div>

    </>
  )
}

export default Stocks3