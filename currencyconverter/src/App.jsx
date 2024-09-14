import  { useState } from 'react'
import './App.css'
import useCorrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './component/InputBox'

function App() {
  const [amount,setAmount]=useState('');
  const [convertedAmount,setConvertedAmount]=useState('');
  const [from,setFrom]=useState('USD');
  const [to, setTo]=useState('INR');
  
  const currencyInfo=useCorrencyInfo(from);
  const options=Object.keys(currencyInfo);
  console.log(options)

  const conversion=()=>{
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const swap=() =>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}>
    <div className='w-full'>
      <div
      className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'
      >
        <form onSubmit={(e)=>{
          e.preventDefault();
          conversion();
        }}>
          <div className='w-full'>
            <InputBox
            label='from'
            amount={amount}
            amountChange={(amount)=> setAmount(amount)}
            currencyOptions={options}
            currencyChange={(currency)=> setFrom(currency) }
            selectedCurrency={from}
            />
            <div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
              >Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
              label='To'
              amount={convertedAmount}
              amountChange={(convertedAmount)=> setConvertedAmount(convertedAmount)}
              currencyOptions={options}
              currencyChange={(currency)=> setTo(currency) }
              selectedCurrency={to}
              amountDisabled/>
            </div>
            <button
             type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </form>
      </div>

    </div>

    </div>
  )
}

export default App
