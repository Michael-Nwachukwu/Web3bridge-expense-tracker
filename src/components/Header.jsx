import React from "react";
import TransactionForm from "./TransactionForm";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex justify-between py-5 flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-black p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Budget</span>
        </a>

        {/* <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-2 px-4 focus:outline-none rounded-xl text-base mt-4 md:mt-0">
          Add Budget
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
        <TransactionForm />
      </div>
    </header>
  );
};

export default Header;
