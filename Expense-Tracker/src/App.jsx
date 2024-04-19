import './App.css'
import AddTransaction from './component/AddTransaction'
import Balance from './component/Balance'
import Header from './component/Header'
import IncomExpenses from './component/IncomExpenses'
import TransactionList from './component/TransactionList'
import { GlobalProvider } from './component/context/GlobalState'

function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
      <Balance/>
      <IncomExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  )
}

export default App
