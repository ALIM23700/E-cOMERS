// Home.js
import React from 'react';
import DiscountImage from '../Images/Laptop.jpg';
import Card from '../Components/Card/Card';
import First from '../Images/Hp.jpg';
import Mouse from '../Images/Mouse.jpg';
import Keyboard from '../Images/keyboard.webp';
import Notebook from '../Images/Notebook.jpg';
import Laptop1 from '../Images/Laptop1.jpg';
import New from '../Images/new.jpg';
import Laptop3 from '../Images/Laptop3.jpg';
import Footer from '../Components/Footer/Footer';
import Hd1 from '../Images/hd1.jpg';
import Hd2 from '../Images/hd2.jpg';
import { Link } from 'react-router-dom';

const Home = ({ handleAddToCart }) => {
  return (
    <div>
      <div className="px-4 md:px-8 lg:px-16">
        <div className="mb-4 text-center">
          <marquee className="text-lg font-bold text-red-500">
            50% Discount Going On all the products!
          </marquee>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg  mr-44 shadow-2xl drop-shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
            <ul className="space-y-4">
              <li><a href="#" className="text-blue-500 hover:text-red-700">Laptops</a></li>
              <li><a href="#" className="text-blue-500 hover:text-red-700">Keyboards</a></li>
              <li><a href="#" className="text-blue-500 hover:text-red-700">Mouse</a></li>
              <li><a href="#" className="text-blue-500 hover:text-red-700">Macbook</a></li>
              <li><a href="#" className="text-blue-500 hover:text-red-700">Desktop</a></li>
            </ul>
          </div>
          <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center gap-12">
            <div className='text-center md:text-left'>
              <h1 className="text-lg md:text-xl font-bold">Laptop HP-Emerzing cy-24</h1>
              <h1 className="text-lg font-semibold">Price: 70000 Tk</h1>
              <button
                className='px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-5'
                onClick={() => handleAddToCart({ id: 1, title: "Laptop HP-Emerzing cy-24", price: "70000", image: DiscountImage })}
              >
                Add to Cart
              </button>
            </div>
            <div>
              <img src={DiscountImage} alt="50% Discount" className="rounded-lg w-full max-w-8xl h-96" />
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <h1 className='text-xl font-semibold text-rose-500 mt-5'>Our Best Selling Products:</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
          <Card title="Laptop HP-cx-24" picture={First} price="70000" onAddToCart={handleAddToCart} />
          <Card title="Mouse-p-4" picture={Mouse} price="400" onAddToCart={handleAddToCart} />
          <Card title="Keyboard-vx-23" picture={Keyboard} price="700" onAddToCart={handleAddToCart} />
          <Card title="Notebook-A55" picture={Notebook} price="13700" onAddToCart={handleAddToCart} />
        </div>
        <hr className="my-6 border-gray-300" />
        <h1 className='text-xl font-semibold text-rose-500 mt-5'>Our Laptop Collection:</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
          <Card title="Laptop HP-ay-22" picture={Laptop1} price="75000" onAddToCart={handleAddToCart} />
          <Card title="Laptop Asus px-5" picture={New} price="4400" onAddToCart={handleAddToCart} />
          <Card title="Mac-book-ax-3" picture={Laptop3} price="12700" onAddToCart={handleAddToCart} />
          <Card title="Laptop HP-cx-24" picture={First} price="70000" onAddToCart={handleAddToCart} />
        </div>
      </div>
      <div className='flex items-center'>
        <img src={Hd1} alt="50% Discount" className="rounded-lg w-full max-w-8xl h-96 m-5" />
        <img src={Hd2} alt="50% Discount" className="rounded-lg w-full max-w-8xl h-96" />
      </div>
      <div className="px-0 md:px-0 lg:px-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;






