import React, { useContext } from 'react'
import { GlobalContext } from "./context/GlobalState"


const IncomExpenses = () => {
  const {transactions} = useContext(GlobalContext);

  const amount = transactions.map(transaction => transaction.amount);

  const income = amount.filter(item => item > 0).reduce((acc,item) => (acc += item),0).toFixed(2);

  const expense = (
    amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <div className='inc-exp-container flex  bg-white items-center justify-around shadow-md p-5 my-5 mx-0'>
        <div>
            <h4 className='font-bold text-lg'>INCOME</h4>
            <p className='money plus text-green-600 text-xl tracking-wide my-1.5'>+${income}</p>
        </div>
        <div>
            <h4 className='font-bold text-lg'>EXPENSE</h4>
            <p className='money minus text-red-600 text-xl tracking-wide my-1.5'>-${expense}</p>
        </div>
    </div>
  )
}

export default IncomExpenses