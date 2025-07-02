import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice.js';

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error('Failed to fetch product details:', err);
        setError(err.response?.data?.message || 'Product not found or failed to fetch details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]); // Re-fetch when product ID changes

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItem(product));
      alert(`${product.title} added to cart!`);
    }
  };

  if (loading) {
    return <div className="text-center py-8 text-xl text-gray-600">Loading product details...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-xl text-red-600 mb-4">{error}</p>
        <button
          onClick={() => navigate('/products')}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Products
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-8">
        <p className="text-xl text-red-600 mb-4">Product not found.</p>
        <button
          onClick={() => navigate('/products')}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Products
        </button>
      </div>
    );
  }
  return (
    <div className="py-4 px-2 sm:py-8 sm:px-4 max-w-6xl mx-auto bg-white rounded-lg shadow-xl flex flex-col lg:flex-row lg:space-x-8">
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-w-full h-auto max-h-72 sm:max-h-96 object-contain rounded-lg shadow-md"
        />
      </div>

      <div className="w-full lg:w-1/2 text-left flex flex-col">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">{product.title}</h1>
        <p className="text-gray-600 text-base sm:text-xl mb-2 sm:mb-4">{product.brand} - {product.category}</p>

        <div className="flex items-center mb-3 sm:mb-4">
          <span className="text-yellow-500 text-lg sm:text-2xl font-semibold flex items-center mr-3 sm:mr-4">
            {product.rating}
            <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.565-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
          </span>
          <span className="text-gray-500 text-sm sm:text-lg">({product.stock} in stock)</span>
        </div>

        <p className="text-gray-900 font-bold text-3xl sm:text-5xl mb-4 sm:mb-6">${product.price.toFixed(2)}</p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg sm:text-xl font-semibold hover:bg-green-700 transition-colors duration-300 shadow-md"
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg text-lg sm:text-xl font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-md"
          >
            Back to Products
          </button>
        </div>

        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">Product Description</h3>
          <p className="text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Display multiple images if available */}
        {product.images && product.images.length > 0 && (
          <div className="mt-6 sm:mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Gallery</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.title} - ${index}`}
                  className="w-full h-24 sm:h-32 object-cover rounded-md shadow-sm border border-gray-200"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetailPage

