import React from 'react'
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <section>
      <footer className=" text-gray-600 body-font bottom-0  border-t-2 border-t-pink-400">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-between">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl dark:text-white">Tailblocks</span>
          </div>
          <div className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 text-pink-400 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
            <a href="https://twitter.com/knyttneve" className="ml-1 text-pink-400" rel="noopener noreferrer" target="_blank">@knyttneve</a>
          </div>
          <div className="list-none flex text-2xl justify-center my-4">
            <button className="text-gray-600 dark:text-white hover:text-pink-500 dark:hover:text-pink-500  mx-2"><BsInstagram /></button>
            <button className="text-gray-600 dark:text-white hover:text-pink-500 dark:hover:text-pink-500 mx-2"><BsFacebook /></button>
            <button className="text-gray-600 dark:text-white hover:text-pink-500 dark:hover:text-pink-500 mx-2"><BsTwitter /> </button>
            <button className="text-gray-600 dark:text-white hover:text-pink-500 dark:hover:text-pink-500 mx-2"><BsLinkedin /> </button>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer;