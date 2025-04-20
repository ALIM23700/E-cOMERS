import React from 'react';
import { useParams } from 'react-router-dom';
import ProductData from './ProductData';
import Singleshop from './Singleshop';

const Shop = ({ handleAddToCart }) => {
  const { category } = useParams();
  const filterdata = category ? ProductData.filter(product => product.category === category) : ProductData;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
      {
        filterdata.map(product => (
          <Singleshop
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))
      }
    </div>
  );
};

export default Shop;
