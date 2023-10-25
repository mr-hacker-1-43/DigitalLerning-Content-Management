import { useTheme } from 'next-themes';
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure that the component is only rendered on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='shadow-lg rounded-full dark:bg-slate-500 '>
      {theme === 'light' ? (
        <button onClick={() => setTheme('dark')}className=' border-2 dark:bg-slate-600 border-pink-500 hover:border-white px-3 py-2.5 hover:bg-pink-500 rounded-full hover:text-white'>
          <BsMoonStarsFill className='text-lg' />
        </button>
      ) : (
        <button onClick={() => setTheme('light')}className='dark:text-white border-2 hover:border-white shadow-pink-500 border-pink-500 px-3 py-2.5 hover:bg-pink-500 rounded-full hover:text-white'>
          <BsFillSunFill className='text-lg'/>
        </button>
      )}
    </div>
  );
}

export default ThemeChanger;
