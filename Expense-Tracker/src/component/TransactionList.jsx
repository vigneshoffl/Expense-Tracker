import { useContext } from "react"
import { GlobalContext } from "./context/GlobalState"
import Transcation from "./Transcation";

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  return (
    <div>
         <h3 className='font-bold text-lg'>History</h3>
      <ul id="list" className="list list-none p-0 mb-10">
        {transactions.map(transaction =>(<Transcation key={transaction.id} transaction = {transaction}/>))}
      </ul>
    </div>
  )
}

export default TransactionList