import React, { useState } from 'react'
import '../shares.css'
import Data4 from '../data/data4';
import ShareModal4 from '../modal/shareModal4';
import ShareDetails4 from '../shareDetails/shareDetails4';

const Stocks4 = () => {
    
    const [stock4] = useState(Data4);
    const [openModal, setOpenModal] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);

  return (
    <>
    <div className='curveArea2'>
    {stock4.map((Info, index) => {
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
        {openDetails && <ShareDetails4/>}
        {openModal && <ShareModal4 closeModal={setOpenModal}/>}
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

export default Stocks4