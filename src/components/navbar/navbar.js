import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <>
        <div class="topnav">
            <img src='/logo.png' alt=''/>
                <a href="/">Home</a>
                <div className='dropdown'>
                <button className='dropbtn'>Portfolio</button>
                <div className='dropdown-content'>
                  <a href='./PortFolio1'>IBM</a>
                  <a href='./PortFolio2'>TATA</a>
                  <a href='./PortFolio3'>HCL</a>
                  <a href='./PortFolio4'>HDFC</a>
                  <a href='./PortFolio5'>TITAN</a>
                </div>
                </div>
                <div className='topnav-right'>
                <a href="./Login">Login</a>
                </div>
        </div>
    </>
  )
}

export default navbar