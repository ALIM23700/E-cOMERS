import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Main/Home';
import Contact from './Main/Contact';
import About from './Main/About';
import Nav from './Navlist/Nav';
import Login from './Main/Login';
import Admin from './Main/Admin';
import CartComponent from './Main/Cart'; 

function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  const handleAddToCart = (product) => {
    
    setCart([...cart, product]);
    alert("Cart added Successfully")
  };

  const handleRemoveFromCart = (productId) => {
    
    setCart(cart.filter((product) => product.id !== productId));
    alert("Cart removed Successfully")

  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); 
  };

  const handleRemoveItem = (itemName) => {
    setItems(items.filter((item) => item.title !== itemName)); 
  };

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <Admin
                items={items}
                handleAddItem={handleAddItem}
                handleRemoveItem={handleRemoveItem}
              />
            }
          />
          <Route
            path="/cart"
            element={<CartComponent cart={cart} handleRemoveFromCart={handleRemoveFromCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
