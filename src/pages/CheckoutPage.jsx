import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';


function CheckoutPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleConfirmOrder = () => {
    alert('Order placed successfully! (This is a demo and not actually processed)');
    dispatch(clearCart()); // Clear cart after "checkout"
    navigate('/products'); // Redirect to products page
  };

  return (
   <div className="py-6 px-2 sm:py-8 sm:px-0 max-w-2xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-xl text-center">
  <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">Checkout</h1>
  <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
    This is a placeholder for the checkout process. In a real application, you would
    collect shipping information, payment details, and process the order here.
  </p>
  <p className="text-lg sm:text-xl text-green-700 font-semibold mb-6 sm:mb-8">
    Your order is ready to be confirmed.
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <button
      onClick={handleConfirmOrder}
      className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
    >
      Confirm Order
    </button>
    <button
      onClick={() => navigate('/cart')}
      className="bg-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-md"
    >
      Back to Cart
    </button>
  </div>
</div>
  )
}

export default CheckoutPage

