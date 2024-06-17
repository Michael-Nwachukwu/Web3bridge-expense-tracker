import React from 'react'

const Balance = () => {
    return (
        <div className='flex flex-col items-start gap-3'>
            <h1 className="text-3xl font-bold text-indigo-700">Wallet Balance</h1>
            <p className="text-xl text-gray-600">$1000</p>
            <div className="inline-flex items0center gap-6">
                <button className="bg-indigo-500 text-white px-2 py-1 rounded-xl">Add income</button>
                <button className="bg-indigo-500 text-white px-2 py-1 rounded-xl">Add expense</button>
            </div>

        </div>
    )
}

export default Balance