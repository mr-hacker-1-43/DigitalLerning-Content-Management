import AnimatedButton from '@/components/AnimatedButton'
import BgHexaAnimation from '@/components/BgHexaAnimation'
import Link from 'next/link'

const login = () => {
  return (
      <>
      <div className="w-full h-[80vh] mx-auto max-w-md py-3">
        <h1 className='font-bold text-3xl my-8 uppercase text-center'>login</h1>
        <form className="bg-white dark:bg-gray-500 shadow drop-shadow-md shadow-pink-400 rounded p-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="username">Username</label>
            <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 focus:outline-none leading-tight border-2 focus:border-pink-400" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border-2 focus:border-pink-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <p className="text-red-400 dark:text-pink-400 text-xs mx-2 italic">Please choose a strong password.</p>
          </div>
          <div className="flex items-center justify-between mx-5">
            <AnimatedButton buttonName={"login"} />
            <Link className="inline-block align-baseline font-bold text-sm dark:text-pink-100 text-gray-400 hover:text-pink-900 dark:hover:text-pink-900 " href="/forget">
              Forgot Password?
            </Link>
          </div>
        </form>
      <BgHexaAnimation/>
      </div>
    </>
  )
}

export default login