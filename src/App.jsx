import Balance from "./components/Balance"
import Header from "./components/Header"
import TransactionList from "./components/TransactionList"
import { useState, useEffect } from 'react';

function App() {

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const addTransaction = (transaction) => {
    const updatedTransactions = [...transactions, transaction];
    setTransactions(updatedTransactions);
  };

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  return (
    <main className="max-w-4xl mx-auto space-y-6">
      <Header addTransaction={addTransaction} />
      <Balance />
      <TransactionList transactions={transactions} />
    </main>
  )
}

export default App
