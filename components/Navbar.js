import Link from "next/link";
import React from "react";
// import AnimatedButton from './AnimatedButton';
import ThemeChanger from './ThemeChanger'

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 text-gray-600 body-font bg-transparent backdrop-blur-md border-b-2 border-b-pink-400">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <Link href={'/'} className="flex title-font font-medium dark:dark:text-white items-center text-gray-900 md:mb-0">
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>
        <div className="md:ml-auto flex flex-wrap items-center text-lg my-3 font-normal justify-center">
          <Link href={'/'} className="mr-5 dark:bg-slate-500 dark:text-white rounded-md hover:text-gray-900 border-b-2 hover:border-pink-500 shadow-md p-1 px-2 ">Home</Link>
          <Link href={'/about'} className="mr-5 dark:bg-slate-500 dark:text-white rounded-md hover:text-gray-900 border-b-2 hover:border-pink-500 shadow-md p-1 px-2 ">About</Link>
          <Link href={'/blogs'} className="mr-5 dark:bg-slate-500 dark:text-white rounded-md hover:text-gray-900 border-b-2 hover:border-pink-500 shadow-md p-1 px-2 ">Blogs</Link>
          <Link href={'/services'} className="mr-5 dark:bg-slate-500 dark:text-white rounded-md hover:text-gray-900 border-b-2 hover:border-pink-500 shadow-md p-1 px-2 ">Services</Link>
          <Link href={'/contact'} className="mr-5 dark:bg-slate-500 dark:text-white rounded-md hover:text-gray-900 border-b-2 hover:border-pink-500 shadow-md p-1 px-2 ">Contact us</Link>
        </div>
        {/* <div className="bg-purple-300 rounded-lg "> */}
          {/* <AnimatedButton buttonName={"Login"} /> */}
          <ThemeChanger></ThemeChanger>
          
        {/* </div> */}
      </div>
    </div>
  );
};


export default Navbar;
