import React, { useState } from 'react'
import '../shares.css'
import Data from '../data';
import ShareModal1 from '../modal/shareModal1';

const AllStocks = () => {
    
    /*const getStock = async () => {
        try {
            let url = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2020-10-14?adjusted=true&apiKey=1DoMaoSXyAOk8kh2rp1ZWG6erXbtnGgI`;

            const res = await fetch(url);
            const data = await res.json();

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getStock();
    }, []);*/

    const [stock] = useState(Data);
    const [openModal, setOpenModal] = useState(false);
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

    {stock.map((Info, index) => {
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
            <button className='btn1' onClick={() => {
            // setOpenModal(true);
        }}>Buy</button>
        {openModal && <ShareModal1 closeModal={setOpenModal}/>}
        </div>
    </div>
    </>
        )
    })}
    <a href='/PortFolio1' className='btnport1'>Buy</a>
    <a href='/PortFolio2' className='btnport2'>Buy</a>
    <a href='/PortFolio3' className='btnport3'>Buy</a>
    <a href='/PortFolio4' className='btnport4'>Buy</a>
    <a href='/PortFolio5' className='btnport5'>Buy</a>
    {/* <ShareDetails1 stock1={stock1}/> */}
    </div>

    </>
  )
}

export default AllStocks