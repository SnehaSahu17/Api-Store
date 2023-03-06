import React from "react";
import { useState } from "react"

function Jumbotron({ fetchData }) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-20  ">
      <h3 className="text-2xl font-semibold text-white text-center">
        Search APIs
      </h3>
      <div className="flex items-center mx-auto bg-white rounded-md mt-6 max-w-md">
        <input
          type="search"
          placeholder="Random fact of dogs"
          className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none
            "
        />
        <button className="bg-blue-500 w-20 h-12 text-white rounded-r-md flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Jumbotron;
