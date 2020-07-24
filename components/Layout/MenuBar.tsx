import * as React from "react";
import { useContext, useState, useEffect } from "react";

import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const MenuBar: NextPage<Props> = ({}) => {
  return (
    <div className="z-40 fixed top-0 w-full px-4 md:px-8 py-2 h-16 flex justify-between items-center shadow bg-gray-900">
      <div className="flex items-center w-2/3">
        {/* <input className="bg-gray-200 focus:outline-none focus:shadow-outline focus:bg-white border border-transparent focus:border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal hidden md:block placeholder-gray-700 mr-10" type="text" placeholder="Search..."></input> */}

        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer hidden">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600"
            width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg> */}
        </div>
        <div className="text-xl text-white font-bold tracking-tight ml-2">
          <a href={`/`}>Next.js Shopify Storefront</a>
        </div>
      </div>
      <div className="flex items-center">
        <a
          href="#"
          className="text-white p-2 rounded-full 
        hover:text-gray-200 hover:bg-orange-400 cursor-pointer mr-4 hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
          </svg>
        </a>

        <div className="relative">
          <div className="cursor-pointer text-white font-bold w-10 h-10 flex items-center justify-center rounded-full">
            <svg
              width="24"
              height="24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>

          {/* <div className="absolute top-0 mt-12 right-0 w-48 bg-white py-2 shadow-md border border-gray-100 rounded-lg z-40">
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600">Edit
              Profile</a>
            <a href="#"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600">Account
              Settings</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600">Sign
              Out</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
