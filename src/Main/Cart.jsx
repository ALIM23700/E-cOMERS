import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <div className='px-4 md:px-8 lg:px-16'>
      <h1 className='text-xl font-bold text-center mt-5'>Your Cart</h1>

      {cart.length === 0 ? (
        <p className='text-center text-gray-500 mt-3'>Your cart is empty.</p>
      ) : (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
            {cart.map((item, index) => (
              <div key={index} className='border rounded-lg p-4 shadow-md flex flex-col items-center'>
                <img src={item.image} alt={item.title} className='w-full h-40 object-cover rounded' />
                <h2 className='text-lg font-semibold mt-2'>{item.title}</h2>
                <p className='text-gray-600'>Price: {item.price} Tk</p>
                <button 
                  className='mt-3 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400'
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className='mt-5 text-center'>
            <h2 className='text-lg font-bold'>Total Price: {totalPrice.toFixed(2)} Tk</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
