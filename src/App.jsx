import { useState } from 'react'
import './App.css'

function App() {
  const[amount,setAmount]=useState(1);
  const[fromCurrency,setFromCurrency]=useState("USD");
  const[toCurrency,setToCurrency]=useState("INR");
  const[convertedAmount,setConvertedAmount]=useState(null);

  return (
    <>
    <div className='currency-converter'>
      <div className='box'></div>
      <div className='data'>
        <h1>Currency Converter</h1>
        <div className='input-container'>
          <label htmlFor='amt'>Amount:</label>
          <input type='number' id='amt' value={amount}/>
        </div>
        <div className='input-container'>
          <label htmlFor='fromCurrency'>From Currency:</label>
          <select id='fromCurrency' value={fromCurrency}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
        </div>
        <div className='input-container'>
          <label htmlFor='toCurrency'>To Currency:</label>
          <select id='toCurrency' value={toCurrency}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
        </div>
        <div className='result'>
          <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
