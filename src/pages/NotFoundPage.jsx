import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
     <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] bg-gray-50 text-center p-4">
      <h1 className="text-7xl font-extrabold text-red-600 mb-4">404</h1>
      <p className="text-3xl text-gray-800 font-semibold mb-6">Page Not Found</p>
      <p className="text-lg text-gray-600 mb-8">
        The page you're looking for doesn't exist or an unexpected error occurred.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 shadow-md"
      >
        Go to Home Page
      </Link>
    </div>
  )
}

export default NotFoundPage

