import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from '../redux/productSlice.js';

function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const popularProducts = products.slice(0, 6);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);


  return (
    <div className="text-center py-6 sm:py-8 px-2 sm:px-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 sm:p-12 rounded-xl shadow-2xl mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-6xl font-extrabold mb-4 sm:mb-6 animate-pulse">Welcome to ShoppyGlobe!</h1>
        <p className="text-lg sm:text-2xl mb-6 sm:mb-8">Your one-stop shop for amazing products.</p>
        <Link
          to="/products"
          className="bg-white text-indigo-700 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Start Shopping
        </Link>
      </section>

      {/* Popular Products Section */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-10">Featured Products</h2>
        {status === 'loading' && <p className="text-gray-600 text-lg">Loading products...</p>}
        {status === 'failed' && <p className="text-red-600 text-lg">Failed to load products. Please try again later.</p>}
        {status === 'succeeded' && popularProducts.length > 0 && (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10 mb-10 m-6 justify-items-center">
            {popularProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
        {status === 'succeeded' && popularProducts.length === 0 && (
          <p className="text-gray-600 text-lg">No featured products available.</p>
        )}
      </section>

      {/* Categories / Call to Action */}
      <section className="bg-gray-100 p-6 sm:p-10 rounded-lg shadow-inner">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Explore Our Categories</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">Dive into various categories from electronics to home essentials.</p>
        <Link
          to="/products"
          className="bg-green-600 text-white hover:bg-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold transition-colors duration-300 shadow-md"
        >
          View All Products
        </Link>
      </section>
    </div>
  )
}

export default HomePage

