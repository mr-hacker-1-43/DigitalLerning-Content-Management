// pages/404.js
import Link from 'next/link';

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-gray-600">Page not found</p>
      <Link href="/"className="mt-4 text-blue-600 hover:underline">Go back to home </Link>
    </div>
  );
}

export default NotFoundPage;
