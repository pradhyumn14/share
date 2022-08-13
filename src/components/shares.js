import React, { useState } from 'react'
import Navbar from './navbar/navbar'
import './shares.css'
import Modal from './modal/modal'
// import Stocks from './stocks/stocks'
// import Stocks2 from './stocks/stocks2'
// import Stocks3 from './stocks/stocks3'
// import Stocks4 from './stocks/stocks4'
// import Stocks5 from './stocks/stocks5'
import AllStocks from './stocks/allstocks'

const Shares = () => {

    const [openModal, setOpenModal] = useState(false);
    
  return (
    <>
    <Navbar/>
    <div className='curveArea'>
        <h1 className='head'>Invest for [\/]<br/>the future</h1>
        <p className='para'>“Selecting twenty to thirty good stocks in unrelated industries is not an easy task. <br/>
        It takes immense efforts to follow twenty shares, so investors take the shortcut. <br/>
        They try to replace the efforts with more shares, hundreds of those.”― Naved Abdali
        <button className='openModalBtn' id='btn1' onClick={() => {
            setOpenModal(true);
        }}>Conversion</button></p><br/>
        {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
        <br/>
        <AllStocks/>
        {/* <Stocks/>
        <Stocks2/>
        <Stocks3/>
        <Stocks4/>
        <Stocks5/> */}
    </>
  )
}

export default Shares