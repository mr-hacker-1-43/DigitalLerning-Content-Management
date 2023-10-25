import React, { useEffect, useState } from 'react';
import TypingAnimation from '../components/TypingAnimation';

function Home() {

  return (
    <>
      <section className="text-gray-600 body-font z-0 ">
        <div class="absolute inset-x-0 top-[5rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[5rem] " aria-hidden="true">
          <div className="relative left-1/2 -z-10 aspect-square w-[36.125rem] max-w-none -translate-x-1/2 rotate-[0deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(20%-2rem)] sm:w-[70rem]" style={{ clipPath: " polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);" }}></div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center uppercase drop-shadow-md">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 drop-shadow  dark:text-white">power of compounding and investing</h1>
            <p className="lg:w-1/2 text-pink-300 space-y-2 w-full leading-relaxed font-semibold tracking-wider">Change your life and life style. <span className=''>invest more<span className='font-bold mx-1'>!</span><span className="text-black font-bold dark:text-white">₹</span> earn more<span className='font-bold mx-1'>!</span><span className="text-black font-bold dark:text-white">₹</span></span> </p>
            <span className='text-pink-400 font-bold'>invest now</span>

          </div>
          <div className="flex flex-wrap -m-4 justify-around">
            <div className="xl:w-1/3 md:w-1/2 p-4 ">
              <div className="border dark:bg-slate-800 border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                </div>
                <h2 className="dark:text-white text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border dark:bg-slate-800 border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">

                </div>
                <h2 className="dark:text-white text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border dark:bg-slate-800 border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">

                </div>
                <h2 className="dark:text-white text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border dark:bg-slate-800 border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">

                </div>
                <h2 className="dark:text-white text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border dark:bg-slate-800 border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">

                </div>
                <h2 className="dark:text-white text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border dark:bg-slate-800 border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                </div>
                <h2 className="dark:text-white text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>

            <button className="bn5 dark:after:bg-white after:bg-slate-300 font-semibold text-lg text-pink-400  border-pink-400 border-2 rounded-md tracking-wider">Hover</button>
          </div>
        </div>
      </section>


    </>
  )
}
export default Home;