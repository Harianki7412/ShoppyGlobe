import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../redux/cartSlice';



function Header() {
  const cartItemCount = useSelector(selectCartItemCount);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2 rounded text-lg font-medium transition-colors duration-200 ${
      isActive ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-white'
    }`;
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo/Name */}
        <Link to="/" className="text-3xl font-extrabold text-blue-300 hover:text-blue-200 transition-colors">
          ShoppyGlobe
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center md:hidden z-50">
            <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/products" className={navLinkClass} onClick={() => setMenuOpen(false)}>Products</NavLink>
          </nav>
        )}

        {/* Cart Icon */}
        <div className="relative">
          <Link to="/cart" className="text-gray-300 hover:text-white transition-colors">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"
              ></path>
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
