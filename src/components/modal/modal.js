import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import './modal.css'

const Modal = ({closeModal}) => {

  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  
  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
   .then((res) => {
      setInfo(res.data[from]);
    })
  }, [from]);
  
  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    setOptions(Object.keys(info));
    //convert();
  }, [info])
    
  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }
  
  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }
  return (
    <>
        <div className='modalBackground01'>
            <div className='modalContainer01'>
            <div className='titleCloseBtn01'>
            <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className="container01">
        <div className="left">
          <h3>Amount</h3>
          <input type="text" 
             placeholder="Enter amount" 
             onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className="middle">
          <h3>From</h3>
          <Dropdown options={options} 
                    onChange={(e) => { setFrom(e.value) }}
          value={from} placeholder="From" />
        </div>
        <div className="switch">
          <HiSwitchHorizontal size="30px" 
                        onClick={() => { flip()}}/>
        </div>
        <div className="right">
          <h3>To</h3>
          <Dropdown options={options} 
                    onChange={(e) => {setTo(e.value)}} 
          value={to} placeholder="To" />
        </div>
      </div>
      <div className="result">
        <button onClick={()=>{convert()}}>Convert</button>
        <h2>Converted Amount:</h2>
        <p>{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>
  
      </div>
            </div>
        </div>
    </>
  )
}

export default Modal