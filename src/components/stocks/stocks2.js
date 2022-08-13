import React, { useState } from 'react'
import '../shares.css'
import Data2 from '../data/data2';
import ShareModal2 from '../modal/shareModal2';
import ShareDetails2 from '../shareDetails/shareDetails2';

const Stocks2 = () => {
    
    const [stock2] = useState(Data2);
    const [openModal, setOpenModal] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);

  return (
    <>
    <div className='curveArea2'>
    {stock2.map((Info, index) => {
    return (
    <>
    <div  key={Info.id} className='nav1'>
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
        {openDetails && <ShareDetails2/>}
        {openModal && <ShareModal2 closeModal={setOpenModal}/>}
        </div>
    </div>
    {/* <ShareDetails2/> */}
    </>
        )
    })}
    </div>

    </>
  )
}

export default Stocks2