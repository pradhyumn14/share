import React, { useState } from 'react'
import '../shares.css'
import Data5 from '../data/data5';
import ShareModal5 from '../modal/shareModal5';
import ShareDetails5 from '../shareDetails/shareDetails5';

const Stocks5 = () => {
    
    const [stock5] = useState(Data5);
    const [openModal, setOpenModal] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);

  return (
    <>
    <div className='curveArea2'>
    {stock5.map((Info, index) => {
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
        {openDetails && <ShareDetails5/>}
        {openModal && <ShareModal5 closeModal={setOpenModal}/>}
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

export default Stocks5