import Balance from "./components/Balance"
import Header from "./components/Header"
import TransactionList from "./components/TransactionList"

function App() {

  return (
    <main className="max-w-4xl mx-auto space-y-6">
      <Header />
      <Balance />
      <TransactionList />
    </main>
  )
}

export default App
