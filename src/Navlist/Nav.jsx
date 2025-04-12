import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">e-Tech</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className={`hover:text-gray-400 ${location.pathname === "/" ? "text-red-500" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-gray-400 ${location.pathname === "/about" ? "text-red-500" : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-gray-400 ${location.pathname === "/contact" ? "text-red-500" : ""}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={`flex items-center hover:text-gray-400 ${location.pathname === "/cart" ? "text-red-500" : ""}`}
            >
              <FaShoppingCart className="mr-2" /> Cart
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className={`hover:text-gray-400 ${location.pathname === "/admin" ? "text-red-500" : ""}`}
            >
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
