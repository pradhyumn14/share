import React from 'react'
import Stocks4 from '../stocks/stocks4'

const PortFolio4 = () => {
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
        <Stocks4/>
    </>
  )
}

export default PortFolio4