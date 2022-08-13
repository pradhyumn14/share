import React from 'react'
import Stocks5 from '../stocks/stocks5'

const PortFolio5 = () => {
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
        <Stocks5/>
    </>
  )
}

export default PortFolio5