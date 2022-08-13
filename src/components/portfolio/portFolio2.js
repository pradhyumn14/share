import React from 'react'
import Stocks2 from '../stocks/stocks2'

const PortFolio2 = () => {
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
        <Stocks2/>
    </>
  )
}

export default PortFolio2