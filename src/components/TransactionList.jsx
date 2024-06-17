import React from 'react'

const TransactionList = () => {
    return (
        <div class="expense">
            <div class="bg-slate-100 flex flex-row justify-between content-center items-center px-4 md:px-9 py-4 sm:py-7 rounded-2xl hover:shadow-xl hover:hover:bg-gray-200">

                <div class="flex flex-row justify-around items-center">
                    
                    <div class="img-container pr-7 hidden md:block">
                        <img src="/images/tag-one-svgrepo-com.svg" class="w-10 h-10  md:w-10 md:h-10" alt="" />
                    </div>
                    
                    <div>
                        <span class="text-black font-light text-xl md:text-2xl expense-name">title</span><br />
                        <span  class="text-slate-600 text-sm">date</span> <br />
                        <span  class="text-slate-600 text-xs category">category</span>
                    </div>
                </div>

                <div class="flex flex-row space-x-4 sm:space-x-6 content-center items-center">

                    <div class=" flex flex-row items-center text-gray-700 text-xl sm:text-2xl">
                        <span class="font-extrabold">-$</span>
                        <span class="font-bold expense-amount">value</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TransactionList