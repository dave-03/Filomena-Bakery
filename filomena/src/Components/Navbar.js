import React, { useState } from 'react'
import ig from "../Assets/ig.png"
import wpp from "../Assets/wpp.png"

function Navbar() {


  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-xl dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
            </svg>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Filomena Bakery</span>
          </a>
          <span className='mr-10'></span>
          <div className="hidden w-full md:block md:w-auto shadow-" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/#" className="block py-2 pr-4 pl-3 text-black bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">Inicio</a>
              </li>
              <li>
                <a href="/#" className=" block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sobre Nosotros</a>
              </li>
              <li>
                <a href="/#" className="  bg-green-600 rounded-2xl p-2 text-black block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Pedidos!</a>
              </li>
            </ul>
          </div>
          <a href='/#'><img className=' flex items-center mt-3 ml-3 w-10' src={ig} alt=""></img></a>
          <a href='/#'><img className=' flex items-center mt-3 ml-3 w-10' src={wpp} alt=""></img></a>
        </div>
      </nav>
    </div>

  )
}

export default Navbar