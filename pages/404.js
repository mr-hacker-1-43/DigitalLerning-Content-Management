// pages/404.js
import Link from 'next/link';

function NotFoundPage() {
  return (
    <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&amp;amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;amp;auto=format&amp;amp;fit=crop&amp;amp;w=667&amp;amp;q=80'" }} className="min-h-[74vh] bg-cover flex flex-col items-center justify-center">
      <div className='bg-gray-100 p-20 rounded-xl drop-shadow-2xl shadow shadow-pink-400'>
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-gray-600">Page not found</p>
        <Link href="/" className="mt-4 text-blue-600 hover:underline">Go back to home </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
