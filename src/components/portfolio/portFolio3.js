import React from 'react'
import Stocks3 from '../stocks/stocks3'

const PortFolio3 = () => {
  return (
    <>
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
        <Stocks3/>
    </>
  )
}

export default PortFolio3