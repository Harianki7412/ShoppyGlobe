import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal, clearCart } from '../redux/cartSlice';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
    } else {
      alert('Your cart is empty. Add items before checking out!');
    }
  };

  return (
    <div className="py-6 px-2 sm:px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
          <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">Your cart is empty.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 text-right">
            <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Total: <span className="text-green-600">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
              <button
                onClick={handleClearCart}
                className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-red-700 transition-colors font-semibold shadow-md"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-green-700 transition-colors font-semibold shadow-md"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;