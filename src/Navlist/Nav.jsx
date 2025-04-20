import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

const Nav = ({count}) => {
  const location = useLocation();
  const [openbar, setOpenbar] = useState(false);

  const handlebar = () => {
    setOpenbar(!openbar);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">e-Tech</Link>
        </div>

        <div onClick={handlebar} className="text-2xl md:hidden cursor-pointer">
          <FaBars />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className={`hover:text-gray-400 ${location.pathname === '/' ? 'text-red-500' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
          <Link
              to="/shop"
              className={`hover:text-gray-400 ${location.pathname === '/shop' ? 'text-red-500' : ''}`}
            >
              Shop
            </Link>
            </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-gray-400 ${location.pathname === '/about' ? 'text-red-500' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-gray-400 ${location.pathname === '/contact' ? 'text-red-500' : ''}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={`hover:text-gray-400 ${location.pathname === '/login' ? 'text-red-500' : ''}`}
            >
              Login
            </Link>
         
          </li>
          <li>
            <Link
              to="/cart"
              className={`flex items-center hover:text-gray-400 ${location.pathname === '/cart' ? 'text-red-500' : ''}`}
            >
              <FaShoppingCart className="mr-2 absolute" /> 
              <div className='bg-red-500 text-white rounded-lg  relative left-4 mr-5 h-5 w-5 flex justify-center items-center'>{count}</div>
           
            </Link>
          </li>
         
           
         
        </ul>
      </div>

      {/* Mobile Menu */}
      {openbar && (
        <ul className="md:hidden mt-4 space-y-4 text-center">
          <li>
            <Link
              to="/"
              className={`block hover:text-gray-400 ${location.pathname === '/' ? 'text-red-500' : ''}`}
              onClick={() => setOpenbar(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`block hover:text-gray-400 ${location.pathname === '/about' ? 'text-red-500' : ''}`}
              onClick={() => setOpenbar(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`block hover:text-gray-400 ${location.pathname === '/contact' ? 'text-red-500' : ''}`}
              onClick={() => setOpenbar(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={`block hover:text-gray-400 ${location.pathname === '/cart' ? 'text-red-500' : ''}`}
              onClick={() => setOpenbar(false)}
            >
              <div className="flex items-center justify-center">
                <FaShoppingCart className="mr-2" /> Cart
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className={`block hover:text-gray-400 ${location.pathname === '/admin' ? 'text-red-500' : ''}`}
              onClick={() => setOpenbar(false)}
            >
              Admin
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;

