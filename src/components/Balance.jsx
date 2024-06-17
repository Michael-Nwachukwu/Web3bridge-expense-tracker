import React from 'react']
import TransactionForm from './TransactionForm'

const Balance = () => {
    return (
        <div className='flex flex-col items-start gap-3'>
            <h1 className="text-3xl font-bold text-indigo-700">Wallet Balance</h1>
            <p className="text-xl text-gray-600">$1000</p>
        <TransactionForm addTransaction={addTransaction} />
            
        </div>
    )
}

export default Balance