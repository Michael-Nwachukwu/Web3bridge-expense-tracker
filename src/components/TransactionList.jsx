import React from 'react'
import TransactionItem from './TransactionItem'

const TransactionList = ({ transactions }) => {
    return (
        <ul className='space-y-4'>
            {transactions.map(transaction => (
                <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
        </ul>
    )
}

export default TransactionList