// components/Navbar.js
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import SearchModal from "@/components/SearchModel";
import LoginButton from './AnimatedButton'
import { FaSearch } from 'react-icons/fa';
import ThemeChanger from './ThemeChangerBTN';
import about from '../pages/about'


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const openSearchModal = () => {
    setSearchModalOpen(true);
  };
  const closeSearchModal = () => {
    setSearchModalOpen(false);
  };

  return (

    <nav className="sticky top-0 text-gray-600 body-font z-50 select-none shadow-md dark:shadow-pink-200/30 shadow-pink-200 backdrop-blur-sm bg-white/70 dark:bg-gray-500/70 border-b-2 border-pink-400 ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex-shrink-0 ">
            <Link href="/" className="dark:text-white text-xl font-bold"> Your Logo </Link>
          </div>

          <div className="hidden sm:block">
            {/* Desktop navigation links */}
            <div className="space-x-2">
              <Link href="/" className="tracking-wide dark:text-white font-semibold text-lg  hover:shadow-md px-1 rounded-sm hover: hover:border-b-2 border-b-pink-400">Home</Link>
              <Link href="/about" className="tracking-wide dark:text-white font-semibold text-lg hover:shadow-md px-1 rounded-sm hover: hover:border-b-2 border-b-pink-400">About</Link>
              <Link href="/services" className="tracking-wide dark:text-white font-semibold text-lg hover:shadow-md px-1 rounded-sm hover: hover:border-b-2 border-b-pink-400">Services</Link>
              <Link href="/strategies" className="tracking-wide dark:text-white font-semibold text-lg hover:shadow-md px-1 rounded-sm hover: hover:border-b-2 border-b-pink-400">Strategies</Link>
              <Link href="/contact" className="tracking-wide dark:text-white font-semibold text-lg hover:shadow-md px-1 rounded-sm hover: hover:border-b-2 border-b-pink-400">Contact</Link>
            </div>
          </div>
          <div className='flex my-auto' >
            <span className='mt-auto'>
              <button className=" py-2 px-2 text-2xl roundedn dark:text-white dark:hover:text-pink-400 hover:text-pink-400" onClick={openSearchModal}>
                <FaSearch />
              </button>
              <SearchModal className='' isOpen={isSearchModalOpen} onClose={closeSearchModal} />
            </span>
            <span className='mx-2 mt-1.5 dark:text-white'>
              <Link href={"/login"}>
                <LoginButton buttonName={"login"} />
              </Link>
            </span>
            <span className='mx-2'>
              <ThemeChanger />
            </span>
            <div className="sm:hidden">
              {/* Mobile menu button */}
              <button onClick={toggleMenu} className="dark:text-white hover:text-gray-300 my-2.5 mx-1 focus:outline-none text-xl" >
                {isOpen ? (<AiOutlineClose />) : (<AiOutlineMenu />)}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden ">
          <div className="px-2 pt-2 pb-3 space-y-1 flex justify-between">
            <Link href="/" className="tracking-wide dark:text-white font-semibold hover:shadow-md px-1 rounded-sm hover: hover:border-b-2 border-b-pink-400">Home</Link>
            <Link href="/about" className="tracking-wide dark:text-white font-semibold hover:shadow-md px-1 rounded-sm hover: hover:border-b-2 border-b-pink-400">About</Link>
            <Link href="/services" className="tracking-wide dark:text-white font-semibold hover:shadow-md px-1 rounded-sm hover: hover:border-b-2 border-b-pink-400">Services</Link>
            <Link href="/strategies" className="tracking-wide dark:text-white font-semibold hover:shadow-md px-1 rounded-sm hover: hover:border-b-2 border-b-pink-400">Strategies</Link>
            <Link href="/contact" className="tracking-wide dark:text-white font-semibold hover:shadow-md px-1 rounded-sm hover: hover:border-b-2 border-b-pink-400">Contact</Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
