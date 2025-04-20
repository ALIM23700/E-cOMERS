import React from 'react';

const Singleshop = ({ product, handleAddToCart }) => {
  const { title, picture, price } = product;

  return (
    <div>
      <div className='h-96 w-80 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.7)] rounded-lg p-4 m-7 hover:shadow-[0_15px_40px_rgba(0,0,0,0.9)] transition-shadow duration-300 border border-gray-300'>
        <img src={picture} alt={title} className='h-48 w-full object-cover rounded-md' />
        <h2 className='text-lg font-bold mt-2'>{title}</h2>
        <p className='text-gray-700'>Price: {price} Tk</p>
        <button
          onClick={() =>
            handleAddToCart({
              id: Math.random(),
              title,
              price,
              image: picture
            })
          }
          className='mt-4 px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Singleshop;
