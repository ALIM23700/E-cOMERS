// Home.js
import React from 'react';
import DiscountImage from '../Images/Laptop.jpg';
import Card from '../Components/Card/Card';
import laptop4 from '../Images/laptop4.jpg';
import Mouse1 from '../Images/Mouse1.jpg';
import keyboard1 from '../Images/keyboard1.webp';
import notebook1 from '../Images/Notebook1.jpg';
import laptop2 from '../Images/Laptop2.jpg';
import laptop3 from '../Images/Laptop3.jpg';
import laptop1 from '../Images/Laptop-1.jpg'
import Hd1 from '../Images/hd1.jpg';
import Hd2 from '../Images/hd2.jpg';
import { Link } from 'react-router-dom';

const Home = ({ handleAddToCart }) => {
  return (
    <div>
      <div className="px-4 md:px-8 lg:px-16">
        <div className="mb-4 text-center">
          <marquee className="text-lg font-bold text-red-500">
            20% Discount Going On all the products!
          </marquee>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full flex flex-col justify-center items-center md:w-1/4 bg-gray-100 p-4 rounded-lg  mr-44 shadow-2xl drop-shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
           <div className='flex flex-col  gap-5 '> 
              <Link to="/shop/laptop" className='hover:text-red-500'>Laptops</Link>
              <Link to="/shop/keyboard" className='hover:text-red-500'>Keyboards</Link>
              <Link to="/shop/mouse" className='hover:text-red-500'>Mouse</Link>
              <Link to="/shop/notebook" className='hover:text-red-500'>Notebook</Link>
              <Link to="/shop" className='hover:text-red-500'>All Product</Link>

           </div>
             

           
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
          <Card title="Laptop HP-bx" picture={laptop4} price="70000" onAddToCart={handleAddToCart} />
          <Card title="Mouse-p-4" picture={Mouse1} price="400" onAddToCart={handleAddToCart} />
          <Card title="Keyboard-vx-23" picture={keyboard1} price="700" onAddToCart={handleAddToCart} />
          <Card title="Notebook-A55" picture={notebook1} price="13700" onAddToCart={handleAddToCart} />
        </div>
        <hr className="my-6 border-gray-300" />
        <h1 className='text-xl font-semibold text-rose-500 mt-5'>Our Laptop Collection:</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
          <Card title="Laptop HP-ay-22" picture={laptop4} price="75000" onAddToCart={handleAddToCart} />
          <Card title="Laptop Asus px-5" picture={laptop2 } price="4400" onAddToCart={handleAddToCart} />
          <Card title="Mac-book-ax-3" picture={laptop3} price="12700" onAddToCart={handleAddToCart} />
          <Card title="Laptop HP-cx-24" picture={laptop1} price="70000" onAddToCart={handleAddToCart} />
        </div>
       
      </div>
      <div className='md:flex items-center'>
        <img src={Hd1} alt="50% Discount" className="rounded-lg w-full max-w-8xl h-96 m-5" />
        <img src={Hd2} alt="50% Discount" className="rounded-lg w-full max-w-8xl h-96" />
      </div>
      <div className="px-0 md:px-0 lg:px-0">
    
      </div>
    </div>
  );
};

export default Home;






