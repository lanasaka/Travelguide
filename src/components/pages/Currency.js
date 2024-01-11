import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import CurrencyInput from './CurrencyInput';
import './cstyle.css';

function Currency() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('USD');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get('https://v6.exchangerate-api.com/v6/3b9ac8ee6d5d53ef33af1316/latest/USD')
      .then(response => {
        setRates(response.data.conversion_rates);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (rates.length > 0) {
      handleAmount1Change(1);
    }
  }, [rates]);

  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    amount1 = parseFloat(amount1); 
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    amount2 = parseFloat(amount2);
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
  <>
    <div className='container1'>
      <h1>Currency Converter</h1>
      <CurrencyInput
        className='group'
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />
  
      <CurrencyInput
        className='group'
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
      />
  
    
      <div className="result">
        <p>{amount1} {currency1} = {amount2} {currency2}</p>
      </div>
    </div>
    

    </>
  );
  
  

}

export default Currency;
