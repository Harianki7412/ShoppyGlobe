import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';




function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition-transform hover:scale-105">
      <Link
        to={`/products/${product.id}`}
        className="block relative h-40 xs:h-48 sm:h-56 overflow-hidden"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
        />
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
          {product.category}
        </div>
      </Link>
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <Link
          to={`/products/${product.id}`}
          className="text-gray-900 font-bold text-lg sm:text-xl mb-2 hover:text-blue-600 transition-colors line-clamp-2"
        >
          {product.title}
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-800 font-bold text-xl sm:text-2xl">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-yellow-500 text-base sm:text-lg font-semibold flex items-center">
            {product.rating}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.565-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductItem




