import React from 'react'
import AnimatedButton from '@/components/AnimatedButton'
const Contact = () => {
  return (
    <>
      <section className="text-gray-600 body-font relative py-14 h-[71vh] sm:h-[80vh]">
        <div className="container px-5 py-auto mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-3 dark:text-gray-200 text-gray-900">Contact Us</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2 justify-center">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-pink-300">Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-pink-300">Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-pink-300">Message</label>
                  <textarea id="message" name="message" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="text-gray-600 bg-pink-200 hover:bg-pink-200 text-lg mt-8 rounded-xl">
                <AnimatedButton className="" buttonName="Contact Me" />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>


  )
}

export default Contact