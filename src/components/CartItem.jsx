import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/cartSlice';
import { Link } from 'react-router-dom';



function CartItem({ item }) {
   const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200">
      <Link to={`/products/${item.id}`} className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden mr-4">
        <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
      </Link>

      <div className="flex-grow">
        <Link to={`/products/${item.id}`} className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
          {item.title}
        </Link>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <label htmlFor={`quantity-${item.id}`} className="mr-2 text-gray-700">Qty:</label>
          <input
            id={`quantity-${item.id}`}
            type="number"
            min="0"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="w-20 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-center"
          />
        </div>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-xl font-bold text-gray-900 mb-2">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        <button
          onClick={handleRemove}
          className="text-red-600 hover:text-red-800 font-semibold transition-colors flex items-center"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem